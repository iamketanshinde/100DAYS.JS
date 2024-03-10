const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels =Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleclicktab(event){
   //hide all tab panels
   tabPanels.forEach(panel =>{
    panel.hidden=true;
   });
   //mark all tabs as unselected
   tabButtons.forEach(tab=>{
    tab.setAttribute('aria-selected',false);
   })
   //mark click tab as selected
   event.currentTarget.setAttribute('aria-selected',true);
   //find the associated tabpanel to show
   const {id}=event.currentTarget;



   //method 1
//    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
//   console.log(tabPanel);
//   tabPanel.hidden = false;

//method 2
console.log(tabPanels);
const tabPanel = tabPanels.find(
  panel => panel.getAttribute('aria-labelledby') === id
);
tabPanel.hidden = false;
}

tabButtons.forEach(button =>button.addEventListener('click',handleclicktab));