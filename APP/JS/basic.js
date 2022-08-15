function testeValid() {
  let expressaoName = new RegExp(/^[a-z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,',-]+(\s)[a-z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,',-]+$/i)
  let expressaoEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  let expressionDate = new RegExp(/^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)
  
  
  let birthday = `${$('#inputMonth').value}-${$('#inputDay').value}-${
    $('#inputYear').value
  }`
  $('inputDay')
  let correct = 0

  if (!expressaoName.test($('#inputFullName').value)) {
    let spanName = document.getElementById('spanName')
    spanName.classList.remove('invisible')
  } else {
    correct++
    let spanName = document.getElementById('spanName')
    spanName.classList.add('invisible')
  }

  if (!expressaoEmail.test($('#inputEmail').value)) {
    let spanEmail = document.getElementById('spanEmail')
    spanEmail.classList.remove('invisible')
  } else {
    correct++
    let spanEmail = document.getElementById('spanEmail')
    spanEmail.classList.add('invisible')
  }

  if (!expressionDate.test(birthday)) {
    let spanBirthday = document.getElementById('spanBirthday')
    spanBirthday.classList.remove('invisible')
  } else {
    correct++
    let spanBirthday = document.getElementById('spanBirthday')
    spanBirthday.classList.add('invisible')
  }

  if (!checkTerm == 1) {
    let spanTerms = document.getElementById('spanTerms')
    spanTerms.classList.remove('invisible')
  } else {
    correct++
    let spanTerms = document.getElementById('spanTerms')
    spanTerms.classList.add('invisible')
  }
  setInterval((correct == 4 ? submitBasic.classList.remove('btn-danger') : submitBasic.classList.add('btn-danger')),1000)
  correct == 4 ? (flagPage = 2) : (flagPage = 1)
  correct == 4 ? progess+=1 : progess= progess
  correct < 4 ? progess=1 : progess= progess
  
  pagination()
}
