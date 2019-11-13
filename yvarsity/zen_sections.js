const el = document.querySelector('.list'), 
      url = `https://yclients.zendesk.com/api/v2/help_center/ru/sections/${el.id}/articles.json`,
      getSection = new Request(url);
let zen = [];
fetch(getSection)
  .then(response => response.json())
  .then(data => {
    for (let i in zen) {
      show(i, zen);
      fooDisable();
    };
  });

fooDisable();
function fooDisable() {
  document.querySelector('#tildacopy').remove();
}

function show(i, zen) {
    addEl(el,`<li><a href=${zen[i].html_url} target='_blank'>${zen[i].title}</a></li>`);
    addEl(head,`<link rel="stylesheet" href="https://mknzev.github.io/yvarsity/style.css">`);
  };

function addEl(el, html) {
  el.insertAdjacentHTML("beforeend", html);
}