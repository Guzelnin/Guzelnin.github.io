function victory() {
  let m = document.querySelector(".main");
  console.log(m.className);
  m.className = "trans_main";

  let fire = document.createElement('div');
  fire.className = "fire";
  fire.innerText = "It's a WIN!!! YAAAAAAY!!!";

  let fire_img = document.createElement('img');
  fire_img.className = 'fire_img';
  fire_img.src = "https://www.toilaspa.ee/wp-content/uploads/2020/09/giphy.gif";

  let btn = document.createElement('button');
  btn.innerText = 'Try again';

  fire.appendChild(fire_img);
  fire.appendChild(btn);

  document.body.appendChild(fire);

  btn.addEventListener('click', function() {
    location.reload();
  });
}
function stepsCount(count) {
  let st = document.createElement('div');
  st.innerText = count;
  let step = document.querySelector('.steps');
  step.removeChild(step.lastChild);
  step.appendChild(st);

}

let count = 0;
let position = 0;
let win = 0;
let points = document.querySelectorAll(".pnt");
let climber0 = document.createElement("img");
climber0.src = "./img/climber.png";
climber0.className = "climber";
climber0.alt = '';
points[0].appendChild(climber0);

let s = document.querySelector('.steps');
let text = document.createElement('div');
text.innerText = "0";
s.appendChild(text);

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyZ') {
    if (position > 0 && win == 0) {
      position -= 1;
      let climber = document.createElement("img");
      climber.src = "./img/climber.png";
      climber.className = "climber";
      climber.alt = '';
      points[position].appendChild(climber);
      let oldElem = points[position+1];
      oldElem.removeChild(oldElem.firstChild);
      stepsCount(++count);
    }
  } else if (event.code == 'KeyX') {
    if (position < 5 && win == 0) {
      let oldElem = points[position];
      oldElem.removeChild(oldElem.firstChild);
      position += 1;
      let climber = document.createElement("img");
      climber.src = "./img/climber.png";
      climber.className = "climber";
      climber.alt = '';
      points[position].appendChild(climber);
      stepsCount(++count);
    } else if (position == 5 && win == 0) {
      stepsCount(++count);
      let oldElem = points[position];
      oldElem.removeChild(oldElem.firstChild);
      position += 1;
      let climber = document.createElement("img");
      climber.src = "./img/climber.png";
      climber.className = "climber";
      climber.alt = '';
      points[position].appendChild(climber);
      let flag = document.createElement("img");
      flag.src = "./img/win.gif";
      flag.className = "flag";
      flag.alt = '';
      document.body.appendChild(flag);
      win = 1;
      flag.className = "flag_trans";
      victory();
    }
  }
});
