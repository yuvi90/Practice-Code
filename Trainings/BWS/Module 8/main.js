const genBtn = document.querySelector('.gen-btn');

genBtn.addEventListener('click', () => {
    const id = Math.floor(Math.random() * 10) + 1;
    console.log(id);
    const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(api)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            const mainContainer = document.querySelector('main');
            const pokemonContainer = document.createElement('div');
            const pokemonImg = document.createElement('img');
            pokemonImg.src = data.sprites.other["official-artwork"].front_default;
            
            mainContainer.append(pokemonImg);
        })
})