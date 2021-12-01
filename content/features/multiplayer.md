---
title: Multiplayer
---

The randomizer also adds the possibility to play with other players! To do so, you first want to [generate a seed](/seedgen) with the Multiplayer/Bingo option from the Generator tab enabled.

![Netcode in gui](/media/netcode.png)

Enabling that option will let you choose which kind of game you want to play from the dropdown just bellow. When you generate a seed from the [Launcher](/features/launcher), you will automatically get redirected to the Game tab. If you aren't connected, you will need to log in by clicking on the top right button. The connection is using [Discord](https://discord.com/) so please download it if you don't already have it.

Once you are redirected to the Game tab, you can click on the icon next to the game number to copy the link to this specific game in your clipboard and share it with the other players. Opening this link will open the same page as your Game tab in a web browser. They can then open the game in the launcher by clicking on the corresponding button.

From here, you will be able to settup each teams by either creating new Universes or joining an already existing one. Click on the Play button from the World you are in in order to launch your seed.

## Universe and Worlds

On the Game tab, you should see something like this:

![Universe example](/media/universe.png)

You will be either able to create a new universe or join a World. A World is each "box" inside a universe and they are automatically created when creating a new Universe. Each level have it's specificity:

* Each players inside the same World are playing in [Co-op](/features/multiplayer#co-op) and are sharing their pickups and states. They are playing the same seed.
* Each players inside the same Universe form a team. Players from the same Universe are sharing [Bingo](/features/multiplayer#bingo) goals and different Universes are playing aganst each others. Different Universes are separated from each other which means players from Universe A can't interact with players from Universe B.
* Each players inside different World from the same Universe are playing in [Multiworld](/features/multiplayer#multiworld). Everyone is playing in cooperation but players from different Worlds are playing different seeds. 

## Co-op

In Co-op, every player play on the same seed and share pickups so if a player from your team collects a pickup you will get the corresponding item aswell and the pickup will disappear from your game. This mode also shares game states so for example if your teammate opened the second room of Wellspring, it will be open for every other players aswell.

To play in Co-op, when enabling the Multiplayer option in the [seed generator](/seedgen), more options should show up. Select the Normal option from the dropdown and then generate your seed like any other seed. Then, share the link to your game by clicking on the button next to the game number in order to let the other players access your Game and download the seed. When you are on that page, either create a new Universe or join an already existing World. Every players which are on the same team must join the same World in order to share pickups. Different teams must be in a different Universe.

## Multiworld

Multiworld is a cooperative mode where players are playing on different seeds but you will found items for both you and other players in your own seed. This is different from a normal [co-op](/features/multiplayer#co-op) where when someone found Bash, it gives it to every players since, in multiworld, there is one copy of Bash for every Worlds and founding Bash for World A won't give Bash to players playing in World B. Your next logical progression can be placed in another seed than the one you are playing which means you can be blocked for a bit while waiting for someone else to find you another skill.

To generate a Multiworld seed, when enabling the Multiplayer option, more options should show up. In the Multiworld worlds names input field, write every worlds' names (press enter every time you finished entering one name) which should also set the dropdown to the Normal setting. Then, [generate your seed](/seedgen) like any other seed and download the one corresponding to your world. Next, copy the link to your game by cliking on the button next to the game number and share it with the other players in order to let them access your Game. When you are on that page, either create a new Universe or join a World inside an already existing Universe. Every Worlds must have at least one player.

You can play Multiworld against each other. To do so, every team must be in a different Universe.

You can also mix Multiworld with [Co-op](/features/multiplayer#co-op). Players can cooperate by playing on the same seed and joining the same World. By doing so, they will share pickups between themselves and will still found and receive pickups for other Worlds from their Universe.

## Bingo

Bingo is a mode which gives you a board with 25 objectives to complete. Your goal is to form lines with your completed objectives. It's recommanded to use the Bingo utilities [header](/seedgen/headers) which let you press [Alt+C](/features/special-commands) when you completed enough lines in order to start rolling the credits without having to fight Shriek. The randomizer automaticaly track your progress towards goals and will automaticaly claim goals you completed. Goals can vary from collecting pickups or trees to completing quests or doing specific actions like killing ennemies or rolling the snowball in Reach.

In order to generate a bingo seed, you first want to [generate a seed](/seedgen) with the Multiplayer option enabled. Select the Bingo variant you want to play with from the dropdown and then [generate your seed](/seedgen) like any other seed. Then, click on the button next to your game number in order to copy the link to your game and share it to the other players so they can join your Game. When you are on that page, either create a new Universe or join an already existing World. Every players which are on the same World will be playing in [Co-op](/features/multiplayer#co-op) and will be sharing goals. Players from different Universe are playing against each others.

It's also possible to mix [Multiworld](/features/multiplayer#multiworld) with Bingo. To do so, you need to generate a Multiworld seed but instead of selecting the Normal option from the dropdown, select the kind of bingo you want to play. Each players inside the same Universe will be sharing their goals.

Bingo have two different variants, which each add a little twist:

### Discovery bingo

Discovery Bingo is a variant of bingo where most goals will be hidden at first. This is the same as a normal bingo except that only 2 goals will be displayed from the 25 goals at first. When you complete one goal, the goal adjacent to the one you finished will be revealed. The autotracker will keep track of your progress towards hidden goals but they won't show up on the grid until you unlock them by completing a goal adjacent to them. When a completed goal is revealed, its adjacent goals will be revealed as well.

### Lockout bingo

Lockout Bingo is a variant of bingo where you can't validate a goal if another player already validated it. Since it's pretty hard to complete lines in this variant, the goal is to have more validated goals than the other players and not to form lines. This is usually played in 1 versus 1 so the first player with 13 completed goals from the 25 available one win the game.