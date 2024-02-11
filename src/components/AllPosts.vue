<!--  This component contains the HTML, CSS and JS properties of the All Posts View.
--> 

<template>
<div class="totalquery">
    <div class="inputcontainer">
        <i class="fa-solid fa-magnifying-glass"></i> &nbsp;
        <input v-model="blogquery" type="text" placeholder="Search" />
    </div>
</div>

<br>

<div v-for="blog in queriedList()" :key="blog.id">
    <div class="posts">
        <router-link :to="`/blogPost/${blog.param}`"> <!-- Routes each blog post to it's relevant URL-->
            {{ blog.title }}  <!-- Displays the title of each blog post-->
        </router-link>
    </div>
    <br>
</div>
</template>

<script setup>
import { ref } from "vue"; //Imported to access the template with ease.

let blogquery = ref(""); //Gets and stores the query typed by user.
const blogs= [{ //The data that will be searched through.
                id: 1,
                title: 'How to Build a Habit',
                param: 'Habits'
            },
            {
                id: 2,
                title: 'Gaining Motivation',
                param: 'Motivation'
            },
            {
                id: 3,
                title: 'Stick to your Goals',
                param: 'Goals'
            }
        ];
    function queriedList() {
        return blogs.filter((blog) => blog.title.toUpperCase().includes(blogquery.value.toUpperCase()));  //Return the blogs that match the query sent by user
    }
</script>

<style scoped>
.inputcontainer {
    position: relative;
    right: -5vw;
}

::placeholder {
    color: white;
    opacity: 1;
}

input[type=text] {
    background-color: #194F77;
    color: white;
    font-size: 4vw;
    width: 45vw;
}

.fa-magnifying-glass {
    color: white;
}

.totalquery {
    margin: auto;
    text-align: center;
    width: 90vw;
    font-size: 50px;
    margin-bottom: 0.30em;
    background-color: #194F77;
    padding: 3vw;
}

input {
    border: none;
    font-size: 30vw;
}

.posts {
    background-color: #D2E1EF;
    padding: 3vw;
    font-size: 2.75vw;
    width: 85vw;
    position: relative;
    left: 3vw;
}

.posts a {
    text-decoration: none;
    color: #194F77;
}

/* The @media handles the element display at the different view ports */
@media screen and (max-width: 878px) {
    .posts {
        background-color: #D2E1EF;
        padding: 4vw;
        font-size: 5vw;
        width: 85vw;
        position: relative;
        left: 2vw;
    }

    input[type=text] {
        font-size: 6vw;
    }

}

@media screen and (max-width: 752px) {
    input[type=text] {
        font-size: 7vw;
    }

    .fa-magnifying-glass {
        font-size: 7vw;
    }
}

@media screen and (max-width: 603px) {
    .totalquery {
        position: relative;
        width: 88vw;
    }

    .inputcontainer {
        position: relative;
        right: 2vw;
    }
}
</style>
