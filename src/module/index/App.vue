<template>
  <div id="app">
    <only-slide :option="slideOption" class="slide-part"></only-slide>

    <b-alert :show="dismissCountDown" dismissible variant="warning" @dismiss-count-down="countDownChanged" class="alertbox">
        This alert will dismiss after {{dismissCountDown}} seconds...
    </b-alert>
    <div class="thebtn">
      <b-btn @click="showAlert" variant="info" class="m-1">Show alert with count-down timer</b-btn>
    </div>

    <a href="/module/comment_page.html" class="ccc">点击跳转详情</a>
    <button @click="getJson">点击获取Json</button>
  </div>
</template>

<script>
  import "babel-polyfill"
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
  import OnlySlide from 'components/only_slide/only_slide'

  import 'common/css/reset.css'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import Common from 'common/js/common.js'

  Vue.use(VueAxios, axios)
  Vue.use(BootstrapVue)
  Vue.axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

  export default {
    name: 'app',
    components: {
      OnlySlide
    },
    data (){
      return {
        dismissCountDown: null,
        slideOption:{
          slideViewWidth: 900,
          slideViewHeight:450,
          slideData:[
            {
              albumName:"setInterval",
              photo:[
                {
                  descr:"bbb",
                  img:"/static/head.png"
                },
                {
                  descr:"aaaaaa",
                  img:"/static/aaa.jpg"
                },
                {
                  descr:"是的是的",
                  img:"/static/aaa.jpg"
                },
                {
                  descr:"是的是的",
                  img:"/static/aaa.jpg"
                },
                {
                  descr:"是的是的",
                  img:"/static/head.png"
                },
                {
                  descr:"啊啊啊啊大撒啊啊啊啊大撒啊啊啊啊大撒啊啊啊啊大撒啊啊啊啊大撒啊啊啊啊",
                  img:"/static/aaa.jpg"
                },
                {
                  descr:"bbb",
                  img:"/static/head.png"
                },
                {
                  descr:"bbb",
                  img:"/static/aaa.jpg"
                },
                {
                  descr:"bbb",
                  img:"/static/head.png"
                },
                {
                  descr:"bbb",
                  img:"/static/aaa.jpg"
                },
                {
                  descr:"bbb",
                  img:"/static/head.png"
                },
                {
                  descr:"bbb",
                  img:"/static/aaa.jpg"
                }
              ]
            },
            {
              albumName:"setTimeout",
              photo:[
                {
                  descr:"bbb",
                  img:"/static/head.png"
                },
                {
                  descr:"bbb",
                  img:"/static/aaa.jpg"
                }
              ]
            },
            {
              albumName:"object",
              photo:[
                {
                  descr:"bbb",
                  img:"/static/head.png"
                },
                {
                  descr:"bbb",
                  img:"/static/aaa.jpg"
                }
              ]
            }
          ]
        }
      }
    },
    mounted(){
      console.log(Common.commJs())
    },
    methods:{
      getJson (){
        Vue.axios.post('/test.json',{name:"sdsd",password:"123"}).then((res) => {
          console.log(response.data)
        }).catch((err) => {
          console.log(err)
        })
      },
      showAlert() {
        this.dismissCountDown = 5
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      }
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    .ccc{
      color: #0ff;
    }
  }
  .slide-part{
    margin: 0 auto;
  }
  .thebtn{
    display: block;
    width: 100%;
  }
  .alertbox{
    margin-top: 10px;
  }
</style>
