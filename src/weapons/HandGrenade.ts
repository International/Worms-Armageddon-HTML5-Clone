
///<reference path="BaseWeapon.ts"/>
///<reference path="ThrowableWeapon.ts"/>

class HandGrenade extends ThrowableWeapon
{

    constructor ()
    {
        super(
            "Hand Grenade", // Weapon name
            9, // ammo
            Sprites.weaponIcons.gernade, //Icon for menu
            Sprites.weapons.gernade, //Inital weapon object state
            Sprites.worms.takeOutGernade,
            Sprites.worms.aimGernade
        );

        // The area in pxiels that get cut out of the terrain
        this.explosionRadius = 80;

        // Force/worm damge radius
        this.effectedRadius = Physics.pixelToMeters(200);

        // force scaler
        this.explosiveForce = 100

        //hit damage at center
        this.maxDamage = 25;

        this.detonationTimer = new Timer(3000);
    }

    deactivate()
    {
        super.deactivate();
    }

}