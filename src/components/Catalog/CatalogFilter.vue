<template lang="pug">

div( class='filter' )
    div( class='section' :class='{active: sections[0] === true}' )
        h3( class='title' @click='toggle(0)' )
            i( class='title-icon fas fa-ruble-sign' )
            span Цена
            span( class='help' ) (руб)

        DoubleRange( min=0 max=10000 name='prices.current' @changed='changed' )

    div( class='section' :class='{active: sections[1] === true}' )
        h3( class='title' @click='toggle(1)' )
            i( class='title-icon fas fa-ruble-sign' )
            span Стиль

        Options( :list='types' )

    div( class='section' :class='{active: sections[2] === true}' )
        h3( class='title' @click='toggle(2)' )
            i( class='title-icon fas fa-ruble-sign' )
            span Длина
            span( class='help' ) (СМ)

        DoubleRange( min=0 max=500 )

    div( class='section' :class='{active: sections[3] === true}' )
        h3( class='title' @click='toggle(3)' )
            i( class='title-icon fas fa-ruble-sign' )
            span Глубина
            span( class='help' ) (СМ)

        DoubleRange( min=0 max=500 )

    div( class='section' :class='{active: sections[4] === true}' )
        h3( class='title' @click='toggle(4)' )
            i( class='title-icon fas fa-ruble-sign' )
            span Ширина
            span( class='help' ) (СМ)

        DoubleRange( min=0 max=500 )

    div( class='section' :class='{active: sections[5] === true}' )
        h3( class='title' @click='toggle(5)' )
            i( class='title-icon fas fa-ruble-sign' )
            span Материал

        Options( :list='types' )

    button( class='update' @click='$emit("update")' ) Показать товары

</template>


<script>
import DoubleRange from '@/components/interface/DoubleRange.vue'
import Options from '@/components/interface/Options.vue'

export default {
    components: { DoubleRange, Options },
    methods: { toggle, changed },
    data: function () {
        return {
            sections: [true, true, true, false, false, false, false],
            types: [
                {name: 'Современный'},
                {name: 'Не современный'},
                {name: 'Минимализм'},
                {name: 'Классика'}
            ]
        };
    }
}

function toggle (index) {
    this.sections[index] = !this.sections[index];
    return this.$forceUpdate();
}

function changed (data) {
    this.$store.commit('catalog-filter', {
        key: data.name,
        type: data.type,
        value: data.value
    });
}
</script>


<style lang="stylus">
@import '~@/style/palette'

#catalog.small .filter
    right 0
    opacity 1

.filter
    box-shadow 0 -20px 20px darken($white-gray, 20)
    padding-top 45px
    justify-self self-end
    transition 0.15s all, step-end right
    position absolute
    top -60px
    right -25%
    opacity 0
    overflow auto
    width 25%

    .section
        border-bottom 1px solid #DDD
        margin 16px 24px
        padding 16px 0
        overflow hidden
        max-height 24px
        transition .3s all
        &.active
            max-height 500px
            transition .5s all

    .title
        align-items center
        display flex
        font-size 18px
        text-transform uppercase

        .title-icon
            align-items center
            border 1px solid $black
            border-radius 50%
            display inline-flex
            font-size 16px
            justify-content center
            margin-right 8px
            height 25px
            width 25px

        .help
            color $white-gray
            display inline-block
            font-weight 400
            margin 0 8px
    
    .update
        background $red
        border none
        border-radius 120px
        color $white
        cursor pointer
        display block
        font-size 18px
        margin 24px auto
        outline none
        padding 8px
        width 280px
</style>
