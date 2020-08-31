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
  .then(() => loadContent());



function loadContent() {
  addEl(el,`<div class="article-body markdown">${arr}</div>`);
  addEl(head,`<link rel="stylesheet" href="https://p18.zdassets.com/hc/theming_assets/708440/358822/style.css">`);
  addEl(el,` <style>
             h1, h2, h3, h4, h5, h6 {
                 margin-top: 50px;
            } 
            .main {
                max-width: 750px;
                margin: 100px;
                }
            .t-records ~ div {
                display: none;
            }
            .markdown img {
                margin: 25px;
            }
            </style>`);
}
function addEl(el, html) {
  el.insertAdjacentHTML("beforeend", html);
}
