import Vue from 'vue';
import Router from 'vue/router';
import SearchDevelopers from '@/components/SearchDevelopers';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'SearchDevelopers',
            component SearchDevelopers;
        }
    ]
})