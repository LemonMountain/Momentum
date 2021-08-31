const images = ["1920x1080-px-digital-art-japan-minimalism-simple-background-sun-trees-video-games-star-wars-hd-art-wallpaper-preview.jpg",
                "images.jpg",
                "imas.jpg"
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);