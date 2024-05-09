function displayRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "Combine sugar and water in a medium saucepan over medium heat; bring to a boil, stirring, until sugar has dissolved. Allow to cool.",
    cursor: "",
    delay: 20,
    autoStart: true,
  });
}

let recipesFormElement = document.querySelector("#recipes-generator-form");
recipesFormElement.addEventListener("submit", displayRecipe);
