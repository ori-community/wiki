---
title: Settings
tags:
- feature
---

In the [launcher](/features/launcher), you can access a Settings tab in which you can enable a bunch of options as well as [rebinding](/features/keybinds) your controls.
This page will explain what each settings from the General tab is doing.

## Cutscenes

Options to restore cutscenes which are normally removed from the game by the randomizer.

* Restore Short Cutscenes: Enable the short and unskippable cutscenes from the vanilla game which are removed by the randomizer
* Restore Long Cutscenes: Enable the long and unskippable cutscenes from the vanilla game which are removed by the randomizer

## Map

Options to disable some behavior of the in-game map.

* Hide Quest Filter: Hide the quest filter which show you only the quests location on your map
* Hide Warp Filter: Hide the warp filter which show you only the warps location on your map
* Hide Collectibles Filter: Hide the collectible filter which show you only the remaining pickups location on your map
* Always Show Warps: Always show the warps location on your map, no matter which filter you are using
* Disable World Map: In the vanilla game, when zooming out on the map, it will display a one-screen wild map with all the areas and the position of Ori. Enabling this option prevents the game from displaying this map
* Disable Quests Focus: In the vanilla game, if you are hovering over a quest on the quest list next to the map, the game will snap the map to the location of this quest. With this option, the game will require you to press your 3rd ability button (the bottom right one in the game UI) in order to scroll the map to the quest location instead of simply hovering the quest's name

## Control Options

Options which change how to control some abilities.

* Grapple Mouse Aiming: In the vanilla game, if you want to use grapple on something, you need to hold the direction toward this object to grapple it. With this enabled, you will be aiming with your mouse cursor rather than with your directional inputs
* Burrow Mouse Aiming: In the vanilla game, when using burrow you control Ori by using your directional inputs. With this option, you will control Ori's movement with your mouse cursor which lets you move in all directions rather than being limited to the 4 directions of your keyboard
* Swimming Mouse Aiming: In the vanilla game, when swimming in water you control Ori by using your directional inputs. With this option, you will control Ori's movement with your mouse cursor which lets you move in all directions rather than being limited to the 4 directions of your keyboard
* Invert Swim Speeds: In the vanilla game, holding the jump button makes Ori swims faster. With this option, Ori will be swimming at maximum speed by default and will be slowing down when holding your jump button
* Lock Cursor to Window: Prevents your mouse cursor from going outside of the game window
* Disable Autoaim: Spear, Bow and Shuriken are using an autoaim assist which can help aiming at targets. This option disable the autoaim on those weapons

## Miscellaneous

* Show Stats After Finish: When finishing a game, your [launcher](/features/launcher) will be displaying the [Statistics](/features/stats) of that game
* Random Currency Names: When collecting Spirit Light, the "Spirit Light" text will be a random currency name. This does not impact the actual gameplay
* Always Show Keystones: Display your keystone count in the top left corner at all time. Without this option, it would only appears when you are near a door
* Disable always showing secret areas: In the game, there's plenty of secret passages in order to get some pickups. The randomizer makes it easier to spot those secret passages by making them transparent (this is the same effect as having the Sense shard equipped). Enabling this option will make those secret passages opaque again

## Launch Settings

* Steam path: The path to your Steam execution file. If you own the Steam version of the game instead of the Windows Store one, make sure this path is correct. You can change this path by clicking the folder icon on the right
* Launch with Item Tracker: Automatically open the item tracker when launching the randomizer
* Disable Netcode: Prevents the randomizer from communicating with the rando server. With this option checked, bingo auto tracking and other netcode features related to [multiplayer](/features/multiplayer) will be unavailable
* Use Windows Store: Launch the randomizer using Windows Store instead of Steam

## Developer Tools

If you press Ctrl 5 times while on the Settings tab, a Developer Tools section will appears, with a bit more options.

* Enable Developper Tools: Automatically activated when pressing Ctrl 5 times. Unchecking it will hide Developer tools again
* Enable Debug Controls: Enable Debug Controls by default when starting the randomizer
* Update to prerelease versions: Let you play on the latest development versions. These version have more features but are also more unstable
* Server URL: Let you change on which server you want to send your netcode information to. Use dev.wotw.orirando.com for the dev server, which is used by the prereleased versions
* Wait for Debugger: The randomizer will wait for a debugger to attach before initialization. This is purely in order to debug the code
