<template>
    <div style="margin:100px 20px; width:350px;
                border:2px lightslategrey solid; padding:4px;
                -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
                -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
                box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);" >

        <div class="my-form" >
            <div class="my-form__label">Добавление полей</div>

            <hr class="my-form__delimiter">

            <div class="my-form__container">

                <!------------ line ------------->
                <div class="my-form__elem-box">
                    <input class="form__inp-text" type="text" name="" required="">
                    <label class="form__inp-label">Username</label>
                </div>

                <div class="my-form__elem-box">
                    <input class="form__inp-text" type="text" name="" required="">
                    <label class="form__inp-label" >Password</label>
                </div>

                <div class="my-form__elem-box">
                    <input class="form__inp-text" type="text" name="" required="">
                    <label class="form__inp-label" >Password</label>
                </div>
                <!---- / line  ------>

                <!---- Чекбокс ----->
                <div class="div-checkbox" >
                    <input type="checkbox" id="inp-for-id-1">
                    <label for="inp-for-id-1">
                        Права суперпользователя</label>
                </div>
                <!---- / Чекбокс ----->

                <!---- Select -------->
                <div class="my-form__select-box" >
                    <label class="select-label" > Выбор условий</label>
                    <select class="custom-select-elem" >
                        <option >111111</option>
                        <option >22222</option>
                    </select>
                </div>
                <!---- / Select ------>

                <!------flex ------>
                <div class="my-form__flex-box">
                    <div class="my-form__elem-box">
                        <input class="form__inp-text" type="text" name="" required="">
                        <label class="form__inp-label" >Password</label>
                    </div>
                    <div class="margin-box"></div>
                    <div class="my-form__elem-box">
                        <input class="form__inp-text" type="text" name="" required="">
                        <label class="form__inp-label" >Password</label>
                    </div>
                </div>
                <!----------- / flex -->


                <!------flex ------>
                <div class="my-form__flex-box">
                    <div class="my-form__elem-box">
                        <input class="form__inp-text" type="text" name="" required="">
                        <label class="form__inp-label" >Password</label>
                    </div>
                    <div class="margin-box"></div>

                    <div class="my-form__select-box-flex" >
                        <label class="select-label" > Выбор условий</label>
                        <select class="custom-select-elem" >
                            <option >111111</option>
                            <option >22222</option>
                        </select>
                    </div>

                </div>
                <!----------- / flex -->

                <!------------flex select ------------->
                <div class="my-form__flex-box" >

                    <div class="my-form__elem-box">
                        <input class="form__inp-text" type="text" name="" required="">
                        <label class="form__inp-label" >Password</label>
                    </div>
                    <div class="margin-box"></div>
                    <div class="div-checkbox" style="width:40%; margin-top: -0.1px !important;" >
                        <input type="checkbox" id="inp-for-id">
                        <label class="" for="inp-for-id" >
                            Права user </label>
                    </div>

                </div>
                <!----------- / flex select -------------->

            </div>

            <br/><hr class="my-form__delimiter">

            <div class="my-form__btn-box">

                <a class="my-form__btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Сохранить
                </a>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'CustomForm'
}
</script>

<style scoped>

    .my-form,
    .form__container,
    .my-form__elem-box,
    .my-form__flex-box {
      border: 0px red solid;
    }

    .my-form {
        position: relative;
        margin: 0px;
        width: 100%;
        padding: 1px;
        box-sizing: border-box;
        border-radius: 1px;
        z-index:20;
    }

    .my-form__label {
        text-align: center;
        padding:2px;
        font-size: 18px;
        color:grey;
    }

    .my-form__delimiter {
       height: 1px;
       background: cornflowerblue;
       /*margin: 5px 0px 5px 0px;*/
    }


    .my-form__flex-box {
        display: flex;
        margin:0px
    }

    .my-form .my-form__elem-box {
        position: relative;
        height: 41px;
        margin:2px 2px 5px 2px;
        border: 0px blue solid;
        /*background: lightgray;*/
    }

    /* Кастомизация input.text */

    .my-form .my-form__elem-box input {
        width: 100%;
        padding: 2px 0;
        font-size: 16px;
        color: black;
        margin-bottom: 1px;
        border: none;
        border-bottom: 1px solid grey;
        outline: none;
        background: transparent;
        /*border: 0px solid grey;*/
        margin-top: 9px;
    }

    .my-form .my-form__elem-box label {
        position: absolute;
        top:16px;
        left: 2px;
        padding: 0;
        font-size: 12px;
        font-style: italic;
        color: grey;
        pointer-events: none;
        transition: .5s;
        border:0px green solid;
    }

    .my-form .my-form__elem-box input:focus {
        border-bottom: 2px solid #4fa6d5;
    }

    .my-form .my-form__elem-box input:focus ~ label,
    .my-form .my-form__elem-box input:valid ~ label {
        top: -3px;
        left: 0;
        color: #007bff;
        font-size: 11px;
    }


    /* Кастомизация чекбокса */
    .my-form .div-checkbox {
        position: relative;
        height: 40px;
        margin:0px;
        border-bottom: 1px grey solid;
        width:100%;
    }

    .div-checkbox input[type="checkbox"] {
        opacity: 0;
        cursor: pointer;
    }

    .div-checkbox label {
        position: relative;
        display: inline-block;
        padding-left: 25px;
        color:grey;
        cursor: pointer;
        font-size: 12px;
        border: 0px blue solid;
        font-style: italic;
        margin-top: 10px;
    }

    .div-checkbox .flex-label {
        text-align: left;
        position: relative;
        display: inline-block;
        padding-left: 28px;
        color: grey;
        cursor: pointer;
        font-size: 12px;
        border: 0px blue solid;
        font-style: italic;
        top: -34px;
    }

    .div-checkbox .flex-label::before {
        left: 1px;
        top: 1px;
    }
    .div-checkbox .flex-label::after{
        left: 6px;
        top: 5px;
    }

    .div-checkbox label::before,
    .div-checkbox label::after {
        position: absolute;
        content: "";
        display: inline-block;
    }

    .div-checkbox label::before{
        height: 20px;
        width: 20px;
        border: 1px grey solid;
        left: -10px;
        top: -1px;
    }

    .div-checkbox label::after {
        height: 7px;
        width: 11px;
        border-left: 2px solid cornflowerblue;
        border-bottom: 2px solid cornflowerblue;
        transform: rotate(-45deg);
        left: -5px;
        top: 3px;
    }

    .div-checkbox input[type="checkbox"] + label::after {
        content: none;
    }

    .div-checkbox input[type="checkbox"]:checked + label::after {
        content: "";
    }

    .div-checkbox input[type="checkbox"]:focus + label::before {
        outline: cornflowerblue auto 5px;
        border-radius: 0px;
    }

    .div-checkbox input[type="checkbox"]:checked + label {
        color:cornflowerblue;
    }


    /*** Стилизация Select ****/
    .my-form__select-box {
        border: 0px red solid;
        margin:4px 0px 4px 0px;
        border-bottom: 1px grey solid;
        padding: 0px;
    }

    .select-label {
        position: relative !important;
        border: 0px red solid !important;
        padding: 0;
        font-size: 12px;
        font-style: italic;
        color: grey;
        margin: 0px;
    }

    .custom-select-elem {
        width:100%;
        background: transparent;
        height: 32px;
        border: 1px gainsboro solid;
        color: grey;
        cursor: pointer;
    }

    .custom-select-elem option {
        background: gainsboro;
    }


    /*** Кнопка сохранения **/

    .my-form__btn-box {
        position: relative;
        display: flex;
    }

    .my-form .my-form__btn {
        position: relative;
        display: inline-block;
        padding: 5px;
        color: #3f729b;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-top: 2px;
        letter-spacing: 4px;
        border-bottom:2px cornflowerblue solid;
        text-align: center;
        margin-left: auto;
        background: gainsboro;
        /*border: 1px red solid;*/
        /*font-weight: bold;*/
    }

    .my-form .my-form__btn:hover {
        color:white;
        background: #b0bed9;
        border-bottom: 2px white solid;
        /*background: darkcyan;*/
    }


    .my-form .my-form__btn span {
        position: absolute;
        display: block;
    }

    .my-form .my-form__btn:hover span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, royalblue);
        animation: btn-anim1 1s linear infinite;
    }

    @keyframes btn-anim1 {
        0% {
            left: -100%;
        }
        50%,100% {
            left: 100%;
        }
    }

    .my-form .my-form__btn:hover span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, royalblue);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s
    }

    @keyframes btn-anim2 {
        0% {
            top: -100%;
        }
        50%,100% {
            top: 100%;
        }
    }

    .my-form .my-form__btn:hover span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, royalblue);
        animation: btn-anim3 1s linear infinite;
        animation-delay: .5s
    }

    @keyframes btn-anim3 {
        0% {
            right: -100%;
        }
        50%,100% {
            right: 100%;
        }
    }

    .my-form .my-form__btn:hover span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, royalblue);
        animation: btn-anim4 1s linear infinite;
        animation-delay: .75s
    }

    @keyframes btn-anim4 {
        0% {
            bottom: -100%;
        }
        50%,100% {
            bottom: 100%;
        }
    }


    .my-form__elem-box,
    .div-checkbox,
    .my-form__select-box {
        /*border: 1px goldenrod solid !important;*/
    }

</style>
