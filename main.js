document.querySelector("button").addEventListener("click", getFetch);

function getFetch(){

  //const id = Math.floor(Math.random() * 10000)
 let choice = document.querySelector("input").value
 
  

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       
        document.querySelector('.name').innerText = data.drinks[0].strDrink
        document.querySelector('.instructions').innerText = data.drinks[0].strInstructions

      })
      .catch(err => {
          console.log(`error ${err}`)
      })};