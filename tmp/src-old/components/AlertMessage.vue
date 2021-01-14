<template><div>
    <transition name="slide-fade" >
        <div v-if="isShow"
             @click="close($event)"
             class="alertWindowPopupFixed">
             <div class="alertMessageContainer"
                 :class="{ 'type-succes-class': isSuccess,
                           'type-error-class' : isError,
                           'type-warn-class'  : isWarn, }">
                 <div class="alertMessageTextBox" >
                    <!--<div style="text-align: right">-->
                        <!--<button  text @click="close()">Close</button>-->
                    <!--</div>-->
                    <div class="alertMessageContent"
                         v-html="message"></div>
                </div>
            </div>

        </div>
    </transition>
</div></template>

<script>
export default {
  data: () => ({
    isShow: false,
    eventName: 'response_alert_message',
    message: 'Успешное сохранение',
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
          this.timeClose()
          break
        case 2 : this.isError = true; break
        case 3 : this.isWarn = true; break
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

<style>
    .alertWindowPopupFixed {
        padding: 4px;
        position: fixed;
        top:0px;
        right:2px;
        width: 320px;
        height: 100px;
        background: none;
        z-index: 9999 !important;
        border:0px green solid;
        /*opacity: 0.5;*/
    }

    .alertMessageContainer {
        width:300px;
        min-height: 70px;
        border:0px red solid;
        /*background: green;*/
    }

    .alertMessageTextBox {
        text-align:center;
        z-index:99999;
        width:100%;
        min-height: 70px;
        border:0px red solid;

    }

    .alertMessageContent {
        display: block;
        text-align:center;
        /*font-weight: bold;*/
        padding:10px 5px;
        min-height: 70px;
        color:white;
        border:1px white solid;
        padding-top: 6%;
    }

    .type-succes-class {
        background: green;
    }

    .type-error-class {
        background: red;
    }

    .type-warn-class {
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
