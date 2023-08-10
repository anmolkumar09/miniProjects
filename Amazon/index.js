let prevBtn = document.querySelector(".prevBtn");

let nextBtn = document.querySelector(".nextBtn");

let ar = [
  "https://images.indianexpress.com/2021/09/Amazon-Great-Indian-Festival-sale.jpg",

  "https://i.gadgets360cdn.com/large/amazon_summer_sale_2022_1651482758792.jpg?downsize=400:*",

  "https://images.fonearena.com/blog/wp-content/uploads/2022/04/Amazon-Mobile-Savings-Day-Sale.jpg",

  "https://assets.indiadesire.com/images/amazon%20great%20indian%20festival%20happiness%20sale.jpg",

  "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/BOTWWA26TO1/1.jpg",

  "https://i.ytimg.com/vi/7jZSsDDDz_s/maxresdefault.jpg",

  "https://www.findprix.com/blog/wp-content/uploads/2022/03/Upcoming-Sales-on-Amazon-788x443-1.jpg",

  "https://th.bing.com/th/id/R.1d70434f68381b2e924b8b8ee142468e?rik=b39FXYjVzZsQaQ&riu=http%3a%2f%2famazonelectronicsandcomputers.com%2fwp-content%2fuploads%2f2016%2f08%2famazon-india-electronics-sale-2015-banner.jpg&ehk=JREIHtJMAE9ioYB69nNu5hQ9Sli8k4DLI5Rre1VJzok%3d&risl=&pid=ImgRaw&r=0",

  "https://static.digit.in/default/82c475d7253c249805fef792ac984410c7b5cf9c.jpeg",
];

let current = 0;

document.getElementById("frame").src = ar[0];
// next Button
nextBtn.addEventListener("click", function () {
  current++;

  if (current > ar.length - 1) {
    current = 0;
  }
  document.getElementById("frame").src = ar[current];
});

//Prev Button
prevBtn.addEventListener("click", function () {
  current--;

  if (current < 0) {
    current = ar.length - 1;
  }
  document.getElementById("frame").src = ar[current];
});

// Product slider 1..
const card_container = [...document.querySelectorAll(".card_container")];

const prevBtn2 = [...document.querySelectorAll(".prevBtn2")];
const nextBtn2 = [...document.querySelectorAll(".nextBtn2")];

/*
The code uses the forEach() method to iterate through the elements with the class "card_container" and applies the event listener to each element. */

/*The getBoundingClientRect() method is used to get the dimensions of the container element and the containerWidth variable is used to store the width of the container.

The nextBtn2 and prevBtn2 are two arrays of elements with class "nextBtn2" and "prevBtn2" respectively. When the next button is clicked, the event listener triggers and the scrollLeft property of the container is increased by the width of the container. Similarly, when the previous button is clicked, the event listener triggers and the scrollLeft property of the container is decreased by the width of the container.*/

card_container.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();

  let containerWidth = containerDimensions.width;

  nextBtn2[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn2[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
