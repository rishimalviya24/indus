let objectsArray = [
  { image: "01.jpg", bgColor: "#22222A", color: "#AA965A" },
  { image: "02.jpg", bgColor: "#FD9879", color: "#F9E8E3" },
  { image: "03.jpg", bgColor: "#6A38F8", color: "#F188FA" },
  { image: "04.jpg", bgColor: "#78A19C", color: "#F0ECDE" },
  { image: "05.png", bgColor: "#76BACB", color: "#395474" },
  { image: "06.png", bgColor: "#191F5D", color: "#FD1F61" },
  { image: "07.jpg", bgColor: "#56707F", color: "#F8EB41" },
  { image: "08.jpg", bgColor: "#F4DE35", color: "#0C0F15" },
  { image: "09.png", bgColor: "#793D2B", color: "#FABAD9" },
];

gsap.from(".background", {
  "--trans": "1",
  scrollTrigger: {
    trigger: ".left",
    start: "top top",
    end: "170% top",
    scrub: true,
    markers: true,
    scroller: "body",
  },
});

let currentIndex = 0;
let lastCoord = { x: 0, y: 0 };

function calculateDistance(point1, point2) {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const page1 = document.querySelector("body");
const image = document.querySelector(".page1 .middle img");

page1.addEventListener("mousemove", (e) => {
  const currentPosition = { x: e.clientX, y: e.clientY };
  const distance = calculateDistance(lastCoord, currentPosition);

  if (distance > 100) {
    currentIndex = (currentIndex + 1) % 8;
    const newObject = objectsArray[currentIndex];

    document.querySelector(".background").style.backgroundColor =
      newObject.bgColor;
    document.querySelector("body").style.color = newObject.color;
    image.src = `./assets/${newObject.image}`;

    lastCoord = currentPosition;
  }
});

document.addEventListener("mousemove", function (event) {
  const X = event.clientX;
  const Y = event.clientY;

  const custom = document.querySelector(".custom-mouse");

  custom.style.left = X + "px";
  custom.style.top = Y + "px";
});

// document.addEventListener("scroll", function () {
//   const scrollTop = window.scrollY;
//   const custom = document.querySelector(".custom-mouse img");

//   custom.style.transform = `rotate(${scrollTop}deg)`;
// });
