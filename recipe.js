const form =document.querySelector('form');
const searchResult =document.querySelector('.search-result');
const container =document.querySelector('.container');

let searchQuery = '';
let appID = '69efc974';
let appKey = '063974f3f36fdbfd61282e48674c4e85';

form.addEventListener('submit' , (e) => {

e.preventDefault();

searchQuery = e.target.querySelector('input').value;

getData();

});


async function getData(){


let baseUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appID}&app_key=${appKey}&to=21`;
let response = await fetch(baseUrl);
let data = await response.json();
getHTML(data.hits);


console.log(data)

	
}
	
	function getHTML(results){
		container.classList.remove('initial');
		let getItem = '';
		results.map(result =>{
			getItem += `
			<div class="item">
				<img src="${result.recipe.image}">
				<div class="flex-container">
					<h1 class="title">"{result.recipe.label}"</h1>
					<a class="view" href="${result.recipe.url}" target ="_blank">View Recipe</a>
			</div>
			<p class="item-data">calories "${result.recipe.calories.toFixed(2)}"</p>
			</div>`


		})

		searchResult.innerHTML = getItem;




	}







