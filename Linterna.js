#pragma strict

var Linterna : GameObject;

function Update () {
	
	if(Input.GetKeyDown("f")){
		Debug.Log("Presiono f");
		if(Linterna.active == true ){
			Linterna.active = false;
		}
		else{
			Linterna.active = true;
		}
	}
	
}