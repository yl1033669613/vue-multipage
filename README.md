# vue-multipage

> 基于vue-cli的vue多页应用<br>
> 参考 [http://www.cnblogs.com/fengyuqing/p/vue_cli_webpack.html](http://www.cnblogs.com/fengyuqing/p/vue_cli_webpack.html)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 兼容
ie兼容9

## 使用
打包工具：webpack <br>
网络请求：axios，VueAxios <br>
使用`bootstrap-vue`

## 目录
```
* build
* src
	* common    公共 css 和js等 
	* components    组件
	* module    各个模块
  		* index    index页
    		* index.html    html
    		* index.js    js vue实例
    		* App.vue     根组件
  		* detail    detail页
    		* detail.html
    		* detail.js
    		* App.vue
* static 静态资源
```

