<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post='loadedPost'></AdminPostForm>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm'

  export default {
    components: {
      AdminPostForm
    },
    data() {
      return {
        loadedPost: {
          author: 'Alexandr',
          title: 'My awesome Post',
          content: 'Super amazing, thanks for that!',
          thumbnailLink: 'http://kaifolog.ru/uploads/posts/2015-06/thumbs/1435320076_005.jpg'
        }
      }
    }
  }
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
