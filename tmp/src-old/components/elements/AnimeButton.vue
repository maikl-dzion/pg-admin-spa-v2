<template><div>

    <h1>Buttons hover effects</h1>

    <div class="anime-panel-btn">
        <button class="animeCustomBtn" >Home</button>
        <button class="animeCustomBtn" >Menu</button>
        <button class="animeCustomBtn" >Read more</button>
        <button class="animeCustomBtn" >Submit</button>
        <button class="animeCustomBtn" >Some other button</button>
    </div>
    <div class="anime-panel-btn pink">
        <button class="animeCustomBtn" >Home</button>
        <button class="animeCustomBtn" >Menu</button>
        <button class="animeCustomBtn" >Read more</button>
        <button class="animeCustomBtn" >Submit</button>
        <button class="animeCustomBtn" >Just hover me already</button>
    </div>
    <div class="anime-panel-btn blue">
        <button class="animeCustomBtn" >Home</button>
        <button class="animeCustomBtn" >Menu</button>
        <button class="animeCustomBtn" >Read more</button>
        <button class="animeCustomBtn" >Submit</button>
        <button class="animeCustomBtn" >I like it</button>
    </div>
    <div class="anime-panel-btn borderless">
        <button class="animeCustomBtn" >Home</button>
        <button class="animeCustomBtn" >Menu</button>
        <button class="animeCustomBtn" >Read more</button>
        <button class="animeCustomBtn" >Submit</button>
        <button class="animeCustomBtn" >Any action actually</button>
    </div>
    <div class="anime-panel-btn bw">
        <button class="animeCustomBtn" >Home</button>
        <button class="animeCustomBtn" >Menu</button>
        <button class="animeCustomBtn" >Read more</button>
        <button class="animeCustomBtn" >Submit</button>
        <button class="animeCustomBtn" >I'm lovin it!</button>
    </div>

</div></template>

<script>
    export default {
        name: "AnimeButton",
        computed : {
            getUser() {
                // return this.storeGet().getParam('currentUser')
                // return this.getStoreParam ('currentUser')
            }
        }
    }
</script>

<style scoped>

    /*@import 'https://fonts.googleapis.com/css?family=Comfortaa:300,400,700&subset=cyrillic,cyrillic-ext,latin-ext';*/

    /*body {*/
        /*background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAFfKj/FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRF4OXp8PX50NXZBLxR6QAAAEhJREFUeNpiYGJgYGACCCAGMAAIIDiDCSCAGLAAgABCEcbBBAggGIORQhogwNCcwIjddKgQI6ojUbkgWSYMo+BCjKiOR9PLBAAchAAxHFDBbwAAAABJRU5ErkJggg==')*/
    /*}*/

    * {
        box-sizing: border-box
    }

    h1 {
        text-align: center;
        font-family: comfortaa;
        font-weight: 900;
        font-size: 3em;
        color: #fff;
        text-shadow: 0em 0.05em 0 rgba(0, 0, 0, 0.35)
    }

    .animeCustomBtn {
        color: #454545;
        background: transparent;
        border-width: 2px;
        border-style: solid;
        border-color: #454545;
        position: relative;
        margin: 1em;
        display: inline-block;
        padding: 0.5em 1em;
        transition: all 0.3s ease-in-out;
        text-align: center;
        font-family: comfortaa;
        font-weight: bold
    }

    .animeCustomBtn:before, .animeCustomBtn:after {
        content: '';
        display: block;
        position: absolute;
        border-color: #454545;
        box-sizing: border-box;
        border-style: solid;
        width: 1em;
        height: 1em;
        transition: all 0.3s ease-in-out
    }

    .animeCustomBtn:before {
        top: -6px;
        left: -6px;
        border-width: 2px 0 0 2px;
        z-index: 5;
    }

    .animeCustomBtn:after {
        bottom: -6px;
        right: -6px;
        border-width: 0 2px 2px 0;
    }

    .animeCustomBtn:hover:before,
    .animeCustomBtn:hover:after {
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        border-color: #fff
    }

    .animeCustomBtn:hover {
        color: #353535;
        background-color: #fff;
        border-color: #fff
    }

    .anime-panel-btn {
        max-width: 960px;
        text-align: center;
        position: relative;
        margin: auto;
    }

    .pink button {
        color: #eb1777;
        border-color: #eb1777
    }

    .pink button:before, .pink button:after {
        border-color: #eb1777
    }

    .pink button:hover:before, .pink button:hover:after {
        border-color: #eb1777;
    }

    .pink button:hover {
        color: #fff;
        background-color: #eb1777;
        border-color: #eb1777;
    }

    .pink .anime-panel-btn {
        max-width: 960px;
        text-align: center;
        position: relative;
        margin: auto;
    }

    .blue button {
        color: #3bb4e5;
        border-color: #3bb4e5
    }

    .blue button:before, .blue button:after {
        border-color: #3bb4e5
    }

    .blue button:hover:before, .blue button:hover:after {
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        border-color: #3bb4e5;
        transform: rotateY(180deg)
    }

    .blue button:hover {
        color: #3bb4e5;
        background-color: transparent;
        border-color: #3bb4e5
    }

    .blue .anime-panel-btn {
        max-width: 960px;
        text-align: center;
        position: relative;
        margin: auto;
    }

    .borderless button {
        border-color: rgba(0, 0, 0, 0);
        color: #999
    }

    .borderless button:hover {
        border-color: #353535;
        background-color: transparent;
        color: #353535
    }

    .borderless button:before, .borderless button:after {
        border-color: transparent;
    }

    .borderless button:hover:before, .borderless button:hover:after {
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        border-color: #353535
    }

    .bw button {
        color: #fff;
        border-color: #fff;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1) inset
    }

    .bw button:before, .bw button:after {
        border-color: #fff
    }

    .bw button:hover:before, .bw button:hover:after {
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        border-color: #353535;
    }

    .bw button:hover {
        color: #fff;
        background-color: #353535;
        border-color: #353535
    }

    .blue .anime-panel-btn {
        max-width: 960px;
        text-align: center;
        position: relative;
        margin: auto;
    }

</style>
