<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm'
  import axios from 'axios'

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    methods: {
      onSubmitted(postData) {
        axios.post('https://nuxt-demo-e3f33.firebaseio.com/posts.json', postData)
        .then(response => console.log(response))
        .catch(e => console.log(e))
      }
    }
  }
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
