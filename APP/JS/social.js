function testeValidSocial() {
  let expressaoLinkedin = new RegExp("http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?")
  let expressaoGitHub = new RegExp("(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?github\.com\/[A-z0-9_-]+\/?")
  let expressaoUrl = new RegExp('^(https?|chrome)://[^s$.?#].[^s]*$')
  let correct = 0

  // if (!expressaoLinkedin.test($('#inputLinkedin').value)) {
  //   let spanLinkedin = document.getElementById('spanLinkedin')
  //   spanLinkedin.classList.remove('invisible')
  // } else {
  //   correct++
  //   let spanLinkedin = document.getElementById('spanLinkedin')
  //   spanLinkedin.classList.add('invisible')
  // }
  if (!expressaoGitHub.test($('#inputGitHub').value)) {
    let spanGitHub = document.getElementById('spanGitHub')
    spanGitHub.classList.remove('invisible')
  } else {
    correct++
    let spanGitHub = document.getElementById('spanGitHub')
    spanGitHub.classList.add('invisible')
  }

  setInterval((correct == 1 ? submitSocial.classList.remove('btn-danger') : submitSocial.classList.add('btn-danger')),1000)
  correct == 1 ? (flagPage = 3) : (flagPage = 2)
  correct == 1 ? basicCorrect() : {}
  pagination()
}