/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}



    document.addEventListener('DOMContentLoaded', () => {
        const typedText = document.querySelector('.typing-text');
        const words = ['Software Developer', 'Web Designer/Developer', 'Data Analyst'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150; // Typing speed in milliseconds

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                // Erase characters
                typedText.textContent = currentWord.substring(0, charIndex--);
                typingSpeed = 100;
                if (charIndex < 0) {
                    // Move to the next word after deletion
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    typingSpeed = 500; // Pause before starting to type new word
                }
            } else {
                // Type characters
                typedText.textContent = currentWord.substring(0, charIndex++);
                typingSpeed = 150;
                if (charIndex > currentWord.length) {
                    // Pause before deleting the word
                    isDeleting = true;
                    typingSpeed = 1000;
                }
            }

            setTimeout(type, typingSpeed);
        }

        type(); // Start typing
    });


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
    })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Initially show the first slide
showSlide(currentSlide);


/*===== Link Active Work =====*/


/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector("work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body span").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;

}

/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);

})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sctionTop = current.offsetTop - 50,
        sectionID = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove("active-link")
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/
