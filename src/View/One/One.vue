<style lang="less">
@import "./One.less";
@import "./animate.min.css";
</style>

<template>
    <div :class="loginClass">
        <div class="modal"></div>

        <div style="width:618px;background:#fff;display:none;">
            <img src="./img/1.jpg" style="display:block;width:100%;"/>
            <img src="./img/2.jpg" style="display:block;width:100%;"/>
        </div>


        <div class="login-box">
            <div>
                <button @click="handleSubmit">登录</button>
            </div>
        </div>
        <div class="loading-login">
            <div class="loading-login-info animated fadeInLeft">
                <span>登录中</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            //登录动画
            loginClass: "des-login",
            anim:null
        };
    },
    methods: {
        /**
         *登陆
        */
        handleSubmit() {
           this.loginClass = "des-login activeLogin";
            setTimeout(() => {
                this.loginClass = "des-login";
            }, 2000);
        }
    },
    created() {
    }
};
</script>



