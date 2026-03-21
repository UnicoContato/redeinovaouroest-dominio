const header = document.getElementById('main-header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const privacyModal = document.getElementById('privacy-modal');
const openPrivacy = document.getElementById('open-privacy');
const closePrivacy = document.getElementById('close-privacy');

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('header-hide');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('header-hide')) {
        header.classList.add('header-hide');
    } else if (currentScroll < lastScroll && header.classList.contains('header-hide')) {
        header.classList.remove('header-hide');
    }
    lastScroll = currentScroll;
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

openPrivacy.addEventListener('click', () => {
    privacyModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closePrivacy.addEventListener('click', () => {
    privacyModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal.children[0]) {
        privacyModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});