var new_box = document.createElement('a-box');
new_box.setAttribute('color', 'yellow');
new_box.setAttribute('box-colider', '');
document.querySelector('a-scene').appendChild(new_box);



document.addEventListener('click', () => {
  document.querySelectorAll('.permission_ui').forEach((del) => {
    del.setAttribute('class', 'deleted_ui');
  });
  document.getElementById('main').removeAttribute('style');
  document.getElementById('b1').removeAttribute('class');
  if (window.DeviceMotionEvent && window.DeviceMotionEvent.requestPermission) {
    DeviceMotionEvent.requestPermission()
                     .then((state) => {
                       if (state === 'granted') {
                         new_box.setAttribute('color', 'gray');
                       } else {
                         alert('動作と方向へのアクセスを許可してください');
                       }
                     })
                     .catch((err) => console.error(err));
                     new_box.setAttribute('color', 'white');
  } else {
    new_box.setAttribute('color', 'black');
  }
});