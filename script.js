const planetsContainer = document.getElementById("planets-container");
const select = document.getElementById("select");
let selectedPlanetImg = document.getElementById("selected-planet_img");
let selectedPlanetTitle = document.getElementById("selected-planet_title");
let inputElement = document.getElementById("pesoEnLaTierra");
let pesoEnLaTierra = 0;

inputElement.addEventListener("input", function () {
  pesoEnLaTierra = parseInt(inputElement.value);
  console.log(pesoEnLaTierra);
});

const solarSystem = [
  {
    name: "Sol",
    description: "Es una estrella y es la principal fuente de luz y calor en el sistema solar.",
    image: "./assets/planetas-icons/Sol.png",
    gravity: 274,
  },
  {
    name: "Mercurio",
    description: "Es el planeta más cercano al Sol y el planeta más pequeño del sistema solar.",
    image: "./assets/planetas-icons/Mercurio.png",
    gravity: 3.7,
  },
  {
    name: "Venus",
    description: "Es el planeta más caliente del sistema solar, con temperaturas superiores a 400°C.",
    image: "./assets/planetas-icons/Venus.png",
    gravity: 8.87,
  },
  {
    name: "Tierra",
    description: "Es el hogar de la vida humana y es el tercer planeta desde el Sol.",
    image: "./assets/planetas-icons/Tierra.png",
    gravity: 9.8,
  },
  {
    name: "Luna",
    description: "Es el satélite natural de la Tierra y es el quinto más grande del sistema solar.",
    image: "./assets/planetas-icons/Luna.png",
    gravity: 1.62,
  },
  {
    name: "Marte",
    description: "Es conocido como el planeta rojo y es el hogar de algunos de los mayores desiertos de la galaxia.",
    image: "./assets/planetas-icons/Marte.png",
    gravity: 3.711,
  },
  {
    name: "Júpiter",
    description: "Es el planeta más grande del sistema solar y es un gigante gaseoso.",
    image: "./assets/planetas-icons/Jupiter.png",
    gravity: 24.79,
  },
  {
    name: "Saturno",
    description: "Es conocido por sus anillos y es el segundo planeta más grande del sistema solar.",
    image: "./assets/planetas-icons/Saturno.png",
    gravity: 10.44,
  },
  {
    name: "Urano",
    description: "Es el séptimo planeta desde el Sol y es el tercer planeta más grande en tamaño y menor en masa.",
    image: "./assets/planetas-icons/Urano.png",
    gravity: 8.69,
  },
  {
    name: "Neptuno",
    description: "Es el octavo planeta desde el Sol y es conocido por sus intensas tormentas.",
    image: "./assets/planetas-icons/Neptuno.png",
    gravity: 11.15,
  },
  {
    name: "Plutón",
    description: "Es un planeta enano y antiguamente fue considerado el noveno planeta del sistema solar.",
    image: "./assets/planetas-icons/Pluton.png",
    gravity: 0.62,
  },
];

const renderPlanets = () => {
  solarSystem.map((planet) => {
    const planetCard = document.createElement("article");
    planetCard.classList.add("planet-card");
    planetCard.value = planet.name;

    const planetCardHeader = document.createElement("div");
    planetCardHeader.classList.add("planet-card_header");
    const planetCardText = document.createElement("div");
    planetCardText.classList.add("planet-card_text");

    const planetName = document.createElement("h3");
    planetName.classList.add("planet-name");
    planetName.textContent = planet.name;

    const planetImage = document.createElement("img");
    planetImage.src = planet.image;
    planetImage.classList.add("planet-image");
    planetImage.alt = `Imagen de ${planet.name}`;

    const planetDescription = document.createElement("p");
    planetDescription.classList.add("planet-description");
    planetDescription.textContent = planet.description;

    const planetGravity = document.createElement("p");
    planetGravity.classList.add("planet-gravity");
    planetGravity.innerHTML = `Gravedad: <b>${planet.gravity}</b>`;

    planetCard.appendChild(planetCardHeader);
    planetCard.appendChild(planetCardText);

    planetCardHeader.appendChild(planetName);
    planetCardHeader.appendChild(planetImage);

    planetCardText.appendChild(planetDescription);
    planetCardText.appendChild(planetGravity);

    planetsContainer.appendChild(planetCard);
  });
};
renderPlanets();

function inputChange() {
  return (pesoEnLaTierra = parseInt(inputElement.value));
}

let selectedPlanet;
let foundPlanet;
let pesoPlanetaNuevo;

document
  .querySelectorAll("#planets-container > .planet-card")
  .forEach((planet) => {
    planet.addEventListener("click", function selectPlanet(e) {
      e.preventDefault();

      selectedPlanet = e.currentTarget.value;
      console.log(planet);
      foundPlanet = solarSystem.find(function (planet) {
        return planet.name === selectedPlanet;
      });
      console.log(foundPlanet);
      selectedPlanetImg.src = foundPlanet.image;
      selectedPlanetTitle.innerText = foundPlanet.name;
      mostrarPeso(foundPlanet);
    });
  });

function calcularPeso() {
  pesoPlanetaNuevo = parseFloat(
    (pesoEnLaTierra / 9.8) * foundPlanet.gravity
  ).toFixed(2);
  return pesoPlanetaNuevo;
}

function mostrarPeso() {
  let mostrarPeso = document.getElementById("mostrarPeso");

  calcularPeso();
  console.log(pesoPlanetaNuevo);
  pesoEnLaTierra != ""
    ? (mostrarPeso.innerHTML = `Tu peso en <b>${foundPlanet.name}</b> es de <b>${pesoPlanetaNuevo} Kg</b>`)
    : (mostrarPeso.innerHTML =
        "Por favor ingresa tu peso y selecciona un planeta");
  ocultarPlanetas();
}

function mostrarPlanetas() {
  select.classList.add("active");
  planetsContainer.classList.add("active");
}

function ocultarPlanetas() {
  select.classList.remove("active");
  planetsContainer.classList.remove("active");
}
