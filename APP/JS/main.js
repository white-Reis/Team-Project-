var Storage = localStorage;
var peoples = []

//nav
navBasic.addEventListener('click',() => {flagPage=1,pagination(),console.log()})
navSocial.addEventListener('click',() =>  {testeValid()})
navCertificate.addEventListener('click',() => { testeValid() ,progess >2?testeValidSocial():testeValid()})   

$('#inputYear').addEventListener('click', dateForAge)
$('#terms').addEventListener('click', ()=> {
  checkTerm += 1
  checkTerm > 1 ? (checkTerm = 0) : (checkTerm = checkTerm)
})
//botoes
$('#submitBasic').addEventListener('click', testeValid)
$('#submitSocial').addEventListener('click', testeValidSocial)
$('#finish').addEventListener('click',finish)

function membersList () {
  let ulMembers = $('#membersUl')
  peoples.forEach(element => {
    let liName=document.createElement('li')
    let liAge=document.createElement('li')
    let liLinkedin=document.createElement('li')
    let liGithub=document.createElement('li')
    let liGraduation=document.createElement('li')
    liGraduation.classList.add('final-li')

    liName.textContent = `Name: ${element.name}`
    liAge.textContent = `Age: ${element.age}`
    liLinkedin.textContent =`LinkedIn: ${element.social[0]}`
    liGithub.textContent =`GitHub: ${element.social[1]}`
    liGraduation.textContent =`Graduation: ${element.graduation}`

    ulMembers.appendChild(liName)
    ulMembers.appendChild(liAge)
    ulMembers.appendChild(liLinkedin)
    ulMembers.appendChild(liGithub)
    for (let i = 0; i < element._certificates.length; i++) {
      let liCerticates=document.createElement('li')
      liCerticates.textContent= `Certificado: ${element.certificates(i).liContent}`       
      ulMembers.appendChild(liCerticates)   
    }
    
    ulMembers.appendChild(liGraduation)
    
  }
  
  )
peoples=[]
arrayCertificates= []}
  
  
