function displayStory(response) {

    console.log("story generated");
    new Typewriter("#story", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateStory(event) {
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "552d5b0d84b3fo63f5d841c0ct5a8338";
let prompt = `User instructions are: Generate a short story about ${instructionsInput.value}`;
let context = "You are a fiction story expert and love to write short stories. Your mission is to generate a single paragraph short story. Make sure to follow the user instructions. Sign the story with '- SheCodes AI' inside a <strong></strong> element at the end.";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("generating story");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

axios.get(apiURL).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
