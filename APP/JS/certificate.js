let certificatesUl = $('#certificateList')

let arrayCertificates = []
let maxNumber = 0 

$('#addCertificate').addEventListener('click', function () {
  if ($('#inputCertificateList').value.length > 10 & $('#inputCertificateList').value.length < 48 ){
  maxNumber <= 4 ?  createCertificate() : alert('certificate limit reached')
  maxNumber++}
})  

function createCertificate(){
  certificatesUl.innerHTML= ''
  removeClass()
  createArray()

  arrayCertificates.forEach(element => { 
  
    let li=document.createElement('li')
    li.classList.add('form-control', 'new-li')
    li.innerHTML = element.liContent
    li.setAttribute('id','li'+maxNumber)
    li.classList.add('form-control')
    li.classList.add('new-li')
    certificatesUl.appendChild(li)
    $('#inputCertificateList').value= ''
  });
}

function firstItem(item){
  $('#inputHeart').checked = false  
  arrayCertificates.unshift(item)
}

function addClass() {
  $('.img-heart').classList.add('blue-heart')
  $('.img-heart').classList.remove('default-heart')
}
function removeClass() {
  $('.img-heart').classList.add('blue-heart')
  $('.img-heart').classList.remove('blue-heart')
}

$('#inputHeart').addEventListener('click', () => {
  $('#inputHeart').checked == true ? addClass() : removeClass()
})

function createArray(){
  let checkFavorite= $('#inputHeart')
  let certificate = new Certificate($('#inputCertificateList').value,checkFavorite.checked )
  certificate.checked == true ? firstItem(certificate):arrayCertificates.push(certificate)
}

function finish(){
  let correct=0
  let expressao = new RegExp(/[a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{5,30}/)
  
  
  if (!expressao.test($('#inputTeamName').value) ) {
    let spanTeamName = document.getElementById('spanTeamName')
    spanTeamName.classList.remove('invisible')
  } else {correct++
    let spanTeamName = document.getElementById('spanTeamName')
    spanTeamName.classList.add('invisible')}


  if (!expressao.test($('#inputInstitution').value)) {
    let spanInstitution = document.getElementById('spanInstitution')
    spanInstitution.classList.remove('invisible')
  } else {correct++
    let spanInstitution = document.getElementById('spanInstitution')
    spanInstitution.classList.add('invisible')}

    
  if (!expressao.test($('#inputGraduation').value)) {
    let spanGraduation = document.getElementById('spanGruduation')
    spanGraduation.classList.remove('invisible')
  } else {correct++
    let spanGraduation = document.getElementById('spanGruduation')
    spanGraduation.classList.add('invisible')}


  if (correct == 3){
    let people = new People ($('#inputFullName').value,
    $('#inputNickName').value,
    $('#inputEmail').value,
    $('#inputPhone').value,
    `${$('#inputDay').value}-${$('#inputMonth').value}-${$('#inputYear').value}`,
    $('#age').textContent,
    $('#inputLinkedin').value,
    $('#inputGitHub').value,
    arrayCertificates,
    $('#inputTeamName').value,
    $('#inputInstitution').value,
    $('#inputGraduation').value
    )
    peoples.push(people)
    membersList()
    cleamPage()
    pagination()
  }
}




