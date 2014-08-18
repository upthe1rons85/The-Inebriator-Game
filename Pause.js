var RegresarMenu : String;
var pauseMenuFont : Font;
private var pauseEnabled = false;	
var MyGuiSkin: GUISkin; /// skin Para los botones
var fondo : GameObject; /// fondo del menu

function Start(){
	pauseEnabled = false;
	Time.timeScale = 1;
	AudioListener.volume = 1;
	Screen.showCursor = false;
}

function Update(){

	//boton que llama el menu
	if(Input.GetKeyDown("p")){
	
		
		if(pauseEnabled == false){
			pauseEnabled = true;
			AudioListener.volume = 0;
			Time.timeScale = 0;
			Screen.showCursor = true;
		}
	}
}

////////////////////////////////////////////////////////////////////////
private var showGraphicsDropDown = false;

     function OnGUI () {

GUI.skin = MyGuiSkin;                     
GUI.skin.box.font = pauseMenuFont;
GUI.skin.button.font = pauseMenuFont;


if(pauseEnabled == true)
	{
		// fondo del menu
     	fondo.gameObject.active = true;
     
		// botones del menu

		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 110,250,50), "Regresar"))
			{
				//Vuelve al juego				
				if(pauseEnabled == true)
					{		
						fondo.gameObject.active = false;			
						pauseEnabled = false;
						Time.timeScale = 1;
						AudioListener.volume = 1;
						Screen.showCursor = false;			
					}
			}
				
// boton calidad visual del juego	
if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 60 ,250,50), "Calidad Grafica"))
	{			
			if(showGraphicsDropDown == false)
				{
					showGraphicsDropDown = true;
				}
			else
				{
					showGraphicsDropDown = false;
				}
	}

//funcion para la calidad de imagen del juego
		if(showGraphicsDropDown == true)
			{
				if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 ,250,50), "Fastest"))
					{
						QualitySettings.currentLevel = QualityLevel.Fastest;
					}
				if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 50,250,50), "Fast"))
					{
						QualitySettings.currentLevel = QualityLevel.Fast;
					}
				if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 100,250,50), "Simple"))
					{
						QualitySettings.currentLevel = QualityLevel.Simple;
					}
				if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 150,250,50), "Good"))
					{
						QualitySettings.currentLevel = QualityLevel.Good;
					}
				if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 200,250,50), "Beautiful"))
					{
						QualitySettings.currentLevel = QualityLevel.Beautiful;
					}
				if(GUI.Button(Rect(Screen.width /2 - 500,Screen.height /3.5 + 250,250,50), "Fantastic"))
					{
						QualitySettings.currentLevel = QualityLevel.Fantastic;
					}
				
				if(Input.GetKeyDown("escape"))
					{
						showGraphicsDropDown = false;
					}
			}


// volver a menu principal

		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 10,250,50), "Volver a menu principal" ))
			{
				Application.LoadLevel(RegresarMenu);
			}


// salir del juego

if (GUI.Button (Rect (Screen.width /2 - 150,Screen.height /2 +40,250,50), "Salir del juego"))
	{
		Application.Quit();
	}

	
}

}
