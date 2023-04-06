const spell = document.querySelector('.spell-name')
const description = document.querySelector('.description')

fetch('https://hp-api.onrender.com/api/spells')
	.then(response => response.json())
	.then(data => {
        const random = Math.floor(Math.random() * data.length);
      
		spell.textContent = data[random].name
		description.textContent = data[random].description
	})
	.catch(error => console.error(error))
