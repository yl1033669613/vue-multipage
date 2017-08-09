<template>
  <div id="app">
    <only-slide :option="slideOption" style="margin: 0 auto;"></only-slide>

    <b-alert :show="dismissCountDown" dismissible variant="warning" @dismiss-count-down="countDownChanged" style="margin-top: 10px">
        This alert will dismiss after {{dismissCountDown}} seconds...
    </b-alert>
    <div>
      <b-btn @click="showAlert" variant="info" class="m-1">Show alert with count-down timer</b-btn>
    </div>

    <a href="/module/detail.html">点击跳转详情</a>
    <button @click="getJson">点击获取Json</button>
  </div>
</template>

<script>
  import Common from 'common/js/common.js'

  import OnlySlide from 'components/only_slide/only_slide'

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
        this.$axios.get('http://localhost:3000/test').then((res) => {
          console.log(res.data)
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
  }
</style>
