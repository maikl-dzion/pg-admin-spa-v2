<template>
    <div>
        <i :class="'fa fa-refresh fa-spin fa-' +getSize+ 'x fa-fw'"></i>
        <span class="sr-only">Loading...</span>
    </div>
</template>

<script>
export default {
    name : "Spinner",
    props: ['size'],
    data: () => ({
        iconSize : 3,
    }),
    computed : {
        getSize() {
           return this.iconSize
        },
    },
    created () {
        if(this.size)
            this.iconSize = this.size
    },
}
</script>

<style scoped>

</style>
