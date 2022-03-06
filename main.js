function dis(val){
  document.getElementById('result').value+=val;
}
function sol(){
  let x =
  document.getElementById('result').value;
  let y = eval(x) 
  if(isFinite(y)){
  document.getElementById('result').value=y;
  }
  else{
     erro('Não e possivel ÷ por 0');
  }
 
}
function clr(){
  document.getElementById('result').value='';
}

 function error(msg){
 const Error = msg;
   document.getElementById('result').value=Error;
   
 }
