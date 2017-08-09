<template>
    <div id="comment_area">
        <div class="first_step_textarea">
            <p>发表评论</p>
            <img src="/static/head.png" alt="">
            <div class="text_inside">
                <textarea 
                    v-model="currentValue" 
                    name="" 
                    id="" 
                    placeholder="输入评论..." 
                    :style="{height:topTextStatement.height + 'px'}" 
                    @click="clickTxtarea"></textarea>
                <div class="btn-box" v-if="topTextStatement.visible">
                    <div class="cancel-comment" @click="clickCancel">取消回复</div>
                    <div class="comment-publish" @click="clickPublish">发表评论...</div>
                </div>
            </div>
        </div>
        <div class="all-comment-box">
            <every-first-comm 
            	v-for="(item,index) in items" 
                :key="'a'+index"
            	:index="item.index" 
            	:author="item.author" 
            	:time="item.time" 
            	:textMain="item.textMain" 
            	:children="item.children" 
            	:headImg="item.headImg" 
            	@secClickPublish="getSecCommFun" 
            	@getThirdComm="getThirdCommFun"></every-first-comm>
        </div>
    </div>
</template>
<script>
import EveryFirstComm from './every_first_comm'
import {mapGetters,mapActions} from 'vuex';

import 'common/css/comment.css';
export default {
    computed:mapGetters(["topTextStatement"]),
    components: {
        EveryFirstComm
    },
    data() {
        return {
            currentValue:"",
            items: [{
                index: 0,
                headImg:"http://placehold.it/45x45",
                author: "zszsdzd",
                time: "刚刚",
                textMain: "zsdszd",
                children: []
            }, {
                index: 1,
                headImg:"http://placehold.it/45x45",
                author: "zszsdzd",
                time: "刚刚",
                textMain: "szsdzd",
                children: [{
                    index: 1,
                    headImg:"http://placehold.it/45x45",
                    author: "zszsdzd",
                    time: "刚刚",
                    textMain: "只是大致打字速度"
                }, {
                    index: 1,
                    headImg:"http://placehold.it/45x45",
                    author: "zszsdzd",
                    time: "刚刚",
                    textMain: "只是大致打字速度"
                }]
            }, {
                index: 2,
                headImg:"http://placehold.it/45x45",
                author: "zszsdzd",
                time: "刚刚",
                textMain: "zsdzsdzd",
                children: []
            }]
        }
    },
    methods: {
        clickTxtarea(){
            this.$store.dispatch('topTextVisibleShow');
        },
        clickCancel(){
            this.$store.dispatch('topTextVisibleHide');
            this.currentValue = "";
        },
        clickPublish(){
            if (this.currentValue == "") return;
            let a = {
                index: 3,
                headImg:"http://placehold.it/45x45",
                author: "sdszdzd",
                time: "123131",
                textMain: this.currentValue,
                children: []
            };
            this.items.push(a);
            if (this.currentValue != "") {
                this.$store.dispatch('topTextVisibleHide');
                this.currentValue = "";
            }
        },
        getSecCommFun(data) {
            if (data.data == "") return;
            let a = {
                headImg:"http://placehold.it/45x45",
                author: "sdszdzd",
                time: "123131",
                textMain: data.data
            };
            this.items[data.index].children.push(a);
        },
        getThirdCommFun(data) {
            if (data.data == "") return;
            let a = {
                headImg:"http://placehold.it/45x45",
                author: "sdszdzd",
                time: "123131",
                textMain: data.data
            };
            this.items[data.index].children.push(a);
        }
    }
}
</script>
