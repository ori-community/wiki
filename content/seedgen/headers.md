---
title: Headers
tags:
- seedgen
---

Headers are a very powerfull tool which is used for the [seed generation](/seedgen) or for plandos which allow you to add or remove items from the item pools as well as creating custom pickups or setting states at pretty much any point in the game. The Will of Wisps seed files are using syntax which can be used as a basic programming language. Headers are using this specificity in order to change things within the game. To add an header to a seed, you simply need to type it in a seed file (don't worry, the seed generator do that for you). If you are interested in creating your own headers, you can read through [the documentation](https://docs.google.com/document/d/1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU/edit).

Here is a description of every headers prebuild in the seed generator:
* Spawn with Sword: You will start the game with Sword instead of having to find it at a normal pickup location.
* Util Twillen: Twillen will be guaranted to sell six utilities pickups (Sticky, Magnet, Water Breath, Catalyst, Overflow and Reckless).
* Autoplants: As soon as Tuley is in Glades, all the seeds you collected will be planted automatically without having to speak to Tuley and watch the planting cutscenes.
* Skippable Cutscenes: Skips several cutscene. Some cutscne like the end of Wellspring's escape can't be skipped automatically but the game will save when you reach the end. Once you see the "Game Saved!" message, you can reload your save from the menu to skip those cutscenes.
* Better Random Spawn: The lever door in Upper Wastes, The lever door at Pools Entry, the bone wall above Howl's den teleporter and the Howl fight are removed, making random spawn works better. Logic will acount for these particularities.
* Black Market: Opher will have an infinite supplies of keystones. Every time you buy one keystone, the price of the next one will be increased. These keystones aren't required in order to beat the game since logic doesn't account for them.
* Random Upgrades: Opher will sells random upgrades instead of selling the same one everytime. The remaining upgrades will be found in the main item pool.
* Bonus+: Adds new powerfull upgrades such as the ability to bash uncharged grenades.
* Key hints: Lupo, Opher and Twillen sells hints which reveal in which area are Clean Water, Burrow, Water Dash, Grenade, Glide, Flap, Flash, Bash and Bow. More information [here](/features/hints). 
* No branch: Shorten the Tree Keeper quest by getting the Tree seed directly instead of getting a branch which you need to give to Tuley.
* Open Mode: Remove many hardlocks in the game, making it a lot more open with fewer skills.
* Opher Upgrades: Places the vanilla weapon upgrades such as Exploding Spikes at their vanilla location, in Opher's shop.
* Glades Done: Start with every seeds planted in Glades as well as every Glade's rebuilding project already finished.
* Launch Fragments: The Launch skill is now fragmented. There is 5 shards in the seed and finding 3 of them will grant you Launch. The logic recongnize that you got Launch once you have at least 3 fragments.
* No Quests: All items collected by talking to NPC don't have any items. Location behind quests such as the tree in Glades will be open from the start.
* No KS Doors: All Keystone doors start open.
* Teleporter Zone Hints: Lupo's maps give hints about how many teleporters there is in the current area. Wood's hints and Glades' hints can be bought from Lupo in Glades. This header is compatible with the Zone Hints header.
* No Combat: Remove all combat oriented sequence like Shrine and boss fights. This gives a new access to Baur's Reach from Glades since the fighting room is already completed. Shrine's pickups are floating above the Shrine themselves and can be collected before starting the Shrine.
* No Launch: Removes Launch from the game. It is not recommended to use this header if you play in the [Default](/seedgen/paths#Default) difficulty since you won't be able to reach some items and the Shriek's fight without higher difficulties paths.
* 3-Line Bingo utilities: This is an header which can only be used when playing [bingo](/features/multiplayer). Set the game as completed once you completed 3 bingo lines, which let you press Alt+C to teleport to the credits without having to beat Shriek.
* Zone hints: Lupo's maps give hints about how many skills there is in the current area. Wood's hints and Glades' hints can be bought from Lupo in Glades. This header is compatible with the Teleporter Zone Hints header.
* No Rain: Marsh start as sunny, instead of starting rainy until you get the sword tree. This also trigger the spawn of some ennemies and remove the Howl fight entirely.
* Launch on Seir: Launch will always be placed on Sier, which you obtain by finishing the Waste's escape.
* Launch from Bingo: This is an header which can only be used when playing [bingo](/features/multiplayer). This grant you Launch once you finished two lines.
* No Willow Hearts: All Willow hearts are already destroyed, making the Shriek's fight room accessible from the beginning. This also affects the paths to some items.
* Spawn Tuley: Tuley is in Glades from the beginning, while you normally need to finish the Wellspring's escape.
* Jumpgrades: Add bonus pickups in the item pool that make you jump higher
* Skill Velocity: Add bonus pickups in the item pool that make you go faster
* Teleporters: Add teleporters pickup to the item pool, which activate the corresponding teleporter even if you didn't come near it. Logic can except you to use these teleporters as progression.
* Shopsanity: Puts all weapons bonus items and upgrades normally sold by Opher in the main item poool. Opher will be selling random items.
* Progress Helper: track your progress towards your goals. Press Ctrl+Alt+1 for your tree progress, Ctrl+Alt+2 for your wisps progress and Ctrl+Alt+3 for your quests progress.
* Bonus Items: Add items which are unique to the randomizer in the item pool like an extra air dash or energy regeneration. You can found a lis of every Bonus items [here](/features/new-items).