let el = document.querySelector(".main"),
head = document.querySelector('head'),
arr = [];

fetch(new Request( `https://yclients.zendesk.com/api/v2/help_center/ru/articles/${el.id}.json` ))
.then(responce => responce.json())
.then(data => (arr = data.article.body))
.then(() => showArticle())



function showArticle() {
el.insertAdjacentHTML('beforeend', `<div class="article-body markdown">${arr}</div>`);
head.insertAdjacentHTML('beforeend',`<link rel="stylesheet" href="https://p18.zdassets.com/hc/theming_assets/708440/358822/style.css">`);
head.insertAdjacentHTML('beforeend', `
<style>
    .main {
        max-width: 680px;
        margin:auto;
    }
</style>`);
}