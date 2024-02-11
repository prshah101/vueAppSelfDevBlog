//This JS File for the navigation of the Vue App. 
//It accesses all the components that will be routed to, as well as the url they will use and their associated data.
import {createWebHistory, createRouter} from 'vue-router'
import HomeView from './components/HomeView.vue';
import AllPosts from './components/AllPosts.vue';
import ContactUs from './components/ContactUs.vue';
import BlogPost from './components/BlogPost.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeView,
        meta: { heading: 'Self Improvement' , homepage: true} //heading and homepage is used by HeaderView (To display the right header and heading title.
    },
    {
        name: 'All Posts',
        path: '/allPosts',
        component: AllPosts,
        meta: { heading: 'All Posts'  , homepage: false}
    },
    {
        name: 'Contact Us',
        path: '/contactUs',
        component: ContactUs,
        meta: { heading: 'Contact Us'  , homepage: false}
    },
    {
        name: 'Blog Post',
        path: '/blogPost/:title',
        component: BlogPost,
        meta: { heading: 'Blog Post'  , homepage: false}
    }
]

//The constant, router, is a router that contains the Web History of the site and the routes.
// routes is the constant created before this one.
const router = createRouter({
    history:createWebHistory(),
    routes
});

//Before navigating from page to page, store the document's title as the name inside the router constant.
//The document's title is shown on the browser's tab.
router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;

