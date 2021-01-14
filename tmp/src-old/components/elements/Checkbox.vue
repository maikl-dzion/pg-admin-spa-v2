<template><span class="checkbox-container">

    <input v-model="value" @change="changeValue" class="custom-checkbox-input" type="checkbox" :id="elemId" >

    <label v-if="label_class"
           class="custom-checkbox-label"
           :class="{ label_class : true, 'custom-checkbox-label-empty': isNotLabel }"
           :for="elemId" >{{label}}</label>
    <label v-else
           class="custom-checkbox-label"
           :class="{'custom-checkbox-label-empty': isNotLabel }"
           :for="elemId" >{{label}}</label>

</span></template>

<script>
export default {
    name: "Checkbox",
    props:['value', 'label', 'fname', 'param', 'label_class'],
    data: () => ({
        elemId : '_checkbox-for-id_',
        isNotLabel : true,
    }),
    computed: {
        getValue() {
            return this.value;
        }
    },

    created() {
        if(this.label)
            this.isNotLabel = false;
    },

    methods : {
        changeValue() {
            const data = {
                value : this.value,
                fname : this.fname,
                param : this.param,
            }
            this.$emit('change_value', data);
        },
    }

}
</script>

<style scoped>



</style>