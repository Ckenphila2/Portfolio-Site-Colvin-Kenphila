console.log("Hi! Welcome to My Portfolio Site");
// function menuToggle() {
//     var x = document.getElementById('myNavtoggle');
//     if (x.className === 'navtoggle') {
//         x.className += ' responsive';
//       } else {
//         x.className = 'navtoggle';
//       }
// }

function toggleIcon() {
  var icon = document.getElementById('menuIcon');
  if (
    icon.classList.contains('fa-bars')
    ) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-x');
  } else {
      icon.classList.remove('fa-x');
      icon.classList.add('fa-bars');
  }
  menuToggle();
}

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
}