---
title: Headers
tags:
- seedgen
---

Headers allow you to customize certain aspects of the game, like adding or removing pickups from the item pool, creating custom pickups, and changing uberstates within the game. The [seed generation](/seedgen) comes with many prebuilt headers for you to use and you can also add custom headers by dropping header files (.wotwh) on clicking on the + button under the prebuilt headers. If you are interested in creating your own headers, you can read through the [Header Documentation](https://docs.google.com/document/d/1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU/edit).

In the seed generator, some headers also have a button next to their name which you can click on once you selected the corresponding header. This open a configuration pop-in which let you customize the header a bit more.

Here is a list of all the prebuilt headers in the seed generator:
* Spawn with Sword: You will start the game with Sword instead of having to find it at a normal pickup location.
* Util Twillen: Twillen will be guaranted to sell six utilities pickups (Sticky, Magnet, Water Breath, Catalyst, Overflow and Reckless) instead of selling random items.
* Autoplants: As soon as Tuley is in Glades, all the seeds you collected will be planted automatically without having to speak to Tuley and watch the planting cutscenes.
* Skippable Cutscenes: Skips several cutscene. Some cutscne like the end of Wellspring's escape can't be skipped automatically but the game will save when you reach the end. Once you see the "Game Saved!" message, you can quit to menu and reload your save to skip those cutscenes.
* Better Random Spawn: The lever door in Upper Wastes, The lever door at Pools Entry, the bone wall above Howl's den teleporter and the Howl fight are removed, making random spawn works better. Logic will account for these changes.
* Black Market: Opher will have an infinite supplies of keystones. Every time you buy one keystone, the price of the next one will be increased. These keystones aren't required in order to beat the game since logic doesn't account for them. This header have an option which greatly reduces the cost of keystones.
* Bonus+: Adds new powerfull upgrades such as the ability to bash uncharged grenades.
* Key Hints: Lupo, Opher and Twillen sell [hints](/features/hints) which reveal the areas in which you can find Clean Water, Burrow, Water Dash, Grenade, Glide, Flap, Flash, Bash, and Bow.
* No Branch: Shorten the Tree Keeper quest by getting the Tree seed directly instead of getting a branch which you need to give to Tuley.
* Vanilla Opher Upgrades: Places the vanilla weapon upgrades such as Exploding Spike at their vanilla location, in Opher's shop.
* Open Mode: Removes many one-way doors in the game, allowing you to go through them from the other side. Logic will account for these changes.
* Bonus Opher Upgrade: Opher will be guaranteed to sell five weapon upgrades unique to the randomizer: Spike, Shuriken, Blaze and Sentry efficiency which reduce the cost of the respective weapon by half and Rapid Smash which increase the speed of Hammer.
* Glades Done: Start with every seed planted in Glades as well as every Glades rebuilding project already finished.
* Launch Fragments: There are 5 Launch Fragment pickups in the seed and finding 3 of them will grant you Launch. The logic helper recognize that you got Launch once you have at least 3 fragments but all 5 fragments are accessible without needing Launch. This header let you specify how many launch fragments there is in the seed and how much of them are required in ordere to unlock Launch.
* No Quests: All items collected by talking to NPC don't have any items. Location behind quests such as the house in Woods will be open from the start.
* No KS Doors: All Keystone doors start open.
* Teleporter Zone Hints: Lupo's maps give [hints](/features/hints) about how many teleporter pickups there are in the current area. Hints for Woods and Glades can be bought from Lupo in Glades.
* No Combat: Remove all combat sequences such as combat shrines, fight rooms, and boss fights. This gives a new access to Baur's Reach from Glades since the fight room is already completed. Combat shrine pickups are floating above the shrine themselves and can be collected without starting the shrine.
* No Launch: Removes Launch from the game. It's recommanded to play at least in the [Gorlek](/seedgen/paths/gorlek) difficulty when using this header, as [Moki](/seedgen/paths/moki) requires Launch in order to reach the final boss. Some pickups may not be logically accesible and will contain Spirit Light instead.
* 3-Line Bingo utilities: This header can only be used when playing [bingo](/features/multiplayer#bingo). Sets the game as completed once you have completed 3 bingo lines, allowing you to press [Alt+C](/features/special-commands) to teleport to the credits without having to fight Shriek.
* Zone hints: Lupo's maps give hints about how many skills there are in the current area. Hints for Woods and Glades can be bought from Lupo in Glades.
* No Rain: Marsh start as sunny, instead of being rainy until you get the sword tree. This also triggers the spawn of some enemies and removes the Howl fight entirely.
* Launch on Seir: Launch will always be placed on Seir, which you obtain by finishing the Ruins escape.
* Launch from Bingo: This header can only be used when playing [bingo](/features/multiplayer#bingo). This grants you Launch once you have finished two lines.
* No Willow Hearts: All Willow hearts are already destroyed, making the final boss accessible from the beginning. This also affects the paths to some items.
* Spawn Tuley: Tuley is in Glades from the beginning, instead of needing to finish the Wellspring escape.
* Jumpgrades: Adds bonus pickups in the item pool that make you jump higher. This header let you customize how many jumpgrades are in the seed. 
* Teleport Refills: Automatically heals you to full when warping to a teleporter.
* Skill Velocity: Adds bonus pickups to the item pool that make you go faster. This header let you customize how many skill velocity are in the seed.
* Teleporters: Add teleporter pickups to the item pool, which activate the corresponding teleporter. Logic expects you to use these teleporters as progression.
* Progress Helper: Track your progress towards your goals. Open the [Custom Wheel](/features/custom-wheel) in order to access progress towards quests, wisps and trees.
* Bonus Items: Add items which are unique to the randomizer in the item pool like an extra air dash or energy regeneration. You can find a list of every Bonus item [here](/features/new-items).