// constant variables.//
const menuOriginal = document.querySelector('.menu');
const menu = menuOriginal.cloneNode(true);
const cancelBtn = document.createElement('img');
const wrapper = document.createElement('div');
const hamburger = document.querySelector('.mobile img');
const home = document.querySelector('.home-page');
const menuChilds = Array.from(menu.children);
const menuStyle = {
  backgroundColor: '#ec5242',
  width: '60%',
  height: '20%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '15px',
};
const achronStyle = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: '"Lato", sans-serif',
  fontSize: '26px',
  fontWeight: '700',
  verticalAllign: 'center',
  marginLeft: '5%',
};
// prepare the menu.//
wrapper.style.backgroundColor = 'rgb(30,42,53)';
wrapper.style.position = 'absolute';
wrapper.style.width = '100%';
wrapper.style.top = '0';
wrapper.style.height = '100%';
cancelBtn.src = 'statics/images/Icon_Cancel.png';
cancelBtn.alt = 'Cancel Button';
wrapper.appendChild(cancelBtn);
wrapper.appendChild(menu);
cancelBtn.style.float = 'right';
cancelBtn.style.marginRight = '3%';
cancelBtn.style.marginTop = '2%';
cancelBtn.style.width = '8%';
menu.style.clear = 'both';
menu.style.marginTop = '15%';
menu.style.flexDirection = 'column';
menu.style.alignItems = 'center';
menu.style.height = '60%';
menu.style.padding = '0';
menu.style.listStyle = 'none';
menuChilds.forEach((element) => {
  element.style.height = '15%';
  element.style.marginBottom = '5%';
  Object.keys(menuStyle).forEach((st) => {
    element.style[st] = menuStyle[st];
  });
  Object.keys(achronStyle).forEach((prop) => {
    element.children[0].style[prop] = achronStyle[prop];
  });
});

// utilities//
function displayMenu() {
  menu.style.display = 'flex';
  home.appendChild(wrapper);
  wrapper.style.zIndex = '999';
  home.style.position = 'fixed';
  wrapper.style.display = 'block';
}
function closeMenu() {
  wrapper.style.display = 'none';
  home.style.position = 'absolute';
}
// track events.//
hamburger.addEventListener('click', displayMenu);
cancelBtn.addEventListener('click', closeMenu);
