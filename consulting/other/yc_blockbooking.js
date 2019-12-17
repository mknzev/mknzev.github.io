<script>
  
function getServices() {
  const cat = [2873711, 2358196];
  const req = new Request(
    'https://n193246.yclients.com/api/v1/book_services/96457?staff_id=&datetime=&bookform_id=193246',
    {
    headers: {
    Authorization: 'Bearer yusw3yeu6hrr4r9j3gw6',
},
}
);
fetch(req)
.then((response) => response.json())
.then((data) => checkSevices(data.services, cat));
}

function checkServices(myArr, cat) {
  myArr.some((item) => {
    if (location.href.includes(item.id)) {
      cat.forEach((category) => {
        if (item.category_id == category) {
          return blockBooking(item.id)
        };
      });
    };
  });
};

function blockBooking(ser) {
    window.yclientsNotWorkingDatesRanges = [
      {
        text: 'Онлайн-запись временно не работает!',
        startDate: '01.12.2019',
        endDate: '01.01.2020',
        services: [ser],
      },
    ];
  console.log('blockBooking', ser);
}

window.yclientsApi.onChangeRoute((route) => {
    getServices();
})
</script>
