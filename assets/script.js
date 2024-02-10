/*==================== burger icon ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== Navigasi ====================*/
let sections = document.querySelectorAll('article, aside');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });


    /*==================== Menghilangkan ikon toggle dan navbar saat scroll ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*====================  Inisialisasi Typed.js  ====================*/
const multipleTextElement = document.querySelector('.multiple-text');

if (multipleTextElement) {
    const typed = new Typed('.multiple-text', {
        strings: ['Student', 'Front-End Developer', 'Back-End Developer', 'YouTuber', 'Gamers', 'IT Support'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

/*==================== Mengirim data formulir kontak (simulasi)  ====================*/
var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;
    var message = document.getElementById('message').value;
    console.log("Name:", name, "\nEmail:", email, "\nFeedback:", feedback, "\nMessage:", message);
    alert("Message Sent Successfully (Sorry, but this is fake)");
});

