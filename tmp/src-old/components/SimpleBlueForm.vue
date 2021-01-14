<template><div style="width:100%;" >

        <div class="login-box">
            <h5>Создать таблицу</h5>
            <hr style="background:#03e9f4; height: 1px;" >
            <div>

                <div class="user-box">
                    <input type="text" name="" required="">
                    <label>Username</label>
                </div>

                <div class="user-box" >
                     <input type="password" name="" required="">
                     <label>Password</label>
                </div>

                <div style="display:flex">
                    <div class="user-box" style="width:60%">
                        <input type="text" name="" required="">
                        <label>Username</label>
                    </div>

                    <div class="user-box" style="width:40%" >
                        <select class="browser-default custom-select">
                                <option v-for="(item) in tableFieldTypes"
                                        :value="item.name" class="form-control">
                                    {{item.name}}
                                </option>
                        </select>
                        <label>Username</label>
                    </div>
                </div>

                <div class="div-row-flex" >

                    <div class="user-box" style="width:7%; border:0px red solid" >
                        <i class="fas fa-address-book"
                           style="color:white; font-size: 20px; padding-top:80%"
                         ></i>
                    </div>

                    <div class="user-box" style="width:90%; border:0px red solid">
                        <input type="text" name="" required="">
                        <label>Username</label>
                    </div>

                </div>

                <!--<hr style="background:#03e9f4; height: 1px;" >-->

                <a>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>

                <!--<SimpleButton></SimpleButton>-->

            </div>
        </div>

</div></template>

<script>
import SimpleButton from './SimpleButton'
export default {
  name: 'SimpleForm',
  props: ['items', 'title'],
  components : {
    SimpleButton
  }
}
</script>

<style scoped>

    /*html {*/
        /*height: 100%;*/
    /*}*/

    /*body {*/
        /*margin: 0;*/
        /*padding: 0;*/
        /*font-family: sans-serif;*/
        /*background: linear-gradient(#141e30, #243b55);*/
    /*}*/

    .custom-select {
        margin-top: 44px;
        border-radius: 0px;
        background: royalblue;
        color:white;
        cursor:pointer;
    }

    .login-box {
        position: relative;
        margin-top: 10px;
        /*top: 100%;*/
        /*left: 50%;*/
        width: 100%;
        padding: 20px;
        /*transform: translate(-50%, -50%);*/
        background: royalblue;
        /*background: #63759d;*/
        box-sizing: border-box;
        /*box-shadow: 0 12px 20px rgba(0, 0, 0, .5);*/
        box-shadow: 0 2px 4px rgba(0, 0, 0, .5);
        border-radius: 2px;
        z-index: 33;
    }

    .login-box h2,
    .login-box h4,
    .login-box h5 {
        padding: 0;
        color: #fff;
        text-align: center;
    }

    .login-box .div-row-flex {
       display: flex;
        width: 100%;
    }

    .login-box .user-box {
        position: relative;
        margin:2px;
        margin-top:10px;
    }

    .login-box .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 2px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }

    .login-box .user-box label {
        position: absolute;
        top: 0; left: 0;
        padding: 18px 0;
        font-size: 12px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
        font-style: italic;
    }

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;
    }

    .login-box a {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #03e9f4;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-top: 40px;
        letter-spacing: 4px
    }

    .login-box a:hover {
        background: #03e9f4;
        color: #fff;
        border-radius: 2px;
        box-shadow: 0 0 5px #03e9f4,
                    0 0 0px red,
                    0 0 10px gainsboro,
                    0 0 12px #03e9f4;
    }

    .login-box a span {
        position: absolute;
        display: block;
    }

    .login-box a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03e9f4);
        animation: btn-anim1 1s linear infinite;
    }

    @keyframes btn-anim1 {
        0% {
            left: -100%;
        }
        50%, 100% {
            left: 100%;
        }
    }

    .login-box a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03e9f4);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s
    }

    @keyframes btn-anim2 {
        0% {
            top: -100%;
        }
        50%, 100% {
            top: 100%;
        }
    }

    .login-box a span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03e9f4);
        animation: btn-anim3 1s linear infinite;
        animation-delay: .5s
    }

    @keyframes btn-anim3 {
        0% {
            right: -100%;
        }
        50%, 100% {
            right: 100%;
        }
    }

    .login-box a span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03e9f4);
        animation: btn-anim4 1s linear infinite;
        animation-delay: .75s
    }

    @keyframes btn-anim4 {
        0% {
            bottom: -100%;
        }
        50%, 100% {
            bottom: 100%;
        }
    }

</style>
