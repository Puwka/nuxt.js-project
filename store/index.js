import Vuex from 'vuex'
import axios from 'axios'

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
        return axios.get('https://nuxt-demo-e3f33.firebaseio.com/posts.json')
        .then(response => {
          const postsArray = []
          for (const key in response.data) {
            postsArray.push({ ...response.data[key], id: key })
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
        return axios.post('https://nuxt-demo-e3f33.firebaseio.com/posts.json', createdPost)
        .then(response => 
          {
            vuexContext.commit('addPost', createdPost)
          })
        .catch(e => console.log(e))
        
      },
      editPost(vuexContext, post) {
        const changedPost = {
          ...post, 
          updatedDate: new Date()
        }
        return axios.put(`https://nuxt-demo-e3f33.firebaseio.com/posts/${changedPost.id}.json`, changedPost)
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
