import Home from './components/Home.vue';
import Standardlist from './components/Standardlist.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/normal-list', name: 'list', component: Standardlist },
];

export default routes;