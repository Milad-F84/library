//DOM NODES
const root = document.getElementById("root");
const filter = document.getElementById("filter");

//functions
function showBooks(list) {
  const template = list
    .map((book) => {
      return `
        <div class = "card">
        <img class = "card__img" src = "./assets/imgs/${book.imgSrc}"/>
        <div class = "card__desc">
        <h3>${book.title}</h3>
        <span>${book.author}</span>
        <span>${book.published_date}</span>
        </div>
        </div>`;
    })
    .join("");
  root.innerHTML = template;
}
showBooks(BOOKS);

function filtersAuthors(list) {
  const uniqueAuthors = [];
  for (const item of list) {
    if (!uniqueAuthors.includes(item.author)) {
      uniqueAuthors.push(item.author);
    }
  }
  const authorTemplate = uniqueAuthors
    .map((item) => {
      return `
        <div>
        <lable for ="${item}">${item}</lable>
        <input value = "${item}" id = "${item}" type = "checkbox"></input>
        </div>
        `;
    })
    .join("");
  filter.innerHTML += authorTemplate;
}

function filtersLanguage(list){
  const uniqueLanguage = [];
  for (const item of list) {
     if(!uniqueLanguage.includes(item.language)){
      uniqueLanguage.push(item.language);
    }
  }
  const languageTemplate = uniqueLanguage.map((item) =>{
    return `<div>
    <lable for="${item}">${item}</lable>
    <input id="${item}" value="${item}" type="checkbox"></input>
    </div>`;
  }).join("");
  filter.innerHTML += languageTemplate;
}

function filtersGenre(list){
  const uniqueGenre = [];
  for (const item of list) {
     if(!uniqueGenre.includes(item.genre)){
      uniqueGenre.push(item.genre);
    }
  }
  const genreTemplate = uniqueGenre.map((item) => {
    return `
    <div>
    <lable for="${item}">${item}</lable>
    <input value="${item}" id="${item}" type="checkbox"></input>
    </div>`
  }).join("");
  filter.innerHTML += genreTemplate;
}


filtersAuthors(BOOKS);
filtersLanguage(BOOKS);
filtersGenre(BOOKS);
