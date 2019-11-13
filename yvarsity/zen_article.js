let el = document.querySelector(".main"),
head = document.querySelector("head"),
arr = [];

fetch(
new Request(
  `https://yclients.zendesk.com/api/v2/help_center/ru/articles/${el.id}.json`
)
)
.then(responce => responce.json())
.then(data => (arr = data.article.body))
.then(() => showArticle());

function loadContent() {
addEl(el, `<div class="article-body markdown">${arr}</div>`);
addEl(head,`<link rel="stylesheet" href="https://mknzev.github.io/yvarsity/style.css">`);
fooDisable();
}
function addEl(el, html) {
el.insertAdjacentHTML("beforeend", html);
}
function fooDisable() {
    document.querySelector('#tildacopy').remove();
}