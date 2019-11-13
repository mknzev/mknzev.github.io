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

function showArticle() {
addEl(el, `<div class="article-body markdown">${arr}</div>`);
addEl(
  head,
  `<link rel="stylesheet" href="https://p18.zdassets.com/hc/theming_assets/708440/358822/style.css">`
);
addEl(
  head,
  `
    <style>
    .main {
      max-width: 680px;
      margin:auto;
    }
    </style>`
);
}
function addEl(el, html) {
el.insertAdjacentHTML("beforeend", html);
}