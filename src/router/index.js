import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from "@/parts/PartInfo.vue";
import BrowseParts from "@/parts/BrowseParts.vue";
import RobotBases from "@/parts/RobotBases.vue";
import RobotHeads from "@/parts/RobotHeads.vue";
import RobotArms from "@/parts/RobotArms.vue";
import RobotTorsos from "@/parts/RobotTorsos.vue";
import SidebarStandart from "@/sidebars/SidebarStandart.vue";
import SidebarBuild from "@/sidebars/SidebarBuild.vue";
import ShoppingCart from "@/cart/ShoppingCart.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandart
    },
  },{
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart
    },{
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          name: 'BrowseHeads',
          path: 'heads',
          component: RobotHeads,
        },
        {
          name: 'BrowseArms',
          path: 'arms',
          component: RobotArms,
        },
        {
          name: 'BrowseTorsos',
          path: 'tors',
          component: RobotTorsos,
        },
        {
          name: 'BrowseBases',
          path: 'bases',
          component: RobotBases,
        }
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValid = Number.isInteger(Number(to.params.id));
        next(isValid);
      },
    }],
});
