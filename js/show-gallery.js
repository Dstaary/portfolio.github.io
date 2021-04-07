const gallery = document.getElementById("gallery");
const button = document.getElementById("show-more");

button.onclick = function() {
    if(gallery.className.valueOf() === "gallery-pic animation gallery".valueOf()) {
        gallery.classList.add('gallery-open');
        gallery.classList.remove('gallery');
        button.innerHTML = "Show less...";
    } else {
        gallery.classList.add('gallery');
        gallery.classList.remove('gallery-open');
        button.innerHTML = "Show more...";
    };
    
    showBtnFn();
    
};
