'use strict';

const moveTo = new MoveTo();
const menuTrigger = document.getElementById('menu-trigger');
const menuNav = document.getElementById('menu-nav');
const triggers = document.querySelectorAll('.js-trigger');

menuTrigger.addEventListener('click', function () {
  menuNav.classList.toggle('opened');
});

triggers.forEach(function (trigger) {
  moveTo.registerTrigger(trigger);
});
