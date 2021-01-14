<template><div class="custom-button-container">

    <template v-if="type == 1">

    </template>
    <template v-else >
        <button v-if="icon"
                @click="clickEmit"
                style="width:200px; margin:0px; border-radius: 0; "
                class="btn btn-success btn-sm px-2 waves-effect export-to-snippet">
                <i :class="`${fa} ${icon}`"></i> &nbsp; {{title}}
        </button>
        <button v-else
                @click="clickEmit"
                style="width:200px; margin:0px; border-radius: 0; "
                class="btn btn-success btn-sm px-2 waves-effect export-to-snippet"
                v-html="title">
        </button>
    </template>

</div></template>

<script>
export default {
    props: ['type', 'title', 'icon', 'param', 'attr'],
    name: "CustomButton",
    data: () => ({
       fa : 'fa',
    }),
    methods : {
        clickEmit() {
            this.$emit('btn_click', { param : this.param});
        },
    }
}
</script>

<style scoped>
   .custom-button-container {
       margin:0px;
       padding: 0px;
   }
</style>
