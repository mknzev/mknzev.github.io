const el = document.querySelector('.list'), 
       head = document.querySelector('head'),
      url = `https://yclients.zendesk.com/api/v2/help_center/ru/sections/${el.id}/articles.json`,
      getSection = new Request(url);
let zen = [];
fetch(getSection)
  .then(response => response.json())
  .then(data => {
    let zen = data.articles;
    for (let i in zen) {
      show(i, zen);
    };
  });

function show(i, zen) {
    addEl(el,`<li><a href=${zen[i].html_url} target='_blank'>${zen[i].title}</a></li>`);
    addEl(head,`<link rel="stylesheet" href="https://mknzev.github.io/yvarsity/style.css">`);
  };

function addEl(el, html) {
  el.insertAdjacentHTML("beforeend", html);
}
