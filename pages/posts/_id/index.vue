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

  export default {
    components: {
      Post
    },
    asyncData(context) {
      return context.app.$axios.$get(`/posts/${context.params.id}.json`)
      .then(data => {
        return {
          loadedPost: {...data, id: context.params.id}
        }
      })
      .catch(e => context.error(e))
    }
  }
</script>
