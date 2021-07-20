/**
 * Validação de formulario
 * @author Leonardo Guimarães
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert("Preencha o campo Nome")
		frmContato.nome.focus()
	} else if (fone === "") {
		alert("Preencha o campo Fone")
		frmContato.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}

}