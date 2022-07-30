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
