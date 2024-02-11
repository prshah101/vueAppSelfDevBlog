<!--  This component contains the HTML and CSS properties of the Blog Details that will be displayed on the Home View.
      The relevant caption is passed using slots when the component is used.
--> 

<template>
<div class="post-container">
    <img src="@/assets/goals.jpg" alt="goals" style="width:100%" />
    <slot></slot>  <!--  Displays the relevant caption recieved from the parent component, which is HomeView-->
</div>
</template>

<script>
export default ({
    name: 'BlogDetails'
})
</script>

<style scoped>
.post-container {
    padding: 0.78%;
    background-color: #D2E1EF;
}
</style>
