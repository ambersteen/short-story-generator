function generateStory(event) {
event.preventDefault();

new Typewriter("#story", {
  strings:
    "In the heart of the ancient forest, whispers of secrets lingered among the towering trees.",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
