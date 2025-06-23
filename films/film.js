const renderCharacters = characters => {
    const divs = characters.map(character => {
      const el = document.createElement('div');
      el.addEventListener('click', () => goToCharacterPage(character.id));
      el.textContent = character.name;
      return el;
    })
    charactersList.replaceChildren(...divs)
  }

  