#pragma strict
@script RequireComponent( AudioSource )

var InicioNivel : String;
var Sonido : AudioClip;
var Beep : AudioClip;
var BotonQuitar : boolean = false;
var Creditos : boolean = false;
function OnMouseEnter(){
audio.PlayOneShot(Sonido);
}
function OnMouseUp(){
audio.PlayOneShot(Beep);
yield new WaitForSeconds(0.35);
if(BotonQuitar){
Application.Quit();
}
else if(Creditos){
Application.LoadLevel("Creditos");
}
else{
Application.LoadLevel(InicioNivel);
}
}
