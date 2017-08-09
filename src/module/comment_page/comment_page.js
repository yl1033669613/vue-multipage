import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
    	isVisible:false,
    	height:30
    },
    getters:{
    	topTextStatement:(state)=>{
    		return {visible:state.isVisible,height:state.height};
    	}
    },
    mutations:{
    	topTextVisibleShow:(state)=>{
    		state.isVisible = true;
    		state.height = 60;
    	},
    	topTextVisibleHide:(state)=>{
    		state.isVisible = false;
    		state.height = 30;
    	}
    },
    actions:{
    	topTextVisibleShow:({commit})=>{
    		commit("topTextVisibleShow");
    	},
    	topTextVisibleHide:({commit})=>{
    		commit("topTextVisibleHide");
    	}
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
