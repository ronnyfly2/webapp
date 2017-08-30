export default {
	"form": {
		"name": "",
		"lastname": "",
		"email": "",
		"photo": "",
		"document_id": "",
		"document_number": "",
		"company_service": "",
		"establishment_id": "",
		"cabin_id": "",
		"password": "",
		"password_repeat": ""
	},
	"rules": {
		"name": [
			{ required: true, message: 'El nombre es requerido', trigger: 'blur' },
			{ min: 3,  message: 'Debe ser mayor a 3 letras', trigger: 'blur' }
		],
		"lastname": [
			{ required: true, message: 'El apellido es requerido', trigger: 'blur' },
			{ min: 3,  message: 'Debe ser mayor a 3 letras', trigger: 'blur' }
		],
		"email":[
			{ required: true, message: 'El email es requerido', trigger: 'blur' },
			{ type: 'email', message: 'Email inválido', trigger: 'blur' }
		],
		"document_number": [
			{ required: true, validator: 'checkNumber', trigger: 'blur' }
		],
		"company_service": [
			{ required: true, message: 'La empresa de servicio es requerido', trigger: 'blur' }
		]
	}
}
