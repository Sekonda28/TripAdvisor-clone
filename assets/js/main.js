document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");
  document.getElementById("connect-button").addEventListener("click", () => {
    console.log("The button was clicked!!");
    document.getElementById("modal").style.display = "flex"
  });
  
});
