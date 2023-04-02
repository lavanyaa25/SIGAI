const image = [
  [
    "techgd1.png",
    "techgd2.png",
    "techgd3.png",
    "techgd4.png",
  ],
  [
    "sig1.png",
    "1.png",
   ],
  [
    "sig1.png",
    "3.png",

   ],
  [
    "sig1.png",
    "4.png",
    ],
  [
    "sig1.png",
    "7.png",
    ],
    [
      "sig1.png",
      "6.png",
      ],
      [
        "sig1.png",
        "8.png",
        ],
        [
          "sig1.png",
          "5.png",
          ],
];

const artical = document.querySelectorAll("article.core__member");

function showSlides() {
  artical.forEach((value, index) => {
    const style = value.style;

    if (image[index] === undefined) return;
    let count = 0;

    const interval = () => {
      console.log(count);
      const img = image[index][count++];
      style.backgroundImage = `url(${img})`;
      console.log(img);
      if (image[index].length === count) count = 0;
    };
    interval();

    setInterval(
      interval,
      3000,
    );
  });
}
showSlides();


// navbar changes when scroll

window.addEventListener('scroll',  () =>  {
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})



//show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";

})


//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

