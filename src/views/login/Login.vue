<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-title">
            <!--<div class="title-image"></div>-->
            <span class="title-text">项目管理平台</span>
        </div>
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名" size="large">
                                <span slot="prepend">
                                    <Icon :size="20" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码" size="large">
                                <span slot="prepend">
                                    <Icon :size="18" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" size="large" long>登录</Button>
                        </FormItem>
                    </Form>
                    <!--<p class="login-tip">输入用户名和密码</p>-->
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import Util from '@/utils/util';
let routes = [];
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            },
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$store.dispatch('LoginByUsername', {username: this.form.userName, password: this.form.password}).then((res) => {
                        if(res.success){
                            Cookies.set('user', this.form.userName);
                            this.login(res);
                            this.$store.commit('setAvator', 'http://img.zcool.cn/community/0093345a34c2eca80120ba38fc1fe7.jpg@160w_160h_1c_1e_1o_100sh.jpg');
                            this.$router.push({name: 'home'});
                        }else{
                            let errMsg = Util.getErrorMsg(res.code);
                            this.$Message.error({content: errMsg});
                        }
                    }).catch((err) => {
                        console.log(err);
                        this.$Message.error({content: err.message});
                    })
                }else {
                    return false;
                }
            });
        },
        login(data){
            let menus = data.info.menus;
            sessionStorage.setItem("menus", JSON.stringify(menus));
        },
    }
};
</script>
<style lang="stylus" scoped>
    .ivu-card
        border-radius: 2px;
    .ivu-card-head
        p
            font-size: 18px;

    .login{
        width: 100%;
        height: 100%;
        background-image: url('../../assets/images/bg.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
        &-title{
            position: absolute;
            left: 150px;
            top: 24%;
            .title-image{
                width: 206px;
                height: 218px;
                display: inline-block;
                background: url('../../assets/images/login-title.jpg')
            }
            .title-text{
                font-size: 45px;
                font-family: sans-serif;
                font-weight: bolder;
                font-style: italic;
                margin-top: 60px;
                margin-left: 15px;
                float: right;
            }
        }
        &-con{
            position: absolute;
            right: 160px;
            top: 50%;
            transform: translateY(-60%);
            width: 350px;
            opacity: 0.9;

            &-header{
                font-size: 16px;
                font-weight: 300;
                text-align: center;
                padding: 30px 0;
            }
            .form-con{
                padding: 10px 0 0;
            }
            .login-tip{
                font-size: 10px;
                text-align: center;
                color: #c3c3c3;
            }
        }
    }
</style>