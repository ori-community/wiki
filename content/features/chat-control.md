---
title: Chat control
tags:
- feature
---

Chat Control is a feature of the randomizer which lets your Twitch chat to interact with your game in various ways through the use of either chat commands or channel rewards. You can set up this feature in the [launcher](/features/launcher), by clicking on the three dots at the top and then selecting Chat Control. You'll then need to connect to your Twitch account in order to access the configuration tool.

## Commands

Once you're connected, you will be able to either add a new command or import existing ones by clicking respectively on the ADD COMMAND button or the button next to it and opening a .wotwcc file.

By clicking on the Add Command button, a new window will open asking for a command name, a trigger and a script.
* The name is displayed in the Chat Control editor. It is irrelevant to your viewers.
* The trigger controls how your Twitch chat will be able to execute the command. It can be either a chat command or an existing channel reward. The same command can have multiple triggers. You can delete a trigger by clicking on the bin icon.
* The script is the actual action your command will execute (such as jumping, dashing...). See the next section for more information on how to write a script.

Once you created your commands, you can click on the Export button in order to share them with other players. This generates a .wotwcc file which contains the data of all your commands.

When importing commands which use channel rewards as a trigger, you will need to edit these commands by clicking on its name and then changing the trigger for one of our own channel reward (or use a chat command instead).

## Scripting language

When editing a command, you have to write a script which specify which action your command will execute. Here is the list of function used by this scripting language:
* `get(group, state)` returns the value of the specified Uber State. More information on what an Uber State is can be found [here](https://docs.google.com/document/d/1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU/edit#heading=h.ja4e5amk5hbm). 
* `set(group, state, value)` sets the value of the specified UberState.
* `var(name, value)` sets the value of a script variable. You can access that value by using vars.name (example: sets by using `var("foo", 10)` and access by using `vars.foo`. Note that the scope of a variable is limited to the command you are currently editing. If you want to share information between scripts, you will need to write your value to an Uber State instead (all states in the group 9 are all unused and specifically added by the randomizer in order to be used that way).
* `wait(seconds)` wait for the specified amount of time before continuing the script. Note that the script have to finish to execute before the command can be called again.
* `action(id, pressed)` performs the specified action. You can find a list of all possible actions' id [here](https://github.com/ori-rando/wotw-client/blob/dev/projects/InjectDLL/enums/actions.h). This function simulates pressing a button; the pressed argument is used in order to specify if the action is being pressed or released by using respectively true or false. Note that an action won't release by itself: if you want to do a script which makes Ori jump you have to write `action("Jump", true)` to jump, followed by `wait(0.1)` in order to be sure the game will interpret your input and finally `action("Jump", false)` in order to release the Jump action. If you're not adding the releasing action, this will prevent you from jumping again since the game will think you are still holding your jump button.
* `setVelocity(x, y)` sets Ori's velocity. Positive x values move Ori to the right while negative values move them to the left. Positive y values move Ori upwards and negative values move them downward.
* `getValocity()` returns Ori current velocity.
* `random()` returns a random number between 0 and 1.
* `random(bound)` returns a random number between 0 and the specified bound.
* `random(min, max)` returns a random number between the specified min and max values.

## Script examples

Set Ori's health to 1 health cell:
```
set(15, 11, 10)
```
--- 

Use the ability in the bottom left slot:
```
action("Ability1", true)
wait(0.1)
action("Ability1", false)
```
--- 

Set Ori's velocity to a random value:
```
setVelocity(random(-30, 30), random(-30, 30))
```
---

Increase Ori's energy by 1 :
```
set(15, 13, get(15, 13) + 1.0)
```
---

Invert control:
```
set(15, 110, get(15, 110) == 1 ? 0 : 1)
set(15, 111, get(15, 111) == 1 ? 0 : 1)
```
