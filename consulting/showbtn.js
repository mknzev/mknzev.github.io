const services = ['4406660', '4406662', '4406661', '5336652', '5336648', '4406663', '5336651', '5336650'];
const targetEls = [
  '.tn-elem__1764243101563904650693 div',
  '.tn-elem__1764243101563908992511 div',
  '.tn-elem__1764243101585924720018 div',
  '.tn-elem__1764243101563909136703 div',
  '.tn-elem__1764243101585924349845 div',
  '.tn-elem__1764243101563909039039 div',
  '.tn-elem__1764243101585924697511 div',
  '.tn-elem__1764243101585924653782 div'
];
const targetHref = [
  'https://yclients.clickmeeting.com/bazovie-nastroiki',
  'https://yclients.clickmeeting.com/skladskoi-uchyot',
  'https://yclients.clickmeeting.com/programma-loyal-nosti',
  'https://yclients.clickmeeting.com/nastroyka-abonementov-i-sertifik',
  'https://yclients.clickmeeting.com/onlayn-zapis-rasshirennye-nastro',
  'https://yclients.clickmeeting.com/finansi-i-analitika-raschet-zarabotnoi-plati',
  'https://yclients.clickmeeting.com/5-instrumenty-dlya-raboty-s-klie',
  'https://yclients.clickmeeting.com/organizatsiya-i-pravila-raboty-s'
];
const init = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
        'Bearer xka55ctkec2gtebtubz8, User d7a3fa63c301582477d7315f81de85a3',
  },
};
const htmlBtn = `
    <div style="
      position: absolute;
      z-index: 1;
      margin-left: 215px;
      margin-top: 45px;
      width: 133px;
      height: 22px;">
     <button id="button" style="
        background: red;
        border: 1px solid red;
        border-radius: 4px;
        font-family: 'GraphikLLCT',Arial,sans-serif;
        color: white;
        font-weight: bold;
        text-align: left;" class="">В ЭФИРЕ</button>
    </div>`;

const nowDate = new Date().toJSON().slice(0, 10);
const url = `https://api.yclients.com/api/v1/activity/85062/history_search/?from=${
  nowDate
}&till=${
  nowDate}`;
const reServices = new Request(url, init);

function showButton(i) {
  document
    .querySelector(targetEls[i])
    .querySelector('a')
    .insertAdjacentHTML('afterbegin', htmlBtn);
  document
    .querySelector(targetEls[i])
    .querySelector('a')
    .setAttribute('href', targetHref[i]);
}

fetch(reServices)
  .then((response) => response.json())
  .then((data) => {
    for (const i in data.data) {
      const serDate = new Date().getTime() / 1000 - new Date(data.data[i].date) / 1000;
      for (const h in services) {
        if (data.data[i].service_id == services[h]) {
          if (serDate > 0 && serDate < data.data[i].length) {
            showButton(h);
          }
        }
      }
    }
  });
