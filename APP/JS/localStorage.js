var $ = document.querySelector.bind(document)

function saveLocal() {
    //Basic
    localStorage.setItem('fullName', $('#inputFullName').value)
    localStorage.setItem('inputNickName', $('#inputNickName').value)
    localStorage.setItem('inputEmail', $('#inputEmail').value)
    localStorage.setItem('inputPhone', $('#inputPhone').value)

    localStorage.setItem('inputLinkedin', $('#inputLinkedin').value)
    localStorage.setItem('inputGitHub', $('#inputGitHub').value)

    localStorage.setItem('inputTeamName', $('#inputTeamName').value)
    localStorage.setItem('inputInstitution', $('#inputInstitution').value)
    localStorage.setItem('inputGraduation', $('#inputGraduation').value)
}

function showLocal() {
    
    $('#inputFullName').value = localStorage.getItem('fullName')
    $('#inputNickName').value = localStorage.getItem('inputNickName')
    $('#inputEmail').value = localStorage.getItem('inputEmail')
    $('#inputPhone').value = localStorage.getItem('inputPhone')

    $('#inputLinkedin').value = localStorage.getItem('inputLinkedin')
    $('#inputGitHub').value = localStorage.getItem('inputGitHub')

    $('#inputTeamName').value = localStorage.getItem('inputTeamName')
    $('#inputInstitution').value = localStorage.getItem('inputInstitution')
    $('#inputGraduation').value = localStorage.getItem('inputGraduation')

}

