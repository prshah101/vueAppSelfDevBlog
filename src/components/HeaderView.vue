<!-- This component contains the HTML and CSS properties of the header that loads in beginning of the page.
    If the initial component containing the Home View is loaded, it will display a unique header. Otherwise, 
    when other page views are loaded, it will display a standard header.
 -->

<template>
<!-- Use the route meta data to determine which elements to display. If not Home View, display the default header -->
<div v-if="$route.meta.homepage">
    <img src="@/assets/purpose.jpg" alt="" style="width:100%;">
    <div class="page-title">Self Improvement</div>
    <div class="navbarline"></div>
</div>
<div v-else>
    <div class="subPage-title"> {{ $route.meta.heading }} </div>
</div>
</template>

<script>
export default {
    name: 'HeaderView'
}
</script>

<style scoped>
/* Handles the animation for the Home View title (Start) */
.page-title {
    position: absolute;
    color: #194F77;
    top: 7.63%;
    right: 15.63%;
    font-size: 7vw;
    animation-name: color-change;
    animation-duration: 6s;
    animation-iteration-count: 1;
    --color-1: #82A7D0;
    --color-2: #194F77;
}

@keyframes color-change {
    0% {
        color: var(--color-1)
    }

    100% {
        color: var(--color-2)
    }
}
/* Handles the animation for the Home View title (End) */

.subPage-title {
    font-size: 6vw;
    color: #194F77;
    text-align: center;
    padding: 3vw;
    background-color: #D2E1EF;
}

/* Handles the animation for the line below the nav bar (Begin) */
.navbarline {
    width: 1px;
    height: 2px;
    background: #194F77;
    position: absolute;
    top: 90.90%;
    left: 0.625%;

    animation: increase 4s;
    animation-fill-mode: forwards;
}
@keyframes increase {
    100% {
        width: 62.5%;
    }
}
/* Handles the animation for the line below the nav bar (End) */

@media screen and (max-width: 1279px) {
    .navbarline {
        display: none;
    }
}
</style>
