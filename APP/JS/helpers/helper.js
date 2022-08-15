var $ = document.querySelector.bind(document)
let PageBasic = $('#basic')
let PageSocial = $('#social')
let PageCertificate = $('#certificates')
let navBasic = $('#navBasic')
let navSocial = $('#navSocial')
let navCertificate = $('#navCertificate')
let submitBasic = $('#submitBasic')
let submitSocial = $('#submitSocial')
//flag page
var flagPage = 1
var progess = 1
//flag dos termos
var checkTerm = 0

//atualiza as page

page1 = value => (document.querySelector('#basic').style.display = value)
page2 = value => (document.querySelector('#social').style.display = value)
page3 = value => (document.querySelector('#certificates').style.display = value)

function pagination() {
  showLocal()
  page1(flagPage == 1 ? 'block' : 'none')
  page2(flagPage == 2 ? 'block' : 'none')
  page3(flagPage == 3 ? 'block' : 'none')

  flagPage == 1
    ? navBasic.classList.add('active')
    : navBasic.classList.remove('active')
  flagPage == 2
    ? navSocial.classList.add('active')
    : navSocial.classList.remove('active')
  flagPage == 3
    ? navCertificate.classList.add('active')
    : navCertificate.classList.remove('active')
}
//atualiza a idade
function dateForAge() {
  let inputDate = `${$('#inputYear').value}-${$('#inputMonth').value}-${
    $('#inputDay').value
  }`
  let hoje = Date.now()
  let birthday = new Date(inputDate)
  return ($('#age').textContent = Math.floor((hoje - birthday) / 31536000000))
}
//limpa tudo 

function cleamPage(){
  $('#inputFullName').value=''
    $('#inputNickName').value=''
    $('#inputEmail').value=''
    $('#inputPhone').value=''
    $('#inputDay').value= '--'
    $('#inputMonth').value= '--'
    $('#inputYear').value = '--'
    $('#age').textContent = '--'
    $('#inputLinkedin').value=''
    $('#inputGitHub').value=''
    $('#certificateList').innerHTML = ''
    $('#inputCertificateList').value=''
    $('#inputTeamName').value=''
    $('#inputInstitution').value=''
    $('#inputGraduation').value=''
    $('#terms').checked= false;
    progess = 1
    flagPage = 1
    checkTerm =0
    localStorage.clear()
}