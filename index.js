
const employeeData = [
    { name: "Pranjal", service: "pm", date: "2011/11/28", profit: "$162,700" },
    { name: "Paritosh", service: "pm", date: "2007/10/09", profit: "$1,200,000" },
    { name: "Palav", service: "b2b", date: "2009/01/12", profit: "$86,000" },
    { name: "Moumita", service: "hr", date: "2012/10/13", profit: "$132,000" },
    { name: "Mitesh", service: "graphics", date: "2011/06/07", profit: "$206,850" },
    { name: "Srinivas", service: "frontend", date: "2012/12/02", profit: "$372,000" },
    { name: "Hritik", service: "graphics", date: "2011/05/03", profit: "$163,500" },
    { name: "abc", service: "hr", date: "2011/12/12", profit: "$106,450" },
    { name: "xyz", service: "b2b", date: "2011/12/06", profit: "$145,600" },
    { name: "bcd", service: "b2b", date: "2012/03/29", profit: "$433,060" }
  ]
  
  
const tbody = document.getElementById('data-body');

function createTableRows(data) {
  data.forEach(employee => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = employee.name;
    row.appendChild(nameCell);

    const serviceCell = document.createElement('td');
    serviceCell.textContent = employee.service.toUpperCase();
    row.appendChild(serviceCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = employee.date;
    row.appendChild(dateCell);

    const profitCell = document.createElement('td');
    profitCell.textContent = employee.profit;
    row.appendChild(profitCell);

    tbody.appendChild(row);
  });
}

createTableRows(employeeData);

const cards=[
  {imageSrc: "./assets/cash.png", imageAlt: "cash", value: "$9568.00",label: "Total Balance"},
  {imageSrc: "./assets/discountpercent.png", imageAlt: "discountpercent", value: "60%",label: "Discount Percentage"},
  {imageSrc: "./assets/donation.png", imageAlt: "donation", value: "300",label: "Total Referral"},
  {imageSrc: "./assets/hourglass.png", imageAlt: "hour glass", value: "$300",label: "Discount Amount"},
  {imageSrc: "./assets/percentage.png", imageAlt: "percentage", value: "$465.00",label: "Commission Amount"},
  {imageSrc: "./assets/wage.png", imageAlt: "wage", value: "$158.00",label: "Total Earning"},
  {imageSrc: "./assets/commissiondiscount.png", imageAlt: "commissiondiscount", value: "40%",label: "Commission Discount"},
  {imageSrc: "./assets/transfer.png", imageAlt: "transfer", value: "$534.00",label: "Total Bank Transfer"}];

let detailCardsElement = document.querySelector(".detail-cards");
  
function addCards(cards){
  console.log(cards);
  cards.forEach(card=>{
    const detailCardElement = document.createElement('div');
    detailCardElement.classList.add('detail-card');

    const imageElement = document.createElement('img');
    imageElement.src = card.imageSrc;
    imageElement.alt = card.imageAlt;

    const innerDivElement = document.createElement('div');

    const paraElement1 = document.createElement('p');
    paraElement1.textContent = card.value;

    const paraElement2 = document.createElement('p');
    paraElement2.textContent = card.label;

    innerDivElement.appendChild(paraElement1);
    innerDivElement.appendChild(paraElement2);

    detailCardElement.appendChild(imageElement);
    detailCardElement.appendChild(innerDivElement);

    detailCardsElement.appendChild(detailCardElement);
  });
}
addCards(cards);