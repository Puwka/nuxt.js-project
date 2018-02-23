import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      lodadedPosts: []
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
        return this.$axios.$post('/posts.json', createdPost)
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
        return this.$axios.$put(`/posts/${changedPost.id}.json`, changedPost)
        .then(response => {
          vuexContext.commit('editPost', changedPost)
        })
        .catch(e => console.log(e))

      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
