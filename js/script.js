let elList = $('.js-list');





pokemons.forEach(pokemon =>{
  let li = CreateElement('li');
  let img = CreateElement('img', 'card-img-top');
  let title = CreateElement('h3');
  let text = CreateElement('p');
  let cardBody = CreateElement('div')
  title.textContent = pokemon.name
  text.textContent = pokemon.weaknesses.join(', ')
  img.src = pokemon.img;
  img.alt = pokemon.name;
  elList.appendChild(li)
  cardBody.append(title, text)
  img.classList.add('card-img-top', 'd-block', 'mx-auto')
  title.classList.add('card-title', 'text-center')
  text.classList.add('card-text', 'text-center')
  cardBody.classList.add('card-body')
  for (let i = 0; i < pokemons.length; i++) {
    li.append(img, cardBody)
    li.classList.add('card', 'm-2', 'width','text-light')
  }
})
