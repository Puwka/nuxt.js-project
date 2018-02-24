import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      lodadedPosts: [],
      token: ''
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get('/posts.json')
        .then(data => {
          const postsArray = []
          for (const key in data) {
            postsArray.push({ ...data[key], id: key })
          }
          vuexContext.commit('setPosts', postsArray)
        })
        .catch(e => context.error(e))
      },
      setState(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, postData) {
        const createdPost = {
          ...postData,
          updatedDate: new Date()
        }
        return this.$axios.$post(`/posts.json?auth=${vuexContext.state.token}`, createdPost)
        .then(data =>
          {
            vuexContext.commit('addPost', {...createdPost, id: data.name})
          })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, post) {
        const changedPost = {
          ...post,
          updatedDate: new Date()
        }
        return this.$axios.$put(`/posts/${changedPost.id}.json?auth=${vuexContext.state.token}`, changedPost)
        .then(response => {
          vuexContext.commit('editPost', changedPost)
        })
        .catch(e => console.log(e))
      },
      authentication(vuexContext, authData) {
        let authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbAPIKey}`
        if (!authData.isLogin) {
          authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbAPIKey}`
        }
        return this.$axios.$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(res => {
            vuexContext.commit('setToken', res.idToken)
            localStorage.setItem('token', res.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + res.expiresIn * 1000)
            vuexContext.dispatch('setLogoutTimer', res.expiresIn * 1000)
          })
          .catch(e => console.log(e))
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext) {
        const token = localStorage.getItem('token')
        const expirationDate = localStorage.getItem('tokenExpiration')

        if (new Date().getTime() > +expirationDate || !token) {
          return
        }
        vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
        vuexContext.commit('setToken', token)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuth(state) {
        return state.token != 0
      }
    }
  })
}

export default createStore
