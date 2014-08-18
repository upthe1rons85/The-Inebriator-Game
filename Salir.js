
#pragma strict

function Start ()
{
	
}

function Update () 
{
	if (Input.GetKey ("escape"))
		{
			Application.Quit();
		}

	if(Input.GetKeyDown("r"))
		{
			Application.LoadLevel("Nivel01");
		}
		
	if(Input.GetKeyDown("m"))
		{
			Application.LoadLevel("MenuInicio");
		}
}