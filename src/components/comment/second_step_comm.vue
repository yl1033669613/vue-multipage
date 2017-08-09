<template>
    <div class="comm-content">
        <img :src="headImg" alt="">
        <div class="comm-content-inside">
            <div class="author-name">{{author}}</div>
            <span>{{time}}</span>
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
                    <div class="comment-publish" @click="thirdClickPublish">发表回复</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
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
        thirdClickPublish() {
            this.$emit("thirdClickPublish", this.secCurrValue)
            if (this.secCurrValue != "") {
                this.secVisible = false;
                this.isActive = false;
                this.secCurrValue = "";
            } 
        },
        clickSecShow() {
            this.secVisible = !this.secVisible;
            this.isActive = !this.isActive;
        }
    }
}
</script>
