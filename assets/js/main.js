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

function renderFilters(list) {
  //unique authors
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
        <input id = "${item}" type = "checkbox" value = "${item}"></input>
        </div>
        `;
    })
    .join("");
  filter.innerHTML += '<h2 id="title">:نویسنده کتاب</h2>';
  filter.innerHTML += authorTemplate;

  //unique genres
  const allGenres = list.map((item) => item.genre);
  const uniqueGenres = new Set(allGenres);
  let genreTemp = "";
  for (const genre of uniqueGenres) {
    genreTemp += `
            <div>
        <lable for ="${genre}">${genre}</lable>
        <input id = "${genre}" type = "checkbox" value = "${genre}"></input>
        </div>
    `;
  }
  filter.innerHTML += '<h2 id="title">:ژانر کتاب</h2>';
  filter.innerHTML += genreTemp;

  //unique language
  const allLanguage = list.map((item) => item.language);
  const uniqueLanguage = new Set(allLanguage);
  let languageTemp = "";
  for (const language of uniqueLanguage) {
    languageTemp += `
                <div>
        <lable for ="${language}">${language}</lable>
        <input id = "${language}" type = "checkbox" value = "${language}"></input>
        </div>
    `;
  }
  filter.innerHTML += '<h2 id="title">:زبان کتاب</h2>';
  filter.innerHTML += languageTemp;
}
renderFilters(BOOKS);
