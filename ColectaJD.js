#pragma strict
@script RequireComponent( AudioSource )

var Botellas : int = 0;
var botellasParaGanar : int = 8;
var distanciaBotella : float = 2.5;
var botellaPickup : AudioClip;
var Enemigo : ScriptEnemigo;
var Becherovka : Texture;
var Beronia : Texture;
var BlackLabel : Texture;
var CourvoisierVSOP : Texture;
var JackDaniels : Texture;
var Martel : Texture;
var Ramazzotti : Texture;
var Woodford : Texture;
private var b1 : boolean = true;
private var b2 : boolean = true;
private var b3 : boolean = true;
private var b4 : boolean = true;
private var b5 : boolean = true;
private var b6 : boolean = true;
private var b7 : boolean = true;
private var b8 : boolean = true;

function Start() 
{
	Screen.lockCursor = true;
	if ( Enemigo == null )
	{
		Enemigo = GameObject.Find( "Enemigo" ).GetComponent( ScriptEnemigo );
	}
}

function Update() 
{ 
    if ( Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.E) ) 
    {
        var ray = Camera.main.ScreenPointToRay( Vector3( Screen.width * 0.5, Screen.height * 0.5, 0.0 ) );
        var hit : RaycastHit;
        if ( Physics.Raycast( ray, hit, distanciaBotella ) )
        {
            if ( hit.collider.gameObject.name == "Becherovka" )
            {
	            Botellas += 1;  
	            audio.PlayClipAtPoint( botellaPickup, transform.position ); 	            
	            Destroy( hit.collider.gameObject );	       
	            Enemigo.ReduceDistance();
	            b1 = false;
            }
            if ( hit.collider.gameObject.name == "Beronia" )
            {
	            Botellas += 1;  
	            audio.PlayClipAtPoint( botellaPickup, transform.position ); 	            
	            Destroy( hit.collider.gameObject );	       
	            Enemigo.ReduceDistance();
	            b2 = false;
            }
            if ( hit.collider.gameObject.name == "Black Label" )
            {
	            Botellas += 1;  
	            audio.PlayClipAtPoint( botellaPickup, transform.position ); 	            
	            Destroy( hit.collider.gameObject );	       
	            Enemigo.ReduceDistance();
	            b3 = false;
            }
            if ( hit.collider.gameObject.name == "Courvoisier VSOP" )
            {
	            Botellas += 1;  
	            audio.PlayClipAtPoint( botellaPickup, transform.position ); 	            
	            Destroy( hit.collider.gameObject );	       
	            Enemigo.ReduceDistance();
	            b4 = false;
            }
            if ( hit.collider.gameObject.name == "JD" )
            {
	            Botellas += 1;  
	            audio.PlayClipAtPoint( botellaPickup, transform.position ); 	            
	            Destroy( hit.collider.gameObject );	       
	            Enemigo.ReduceDistance();
	            b5 = false;
            }
            if ( hit.collider.gameObject.name == "Martel" )
            {
	            Botellas += 1;  
	            audio.PlayClipAtPoint( botellaPickup, transform.position ); 	            
	            Destroy( hit.collider.gameObject );	       
	            Enemigo.ReduceDistance();
	            b6 = false;
            }
            if ( hit.collider.gameObject.name == "Ramazzotti" )
            {
	            Botellas += 1;  
	            audio.PlayClipAtPoint( botellaPickup, transform.position ); 	            
	            Destroy( hit.collider.gameObject );	       
	            Enemigo.ReduceDistance();
	            b7 = false;
            }
            if ( hit.collider.gameObject.name == "Woodford" )
            {
	            Botellas += 1;  
	            audio.PlayClipAtPoint( botellaPickup, transform.position ); 	            
	            Destroy( hit.collider.gameObject );	       
	            Enemigo.ReduceDistance();
	            b8 = false;
            }
        }
    }
}


function OnGUI()
{
    if (b1 == false)
    {
		GUI.DrawTexture(Rect(1,25,80,46), Becherovka);
	}
	if (b2 == false)
    {
		GUI.DrawTexture(Rect(1,80,70,46), Beronia);
	}
	if (b3 == false)
    {
		GUI.DrawTexture(Rect(1,135,60,46), BlackLabel);
	}
	if (b4 == false)
    {
		GUI.DrawTexture(Rect(1,190,70,46), CourvoisierVSOP);
	}
	if (b5 == false)
    {
		GUI.DrawTexture(Rect(1,245,70,46), JackDaniels);
	}
	if (b6 == false)
    {
		GUI.DrawTexture(Rect(1,300,70,46), Martel);
	}
	if (b7 == false)
    {
		GUI.DrawTexture(Rect(1,355,60,46), Ramazzotti);
	}
	if (b8 == false)
    {
		GUI.DrawTexture(Rect(1,410,70,46), Woodford);
	}
	
	/*GUI.DrawTexture(Rect(1,25,80,46), Becherovka);
	GUI.DrawTexture(Rect(1,80,70,46), Beronia);
	GUI.DrawTexture(Rect(1,135,60,46), BlackLabel);
	GUI.DrawTexture(Rect(1,190,70,46), CourvoisierVSOP);
	GUI.DrawTexture(Rect(1,245,70,46), JackDaniels);
	GUI.DrawTexture(Rect(1,300,70,46), Martel);
	GUI.DrawTexture(Rect(1,355,60,46), Ramazzotti);
	GUI.DrawTexture(Rect(1,410,70,46), Woodford);*/
	
	GUI.Box( Rect( (Screen.width/2)-100, 10, 200, 35 ), "Encuentra las 8 botellas" );

    if ( Botellas < botellasParaGanar )
    {
		GUI.Box( Rect( 1, 1, 160, 25 ), "" + Botellas.ToString() + " botellas tomadas" );
    }
    else
    {
		Application.LoadLevel("JuegoCompleto");
    }
}
