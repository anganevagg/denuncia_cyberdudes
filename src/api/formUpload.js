const express = require('express')
const mailer = require('nodemailer')
const router = express.Router()
const { PDFDocument } = require('pdf-lib')
const fs = require('fs')
const pool = require("../db")
const path = require("path")


router.post("/form", async (req, res) => {
	let hoy = new Date();
	let folio = hoy.getDate() + '' + (hoy.getMonth() + 1) + '' + hoy.getFullYear() + Math.floor(Math.random() * 999999);
	const { nombre_denunciante, sexo_denunciante, edad_denunciante, ocupacion_denunciante, anonimo } = req.body
	const { nombre_denunciado, ocupacion_denunciado } = req.body
	const { correo, domicilio_suceso, fecha_suceso, fecha_actual, suceso_ocurrido } = req.body
	const { municipio, estado } = req.body

	let data = {
		pais: "México",
		nombre_denunciante, sexo_denunciante,
		edad_denunciante, ocupacion_denunciante,
		anonimo, nombre_denunciado, ocupacion_denunciado,
		correo, domicilio_suceso, fecha_suceso,
		fecha_actual, suceso_ocurrido, municipio, estado, folio
	}
	fs.mkdirSync(`./files/${folio}`, { recursive: true })
	let fillForm = async () => {
		fs.copyFile("./Assets/formato.pdf", `./files/${folio}/formato.pdf`, (err) => {
			console.log(err)
		})

		const pdfDoc = await PDFDocument.load(fs.readFileSync("./Assets/formato.pdf"))
		const form = pdfDoc.getForm()
		const fields = await form.getFields()
		fields.forEach(field => {
			const type = field.constructor.name
			const name = field.getName()
			console.log(`${name}`)
		})
		let fecha_pdf = form.getTextField("Fecha")
		let nombre_den_pdf = form.getTextField("Nombre")
		let fecha_ev_pdf = form.getTextField("Fecha del evento")
		form.getTextField("Entidad o dependencia")
		let ocupacion_pdf = form.getTextField("Cargo")
		form.getTextField("Teléfono")
		let mail_pdf = form.getTextField("Correo electrónico")
		let domicilio_pdf = form.getTextField("Domicilio")
		let suceso_pdf = form.getTextField("Narración de los hechos")
		let nombre_denunciado_pdf = form.getTextField("Nombre del servidor")
		form.getTextField("Apellido paterno del servidor")
		form.getTextField("Apellido materno del servidor")

		form.getTextField("Dirección general adjunta")
		let ocupacion_denunciado_pdf = form.getTextField("Cargo o puesto")
		fecha_pdf.setText(fecha_actual)
		nombre_den_pdf.setText(nombre_denunciante)
		fecha_ev_pdf.setText(fecha_suceso)
		ocupacion_pdf.setText(ocupacion_denunciante)
		mail_pdf.setText(correo)
		domicilio_pdf.setText(domicilio_suceso)
		nombre_denunciado_pdf.setText(nombre_denunciado)
		ocupacion_denunciado_pdf.setText(ocupacion_denunciado)
		suceso_pdf.setText(suceso_ocurrido)
		fs.writeFileSync(`./files/${folio}/formato.pdf`, await pdfDoc.save())
	}

	fillForm()
	await pool.query("INSERT INTO form SET ?", [data])


	// Configuring the email
	let sendMail = async () => {
		let transporter = mailer.createTransport({
			service: 'gmail',
			auth: {
				user: "cyberdudes46@gmail.com",
				pass: "Password10@"
			}
		})
		let message = `Denuncia a ${nombre_denunciado}` + JSON.stringify(data)
		let mailOptions = {
			from: "cyberdudes46@gmail.com",
			to: "erickbrv2002@hotmail.com",
			subject: "Formato de denuncia",
			text: message,
			attachments: [{
				path: `./files/${folio}/formato.pdf`
			}]

		}
		await transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error)
			} else {
				console.log('Email Enviado' + info.response)
			}
		})
	}

	sendMail()

	res.json(req.body)
})

router.get("/form", async (req, res) => {
	res.json({})
})

router.get("/form/:id", async (req, res) => {

})

module.exports = router