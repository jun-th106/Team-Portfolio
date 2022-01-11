// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");
const memberWrapper = document.querySelector(".member-wrapper");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

const data = [
  {
    src: "../img/Hội.jpg",
    name: "Hà Trần Công Hội ",
    class: '( Team Leader__21110771 )',
    description: `Brief educational background: From 2018 to 2021, I had a great time studying in Phan Liem high school. Now, i am a freshman of HCMUTE and I’m proud of it. <br>
    Major: Information Technology. <br>
    Skills: C++, HTML.<br>
    Personality: funny but not a talkative guy.<br>
    "I believe in the saying, 'If you aim at nothing, you're going to hit nothing.' So if you don't set goals, then you have nowhere to go." -- Taylor Lautner
    `,
    contact_url: 'https://www.facebook.com/profile.php?id=100011583306766'
  
  },
  {
    src: "../img/thanhhieu.png",
    name: "Nguyễn Thành Hiếu",
    class: ' ( Member__21110025 )',
    description: `Brief educational background:from 2018 to 2021, I used to be a student of Nguyen Binh Khiem High school for The Gifted before enrolling
    HCMUTE. <br>
    My major : Information of Technology <br>
    Skills : Python, HTML, CSS, JS, C++,...<br>
    "To get what you want you have to deserve what you want. The world is not yet a crazy world to reward
    undeserving people" --Charlie Munger <br>`,
  contact_url : 'http://192.168.1.12:5500/Thanh-Hieu/index.html ' 
  },
  {
    src: "../img/Ha.jpg",
    name: "Nguyễn Ngọc Hà ",
    class: ' ( Member__21110766 )',
    description: `Brief educational background: I was a student of Hung Vuong Gifted High School during 2018 to 2021. Currently, I’m a first-year student of HCMUTE.
    <br>Major: Information Technology<br>
    Skills: C++ and logical thinking.<br>
    Personality:  A generous guy. Love spending playing soccer.<br>
    "When you play, play hard; when you work, don't play at all." -- Theodore Roosevelt
    `,
   
  },
  {
    src: "../img/truongdo.jpg",
    name: "Đỗ Xuân Trường ",
    class: '( Member__21110101 )',
    description: `Brief educational background: From 2018 to 2021, I used to be a student of Thanh Dong High School and now I’m a freshman at HCMUTE. <br>
    Major: Information Technology. <br>
    Skills: C, C++, Python, HTML,…. <br>
    Personality: Friendly, easy to make friend with. <br>
    “Challenges are what make life interesting and overcoming them is what makes life meaningful” -- Joshua J.Marine. `,
   
  },
];

for (let i = 0; i < data.length; i++) {
  memberWrapper.innerHTML += `
  <div class="things__item">
    <!-- img -->
    <img class="img-wrapper" src=${data[i].src} alt="illustration of computer" />
    <!-- text -->
    <div class="things__item--heading">
      <h3>${data[i].name}
      </h3>
      <h4>${data[i].class}</h4>
      <p>
        ${data[i].description}
      </p>
      <a href=${data[i].contact_url}><i class="fas fa-id-card-alt fa-3x"></i></a>
     
    </div>
  </div> `;
}
