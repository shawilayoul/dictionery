const input = document.querySelector('.input-text');
const title = document.querySelector('.title');
const textInfo = document.querySelector('.text-info')
const meaning = document.querySelector('.meaning');
const display = document.querySelector('.display');
const audi = document.querySelector('.audio');
input.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchdata(e.target.value);
    }
})

async function fetchdata(word) {


    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    textInfo.innerHTML = `  <span class="title">the word :${data[0].word}</span>
    <span class="meaning">the meaning :${data[0].meanings[0].definitions[0].definition}</span>`
    audi.src = data[0].phonetics[0].audio;
    display.style.display = "block";
}
fetchdata()