# Вот так вот 

## Как то так будет

Тут типо параграф 

## Заголовок поменьше
А так код выглядит:
```js
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
  addEl(head,`<link rel="stylesheet" href="https://mknzev.github.io/yvarsity/style.css">`);
  fooDisable();
}
function addEl(el, html) {
  el.insertAdjacentHTML("beforeend", html);
}
function fooDisable() {
  document.querySelector("#tildacopy").remove();
}
```
<!-- panels:start -->
<!-- div:title-panel -->
## Test left and right panels
<!-- div:left-panel -->
Snippet description. Snippet description. Snippet description. Snippet description. Snippet description. 
Snippet description. 

<!-- div:right-panel -->
```js
const el = document.querySelector('.list'), 
      url = `https://yclients.zendesk.com/api/v2/help_center/ru/sections/${el.id}/articles.json`,
      getSection = new Request(url);
let zen = [];
fetch(getSection)
  .then(response => response.json())
  .then(data => zen = data.data)
  .then()(zen) => {
   for (let i in zen) {
      show(i, zen);
     // fooDisable();
    };
  });
```
<!-- panels:end -->