const s = [
        "4406660",
        "4406662",
        "4406663",
        "4406661"
      ],
  el = [
    ".tn-elem__1367186951563904650693 div",
    ".tn-elem__1367186951563908992511 div",
    ".tn-elem__1367186951563909039039 div",
    ".tn-elem__1367186951563909136703 div"
  ],
  url = [
    "https://yclients.clickmeeting.com/bazovie-nastroiki?_ga=2.109165056.429975423.1569227313-1958504337.1568626668&_gac=1.204278180.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE",
    "https://yclients.clickmeeting.com/skladskoi-uchyot?_ga=2.114930306.429975423.1569227313-1958504337.1568626668&_gac=1.3941124.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE",
    "https://yclients.clickmeeting.com/finansi-i-analitika-raschet-zarabotnoi-plati?_ga=2.84720284.429975423.1569227313-1958504337.1568626668&_gac=1.207751462.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE",
    "https://yclients.clickmeeting.com/programma-loyal-nosti?_ga=2.84720284.429975423.1569227313-1958504337.1568626668&_gac=1.207751462.1568884396.EAIaIQobChMIiqnDpMbc5AIVldGyCh35tAE6EAAYASAAEgKqf_D_BwE"
  ],
  d = new Date()
    .toLocaleDateString("eu-EU", { timeZone: "Europe/Moscow" })
    .split(".")
    .reverse()
    .join("-"),
  htmlStyle = `
	 #forButton {
		 position: absolute;
		 z-index: 1;
		 margin-left: 215px;
		 margin-top: 45px;
		 margin-top: 46px;
		 width: 133px;
		 height: 22px;
	 }
	 #button {
		 background: red;
		 border: 1px solid red;
		 border-radius: 4px;
		 font-family: 'GraphikLLCT',Arial,sans-serif;
		 color: white;
		 font-weight: bold;
		 text-align: left;
	 }
	 `;
htmlBtn = `<div id="forButton"><button id="button"class="">В ЭФИРЕ</button></div>`;

function styleButton() {
  
}

function showButton(i) {
  document
    .querySelector('style')
    .insertAdjacentText('beforeend', htmlStyle)
  document
    .querySelector(el[i])
    .querySelector("a")
    .insertAdjacentHTML("afterbegin", htmlBtn);
    .setAttribute("href", targetHref[i]);
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
    let yc = data.data;
    console.log(yc);
    for (let i in yc) {
      let yd = new Date().getTime() / 1000 - new Date(yc[i].date) / 1000;
      for (let h in s) {
        if (yc[i].service_id == s[h]) {
          console.log(yd);
          if (0 < yd && yd < yc[i].length) {
            showButton(h);
            console.log("Должен показать кнопку!");
          }
        }
      }
    }
  });