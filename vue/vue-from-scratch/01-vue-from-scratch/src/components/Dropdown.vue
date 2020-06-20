<template>
    <select name="dropdown" id="dropdown" v-on:change="optionChanged" v-model="selectedOption">
        <!--
        <option value="0">Option 1</option>
        <option value="1">Option 2</option>
        <option value="2">Option 3</option>
         -->
         <option value="null" disabled>Select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
    </select>
</template>

<script>
    export default {
        name: "Dropdown",
        data: function(){
            return {
                selectedOption: null
            }
        },
        methods: {
            optionChanged: function(value){
                this.$emit('update:option', this.selectedOption);
            }
        },
    }
</script>

<style scoped>

</style>