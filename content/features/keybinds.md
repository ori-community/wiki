---
title: Keybinds
tags:
- feature
---

Though they are not related to the randomizer, the Ori speedrun community do have some rules regarding bind. If you are playing by yourself you can ignore them but when playing races, some organizator might want you to follow variants of these rules:
* You can use third party software.
* You can have a bind on every button, except for the scroll wheel.
* Multibinds are allowed but macros are not (having multiple actions on the same button is allowed but every action has to resolve on the same frame).
* You can’t bind the same action (dash, jump…) to more than 4 buttons (because the ingame rebinding tool doesn’t allow it either)

Changing up your binds can be really useful, especially if you are playing in with glitches such as [Sentry Jumps](/tutorials/movement/sentry-jumps) or if you are playing on a controller but want to use [randomizer's special commands](/features/special-commands) more easily.

The most used binds are [Alt+P](/features/special-commands), [sentry jumps](/tutorials/movement/sentry-jumps) and [grenade jump](/tutorials/movement/greande-jumps).


## Keyboard

You can already change your controls in the in-game rebinding tool but this one is a bit limited since you won’t be able to use multibinds. If you only want to change your control, feel free to use it nonetheless.

## KeyRebind.txt

If you go to `AppData\Local\Ori and the Will of The Wisps`, you will find the file `KeyRebindings.txt`. By opening this file with a text editor like Notepad, you can change your binds.
Each action can be bound to 4 buttons, each one for a different control scheme. The file format is:

Action: Button1, Button2, Button3, Button4

To specify a button, you have to use their Unity Keycode, which you can find on [this page](https://docs.unity3d.com/ScriptReference/KeyCode.html).
Switching from one control scheme to another will freeze your game a bit so you want your multibind on the same control scheme.

Don’t forget to reload your game after you modify this file. Avoid using the in-game binding tool if you have edited this file by yourself since the in-game tool might delete some of your binds if you do so.

## Third party software

There is a bunch of third party software you can use to bind your actions. The most popular one being [AutoHotKey](https://www.autohotkey.com/) which lets you run a script in which you can specify what binds you want. AutoHotKey can also support macros so it is more versatile than the KeyRebinding file from Ori and the Will of the Wisps. You can learn how to use this tool be reading the [documentation](https://www.autohotkey.com/docs/AutoHotkey.htm).

## Controllers

Controller rebinding is a bit harder than keyboard rebinding since you can’t use any in-game solutions. There’s also a rebinding file called `ControllerButtonRemaps.txt` but as far as we know, this file isn’t working properly so it’s not recommended to use it.

If you are playing through Steam, the recommended tool is Steam Config. Caeyo has written a tutorial on how to use it, which you can found [here](https://www.speedrun.com/ori_wotw/guide/qc9ed).
You can also use some third party software like [antimicro](https://github.com/AntiMicro/antimicro/releases/tag/2.23) if you can’t use Steam Config.
