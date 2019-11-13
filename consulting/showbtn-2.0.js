
const my = [
            {
              id: 4406660,
              sel: ".tn-elem__1367186951563904650693",
              url: "bazovie-nastroiki?_ga=2.109165056.429975423.1569227313-1958504337.1568626668&_gac=1.204278180.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE"
            },
            {
              id: 4406662,
              sel: ".tn-elem__1367186951563908992511",
              url: "skladskoi-uchyot?_ga=2.114930306.429975423.1569227313-1958504337.1568626668&_gac=1.3941124.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE"
            },
            {
              id: 4406663,
              sel: ".tn-elem__1367186951563909039039",
              url: "finansi-i-analitika-raschet-zarabotnoi-plati?_ga=2.84720284.429975423.1569227313-1958504337.1568626668&_gac=1.207751462.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE"
            },
            {
              id: 4406661,
              sel: ".tn-elem__1367186951563909136703",
              url:  "programma-loyal-nosti?_ga=2.84720284.429975423.1569227313-1958504337.1568626668&_gac=1.207751462.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE"
            }
          ];
  
const css = `
  #forButton {
    position: absolute;
    top: 12%;
    right: 16%;
  }
  #button {
    background: red;
    border: 1px solid red;
    border-radius: 4px;
    font-family: 'GraphikLLCT',Arial,sans-serif;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 1.1em;
  }
  #redBall {
    background: red;
    width: 10px;
    height: 10px;
    margin-right: 0.2em;
    margin-top: 0.5em;
    vertical-align: inherit;
    float: left;
    border-radius: 1vh;
}`;

const d = {
          new Date().toLocaleDateString("eu-EU", { timeZone: "Europe/Moscow" }).getTime()
          .split(".")
          .reverse()
          .join("-");
      }   
  
function addStyle() {
  document
  .querySelector("style")
  .insertAdjacentText("beforeend", css);
}

function showButton(count) {
  let elem = document.querySelector(`${my.sel[count]} a`);
  elem.insertAdjacentHTML("afterbegin", `<div id="forButton"><div id='redBall'></div><button id="button"class="">В ЭФИРЕ</button></div>`;);
  elem.setAttribute("href", `https://yclients.clickmeeting.com/${my[count].url}`);
};
function checkTime(activity) {
            let delta = (new Date().getTime() - new Date(activity.date)) / 1000;
            return (0 < delta && delta < activity.length);
          }
function checkActivity() {
  
}
function checkId(activity) {
  for (let count in s) {
    const s = ["4406660", "4406662", "4406663", "4406661"];

  }
  
}

fetch(
  new Request(
    `https://api.yclients.com/api/v1/activity/85062/history_search/?from=${d}&till=${d}`,
    {
      headers: {
        Authorization:
          "Bearer xka55ctkec2gtebtubz8, User d7a3fa63c301582477d7315f81de85a3"
      }
    }
  )
)
  .then(response => response.json())
  .then(data => { 
    let activites = data.data;
    for (let activity of activites) {
      for (let id in ) {
        if ((+yc[i].service_id === +s[h]) && checkTime(activity)) {
          addStyle();
          showButton(h);
        }
      }
    }
  });
