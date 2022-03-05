const { PDFDocument } = require('pdf-lib')
const fs = require('fs')
async function getForm(){
	const pdfDoc = await PDFDocument.load(fs.readFileSync('formato.pdf'))
	const form = await pdfDoc.getForm()
	const fields = await form.getFields()
	fields.forEach(field => {
	  const type = field.constructor.name
	  const name = field.getName()
	  console.log(`${name}`)
	})
}

getForm()