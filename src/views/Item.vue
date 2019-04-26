<template lang="pug">

#item
    p( class='oops' ) Упс...
    h1( class='title' ) 404
    p( class='description' ) Кажется, такого товара не существует

</template>

<script>
export default {
    props: [ 'item' ],
    mounted: function () {
        console.log(this);
    }
}
</script>

<style lang="stylus">

#item
    padding 64px 0
    text-align center

    .oops
        color #777
        font-size 32px

    .title
        color #999
        font-size 300px
        line-height 300px

    .description
        font-size 28px
</style>
