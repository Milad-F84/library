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

function filters(list) {
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
filters(BOOKS);
