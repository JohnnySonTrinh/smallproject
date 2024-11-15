const speech = new SpeechSynthesisUtterance();

let voices = []; // Initialize as a mutable array

const voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); // Fetch all available voices
  speech.voice = voices[0]; // Default to the first voice
  console.log(voices);

  // Populate the dropdown with voices
  voices.forEach((voice, i) => {
    const option = new Option(voice.name + " (" + voice.lang + ")", i);
    voiceSelect.add(option);
  });
};

// Change the selected voice
voiceSelect.addEventListener("change", () => {
  const selectedVoice = voices[voiceSelect.value];
  speech.voice = selectedVoice;
});

// Speak the text when the button is clicked
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
