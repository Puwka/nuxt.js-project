<template>
    <section class="post-list">
        <PostPreview
                id="1"
                thumbnail="http://www.umbrellaconsultants.com/files/resources/outer-banks-web-development-hosting.jpg"
                previewText="Learn to Code!"
                title="Development"
        />
        <PostPreview
                id="2"
                thumbnail="http://www.impactoeldiario.com/file/2018/01/web_design_benefits.jpg"
                previewText="Learn to Design!"
                title="Design"
        />
        <PostPreview
                id="3"
                thumbnail="http://6798-presscdn-0-89.pagely.netdna-cdn.com/wp-content/uploads/2016/09/green-picnic-Blog-post-header.jpg"
                previewText="Deadline meetups in huge company!"
                title="Meetups"
        />
    </section>
</template>

<script>
    import PostPreview from '@/components/Posts/PostPreview'

    export default {
        components: {
            PostPreview
        }
    }
</script>

<style scoped>
    .post-list {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>