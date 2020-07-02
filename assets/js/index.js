


/* screen navigation functions vanilla js */

document.getElementById("body").onload = function () {
  initAssets()
}
function initAssets() {
  var init = document.getElementById('assets')
  console.log(init)
  init.classList.add('active')
}

/* navigation links */

function showAssets(id, itemNum, item) {
  var screen = document.querySelector('.screen.active')
  var elem = document.querySelector(id)
  var activeItem = document.querySelector('.menu-item.active')
  var setActive = document.querySelector(item)
  console.log(screen, elem, activeItem, item)

  screen.classList.toggle('active')
  elem.classList.toggle('active')
  activeItem.classList.toggle('active')
  setActive.classList.toggle('active')

  console.log(screen, elem, activeItem, item)
}


/* Back function */
function back() {
  window.history.back();
}





/** screen navigation functions jQuery */
/*
function showAssets(id, item) {
  $(".screen").hide();
  $(id).show();
  $(".menu").removeClass("active");
  $(".menu").eq(item).addClass("active");
}
*/
