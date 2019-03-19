// checks the player's height to see if under water level
// if under water, bubbles particle effect set to active, and fog colour and density is updated in the render settings
var waterLevel : float;
var bubbles : GameObject;
private var isUnderwater : boolean;
private var normalColor : Color;
private var underwaterColor : Color;

function Start ()
{
	normalColor = new Color (0.5f, 0.5f, 0.5f, 0.5f);
	underwaterColor = new Color (0.50f, 0.65f, 0.65f, 0.0f);
	RenderSettings.fog = true;
}

function Update ()
{
	if((transform.position.y < waterLevel) != isUnderwater)
	{
		isUnderwater = transform.position.y < waterLevel;
		if (isUnderwater) 
		{
			SetUnderwater ();
		}
		else
		{
			SetNormal ();
		}
	}
}

function SetNormal ()
{
	bubbles.SetActive(false);
	RenderSettings.fogColor = normalColor;
	RenderSettings.fogDensity = 0.002f;
}

function SetUnderwater ()
{
	bubbles.SetActive(true);
	RenderSettings.fogColor = underwaterColor;
	RenderSettings.fogDensity = 0.03f;
}

// rewrite in C# - out of time
// height check no longer required - player underwater for the entire experience - could have set the render settings in the inspector instead