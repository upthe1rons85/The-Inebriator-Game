#pragma strict
@script RequireComponent( AudioSource )

public var Player : Transform;
private var Enemigo : Transform;

public var speed : float = 5.0;

var isOffScreen : boolean = false;
public var offscreenDotRange : float = 0.7;

var isVisible : boolean = false;
public var visibleDotRange : float = 0.8;

var isInRange : boolean = false;

public var followDistance : float = 24.0;
public var maxVisibleDistance : float = 25.0;

public var reduceDistAmt : float = 3.1;

private var sqrDist : float = 0.0;

public var health : float = 100.0;
public var damage : float = 20.0;

public var enemySightedSFX : AudioClip;

private var hasPlayedSeenSound : boolean = false;

private var colDist : float = 5.0;


function Start() 
{
	if ( Player == null )
	{
		Player = GameObject.Find( "Player" ).transform;
	}
	
	Enemigo = transform;
}

function Update() 
{
	CheckIfOffScreen();
	if ( isOffScreen )
	{
		MoveEnemy();
		RestoreHealth();
	}
	else
	{
		CheckIfVisible();	
		if ( isVisible )
		{
			DeductHealth();
			StopEnemy();
			
			if ( !hasPlayedSeenSound )
			{
				audio.PlayClipAtPoint( enemySightedSFX, Player.position ); 
			}
			hasPlayedSeenSound = true; 
		}
		else
		{
			CheckMaxVisibleRange();
			if ( !isInRange )
			{
				MoveEnemy();
			}
			else
			{
				StopEnemy();
			}
			
			hasPlayedSeenSound = false;
		}
	}
	
}


function DeductHealth() 
{
	health -= damage * Time.deltaTime;
	
	if ( health <= 0.0 )
	{
		health = 0.0;
		Debug.Log( "Se te acabo la vida!" );
		
		Application.LoadLevel( "GameOver" );
	}
}


function RestoreHealth() 
{
	health += damage * Time.deltaTime;
	
	if ( health >= 100.0 )
	{
		health = 100.0;
	}
}


function CheckIfOffScreen() 
{
	var fwd : Vector3 = Player.forward.normalized;
	var other : Vector3 = (Enemigo.position - Player.position).normalized;
	
	var theProduct : float = Vector3.Dot( fwd, other );
	
	if ( theProduct < offscreenDotRange )
	{
		isOffScreen = true;
	}
	else
	{
		isOffScreen = false;
	}
}


function MoveEnemy() 
{
	CheckDistance();
	
	if ( !isInRange )
	{
		rigidbody.velocity = Vector3( 0, rigidbody.velocity.y, 0 );
		
		var dir : Vector3 = ( Player.position - Enemigo.position ).normalized;
		var hit : RaycastHit;
		
		if ( Physics.Raycast( Enemigo.position, Enemigo.forward, hit, colDist ) )
		{
			if ( hit.collider.gameObject.name != "Player" && hit.collider.gameObject.name != "Terrain" )
			{			
				dir += hit.normal * 20;
			}
		}
	
		var rot : Quaternion = Quaternion.LookRotation( dir );
	
		Enemigo.rotation = Quaternion.Slerp( Enemigo.rotation, rot, Time.deltaTime );
		Enemigo.position += Enemigo.forward * speed * Time.deltaTime;
		
	}
	else
	{
		StopEnemy();
	}
}


function StopEnemy() 
{
	transform.LookAt( Player );
	
	rigidbody.velocity = Vector3.zero;
}


function CheckIfVisible() 
{
	var fwd : Vector3 = Player.forward.normalized;
	var other : Vector3 = ( Enemigo.position - Player.position ).normalized;
	
	var theProduct : float = Vector3.Dot( fwd, other );
	
	if ( theProduct > visibleDotRange )
	{
		CheckMaxVisibleRange();
		
		if ( isInRange )
		{
			var hit : RaycastHit;
			
			if ( Physics.Linecast( Enemigo.position + (Vector3.up * 1.75) + Enemigo.forward, Player.position, hit ) )
			{
				Debug.Log( "Te vio!! " + hit.collider.gameObject.name );
				
				if ( hit.collider.gameObject.name == "Player" )
				{
					isVisible = true;
				}
			}
		}
		else
		{
			isVisible = false;
		}
	}
	else
	{
		isVisible = false;
	}
}


function CheckDistance() 
{
	var sqrDist : float = (Enemigo.position - Player.position).sqrMagnitude;
	var sqrFollowDist : float = followDistance * followDistance;
	
	if ( sqrDist < sqrFollowDist )
	{
		isInRange = true;
	}
	else
	{
		isInRange = false;
	}	
}


function ReduceDistance() 
{
	followDistance -= reduceDistAmt;
}


function CheckMaxVisibleRange() 
{
	var sqrDist : float = (Enemigo.position - Player.position).sqrMagnitude;
	var sqrMaxDist : float = maxVisibleDistance * maxVisibleDistance;
	
	if ( sqrDist < sqrMaxDist )
	{
		isInRange = true;
	}
	else
	{
		isInRange = false;
	}	
}

function OnGUI()
{
    GUI.Box( Rect( (Screen.width * 0.5) - 60, Screen.height - 35, 120, 25 ), "Vida : " + parseInt( health ).ToString() );
}


