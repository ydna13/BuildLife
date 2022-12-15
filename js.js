function gold(){ 
  var task = document.querySelector("#number3");
var el = document.querySelector("#gold");

  
  
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number3').value = value;
  
  if (value > 7){
    el.setAttribute("visible",false);
  console.log('hidden');
  }
  else{
    el.setAttribute("visible",true);
  }
}














function gold2(){ 
  var task = document.querySelector("#number4");
var el = document.querySelector("#gol");
var log = document.querySelector("#log");
  
  
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number3').value = value;
  
  if (value > 7){
    el.setAttribute("visible",false);
     log.setAttribute("visible",true);
  console.log('hidden');
  }
  else{
    el.setAttribute("visible",true);
    log.setAttribute("visible",false);
  }
}


































