---
title: Unsafe
tags:
- logic group
---

Unsafe is a difficulty setting you can enable from the [Paths tab](/seedgen/paths) of the [Seed Generator](/seedgen). This difficulty is the one above the [Gorlek difficulty](/seedgen/paths/gorlek) and is a collection of paths which have not been sorted in any difficulty group yet, either because they are too hard for the currently designed difficulties or because they aren't following the rules of the other difficulty.

Unlike other difficulty, unsafe paths aren't validated which means (even though it should be rare) it's possible to get a softlockable seed where the randomizer might expects something from you which isn't actually possible.

Since Unsafe doesn't have any guideline, it can ask you to use a lot of different things. Here is a non-exhaustive list of things which can be required in unsafe:

## Glitchless

- A path that requires more than one damage boost
- Swimming through dirty water
- Using Bash to reposition enemies
- [Energy weapons for movement](/tutorials/movement/weapon-energy-movement)
- Using Deflector, Grenade or Sentry to [redirect projectiles](/tutorials/misc/projectile-redirection)
- [Bash glide](/tutorials/movement/bash-glide)
- [Dash ramp](/tutorials/movement/dash-ramp)
- [Sword pogo](/tutorials/movement/sword-pogo)
- [Grenade to go through darkness in Depths](/tutorials/area-specific/light-sources)

Unsafe logic is also removing all requirement in order to enter Woods, Pools, Depths, Baur, Wastes and Willow while other difficulty logically requires you to have Regenerate in order to access those areas.

## Toggleable Glitches

On top of the Glitches added in logic in [Gorlek](/seedgen/paths/gorlek), Unsafe also let you toggle these glitches:

- [Sentry Break](/tutorials/misc/wall-break#sentry) is a way to break wall from the wrong side by using Sentry.
- [Spear Break](/tutorials/misc/wall-break#spear) is a way to break small wall from the wrong side by clipping Spear into walls.
- [Hammer Break](/tutorials/misc/wall-break#hammer) is a way to break wall from the wrong side by using Hammer.

## Non toggleable Glitches

Unsafe also add these glitches in logic but since the Seed Generator doesn't provide any options to disable them (yet!), these will be added by default just like Glitchless paths.

- [Grenade Jumps](/tutorials/movement/grenade-jumps)
- [Hammer jumps](/tutorials/movement/hammer-jumps)
- [Sword jumps](/tutorials/movement/sword-jumps)
- [Glide jumps](/tutorials/movement/glide-jumps)
- Aerial [sentry jumps](/tutorials/movement/sentry-jumps#aerial-sentry-jumps)
- [Pause floats](/tutorials/movement/pause-float)