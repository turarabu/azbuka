<template lang="pug">

div( class='options' )
    label( class='label' v-for='(item, index) in list' )
        input( class='input' type='checkbox' @change='change($event, index)' )
        span( class='status' )
        span( class='text' ) {{ item.name }}

</template>

<script>
export default {
    props: [ 'list' ],
    methods: { change },
    data: function () {
        return {
            checked: ''
        };
    }
}

function change (event, index) {
    if ( event.target.checked )
        this.checked += `|${index}`;
    else this.checked.replace(`|${index}`, '');

    this.$emit('changed', this.checked.replace(/^\|/, '').split('|'))
}
</script>

<style lang="stylus">
@import '~@/style/palette'

.options
    padding 8px 4px

    .label
        align-items center
        display flex
        cursor pointer
        margin 12px 0

        .status
            align-items center
            border 1px solid $white-gray
            border-radius 50%
            display flex
            justify-content center
            height 18px
            width 18px
            &:after
                background $red
                border-radius inherit
                content ''
                display block
                opacity 0
                margin-left 1px
                height 2px
                width 2px
                transition .3s step-end all, .3s opacity

        .text
            display inline-block
            font-size 16px
            font-weight 600
            margin-left 12px
            position relative
            top -1px

        .input
            display none
            &:checked ~ .status
                border-color $red
                &:after
                    opacity 1
                    transition .3s all
                    height 14px
                    width 14px
</style>
