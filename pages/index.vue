<template>
    <div class="home-page">
        <section class="intro">
            <h1>Get the latest tech news!</h1>
        </section>
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
    import PostList from '@/components/Posts/PostList'

    export default {
        components: {
            PostList
        },
        asyncData() {
            return {

            }
        },
        // data() {
        //     return {
        //         loadedPosts: []
        //     }
        // },
        created() {
            setTimeout(() => {
                this.loadedPosts = [
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
            }, 1500)
        }
    }
</script>

<style scoped>
    .intro {
        height: 300px;
        position: relative;
        padding: 30px;
        box-sizing: border-box;
        background-image: url('~assets/images/stars.png');
        background-position: center;
        background-size: cover;
    }

    .intro h1 {
        position: absolute;
        top: 10%;
        left: 5%;
        width: 90%;
        font-size: 1.5rem;
        color: black;
        background-color: rgb(211, 211, 211);
        padding: 10px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px black;
        box-sizing: border-box;
        border: 1px solid black;
    }

    @media (min-width: 768px) {
        .intro h1 {
            font-size: 2rem;
        }
    }

    .featured-posts {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }


</style>

