
async function login(username, password) {
  // Récupérer les valeurs des champs de saisie
  
  console.log(username, password);
  
  // Vérifier que les champs ne sont pas vides
  if (username == '' || password == '') {
    document.getElementById("message").innerHTML = "Veuillez remplir tous les champs.";
    return false;
  }
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: username, password: password })
  };

  const data =  fetch('http://localhost:5678/api/users/login', requestOptions)
.then((res) => res.json());

  console.log(data);
const token = await data;
console.log(token, 'mom');

if (token.token){
  console.log(token);
  localStorage.setItem('token',token);
  window.location.href='index.html';
}

else{
  document.getElementById('message').textContent = "identifiants ou mot de passe incorrects";
  
}
}
//fin de la fonction login



const formElt = document.querySelector('form');
console.log(formElt);


formElt.addEventListener('submit',(e)=>{
  e.preventDefault();
  const user = e.target.querySelector("#username").value;
  const mp = e.target.querySelector("#password").value;

  login(user, mp);
console.log(e.target);;
})