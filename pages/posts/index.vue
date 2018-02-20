<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
    import PostList from '@/components/Posts/PostList'

    export default {
        components: {
            PostList
        },
        asyncData(context, callback) {
          setTimeout(() => {
            callback(null, {
              loadedPosts: [
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
              ]
            })
          }, 1500)
        }
    }
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
