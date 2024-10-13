//DOM NODES
const root = document.getElementById("root");
const filter = document.getElementById("filter");

//functions
function showBooks(list){
    const template =list.map((book) => {
        return`
        <div class = "card">
        <img class = "card__img" src = "./assets/imgs/${book.imgSrc}"/>
        <div class = "card__desc">
        <h3>${book.title}</h3>
        <span>${book.author}</span>
        <span>${book.published_date}</span>
        </div>
        </div>`
    }).join("");
    root.innerHTML = template;
}
showBooks(BOOKS);