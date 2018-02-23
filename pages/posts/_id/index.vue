<template>
    <div>
        <Post
          :id="loadedPost.id"
          :title="loadedPost.title"
          :author="loadedPost.author"
          :previewText="loadedPost.previewText"
          :updatedDate="loadedPost.updatedDate"
          :content="loadedPost.content"
        />
    </div>
</template>

<script>
  import Post from '@/components/Posts/Post'
  import axios from 'axios'

  export default {
    components: {
      Post
    },
    asyncData(context) {
      return axios.get(`https://nuxt-demo-e3f33.firebaseio.com/posts/${context.params.id}.json`)
      .then(response => {
        return {
          loadedPost: {...response.data, id: context.params.id}
        }
      })
      .catch(e => context.error(e))
    }
  }
</script>
