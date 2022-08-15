let certificatesUl = $('#certificateList')

let arrayCertificates = []

$('#addCertificate').addEventListener('click', function () {
  if ($('#inputCertificateList').value.length > 10 & $('#inputCertificateList').value.length < 48 ){
  arrayCertificates.length <= 4 ?  createCertificate() : alert('certificate limit reached')

  let trashIcons = document.querySelectorAll('.trashIcon')
    trashIcons.forEach(n => {
      n.addEventListener('click',(element)=> { 
      element.target.parentNode.remove()
      let chest = []
      arrayCertificates.forEach(item => {
        element.target.parentNode.textContent != item.liContent && chest.push(item)
      }) 
      arrayCertificates = []
      chest.forEach (item => {
        arrayCertificates.push(item)
      })
     })
    })
  }
})  

function createCertificate(){
  certificatesUl.innerHTML= ''
  removeClass()
  createArray()

  arrayCertificates.forEach(element => { 
    
    let li=document.createElement('li')

    let trash = document.createElement('img')
    trash.setAttribute('src','/APP/images/trash.svg')
    trash.classList.add('trashIcon')
    let favoriteLi = document.createElement('img')
    favoriteLi.setAttribute('src','/APP/images/heart.svg')
    favoriteLi.classList.add('blue-heart','heartIcon')
    
    li.innerHTML = element.liContent
    element.checked === true && li.appendChild(favoriteLi)
    li.appendChild(trash)
    li.classList.add('form-control', 'new-li')
    li.classList.add('form-control')
    li.classList.add('new-li')
    certificatesUl.appendChild(li)
    $('#inputCertificateList').value= ''
   
  });
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

function firstItem(item){
  $('#inputHeart').checked = false  
  arrayCertificates.unshift(item)
}

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




