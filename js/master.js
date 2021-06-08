// check if there is local storage option

let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
    console.log("loacal storage is not empty you can set it on root now");

    console.log(localStorage.getItem("color-option"));
    document.documentElement.style.setProperty("--main-color", mainColors);

    // remove active class from all colors list
    document.querySelectorAll(".color-list li").forEach((elementLi) => {
        elementLi.classList.remove("active");
        //add active class on element with data-color === local Sorage item
        if (elementLi.dataset.color === mainColors) {
            // add active cladd
            elementLi.classList.add("active");
        }
    });
}

// seting box
let gearButton = document.getElementsByClassName("fa fa-gear");

console.log(gearButton);
console.log(gearButton[0]);
let settingBox = document.getElementsByClassName("setting-box");
console.log(settingBox[0]);

gearButton[0].onclick = function() {
    settingBox[0].classList.toggle("open");
};
gearButton[0].onmouseover = function() {
    this.classList.add("fa-spin");
};
gearButton[0].onmouseout = function() {
    this.classList.remove("fa-spin");
};

// Select Landing Page Element
let landingpage = document.querySelector(".landing-page");

//  get array of images

let imageArray = [
    "129-1297361_work-desk.png",
    "268363.jpg",

    "6Iinmu.jpg",
    "9265-workspace-desk-flat-lay-hq-image-free-wallpaper.jpg",
    "giraffe_office_work_people_computer_26448_1920x1080.jpg",

    "work-space-3840x2160.jpg",
];

// >>> switch colors <<<<

const colorLi = document.querySelectorAll(".color-list li");
console.log(colorLi[1].getAttribute("data-color"));

// loop in all list item

colorLi.forEach((li) => {
    // click on every List item

    li.addEventListener("click", function(option) {
        // set color on root
        console.log(option.target.getAttribute("data-color"));

        document.documentElement.style.setProperty(
            "--main-color",
            option.target.getAttribute("data-color")
        );

        // set color on local storage

        localStorage.setItem(
            "color-option",
            option.target.getAttribute("data-color")
        );

        // remove Active class from all childern

        option.target.parentElement
            .querySelectorAll(".active")
            .forEach((elementLi) => {
                elementLi.classList.remove("active");
            });
        // add active class on self
        option.target.classList.add("active");
    });
});
// chnage background image url

// get Random Number

//  get array of images

console.log(` local storage for random background
####################################`);

// Random background images

let backgroundOption = true;

// Variable to control the Interval

let BackgroundInterval;

// check if local storge  for random background item

let backgroundLocaltem = localStorage.getItem("background_item");

// check if random background local storage is not empty
if (backgroundLocaltem !== null) {
    if (backgroundLocaltem === "true") {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    // remove active class from all spans

    document.querySelectorAll(".random-background  span").forEach((elemetn) => {
        elemetn.classList.remove("active");
    });
    if (backgroundLocaltem === "true") {
        document.querySelector(".random-background .yes").classList.add("active");
        console.log("class has been added to yes");
    } else {
        document.querySelector(".random-background .no").classList.add("active");
        console.log("class has been added to no ");
    }
}
console.log(backgroundLocaltem + "   type is  " + typeof backgroundLocaltem);

// Function to randomize images

function randommizeImg() {
    if (backgroundOption === true) {
        BackgroundInterval = setInterval(function() {
            let randomNumber = Math.floor(Math.random() * imageArray.length);
            console.log(randomNumber);
            landingpage.style.backgroundImage =
                'url("pics/' + imageArray[randomNumber] + '")';
            landingpage.style.transition = "3s";
        }, 4000);
    }
}
randommizeImg();

// >>> switch random Backgroudns option <<<<

console.log(`random background
####################################`);
const RandomBackgroundElement = document.querySelectorAll(
    ".random-background span"
);
console.log(RandomBackgroundElement);
// loop in all list item

RandomBackgroundElement.forEach((spanElement) => {
    // click on every span

    spanElement.addEventListener("click", function(optionRandom) {
        // remove Active class from all childern

        optionRandom.target.parentElement
            .querySelectorAll(".active")
            .forEach((elementSp) => {
                elementSp.classList.remove("active");
            });
        // add active class on self
        optionRandom.target.classList.add("active");
        console.log("you clicked span");

        if (optionRandom.target.dataset.background === "yes") {
            backgroundOption = true;
            console.log(backgroundOption);
            randommizeImg();
            localStorage.setItem("background_item", true);
        } else {
            backgroundOption = false;
            console.log(backgroundOption);
            clearInterval(BackgroundInterval);
            localStorage.setItem("background_item", false);
        }
    });
});

// Select Skills
console.log(` animated Skills
####################################`);
let ourSkills = document.querySelector(".skills");

console.log(ourSkills);
window.onscroll = function() {
    // get skills offset top

    let skillsOffsetTop = ourSkills.offsetTop;
    console.log(`skillsOffsetTop ` + ` = ` + skillsOffsetTop);

    // Skills outer height

    let skillsOuterheight = ourSkills.offsetHeight;
    console.log(`skillsOuterheight ` + ` = ` + skillsOuterheight);

    // window height

    let windowHieght = this.innerHeight;

    console.log(`windowHieght ` + ` = ` + windowHieght);

    // window scrollTop
    let windowScrollTop = this.pageYOffset;

    console.log(`windowScrollTop ` + ` = ` + windowScrollTop);

    console.log(
        `skillsOuterheight+ windowHieght - skillsOffsetTop = ` +
        (skillsOuterheight + windowHieght - skillsOffsetTop)
    );
    console.log("windowScrollTop == " + windowScrollTop);
    if (windowScrollTop >= skillsOuterheight + windowHieght - skillsOffsetTop) {
        console.log(`scroll working`);
        var allSkills = document.querySelectorAll(
            " .skill-box .skills-progress span"
        );

        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.progress;
        });
    } else {
        document
            .querySelectorAll(" .skill-box .skills-progress span")
            .forEach((skill) => {
                skill.style.width = "0%";
            });
    }
};

// Creat pop ups with the Image

// Select Skills
console.log(`// Creat pop ups with the Image

####################################`);

let OurGallary = document.querySelectorAll(".gallary img");

console.log(OurGallary);

OurGallary.forEach((img) => {
    img.addEventListener("click", (e) => {
        // Create overlay element
        let overlay = document.createElement("div");

        // Add class to overlay

        overlay.className = "popup-overlay";

        // Append overlay to body

        document.body.appendChild(overlay);

        // Create the Popup

        let popupBox = document.createElement("div");

        // Add Class to The popup box

        popupBox.className = "popup-box";

        // Creat the image

        let popupImage = document.createElement("img");

        // st Image source

        popupImage.src = img.src;

        // add image to popup box

        popupBox.appendChild(popupImage);

        // append the popup box to body

        document.body.appendChild(popupBox);

        // add alternate text

        if (img.alt !== null) {
            // creat heading

            let imgheading = document.createElement("h3");

            // creat text for heading

            let imgText = document.createTextNode(img.alt);

            // Appen the text to the heading

            imgheading.appendChild(imgText);

            // append the heading to the popup box

            popupBox.appendChild(imgheading);

            //
        }

        // create close Span

        let closeButoon = document.createElement("span");

        // creat close butoon text

        let closeButoonText = document.createTextNode("X");

        // Append text to close button

        closeButoon.appendChild(closeButoonText);

        // add class to class button

        closeButoon.className = "close-Buton";

        // append close button to popup box

        popupBox.appendChild(closeButoon);

        popupBox.insertBefore(closeButoon, popupBox.firstChild);
    });
});

// close popups

document.addEventListener("click", function(e) {
    if (e.target.className == "close-Buton") {
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
});

/** start bullets */
// select all bullets

const AllBulets = document.querySelectorAll(".bullets");

AllBulets.forEach((bullet) => {
    bullet.addEventListener("click", (element) => {
        document.querySelector(element.target.dataset.section).scrollIntoView({
            behavior: "smooth",
        });
    });
});

/** End bullets */

/** handle active stats  */

function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach((elementLi) => {
        elementLi.classList.remove("active");
    });
    // add active class on self
    ev.target.classList.add("active");
}

/** show and hide bullets */
let bulletspan = document.querySelectorAll(".bullets-option span");
let bulletNav = document.querySelector(".nav-bullets");

let bulletLocal = localStorage.getItem("bulletOPtion");

if (bulletLocal !== null) {
    bulletspan.forEach((span) => {
        span.classList.remove("active");
    });

    if (bulletLocal === "block") {
        bulletNav.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add("active");
    } {
        bulletNav.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}
console.log(bulletNav);
console.log(bulletspan);

bulletspan.forEach((span) => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "yes") {
            bulletNav.style.display = "block";

            localStorage.setItem("bulletOPtion", "block");
        } else {
            bulletNav.style.display = "none";
            localStorage.setItem("bulletOPtion", "none");
        }
        handleActive(e);
    });
});

// reset button

document.querySelector(".resetoption").onclick = function() {
    //  localStorage.clear();
    localStorage.removeItem("bulletOPtion");
    localStorage.removeItem("color-option");
    localStorage.removeItem("background_item");
    window.location.reload();
};

// Toggle menue

let toggleButton = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");

toggleButton.onclick = function(e) {
    e.stopPropagation();

    // toggle class 'menu-activ' on button
    this.classList.toggle("menu-active");
    // toggle class 'open' on links
    tlinks.classList.toggle("open");
};
// click anywhere outside menu and close toggle

document.addEventListener("click", (e) => {
    if (e.target !== toggleButton && e.target !== tlinks) {
        console.log("this not the button");
        //check if menu is open

        if (tlinks.classList.contains("open")) {
            console.log("menu is open");
            toggleButton.classList.toggle("menu-active");

            tlinks.classList.toggle("open");
        }
    }
});

// stop propagation on menu
tlinks.onclick = function(e) {
    e.stopPropagation();
};