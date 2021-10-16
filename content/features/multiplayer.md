---
title: Multiplayer
---

The randomizer also adds the possibility to play with other players! To do so, you first want to [generate a seed](/seedgen) with the Enable Netcode option enabled in the Generator tab.

![Netcode in gui](/media/netcode.png)

When you generate a seed from the [Launcher](/features/launcher), you will automatically get redirected to the Game tab. If you aren't connected, you will need to log in by clicking on the top right button. The connection is using [Discord](https://discord.com/) so please download it if you don't already have it.

Once you are redirected to the Game tab, you can hover your mouse on the arrow on the left to make a little pop-in appear. In this pop-in, there is a button to share your game; clicking on it will copy the link to your game in your clipboard which you need to share to the other players. Opening this link will open the same page as your Game tab in a web browser. From here, other players can open the pop-in on the left to either download the seed or opening the game in the [Launcher](/features/launcher) itself. From here, you will be able to settup each teams

## Universe and World

On the Game tab, you should see something like this:

![Universe example](/media/universe.png)

You will be either able to create a new universe, a new world inside an existing universe or joining an already created world. Each level have it's specificity:

* Each players inside the same world are playing in [Co-op](/features/multiplayer#co-op) and are sharing their pickups and states. They have to play on the same seed.
* Each worlds inside the same universe are sharing [Multiworld](/features/multiplayer#multiworld) pickups. Each worlds are playing in cooperation but players from World A are playing a different seed than players from World B.
* An universe can be seen as a team and each universes are playing against each others. Each players in an universe are sharing [Bingo](/features/multiplayer#bingo) goals. Different universes are separated from each other which means players from Universe A can't interact with players from Universe B. 

## Co-op

In Co-op, every player play on the same seed and share pickups so if a player from your team collects a pickup you will get that item aswell and the pickup will disappear from your game. This mode also shares game states so for example if your teammate opened the second room of wellspring, it will be open for every other players aswell.

To play in Co-op, when enabling the Netcode option in the [seed generator](/seedgen), more options should show up. Select the Normal option from the last dropdown and then generate your seed like any other seed. Then, use the share button in order to let the other players access your Game and download the seed. When you are on that page, either create a new Universe or join an already existing World. Every players which are on the same team must join the same World in order to share pickups. Different teams must be in a different Universe.

## Multiworld

Multiworld is a cooperative mode where players are playing on different seeds but, in you seed, you will found items for both you and other players. This is different from a normal [co-op](/features/multiplayer#co-op) where when someone found Bash, it gives it to every players. In multiworld, there is one copy of Bash for every Worlds and founding Bash for World A won't give Bash to players playing in World B. Your next logical progression can be placed in another seed than the one you are playing which means you can be blocked for a bit while waiting for someone else to find you another skill.

To generate a Multiworld seed, when enabling the Netcode option, more options should show up. In the Multiworld worlds names input field, write every worlds' names (press enter every time you finished entering one name) which should also set the dropdown to the Normal setting. Then, [generate your seed](/seedgen) like any other seed and download the one corresponding to your world. Next, use the share button in order to let the other players access your Game and let them download their own seed. When you are on that page, either create a new Universe or a new World inside an already existing Universe. There should be as many Worlds inside the same universe as there is seeds. Players from different Worlds must be playing on different seeds.

You can play Multiworld competitively. To do so, every team must be in a different Universe and each Universe must have as many worlds as there is seeds.

You can also mix Multiworld with [Co-op](/features/multiplayer#co-op). Players can cooperate by playing on the same seed and joining the same World. By doing so, they will share pickups between themselves and will still found and receive pickups for other Worlds from their Universe.

## Bingo

Bingo is a mode which gives you a board with 25 objectives to complete. Your goal is to form lines with your completed objectives. It's recommanded to use the 3-Line Bingo utilities [header](/seedgen/headers) which let you press [Alt+C](/features/special-commands) when you completed at least 3 lines in order to start rolling the credits without having to fight Shriek. The randomizer automaticaly track your progress towards goals and will automaticaly claim goals you completed. Goals can vary from collecting pickups or trees to completing quests or doing specific actions like completing killing ennemies or rolling the snowball in Reach.

In order to generate a bingo seed, you first want to [generate a seed](/seedgen) with the Netcode option enabled. Select the Bingo variant you want to play with from the last dropdown and then [generate your seed](/seedgen) like any other seed. Then, download the seed and use the share button in order to let the other players join your Game. When you are on that page, either create a new Universe or join an already existing World. Every players which are on the same World will be playing in [Co-op](/features/multiplayer#co-op) and will be sharing goals. Players from different Universe are playing against each others.

It's also possible to mix [Multiworld](/features/multiplayer#multiworld) with Bingo. To do so, you need to generate a Multiworld seed but instead of selecting the Normal option from the dropdown, select the kind of bingo you want to play. Each players inside the same Universe will be sharing their goals.

Bingo have two different variants, which each add a little twist:

### Discovery bingo

Discovery Bingo is a variant of bingo where most goals will be hidden at first. This is the same as a normal bingo except that only 2 goals will be displayed from the 25 goals at first. When you complete one goal, the goal adjacent to the one you finished will be revealed. The autotracker will keep track of your progress towards hidden goals but they won't show up on the grid until you unlock them by completing a goal adjacent to them. When a completed goal is revealed, its adjacent goals will be revealed as well.

### Lockout bingo

Lockout Bingo is a variant of bingo where you can't validate a goal if another player already validated it. Since it's pretty hard to complete lines in this variant, the goal is to have more validated goals than the other players and not to form lines. This is usually played in 1 versus 1 so the first player with 13 completed goals from the 25 available one win the game.