<template lang="pug">
	header
		.box_center
			img.logo(src="../assets/img/logo_cuviko.png")
			.icon.icon-menu(@click="openMenu")
			nav
				ul
					li
						router-link(to="/")
							span ¿Cómo funciona?
					li
						router-link(to="/garita")
							span ¿Cómo ofrecer mis servicios?
					li
						router-link(to="/agente")
							span Impacto Social
					li
						router-link(to="/visitor")
							button.btn.btn_black() Empezar
							
</template>

<script>
import config from '../../config'

export default {
	props:['ListMenu'],
	name: 'ListoMenu',
	mounted () {
	},
	data () {
		return {
		}
	},
	methods: {
		openMenu(){
			let btnMenu = document.querySelectorAll('header .icon-menu');
			let ctnNav = document.querySelectorAll('header nav');
			if (btnMenu[0].classList.length > 2) {
				btnMenu[0].classList.remove('open')
				ctnNav[0].classList.remove('open')
			} else {
				btnMenu[0].classList.add('open')
				ctnNav[0].classList.add('open')
			}
		}
	}
}
</script>
<style lang="stylus">
@import "../stylus/base/base.styl"
header
	height 74px
	width 100%
	background white
	position fixed
	top 0
	z-index 99
	.box_center
		text-align left
		padding 0 10px
.logo
	width 12.538%
	max-width 199px
	margin-top 15px
	min-width 160px
nav
	width 82%
	text-align right
	float right
	max-width 925px
	min-width 500px
	&:before
		clear both
	ul
		list-style-type none
		padding 0

	li
		display inline-block
		margin 0 1.2%
		position relative
		&:last-child
			margin-right 0
	a
		color #46535c
		text-align center
		padding-top 17px
		display block
		font-family 'Lato'
		&.router-link-exact-active
			color #3e74fe
		span
			font-size 17px
	.btn
		font-size 17px
		padding-left 15px
		padding-right 15px
.icon-menu
	display none
</style>