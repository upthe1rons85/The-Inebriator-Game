
#pragma strict

function Start ()
{
	
}

function Update () 
{
	if(Input.GetKeyDown("escape"))
		{
			Application.LoadLevel("MenuInicio");
		}
}