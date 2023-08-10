const card = document.querySelector(".card");
const container = document.querySelector(".container");

// console.log("Anmol");

// Moving animation event.
container.addEventListener("mousemove", (event) => {
  // it give me the loaction (x,y) when i move the mouse
  //   console.log(event.pageX, event.pageY);
  let xAxis = (window.innerWidth / 2 - event.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 20;

  card.style.transform = `rotate(${xAxis}deg) rotate(${yAxis}deg)`;

  //   let res = card.style.transform;
  //   console.log(res);
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transition = `rotate(0deg) rotate(0deg)`;
});
