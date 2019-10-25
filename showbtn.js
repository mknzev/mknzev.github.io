
const services = ["4406660", "4406662", "4406663", "4406661"],
  targetEls = [
    ".tn-elem__1367186951563904650693 div",
    ".tn-elem__1367186951563908992511 div",
    ".tn-elem__1367186951563909039039 div",
    ".tn-elem__1367186951563909136703 div"
  ],
  targetHref = ["", "", "", ""],
  init = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer xka55ctkec2gtebtubz8, User 77d14b726ddd750b3018691007188192"
    }
  },
  htmlBtn = `
      <a href="#" target="_blank">
      <button id="button" style="position: absolute;
                          z-index: 1;
                          margin-left: -190px;
                          margin-top: 80px;
                          background: #00000000;
                          border-color: red;
                          border-radius: 7px;
                          font-family: Graphik;
                          color: red;
                          font-weight: bold;"
      >Смотреть ▶</button></a>`;

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
