
const services = ["4406660", "4406662", "4406663", "4406661"],
  targetEls = [
    ".tn-elem__1367186951563904650693 div",
    ".tn-elem__1367186951563908992511 div",
    ".tn-elem__1367186951563909039039 div",
    ".tn-elem__1367186951563909136703 div"
  ],
  targetHref = [
    "https://yclients.clickmeeting.com/bazovie-nastroiki?_ga=2.109165056.429975423.1569227313-1958504337.1568626668&_gac=1.204278180.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE",
    "https://yclients.clickmeeting.com/skladskoi-uchyot?_ga=2.114930306.429975423.1569227313-1958504337.1568626668&_gac=1.3941124.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE",
    "https://yclients.clickmeeting.com/finansi-i-analitika-raschet-zarabotnoi-plati?_ga=2.84720284.429975423.1569227313-1958504337.1568626668&_gac=1.207751462.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE",
    "https://yclients.clickmeeting.com/programma-loyal-nosti?_ga=2.84720284.429975423.1569227313-1958504337.1568626668&_gac=1.207751462.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE"
  ],
  init = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer xka55ctkec2gtebtubz8, User 77d14b726ddd750b3018691007188192"
    }
  },
  htmlBtn = `
    <a href="` +
      targetHref[i] +
      `" target="_blank" style="position: absolute;z-index: 1;margin-left: -124px;margin-top: 47px;width: 133px;height: 22px;display:flex;justify-content: space-between;/* border-color: red; */"><button id="button" style="background: red;border: 1px solid red;/* border-color: red; */border-radius: 4px;font-family: Graphik;color: white;font-weight: bold;text-align: left;" class="">В ЭФИРЕ</button></a>`;

let nowDate = new Date().toJSON().slice(0, 10);
let url = "https://api.yclients.com/api/v1/activity/85062/history_search/?from=" +
    nowDate +
    "&till=" +
    nowDate,
  reServices = new Request(url, init);

function showButton(i) {
  document
    .querySelector(targetEls[i])
    .insertAdjacentHTML("beforeend", htmlBtn);
  document
    .querySelector(targetEls[i])
    .querySelector('a')
    .setAttribute('href', targetHref[i]);
}

fetch(reServices)
  .then(response => response.json())
  .then(data => {
    console.log(data.data);
    for (let i in data.data) {
      let serDate = new Date().getTime() / 1000 - new Date(data.data[i].date) / 1000;
      for (let h in services) {
        if (data.data[i].service_id == services[h]) {
          console.log(11);
          console.log(serDate)
          if (0 < serDate && serDate < data.data[i].length) {
            showButton(i);
            console.log(13);
          }
        }
      }
    }
  });
