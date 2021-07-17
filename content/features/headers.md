---
title: Headers
tags:
- feature
---

Headers are a very powerfull tool which is used for the [seed generation](/features/seed-generation) or for plandos which allow you to add or remove items from the item pools as well as creating custom pickups or setting states at pretty much any point in the game. The Will of Wisps seed files are using syntax which can be used as a basic programming language. Headers are using this specificity in order to change things within the game. To add an header to a seed, you simply need to type it in a seed file (don't worry, the seed generator do that for you). If you are interested in creating your own headers, you can read through [this document](https://docs.google.com/document/d/1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU/edit) or [this powerpoint](https://docs.google.com/presentation/d/11ivcOiMqiDBFT3PIz9szr9_rA0J7oW20GF-yCABeWNQ/edit).

Here is a description of every headers prebuild in the seed generator:
* No Rain: Marsh start as sunny, instead of starting rainy until you get the sword tree. This also trigger the spawn of some ennemies and remove the Howl fight entirely.
* Glades Done: Start with every seeds planted in Glades as well as every Glade's rebuilding project already finished.
* Launch Fragments: The Launch skill is now fragmented. There is 5 shards in the seed and finding 3 of them will grant you Launch. The logic recongnize that you got Launch once you have at least 3 fragments.
* No KS Doors: All Keystone doors start open.
* Skippable Cutscenes: Skips several cutscene. Some cutscne like the end of Wellspring's escape can't be skipped automatically but the game will save when you reach the end. Once you see the "Game Saved!" message, you can reload your save from the menu to skip those cutscenes.
* Bonus Items: Add items which are unique to the randomizer in the item pool like an extra air dash or energy regeneration. You can found a lis of every Bonus items [here](/features/new-items).
* Launch from Bingo: This is an header which can only be used when playing [bingo](/features/multiplayer). This grant you Launch once you finished two lines.
* No Launch: Removes Launch from the game. It is not recommended to use this header if you play in [Moki](/logic-groups/moki) since you won't be able to reach some items and reach the Shriek's fight without higher difficulties paths.
* Spawn Tuley: Tuley is in Glades from the beginning, while you normally need to finish the Wellspring's escape.
* Teleporters: Add teleporters pickup to the item pool, which activate the corresponding teleporter even if you didn't come near it. Logic can except you to use these teleporters as progression.
* Zone hints: Lupo's maps give hints about how many skills there is in the current area. Wood's hints and Glades' hints can be bought from Lupo in Glades. This header is compatible with the Teleporter Zone Hints header.
* No branch: Shorten the Tree Keeper quest by getting the Tree seed directly instead of getting a branch which you need to give to Tuley.
* Key hints: Lupo, Opher and Twillen sells hints which reveal in which area are Clean Water, Burrow, Water Dash, Grenade, Glide, Flap, Flash, Bash and Bow. More information [here](/features/hints).
* No Willow Hearts: All Willow hearts are already destroyed, making the Shriek's fight room accessible from the beginning. This also affects the paths to some items.
* Util Twillen: Twillen will be guaranted to sell six utilities pickups (Sticky, Magnet, Water Breath, Catalyst, Overflow and Reckless).
* Opher Upgrades: Places the vanilla weapon upgrades such as Exploding Spikes at their vanilla location, in Opher's shop.
* No Combat: Remove all combat oriented sequence like Shrine and boss fights. This gives a new access to Baur's Reach from Glades since the fighting room is already completed. Shrine's pickups are floating above the Shrine themselves and can be collected before starting the Shrine.
* Black Market: Opher will have an infinite supplies of keystones. Every time you buy one keystone, the price of the next one will be increased. These keystones aren't required in order to beat the game since logic doesn't account for them.
* Launch on Seir: Launch will always be placed on Sier, which you obtain by finishing the Waste's escape.
* Teleporter Zone Hints: Lupo's maps give hints about how many teleporters there is in the current area. Wood's hints and Glades' hints can be bought from Lupo in Glades. This header is compatible with the Zone Hints header.
* Spawn with Sword: You will start the game with Sword instead of having to find it at a normal pickup location.
* Progress Helper: track your progress towards your goals. Press Ctrl+Alt+1 for your tree progress, Ctrl+Alt+2 for your wisps progress and Ctrl+Alt+3 for your quests progress.
* 3-Line Bingo utilities: This is an header which can only be used when playing [bingo](/features/multiplayer). Set the game as completed once you completed 3 bingo lines, which let you press Alt+C to teleport to the credits without having to beat Shriek.
* Autoplants: As soon as Tuley is in Glades, all the seeds you collected will be planted automatically without having to speak to Tuley and watch the planting cutscenes.
* No Quests: All items collected by talking to NPC don't have any items. Location behind quests such as the tree in Glades will be open from the start.
* Better Random Spawn: The lever door in Upper Wastes, The lever door at Pools Entry, the bone wall above Howl's den teleporter and the Howl fight are removed, making random spawn works better. Logic will acount for these particularities.