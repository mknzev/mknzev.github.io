const services = ['4406660', '4406662', '4406663', '4406661'],
      targetEls = ['.tn-elem__1367186951563904650693','tn-elem__1367186951563908992511','.tn-elem__1367186951563909039039','.tn-elem__1367186951563909136703'],
      targetHref = ['', '','', ''],
      init = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer xka55ctkec2gtebtubz8, User 05215ad9411da5aa82a33197348b4fc4'
          }
      },
      htmlBtn = `
      <a href="#" target="_blank">
      <button id="button" style="
               font-family: Graphik;
               margin-top: 15px;
               margin-left: 15px;
               margin-bottom: 4px;
               background: #00000000;
               border-color: red;
               color: red;"
      >Смотреть вебинар</button></a>`;
      
let nowDate = new Date().toJSON().slice(0,10),
    url = 'https://api.yclients.com/api/v1/activity/85062/history_search/?from=' + nowDate + '&till=' + nowDate,
    reServices = new Request(url, init);

function showButton(i) {
  document.querySelector(targetEls[i]).insertAdjacentHTML('afterbegin', htmlBtn)
}

fetch(reServices)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    for (let i in data.data) {
      let serDate = (new Date().getTime()/1000) - (new Date(data.data[i].date)/1000) + 900;
      for (let h in services) { 
        if (data.data[i].service_id == services[h]) {
          console.log(11)          
          if (0 < serDate && serDate < data.data[i].length) showButton(i);
        };
      }
    }
  });
