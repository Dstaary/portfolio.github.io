const allBtn = document.getElementById("all-btn");

const logoBtn = document.getElementById("logo-btn");
const posterBtn = document.getElementById("poster-btn");
const visitingCardBtn = document.getElementById("visiting-card-btn");
const leafletBtn = document.getElementById("leaflet-btn");
const othersBtn = document.getElementById("others-btn");

const galleryPic = document.getElementById('gallery');
const pictures = galleryPic.querySelectorAll('.pic-box');


logoBtn.onclick = function() {
for (const picture of pictures) {
    if (picture.id === "gallery-logo"){
        picture.classList.remove('hidden');
    } else {
        picture.classList.add('hidden');
    };
};
};

posterBtn.onclick = function() {
    for (const picture of pictures) {
        if (picture.id === "gallery-poster"){
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        };
    };
};

visitingCardBtn.onclick = function() {
    for (const picture of pictures) {
        if (picture.id === "gallery-card"){
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        };
    };
};

leafletBtn.onclick = function() {
    for (const picture of pictures) {
        if (picture.id === "gallery-leaflet"){
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        };
    };
};

othersBtn.onclick = function() {
    for (const picture of pictures) {
        if (picture.id === "gallery-other"){
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        };
    };
};

allBtn.onclick = function() {
    for (const picture of pictures) {
        picture.classList.remove('hidden');
    };
};

