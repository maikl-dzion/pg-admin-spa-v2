<template><div>
    <transition name="slide-fade" >
        <div v-if="isShow"  title="Закрыть" style="cursor: pointer"
             @click="close($event)"
             class="warnWindowPopupFixed">
            <div class="warnMessageContainer" title="Закрыть"
                 :class="{ 'type-succes-class': isSuccess,
                           'type-error-class' : isError,
                           'type-warn-class'  : isWarn, }">
                <div class="warnMessageTextBox" >
                    <!--<div style="text-align: right">-->
                    <!--<button  text @click="close()">Close</button>-->
                    <!--</div>-->
                    <div v-if="!isError" class="warnMessageContent"
                         style="justify-content: center; color:white"
                         v-html="message"></div>
                    <div v-else class="warnMessageContent"
                         style="color:white; width:100%;" >
                         <pre style="color:white" >{{message}}</pre>
                    </div>
                </div>
            </div>

        </div>
    </transition>
</div></template>

<script>
    export default {
        data: () => ({
            isShow: false,
            eventName: 'warn_message_event',
            message  : 'Информационное сообщение',
            type: 1,
            timeout: 4000,
            isSuccess: true,
            isError: false,
            isWarn: false
        }),

        created () {
            this.getEventBus(this.eventName, this.alertMessageRun)
        },

        methods: {

            close (event = null) {
                this.isShow = false
            },

            alertMessageRun (item) {
                if ('type' in item) { this.type = item['type'] }

                if ('message' in item) { this.message = item['message'] }

                switch (this.type) {
                    case 1 : this.isSuccess = true
                        // this.timeClose()
                        break
                    case 2 : this.isError = true; break
                    case 3 : this.isWarn  = true; break
                }

                this.isShow = true
            },

            timeClose () {
                setTimeout(() => {
                    this.close()
                }, this.timeout)
            }

        }
    }
</script>

<style scoped >
    .warnWindowPopupFixed {
        padding: 4px;
        position: fixed;
        top:0px;
        width: 100%;
        height: 130px;
        background: grey;
        z-index: 9999 !important;
        border:0px green solid;
        /*opacity: 0.9;*/
    }

    .warnWindowPopupFixed .warnMessageContainer {
        width:300px;
        min-height: 100px;
        border:1px white solid;
        padding:2px;
        margin: 10px auto 0px auto;
        opacity: 1;
        cursor: pointer;
        /*background: green;*/
    }

    .warnWindowPopupFixed .warnMessageTextBox {
        text-align:center;
        z-index:99999;
        width:100%;
        border:0px red solid;

    }

    .warnWindowPopupFixed .warnMessageContent {
        display: block;
        text-align:center;
        /*font-weight: bold;*/
        padding:10px 5px;
        min-height: 100%;
        color:white;
        border:0px white solid;
        padding-top: 6%;
    }

    .warnWindowPopupFixed .type-succes-class {
        background: orange;
    }

    .warnWindowPopupFixed .type-error-class {
        background: red;
    }

    .warnWindowPopupFixed .type-warn-class {
        background: orange;
    }

    /* Анимации появления и исчезновения могут иметь */
    /* различные продолжительности и динамику.       */
    .slide-fade-enter-active {
        transition: all .3s ease;
        transform: translateY(40px);
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

</style>
