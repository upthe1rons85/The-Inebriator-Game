#pragma strict
@script RequireComponent( AudioSource )

var Sonido : AudioClip;
var Imagen : Texture; 
private var Mostrar : boolean = false;

 
function Start() {
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
 
function MuestraImagen() 
{
    	audio.PlayOneShot(Sonido);
    	Mostrar = true;   	
}