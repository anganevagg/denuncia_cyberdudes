const express = require('express')
const mailer = require('nodemailer')
const router = express.Router()
const { PDFDocument } = require('pdf-lib')
const fs = require('fs')
const pool = require("../db")
const path = require("path")


router.post("/form", async (req, res) => {
    console.log(req.body)
    let hoy = new Date();
    let folio = hoy.getDate() + '' + (hoy.getMonth() + 1) + '' + hoy.getFullYear() + Math.floor(Math.random() * 999999);
    const { nombre_denunciante, sexo_denunciante, edad_denunciante, ocupacion_denunciante, anonimo } = req.body
    const { nombre_denunciado, ocupacion_denunciado } = req.body
    const { correo, domicilio_suceso, fecha_suceso, fecha_actual, suceso_ocurrido } = req.body
    const { municipio, estado } = req.body

    let data = {
        pais:"México",
        nombre_denunciante, sexo_denunciante, 
        edad_denunciante, ocupacion_denunciante, 
        anonimo, nombre_denunciado, ocupacion_denunciado, 
        correo, domicilio_suceso, fecha_suceso,
        fecha_actual, suceso_ocurrido, municipio, estado, folio
    }
    let fillForm= async()=>{
        const directoryPath = path.join(__dirname, "..");
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            //listing all files using forEach
            files.forEach(function (file) {
                // Do whatever you want to do with the file
                console.log(file); 
            });
        });
        // fs.readFileSync('../../Assets/formato.pdf', (error, data)=>{
        //     console.log(error)
        //     fs.writeFile(`../../files/${folio}.pdf`, fs.readFileSync(data), ()=>[
        //         console.log("aaaa")
        //     ])
        // })
        
        const pdfDoc = await PDFDocument.load(fs.readFileSync("./Assets/formato.pdf"))
	    const form = pdfDoc.getForm()
        let fecha_pdf = form.getTextField("Fecha")
        let nombre_den_pdf=form.getTextField("Nombre")
        let fecha_ev_pdf=form.getTextField("Fecha del evento")
        form.getTextField("Entidad o dependencia")
        let ocupacion_pdf=form.getTextField("Cargo")
        form.getTextField("Teléfono")
        let mail_pdf=form.getTextField("Correo electrónico")
        let domicilio_pdf=form.getTextField("Domicilio")
        let suceso_pdf=form.getTextField("Narración de los hechos")
        let nombre_denunciado_pdf=form.getTextField("Nombre del servidor")
        form.getTextField("Apellido paterno del servidor")
        form.getTextField("Apellido materno del servidor")

        form.getTextField("Dirección general adjunta")
        let ocupacion_denunciado_pdf=form.getTextField("Cargo o puesto")
        fecha_pdf.setText(fecha_actual)
        nombre_den_pdf.setText(nombre_denunciante)
        fecha_ev_pdf.setText(fecha_suceso)
        ocupacion_pdf.setText(ocupacion_denunciante)
        mail_pdf.setText(correo)
        domicilio_pdf.setText(domicilio_suceso)
        nombre_denunciado_pdf.setText(nombre_denunciado)
        ocupacion_denunciado_pdf.setText(ocupacion_denunciado)
        const pdfBytes = await pdfDoc.save()
    }



    //fillForm()
    await pool.query("INSERT INTO form SET ?", [data])

    //file.mv(`/files/${folio}/${file.name}`)

    // Configuring the email

    let transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: "cyberdudes46@gmail.com",
            pass: "Password10@"
        }
    })
    let message = `Denuncia a ${nombre_denunciado}`+JSON.stringify(data)
    let mailOptions = {
        from: "cyberdudes46@gmail.com",
        to: "erickbrv2002@hotmail.com",
        subject: "Formato de denuncia",
        text: message,
        attachments: [{
            path: `./Assets/formato.pdf`
        }]

    }

    // Send a mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email Enviado' + info.response)
        }
    })
    res.json(req.body)
})

router.get("/form", async (req, res) => {
    res.json({})
})

router.get("/form/:id", async (req, res) => {

})

module.exports = router