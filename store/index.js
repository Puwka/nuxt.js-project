import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      lodadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          console.log(context.req)
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
                {
                    id: 1,
                    title: 'Development',
                    previewText: 'Learn to Code!',
                    thumbnail: 'http://www.umbrellaconsultants.com/files/resources/outer-banks-web-development-hosting.jpg'
                },
                {
                    id: 2,
                    title: 'Design',
                    previewText: 'Learn to Design!',
                    thumbnail: 'http://www.sparkz.co.in/images/slider/slider3.png'
                },
                {
                    id: 3,
                    title: 'Meetups',
                    previewText: 'Learn to Talk!',
                    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-1cth7VWW-qlAFa9xLmO7VV5uiYbJ5lVI-87sk-x4tpEuQ1tQQ'
                }
              ])
            resolve()
          }, 1000)
        }).then(data => {
          return data
        }).catch(e => {
          context.error(new Error())
        })
      },
      setState(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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
