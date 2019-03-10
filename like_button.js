function CalcValue(){
  var value = document.getElementById('rangeone');
  var scrn = document.getElementById('text1');
  scrn.value = value.value;
  var temp = value.value/10000;
  value.style.background = `linear-gradient(to right, #5bc99c 0%, #5bc99c ${temp}%, #ececec ${temp}%, #ececec 100%)`;
}



function TapValue(){
  var value = document.getElementById('rangeone');
  var scrn = document.getElementById('text1');
  value.value = scrn.value;
  var temp = value.value/10000;
  value.style.background = `linear-gradient(to right, #5bc99c 0%, #5bc99c ${temp}%, #ececec ${temp}%, #ececec 100%)`;
}


function Savings(){
  var value = document.getElementById('rangetwo');
  var scrn = document.getElementById('current');
  scrn.innerHTML = value.value;
  var temp = value.value/227;
  value.style.background = `linear-gradient(to right, #5bc99c 0%, #5bc99c ${temp}%, #ececec ${temp}%, #ececec 100%)`;
}


function Choise1(){
  document.getElementById('selected').innerHTML = 'lorem ipsum<i class="fa fa-angle-down" id="arrow" ></i>';
}
function Choise2(){
  document.getElementById('selected').innerHTML = 'Someshit2<i class="fa fa-angle-down" id="arrow" ></i>';
}
function Choise3(){
  document.getElementById('selected').innerHTML = 'Someshit3<i class="fa fa-angle-down" id="arrow" ></i>';
}
