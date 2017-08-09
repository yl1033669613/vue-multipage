<template>
    <div class="comm-content">
        <img :src="headImg" alt="">
        <div class="comm-content-inside">
            <div class="author-name">{{author}}</div><span>{{time}}</span>
            <div class="comm-txt">
                {{textMain}}
            </div>
            <div class="btns">
                <div class="reply" :class="{active:isActive}" @click="clickSecShow">回复</div>
            </div>
            <div class="sec_textarea" v-if="secVisible">
                <textarea name="" id="" placeholder="输入回复..." v-model="secCurrValue"></textarea>
                <div class="btn-box">
                    <div class="cancel-comment" @click="clickCancels">取消回复</div>
                    <div class="comment-publish" @click="secClickPublish">发表回复</div>
                </div>
            </div>    
            <second-step-comm 
            	v-for="item in children" 
                :key="'b'+index"
            	:index="item.index" 
            	:author="item.author" 
            	:time="item.time" 
            	:textMain="item.textMain" 
            	:children="item.children" 
            	:headImg="item.headImg" 
            	v-if="children == [] ? false : true" 
            	@thirdClickPublish="getThirdComm"></second-step-comm>
        </div>
    </div>
</template>
<script>
import SecondStepComm from './second_step_comm'
export default {
    components: {
        SecondStepComm
    },
    props: ["index", "headImg", "author", "time", "textMain", "children"],
    data() {
        return {
            secCurrValue: "",
            secVisible: false,
            isActive: false
        }
    },
    methods: {
        clickCancels() {
            this.secVisible = false;
            this.isActive = false;
        },
        secClickPublish() {
            this.$emit("secClickPublish", {
                data: this.secCurrValue,
                index: this.index
            });
            if (this.secCurrValue != "") {
                this.secVisible = false;
                this.isActive = false;
                this.secCurrValue = "";
            }
        },
        clickSecShow() {
            this.secVisible = !this.secVisible;
            this.isActive = !this.isActive;
        },
        getThirdComm(data) {
            this.$emit("getThirdComm", {
                data: data,
                index: this.index
            })
        }
    }
}
</script>
