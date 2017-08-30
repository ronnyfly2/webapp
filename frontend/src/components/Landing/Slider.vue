<template lang="pug">
	.box_full()
		el-carousel(indicator-position="none" arrow="never" :interval="4000")
			el-carousel-item(v-for="(item, index) in slider" :key="item")
				.item_img
					img(:src="item" @load="resizeImg")
					a.btn_banner(href="javascrip:;" :class="'idx'+index") EMPEZAR
</template>

<script>
	import axios from 'axios'
	import config from '../../../config'

	export default {
		name: 'Slider',
		mounted () {
			let self = this;
			self.onResize();
		},
		data() {
			return {
				slider:{
					1: 'http://www.codersperu.com/imgs/banner_1.png',
					2: 'http://www.codersperu.com/imgs/banner_2.png',
					3: 'http://www.codersperu.com/imgs/banner_3.png'
				}
			}
		},
		methods: {
			resizeImg(callback){
				let heightImg = $('.item_img > img').height();
				$('.el-carousel__container').css('height',heightImg);
				console.log(heightImg);
			},
			onResize(){
				let self = this;
				window.addEventListener('resize', this.resizeImg)
			}
		}
	}
</script>
<style lang="stylus">
.el-carousel
	&__container
		height 562px
	&__item
		background-color #fcfcfc
		.item_img
		img
			width 100%
			max-width 1342px
		.item_img
			margin 0 auto
			position relative
		a
			&.btn_banner
				color white
				background-color #00d47a
				border-radius 5px
				display block
				position absolute
				left 2.8%
				bottom 10%
				box-shadow 0 9px #07ad62
				padding 12px 25px
				font-weight bold
				font-size 24px
			&:hover
				background-color #25d087
			&:active
				background-color #149860
				box-shadow 0 5px #07ad62
				transform translateY(4px)
			&.idx1
				left 11.4%
				bottom 5%
</style>
