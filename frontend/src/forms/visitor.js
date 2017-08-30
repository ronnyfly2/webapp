export default {
	"form": {
		"fullname": "",
		"email": "",
		"document_id": "",
		"document_number": "",
		"phone": "",
		"establishment_id": "",
		"property": "",
		"block": "",
		"password": "",
		"password_repeat": ""
	},
	"rules": {
		"fullname": [
			{ required: true, message: 'El nombre es requerido', trigger: 'blur' },
			{ min: 3,  message: 'Debe ser mayor a 3 letras', trigger: 'blur' }
		],
		"email":[
			{ required: true, message: 'El email es requerido', trigger: 'blur' },
			{ type: 'email', message: 'Email inválido', trigger: 'blur' }
		],
		"document_number": [
			{ required: true, message: 'El número de documento es requerido', trigger: 'blur' }
		],
		"phone": [
			{ required: true, message: 'El teléfono es requerido', trigger: 'blur' }
		],
		"property": [
			{ required: true, message: 'El número o nombre de inmueble es requerido', trigger: 'blur' }
		],
		"block": [
			{ required: true, message: 'El bloque es requerido', trigger: 'blur' }
		]
	}
}
