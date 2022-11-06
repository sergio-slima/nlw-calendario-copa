function createGame() {
  return `
    <li>
      <img src="./assets/icon-brazil.svg" alt="Bandeira do Brasil" />
      <strong>16:00</strong>
      <img src="./assets/icon-serbia.svg" alt="Bandeira da Sérvia" />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>  
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo do Calendário da Copa" />
  </header>
  <main id="cards">
    ${createCard("24/11", "quinta", createGame())}
    ${createCard("28/11", "terça", createGame())}
    ${createCard("04/12", "domingo", createGame())}
  </main>
`
