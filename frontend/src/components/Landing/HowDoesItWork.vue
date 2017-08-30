<template lang="pug">
	.box_center.list_normal
		el-row.list_source
			el-col(:span="7")
				router-link.btn.btn_green.btn_create(to="/sucursal") + Crear Sucursal
		el-row.empty_padding(justify="space-between" :gutter="20" v-loading="loading")
			el-col(:xs="24" :sm="12" :lg="8" v-for="item in listSubsidiaries" :key="item.id")
				.grid_content_subsidiary
					.box_item
						i.icon.icon-localidad-2
						.box_text
							h4 {{ item.name }}
							span.id_sub {{ item.id }}
					hr
					.box_item.box_item_gray
						i.icon.icon-user-2
						.box_text
							h4 {{ item.contact_name }}
							span.position {{ item.contact_position }}
					.mask
						router-link(:to="{name: 'FormSubsidiary', params: {'id': item.id}}")
							i.icon.icon-edit
							span Editar
						//-a(href="javascript:;")
							//-i.icon.icon-eye-2
							//-span Detalle
						a(href="javascript:;" @click="deleteSubsidiaries(item.id)")
							i.icon.icon-trash-2
							span Eliminar
</template>

<script>
import axios from 'axios'
import config from '../../../config'

export default {
	name: 'subsidiary',
	mounted () {
		config.domain= (config.isProd) ? location.origin : config.domain;
		this.getSubsidiaries()
	},
	data () {
		return {
			listSubsidiaries:null,
			loading: false
		}
	},
	methods: {
			getSubsidiaries(){
				this.loading = true;

				axios.get(config.domain + '/empresa/establishment?search[value]=')
					.then(
						(response) => {
							if(response.data.state != 0){
								this.listSubsidiaries = response.data.data
								this.loading = false
							}else{
								console.log(response.data.msg)
							}
						}
					).catch((error) => {
							console.log(error);
					});
			},
			deleteSubsidiaries(id){
				this.$confirm('¿Desea eliminar la sucursal seleccionada?', 'Warning', {
					confirmButtonText: 'OK',
					cancelButtonText: 'Cancelar',
					type: 'warning'
				}).then(() => {
					this.loading= true;
					axios({method: 'DELETE', url: config.domain + '/empresa/establishment/' + id})
						.then((response)=>{
							if(response.data.state == 1){
								this.getSubsidiaries();
							}
							this.loading= false;
						}).catch((error)=>{
							this.loading= false;
							console.log(error);
						});
				}).catch(()=>{});
			}
	}
}
</script>
<style lang="stylus">
.grid_content_subsidiary
	border-radius 5px
	background white
	height 171px
	box-shadow 0 4px 7px 0 rgba(191, 231, 255, 0.6)
	padding 27px 22px
	text-align left
	position relative
	min-width 300px
	i
		font-size 28px
		margin-right 22px
	hr
		border-top 1px solid #bed2ee
		margin 15px 0
	.mask
		display none
		text-align center
		padding-top 60px
	&:hover
		.mask
			display block
</style>
