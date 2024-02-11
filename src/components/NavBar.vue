<!--   This component contains the HTML, CSS, and JS properties of the Navigation Bar that is displayed constantly on the page. 
      It navigates the page to the different views, depending on what the user has clicked.
-->

<template>
<div class="navigationBar" id="navigationBarID">
    <router-link to="/"> Home</router-link>
    <router-link to="/allPosts"> All Posts</router-link>
    <router-link to="/contactUs"> Contact Us</router-link>
    <a class="bars" @:click="addResponsiveness()"> <!--  Contains the 3 bars icon that appears when viewport is small-->
        <i class="fa fa-bars"></i>
    </a>
</div>
<br>
<router-view imageurl="goals.jpg"></router-view> <!-- Sends the image as a prop to the child component (Blog Details) -->
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        addResponsiveness() {
            var x = document.getElementById("navigationBarID");
            if (x.className === "navigationBar") {
                x.className += " responsive"; //If the bars icon is clicked add the responsive class to the existing class
            } else {
                x.className = "navigationBar";
            }
        }
    }
}
</script>

<style scoped>
.navigationBar {
    overflow: hidden;
    background-color: #ffff;
    font-size: 2vw;
}

.navigationBar a {
    float: left;
    color: #193F77;
    text-align: center;
    padding: 1vw 1vw;
    text-decoration: none;
}

.navigationBar a:hover {
    background-color: #ddd;
}

.navigationBar .bars {
    display: none;
}

/* The @media handles the element display at the different view ports */
@media screen and (max-width: 600px) {
    .navigationBar a {
        display: none;  /* Don't display the other format of the navigation bar */
    }

    .navigationBar a.bars {
        float: right;
        display: block;  /* Display the 3 bars icon */
    }

    .navigationBar.responsive {
        position: relative;
        font-size: 4vw;
        background-color: #D2E1Ef;
    }

    .navigationBar.responsive .bars {
        position: absolute;
        right: 0;
        top: 0;
    }

    .navigationBar.responsive a {
        float: none;
        display: block;
        text-align: left;
    }

    i {
        font-size: 7vw;
    }
}

@media screen and (max-width: 934px) {
    .navigationBar {
        font-size: 3vw;
    }
}

@media screen and (max-width: 752px) {
    .navigationBar {
        font-size: 4vw;
    }
}
</style>
