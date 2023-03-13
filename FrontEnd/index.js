/*récuperer données travaux*/
const response = fetch("http://localhost:5678/api/works")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });
  
const galleryElt = document.querySelector(".gallery");

//suppression des éléments de la galerie
while (galleryElt.firstChild) {
  galleryElt.removeChild(galleryElt.firstChild);
}

//récuperer les cartes en attentent de réponse
const getCard = async () => {
  const data = await response;

  // la boucle pour récupérer les différentes cartes
  for (let card of data) {

    // CREER LES DIFFERENTS
    const figureElt = document.createElement("figure");
    const figCaptureElt = document.createElement("figcaption");
    const imgElt = document.createElement("img");

    // LEUR METTRE LES ATTRIBUTS NESSESSAIRE
    imgElt.setAttribute("src", card.imageUrl);
    figCaptureElt.textContent = card.title;

    // DIRE QUE DEUX DES ELT ON UN PRENT COMMUN
    figureElt.appendChild(imgElt);
    figureElt.appendChild(figCaptureElt);

    // PUIS QUE CE PARENT SOIT LUI MËME L ENFANT DE GALLERY
    galleryElt.appendChild(figureElt);
  }
};


/*récuperer données catégories*/
const responseCategory = fetch("http://localhost:5678/api/categories")
  .then((res) => res.json())
  .then((data) => {
    return data;
});

const getCategory = async () => {
  const data = await responseCategory;
  console.log(data);
  
  const btnFactory = (id, name) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.style.border = "60px solid 1px";
    btn.style.color = "#1D6154";
    btn.style.fontFamily = "Syne";
    btn.style.fontWeight = 700;
    btn.value = id;

    btn.addEventListener("click", () => {
      btn.style.color = "white";
      btn.style.background = "#1D6154";
      console.log(id, name);
    });

    return btn;
  };
  
  const titlePortfolioElt = document.querySelector("#portfolio h2");
  const container = document.createElement("div");
  const btnAll = btnFactory(0, "Tous");

  container.appendChild(btnAll);

  //la boucle for
  for (let category of data) {
    const btn1 = btnFactory(category.id, category.name);
    container.appendChild(btn1);

    // si categoryid cartes = 1 au click sur btn1 show img correspondants
  }
  //fin de la boucle
  titlePortfolioElt.after(container);
  
};
//fin de la fonction getCategory

//donne les cartes
getCard();

//puis donne les categories
getCategory();