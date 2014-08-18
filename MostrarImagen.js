#pragma strict
@script RequireComponent( AudioSource )

var Sonido : AudioClip;
var Esperar : float = 10;
var tiempoEnPantalla : float = 10;
var tiempoParaRepetir : float = 1;
var repetir : int = 5;
var Imagen : Texture; 
private var Mostrar : boolean = false;
private var ciclo : int = 0;
 
function Start() {
	yield WaitForSeconds(Esperar);
    MuestraImagen();
}
 
function OnGUI() {
    if (Mostrar) {
    	if(!Imagen){
			return;
		}
		GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), Imagen);
    }
}
 
function MuestraImagen() {
    while (ciclo < repetir) {
    	audio.PlayOneShot(Sonido);
    	Mostrar = true;
    	yield WaitForSeconds(tiempoEnPantalla);   	
    	Mostrar = false;
    	yield WaitForSeconds(tiempoParaRepetir);
    	ciclo += 1;
    }
}