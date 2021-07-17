document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
  });


function SaveData() {
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value

    localStorage.setItem('UserData', [userName, userEmail])
}