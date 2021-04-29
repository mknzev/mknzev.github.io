let el = document.querySelector(".main"),
  head = document.querySelector("head"),
  arr = [];

fetch(
  new Request(
    `http://ducknest.ga:8000/article/${el.id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
     }
  )
)
  .then(responce => responce.json())
  .then(data => (arr = data.article.body))
  .then(() => loadContent());



function loadContent() {
  addEl(el,`<div class="article-body markdown">${arr}</div>`);
  addEl(head,`<link rel="stylesheet" href="https://p18.zdassets.com/hc/theming_assets/708440/358822/style.css">`);
  addEl(el,` <style>
            h1, h2 {
                margin-top: 30px;
            }
            h3, h4 {
                margin-top: 15px;
            }
            h5, h6 {
                margin-top: 10px;
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
            a {
                color: rgba(36, 132, 218, 1)!important;
            }
            </style>`);
}
function addEl(el, html) {
  el.insertAdjacentHTML("beforeend", html);
}
