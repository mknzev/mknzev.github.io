const el = document.querySelector('.list'), 
  url = `https://yclients.zendesk.com/api/v2/help_center/ru/sections/${el.id}/articles.json`,
  getSection = new Request(url),
  show = function (i, zen) {
    el.insertAdjacentHTML('beforeend', `<li><a href=${zen[i].html_url} target='_blank'>${zen[i].title}</a></li>`)
  };
  
fetch(getSection)
  .then(response => response.json())
  .then(data => {
  let zen = data.articles;
    for (let i in zen) {
      show(i, zen)
    };
  });
