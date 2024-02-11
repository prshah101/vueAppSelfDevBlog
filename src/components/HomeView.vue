<!--  This component contains the HTML and CSS properties of the Home View that displays the latest posts.
     When a post is clicked on, the router navigates page to the BlogPost component.
--> 

<template>
<br><br>
<p class="title">Latest Posts</p>
<router-link to="/blogPost/Habits">
    <div class="posts-container">
        <BlogDetails> <!-- The component, BlogDetails, is used to render the display for each of the 3 blog posts-->
            <p>How to Build Habit</p> <!--  This is sent as a slot to the BlogDetails component-->
        </BlogDetails>
    </div>
</router-link>
<router-link to="/blogPost/Motivation">
    <div class="posts-container">
        <BlogDetails>
            <p>Gaining Motivation</p>
        </BlogDetails>
    </div>
</router-link>

<router-link to="/blogPost/Goals">
    <div class="posts-container">
        <BlogDetails>
            <p>Stick to your Goals</p>
        </BlogDetails>
    </div>
</router-link>
</template>

<script>
import BlogDetails from './BlogDetails.vue'
export default {
    name: 'HomeView',
    components: {
        BlogDetails,
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.posts-container {
    float: left;
    width: 33.33%;
    padding: 0.78%;
    background-color: #ffffff;
}

.title {
    font-size: 3vw;
    color: #194F77;
    left: -41vw;
    position: relative;
}

p {
    color: #194F77;
    font-size: 1.8vw;
    text-align: center;
}

/* The @media handles the element display at the different view ports */
@media screen and (max-width: 700px) {
    .title {
        font-size: 4.5vw;
        left: -37vw;
    }

    p {
    font-size: 3vw;
    }
}
</style>
