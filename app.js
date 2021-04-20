//your slider details will be here
let slides = [
    {
        id: 1,
        title: 'Marvel Avengers',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis doloribus pariatur nostrum',
        src: 'movie-1.jpg'
    },
    {
        id: 2,
        title: 'Hackers',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis doloribus pariatur nostrum',
        src: 'movie-2.jpg'
    },
    {
        id: 3,
        title: 'Amazing Spider Man',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis doloribus pariatur nostrum',
        src: 'movie-3.jpg'
    },
    {
        id: 4,
        title: 'Master | Thalapathy Vijay',
        desc: 'This is on of the finest movie. About mafia, failure, action, thriller, love',
        src: '2576151.jpg'
    }
];
let slider = document.querySelector(".wallpaper-container");
let roller = document.querySelector(".roller");
let pointcon = document.querySelector(".point-container")
slides.map((value, index) => {
    let subwall = document.createElement("div");
    let wallpaper = document.createElement("img");
    subwall.className = "sub-wall";
    wallpaper.src = value.src;
    subwall.appendChild(wallpaper);
    roller.appendChild(subwall);
    let points = document.createElement("div");
    points.className = "point";
    pointcon.appendChild(points);
    if (index == slides.length) {
        subwall = document.createElement("div");
        let wallpaper = document.createElement("img");
        subwall.className = "sub-wall";
        wallpaper.src = slides[0].src;
        subwall.appendChild(wallpaper);
        roller.appendChild(subwall);
    }
});

//counter
let counter = 0;
let walls = document.querySelectorAll(".sub-wall");
let showtitle = document.querySelector(".show-title h4");
let desc = document.querySelector(".show-desc span");
let size = walls[0].clientWidth;
let dots = pointcon.getElementsByClassName("point");
let timer = setInterval(autoslide, 8000);

showtitle.innerHTML = slides[counter].title;
desc.innerHTML = slides[counter].desc;
dots[counter].classList.add("active");


function autoslide() {
    counter++;
    console.log(counter);
    slideUpdate(counter);
}

document.querySelector("#next").onclick = () => {
    counter++;
    clearInterval(timer);
    slideUpdate(counter);
    timer = setInterval(autoslide, 8000);
}

document.querySelector("#prev").onclick = () => {
    counter--;
    clearInterval(timer);
    slideUpdate(counter);
    timer = setInterval(autoslide, 8000);
}

function slideUpdate(c) {
    for (let d of dots) {
        d.classList.remove("active");
    }
    if (c > walls.length - 1) {
        counter = 0;
        roller.style = `transform:translateX(0px)`;
    }
    else if (c < 0) {
        counter = walls.length - 1;
        roller.style = `transform:translateX(${-(counter) * size}px)`;
    }
    else {
        roller.style = `transform:translateX(${-(c) * size}px)`;
    }
    showtitle.innerHTML = slides[counter].title;
    desc.innerHTML = slides[counter].desc;
    dots[counter].classList.add("active");
}



