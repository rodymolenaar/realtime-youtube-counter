import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Odometer from 'odometer';
import MainView from './MainView.vue';

// Initialize extensions
Vue.use(VueRouter);
Vue.use(VueResource);


// Start the real application
var router = new VueRouter();

router.map({
    '/': {
        component: MainView
    }
});

router.start(MainView, 'app');
