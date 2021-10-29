

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  document.getElementById("connect-button").addEventListener("click", () => {
    console.log("The button was clicked!!");
    document.getElementById("modal").style.display = "flex";
  });

  document.getElementById("close-form").addEventListener("click", () => {
    console.log("The button was clicked!!");
    document.getElementById("modal").style.display = "none";
  });

  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      // Annuler le rafraîchissement automatique du form :
      event.preventDefault();

      // création d'un objet data dans lequel on stocke les valeurs entrées dans les inputs par l'utilisateur (cet objet data partira avec la requête) :
      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      // Requête vers le serveur :
      const response = await axios.post("https://trip-advisorback.herokuapp.com/form", data);
      // Réponse du serveur :
      if (response) {
        document.getElementById("mail-sent").style.display = "inherit";
      }
    });
});

// "https://trip-advisorback.herokuapp.com/form"