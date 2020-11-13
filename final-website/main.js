new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    scrollingSpeed: 700,
    keyboardScrolling: true,
    navigationTooltips: ['Home','Chinese Money Plant', 'Devils Ivy', 'Elephant Ear', 'Fiddle-leaf Fig', 'Fruit Salad Plant']
});


  (() => {
    const dialog = document.querySelector('.dialog-overview');
    const openButton = dialog.nextElementSibling;
    const closeButton = dialog.querySelector('sl-button[slot="footer"]');
    openButton.addEventListener('click', () => dialog.show());
    closeButton.addEventListener('click', () => dialog.hide());
  })();
