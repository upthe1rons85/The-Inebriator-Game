

function Start() {

flickerLight();



}



function Update () {
}



function flickerLight() {

for (var x = 1; x > 0; x++) {

    
 yield WaitForSeconds(1);


 gameObject.light.intensity += 1;
 
  yield WaitForSeconds(1);
  
  
  gameObject.light.intensity = 0;
 
 }



    
}