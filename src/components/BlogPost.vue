<!--  This component contains the HTML, CSS and JS properties of the Blog Post View.
      This is displayed a blog post is clicked on in either the Home View or the All Posts View.
      It recieves the url of the image to be displayed from the router, which is it's parent component.
--> 

<template>
<div>
    <h1>{{title}}</h1>
    <div class="blog-picture">
        <img :src="require('@/assets/' + imageurl + '')" style="width:100%" />
    </div>
</div>
</template>

<script>
import {
    useRoute
} from 'vue-router';

export default {
    name: 'BlogPost',
    data() {
        return {
            title: '',
            body: '',
        }
    },
    props: ['imageurl'], //accepts imageurl as a prop from the router
    mounted() {  //To get the value from the HTML part of my template
        const route = useRoute();
        this.title = route.params.title;
    }
}
</script>

<style scoped>
.blog-picture {
    width: 50vw;
    height: 50vw;
}
</style>
