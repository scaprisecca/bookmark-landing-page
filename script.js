// Mobile Navbar
const mobileNavbar = document.querySelector('.navbar__wrapper');
const openNavbar = document.querySelector('.navbar__toggle-open');
const closeNavbar = mobileNavbar.querySelector('.navbar__toggle-close');

function toggleNavbarOpen(e) {
    mobileNavbar.classList.remove('hidden');
}

function toggleNavbarClosed(e) {
    mobileNavbar.classList.add('hidden');
}

openNavbar.addEventListener('click', toggleNavbarOpen);
closeNavbar.addEventListener('click', toggleNavbarClosed);

// Features Tabs
const tabs = document.querySelector('.features__tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"'));

function handleTabClick(event) {
    // make all panels hidden
    tabPanels.forEach(panel => panel.classList.add('hidden'));

    // mark all buttons as unselected
    tabButtons.forEach(button => {
        button.setAttribute('aria-selected', false);
    });

    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

    //find associated tabpanel and show it
    const { id } = event.currentTarget;
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.classList.remove('hidden');
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));


// FAQ Accordion
const accoridan = document.querySelector('.faq__accordion-wrapper');
const accordionButtons = accoridan.querySelectorAll('.faq__accordion-button');
const accordionPanels = Array.from(accoridan.querySelectorAll('.faq__accoridan-panel'));

function handleAccordionClick(event) {
    event.currentTarget.classList.toggle('faq__accordion-button--active');

    let panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }

}

accordionButtons.forEach(button => button.addEventListener('click', handleAccordionClick));

// Validate Email Address

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const email = document.querySelector('.cta__input');
const emailButton = document.querySelector('.cta__contact-container .btn--alt');
const emailErrorMessage = document.querySelector('.cta__error-message');

function validateEmail(e) {
    e.preventDefault;
    console.log(e.currentTarget);
    console.log(email.value);
    if (!email.value.match(mailformat)) {
        emailErrorMessage.classList.remove('hidden');
    }
}

emailButton.addEventListener('click', validateEmail);