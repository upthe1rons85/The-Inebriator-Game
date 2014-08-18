using UnityEngine;
using System.Collections;
 
public class Aparicion : MonoBehaviour {
 
    public float distanciaPlayer = 3F;
 
    public float minTiempoVisto = 1F;
    public float maxTiempoVisto = 1F;
 
    private Transform cam;
 
    public void Spawn () {
 
        StartCoroutine ( RandomEncounter () );
 
    }
 
    void Start () {
 
        //Get Camera Transform
        cam = Camera.mainCamera.transform;
 
        //Hide
        renderer.enabled = false;

			Spawn ();
 
    }
 
    private IEnumerator RandomEncounter () {
 		for (int i = 0; i < 25; i++) {
			//Adding another yeild statement like the one below here will cause a random delay before spawning
			yield return new WaitForSeconds (200);
			//Show Again
			renderer.enabled = true;
			
			//Set the position in front of the player
			Vector3 pos = cam.forward;
			pos *= distanciaPlayer;
			pos += cam.position;
			
			transform.position = pos;
			
			//Wait A Random Interval Of Time Before Disapearing
			yield return new WaitForSeconds (Random.Range (minTiempoVisto, maxTiempoVisto));
			
			//Hide Again
			renderer.enabled = false;
			
			//If the enemy has a collider attached move it somewhere where it won't be in the way or destroy it here
			Destroy (collider);
		}
		
	}
	
}