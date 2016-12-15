import './scss/main.scss';

/**
 * Vue
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

/**
 * Layouts
 */
import App from './App'
import Loader from './Loader.vue'

// Introduction
import Introduction1 from './layouts/introduction/Introduction-1.vue'
import Introduction2 from './layouts/introduction/Introduction-2.vue'
import Introduction3 from './layouts/introduction/Introduction-3.vue'
import Introduction4 from './layouts/introduction/Introduction-4.vue'
import IntroductionEmbark from './layouts/introduction/Introduction-embark.vue'

// Questionnaire
import QuestionnaireIntroduction from './layouts/questionnaire/Questionnaire-introduction.vue'
import Questionnaire1 from './layouts/questionnaire/Questionnaire-1.vue'
import Questionnaire2 from './layouts/questionnaire/Questionnaire-2.vue'
import Questionnaire3 from './layouts/questionnaire/Questionnaire-3.vue'
import Questionnaire4 from './layouts/questionnaire/Questionnaire-4.vue'
import Questionnaire5 from './layouts/questionnaire/Questionnaire-5.vue'

// Workshop
import WorkshopIntroduction from './layouts/workshop/Workshop-introduction.vue'
import WorkshopLaunch from './layouts/workshop/Workshop-launch.vue'
import WorkshopTutorial1 from './layouts/workshop/Workshop-tutorial-1.vue'
import WorkshopTutorial2 from './layouts/workshop/Workshop-tutorial-2.vue'
import WorkshopTutorial3 from './layouts/workshop/Workshop-tutorial-3.vue'
import Workshop from './layouts/workshop/Workshop.vue'

const routes = [
  // Introduction
  { path: '/', component: Loader },
  { path: '/introduction/1', component: Introduction1 },
  { path: '/introduction/2', component: Introduction2 },
  { path: '/introduction/3', component: Introduction3 },
  { path: '/introduction/4', component: Introduction4 },
  { path: '/introduction/embark', component: IntroductionEmbark },

  // Questionnaire
  { path: '/questionnaire/introduction', component: QuestionnaireIntroduction },
  { path: '/questionnaire/1', component: Questionnaire1 },
  { path: '/questionnaire/2', component: Questionnaire2 },
  { path: '/questionnaire/3', component: Questionnaire3 },
  { path: '/questionnaire/4', component: Questionnaire4 },
  { path: '/questionnaire/5', component: Questionnaire5 },

  // Workshop
  { path: '/workshop/introduction', component: WorkshopIntroduction },
  { path: '/workshop/launch', component: WorkshopLaunch },
  { path: '/workshop/tutorial/1', component: WorkshopTutorial1 },
  { path: '/workshop/tutorial/2', component: WorkshopTutorial2 },
  { path: '/workshop/tutorial/3', component: WorkshopTutorial3 },
  { path: '/workshop/', component: Workshop }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
