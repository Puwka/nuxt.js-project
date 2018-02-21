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
    asyncData(context, callback) {
      setTimeout(() => {
        callback(null, {
          loadedPost: {
              id: 1,
              title: `Development (ID: ${context.params.id})`,
              previewText: 'Learn to Code!',
              author: 'Alexandr@Puwka',
              updatedDate: new Date(),
              content: 'Hello guys, in that section of my blog I\'ll teach you how to make your own Nuxt.JS-Express web-application!',
              thumbnail: 'http://www.umbrellaconsultants.com/files/resources/outer-banks-web-development-hosting.jpg'
          }
        })
      }, 800)
    }
  }
</script>
