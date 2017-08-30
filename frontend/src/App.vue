<template lang="pug">
#app.container
	router-view
	router-view(name="blockBanner")
	router-view(name="blockFooter")
</template>

<script>
//import $ from 'jquery'
export default {
	name: 'app'
}
</script>

<style lang="stylus">
@import url("//unpkg.com/element-ui@1.3.7/lib/theme-default/index.css")
@import "./stylus/base/_responsive.styl"
#app
	text-align center
	width 100%
	height 100%
	//-min-height calc(100vh - 140px)
	position relative
</style>
