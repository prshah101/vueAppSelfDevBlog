<!--   This component is original parent component. 
       It calls the other components that are displayed in combination on the page.
-->

<template>
<HeaderView />
<br>
<NavBar />
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderView from './components/HeaderView.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        HeaderView,
    }
}
</script>
