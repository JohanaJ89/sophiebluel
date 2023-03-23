


// Récupère la modale et le bouton pour l'ouvrir
var modal = document.getElementById("modal");
var ajouterBtn = document.getElementById("ajouter-element");

// Récupère le formulaire dans la modale
var form = modal.querySelector("form");

// Fonction pour ajouter un nouvel élément à la galerie
function ajouterElement(nom, image, description) {
  
 
var galerie = document.getElementById("galerie");
 

// Crée un nouvel élément avec les informations fournies
  
 
var element = document.createElement("div");
  
className = "galerie-element";
  
 
innerHTML = `
    <img src="${image}" alt="${nom}">
    <h3>${nom}</h3>
    <p>${description}</p>
  `;

  

 


// Ajoute l'élément à la galerie
  galerie.target
  

 
appendChild(element);
}

// Événement pour ouvrir la modale
ajouterBtn.target

addEventListener("click", function() {
  modal.target


 
modal.style.display = "block";
});

// Événement pour soumettre le formulaire
form.target

addEventListener("submit", function(e) {
  e.target
  }
);

// Sélectionner la modal et le bouton de fermeture
const closeButton = document.querySelector('.close');

// Fonction pour fermer la modal
function closeModal() {
  modal.style.display = 'none';
}

// Écouter l'événement "click" sur le bouton de fermeture
closeButton.addEventListener('click', closeModal);

// Écouter l'événement "click" en dehors de la modal pour la fermer
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
 
preventDefault(e); // Empêche la page de se recharger


/* récupérer les données de la catégorie */
const responseCategory = fetch("http://localhost:5678/api/categories")
  .then((res) => res.json())
  .then((data) => {
    return data;
});

const getCategory = async () => {
  const data = await responseCategory;
  console.log(data);

  const galleryElt = document.querySelector(".gallery");
  
  /* fonction pour afficher une image */
  const showImage = (imageElt) => {
    imageElt.style.display = "block";
  };
  
  /* fonction pour cacher une image */
  const hideImage = (imageElt) => {
    imageElt.style.display = "none";
  };
  
  /* fonction pour afficher les images correspondant à une catégorie */
  const filterByCategory = (categoryId) => {
    const images = galleryElt.querySelectorAll("figure");
    for (let image of images) {
      /* si la catégorie de l'image correspond à la catégorie sélectionnée ou si la catégorie sélectionnée est "Tous", on affiche l'image, sinon on la cache */
      if (categoryId === 0 || image.dataset.category === categoryId.toString()) {
        showImage(image);
      } else {
        hideImage(image);
      }
    }
  };
  
  /* fonction pour créer un bouton de catégorie */
  const createCategoryButton = (id, name) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.style.border = "60px solid 1px";
    btn.style.color = "#1D6154";
    btn.style.fontFamily = "Syne";
    btn.style.fontWeight = 700;
    btn.value = id;
    /* on ajoute un attribut data-category qui contient l'id de la catégorie */
    btn.dataset.category = id;
    
    btn.addEventListener("click", () => {
      /* on filtre les images en fonction de la catégorie sélectionnée */
      filterByCategory(id);
      
      /* on met en évidence le bouton sélectionné et on enlève la mise en évidence des autres boutons */
      const buttons = document.querySelectorAll("#portfolio button");
      for (let button of buttons) {
        if (button === btn) {
          button.style.color = "white";
          button.style.background = "#1D6154";
        } else {
          button.style.color = "#1D6154";
          button.style.background = "transparent";
        }
      }
    });

    return btn;
  };
  
  const titlePortfolioElt = document.querySelector("#portfolio h2");
  const container = document.createElement("div");
  const btnAll = createCategoryButton(0, "Tous");

  container.appendChild(btnAll);

  /* boucle pour créer les boutons de catégorie */
  for (let category of data) {
    const btn = createCategoryButton(category.id, category.name);
    container.appendChild(btn);
  }

  titlePortfolioElt.after(container);
};

/* récupérer les données des travaux */
const responseCard = fetch("http://localhost:5678/api/works")
  .then((res) => res.json())
  .then((data) => {
    return data;
});

const getCard = async () => {
  const data = await responseCard;
  console.log(data)};

  const galleryElt = document.querySelector(".gallery");
  
  /* boucle pour créer les figures correspondant aux cartes */
  for (let card of data) {
    const figureElt = document};

    // sélectionne la galerie
const gallery = document.querySelector(".gallery");

// afficher toutes les cartes initialement
const showAllCards = () => {
  gallery.
 
querySelectorAll(".gallery-item").forEach((card) => {
    card.style.display = "block";
  });
};

// filtre les cartes selon la catégorie
const filterCards = (category) => {
  gallery.querySelectorAll(".gallery-item").forEach((card) => {
    if (card.dataset.category === category || category === "all") {
      card.style.display = "block";
    } else {
      card.
      card
style.display = "none";
    }
  });
};


    


// ajoute un événement "click" à chaque bouton de catégorie
btn.forEach((button) => {
  button.addEventListener("click", () => {
    // active le bouton sélectionné et désactive les autres
    btn.forEach((button) => {
      button.classList.remove("active");
    });
    button.
   
classList.add("active");

    // filtre les cartes selon la catégorie sélectionnée
    const category = button.dataset.category;
    filterCards(category);
  });
});

// affiche toutes les cartes initialement
showAllCards();