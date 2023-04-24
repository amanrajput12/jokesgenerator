const button =document.querySelector(".btn");
const joke = document.querySelector(".joke")

button.addEventListener("click",getjoke)


async function getjoke(){
    const jokeData = await fetch("https://icanhazdadjoke.com/" ,{
headers :{
    'Accept': 'application/json'
}});

const jokeObj =await jokeData.json();
joke.innerHTML =jokeObj.joke;

}