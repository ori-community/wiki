---
title: Keybinds
tags:
- feature
---

Modifying your binds can be really useful, especially if you are playing with glitches which are often requiring pressing multiple buttons at the same time or in quick succession. This page will go through multiple options for rebinding such as the feature accessible from the settings' tab of the [Launcher](/features/launcher).

Though they are not directly related to the randomizer, the Ori speedrun community do have some rules regarding bind. If you are playing by yourself you can ignore them but when playing races, some organizator might want you to follow variants of these rules:
* You can use third party software.
* You can have a bind on every button, except for the scroll wheel.
* Multibinds are allowed but macros are not (having multiple actions on the same button is allowed but every action has to resolve on the same frame).
* You can’t bind the same action (dash, jump…) to more than 4 buttons (because the ingame rebinding tool doesn’t allow it either)

## Controllers

In the vanilla game, there isn't any option to rebind your controls on controller. But rest assured, the randomizer does add a simple way to rebind your inputs!

To do so, go to the Settings tab of the [Launcher](/features/launcher) and then click on the Controller tab. From here, connect a controller and press any input.
You'll see a list of every possible actions. The one with a chain symbol are the one which already have a bind assigned to them and the one without this symbol are missing a bind.

You can click on "Add bind" for any action and press a button on your controller to bind that action to this button. You can also click on the X button near a bind in order to remove this bind from an action. For randomizer-only actions, it's also possible to hold your button while adding a bind in order to add a combination of buttons for this action.

Any changes to binds are automatically saved. You can return to the default keybinds by clicking on the Reset All To Default button, at the end of the page.

## Keyboard

Like for Controllers, the randomizer add a way to rebind your inputs but, since it's already possible to rebind your controls in-game, the tool available in the Settings tab of the [Launcher](/features/launcher) only let you rebind randomizer-only actions.

To use this tool, once in the Settings tab of the randomizer, go to the keyboard tab. From here, you'll see a list of every randomizer-only action. The one with a chain symbol are the one which already have a bind assigned to them and the one without this symbol are missing a bind.

You can click on "Add bind" for any action and press a key on your controller to bind that action to this button and then click on the Save button. It's possible to press multiple buttons in order to bind an action to a button combination instead of a single key. You can also click on the X button near a bind in order to remove this bind from an action.

Any change to binds are automatically saved. You can return to the default keybinds by clicking on the Reset All To Default button, at the end of the page.

The in-game rebinding tool is a bit limited, especiall because it doesn't support multibind. But if you go to AppData\Local\Ori and the Will of The Wisps, you will find the file KeyRebindings.txt. By opening this file with a text editor like Notepad, you can change your binds.
Each action can be bound to 4 buttons, each one for a different control scheme. The file format is:

Action: Button1, Button2, Button3, Button4

To specify a button, you have to use their Unity Keycode, which you can find on [this page](https://docs.unity3d.com/ScriptReference/KeyCode.html).
Switching from one control scheme to another will freeze your game a bit so you want your multibind on the same control scheme.

Don’t forget to reload your game after modifying this file. Avoid using the in-game binding tool if you have edited this file by yourself since the in-game tool might delete some of your binds if you do so.

## Third party solutions

If the first party and randomizer rebinding features aren't enough, there is a bunch of third party software you can use to bind your actions. The most popular one being [AutoHotKey](https://www.autohotkey.com/) which lets you run a script in which you can specify what binds you want. AutoHotKey can also support macros. You can learn how to use this tool by reading the [documentation](https://www.autohotkey.com/docs/AutoHotkey.htm).

If you are playing on controller through Steam, the recommended tool is Steam Config. Caeyo has written a tutorial on how to use it, which you can found [here](https://www.speedrun.com/ori_wotw/guide/qc9ed). You can also use other software like [antimicro](https://github.com/AntiMicro/antimicro/releases/tag/2.23) if you can’t use Steam Config.