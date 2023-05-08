const genBtn = document.querySelector('.gen-btn');

genBtn.addEventListener('click', () => {

    const id = Math.floor(Math.random() * 50) + 1;
    const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(api)
        .then(res => res.json())
        .then((data) => {

            const mainContainer = document.querySelector('main');

            if (!mainContainer.contains(document.querySelector('.card-container'))) {
                mainContainer.removeChild(document.querySelector('.pokemon-logo'))
            }

            if (mainContainer.contains(document.querySelector('.card-container'))) {
                mainContainer.removeChild(document.querySelector('.card-container'));
            }

            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');

            const imgContainer = document.createElement('div');
            const pokemonImg = document.createElement('img');
            pokemonImg.classList.add('pokemon-img');
            pokemonImg.src = data.sprites.other["official-artwork"].front_default;
            imgContainer.appendChild(pokemonImg);
            cardContainer.appendChild(imgContainer);

            const pokeDesc = document.createElement('div');
            pokeDesc.classList.add("poke-desc");
            
            const nameContainer = document.createElement('div');
            nameContainer.innerHTML =
            `
            <h2>Name</h2>
            <p>${data.name}</p>
            `
            
            const typeContainer = document.createElement('div');
            typeContainer.innerHTML =
            `
            <h2>Type</h2>
            <p>${data.types[0].type.name}</p>
            `
            
            const weightContainer = document.createElement('div');
            weightContainer.innerHTML =
            `
            <h2>Weight</h2>
            <p>${data.weight} Pounds</p>
            `
            pokeDesc.appendChild(nameContainer);
            pokeDesc.appendChild(typeContainer);
            pokeDesc.appendChild(weightContainer);
            cardContainer.appendChild(pokeDesc);

            const moveContainer = document.createElement('div');
            moveContainer.classList.add('poke-moves');
            moveContainer.innerHTML = `<h2>Top Moves</h2>`;
            for (let i = 0; i < data.moves.length; i++) {
                if (i == 3) {
                    break;
                }
                const moveP = document.createElement('p');
                moveP.innerText = data.moves[i].move.name;
                moveContainer.appendChild(moveP);
            }
            cardContainer.appendChild(moveContainer);

            mainContainer.prepend(cardContainer);

        })
        
})