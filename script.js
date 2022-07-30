// Features Tabs
const tabs = document.querySelector('.features__tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"'));

function handleTabClick(event) {
    // make all panels hidden
    tabPanels.forEach(panel => (panel.hidden = true));
    // mark all buttons as unselected
    tabButtons.forEach(button => {
        button.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

    //find associated tabpanel and show it
    const { id } = event.currentTarget;
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
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