function getRecipe(event) {
  event.preventDefault();
  let apiKey = "fc033e4428deacf92tb6o5f960d83508";
  let instructions = document.querySelector("#user-instructions");
  let prompt = `Provide me with any recipe that contain the following: ${instructions.value}`;
  let context =
    "devide text in two parts/paragraphs: ingredients and instructions,  add an emoticon of the dish, include <br/> <br/> before instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipe = document.querySelector("#recipe");
  recipe.classList.remove("hidden");
  recipe.innerHTML = `<span class=generating>⏳</span> Generating a recipe that include ${instructions.value}..`;

  axios.get(apiUrl).then(displayRecipe);
}

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    cursor: "",
    delay: 10,
    autoStart: true,
  });
}

let recipesFormElement = document.querySelector("#recipes-generator-form");
recipesFormElement.addEventListener("submit", getRecipe);
