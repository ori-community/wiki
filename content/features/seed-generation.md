---
title: Seed generation
tags:
- feature
---

To get started, you will need to download Java version 8 [here](https://www.java.com/en/download/manual.jsp). Make sure you have Java 8 specifically since it won't work with other versions of Java. After downloading Java, you will need to restart your computer. Once Java is fully installed, launch SeedGen.jar from the randomizer installation folder.

# Main tabulation
This is where most of the options are. Let’s go through each of them.

## Logic groups
The logic group is basically the difficulty of the seed. By default it’s set to the Moki group. Moki logic is intended for newer players who have finished the game at least once. By enabling a logic group, you will add more paths to the logic.
* Gorlek adds more advanced movement skills like weapon hovering and damage boosts.
* Glitched paths will add glitches to the logic. Each logic group has its own set of glitches (except for Moki which is glitchless).
* Unsafe paths will add paths that have not been sorted in any logic group. There is a large range of difficulties in unsafe paths, as it includes any paths the logic creators have found that don’t fit into one of the current logic group. Although it’s unlikely, it is also possible that some paths can result in softlocks as these paths are not verified by the path validator.

If you want to learn more about what the each group wan expect from you, please check the [logic guide](https://github.com/sparkle-preference/OriWotwRandomizerClient/wiki/Logic-groups).


## Goal Modes
Goal modes are restrictions which prevent you from entering the final boss room before you have completed your goal. If nothing is checked, you will be able to enter this room after destroying the corrupted hearts, like in a normal playthrough. You can learn more about goal modes [here](https://github.com/sparkle-preference/OriWotwRandomizerClient/wiki/Goal-modes).

## Spawn Options
These options affects state from the game
* Spawn with Sword gives you the Sword (Spirit Edge) skill from the start. If this option is unchecked, Sword will be included in the item pool and, like every other pickup, will be placed in a random pickup location.
* Rainy Marsh starts the game in the state just after the prologue. The big change of this option is that you will need to fight Howl. Otherwise the game begins in the state after the Howl fight.
* Remove KS doors starts the game with every keystone door already opened.


## Spawn Area
Choose where you want to start your seed from. All seeds will start on a Spirit Well. Checking the Random spawn option will make you spawn at one spirit well at random. If your starting point isn't Marsh, you will start with some random items, at least one of which is used for progression.

## Miscellaneous options
These options change the item pool of the randomizer
* Launch on Seir places the skill Launch on the Seir pickup so you will need to get all wisps before getting Launch. Launch won't appear on another item.
* [Zone Hints](https://github.com/sparkle-preference/OriWotwRandomizerClient/wiki/Hints) replaces the pickup you get by buying the map from Lupo in each area with a hint telling you how many key items are in the area. Lupo and Opher will also sell hints giving the area in which some skills are located.
* Items on Quests gives you items when progressing and completing quests. Without this option, quests won't give you anything besides the quest's object such as the wisps.
* [Bonus Items](https://github.com/sparkle-preference/OriWotwRandomizerClient/wiki/New-items) adds rando exclusive items like an extra air dash, health and energy regen, and weapon upgrades. Weapon upgrades are sold by Opher.
* Teleporters add items in the item pool which unlock teleporters. The randomizer can ask you to activate a teleporter through one of these items and teleport to that newly unlocked teleporter to continue the seed.
* Race Mode generates a spoiler-free version of the seed. It also disables some function like the logic filter.
* Enable Netcode activates the communication with the randomizer server, which is required for bingo autotracking and coop games. Learn more about these game modes [here](https://github.com/sparkle-preference/OriWotwRandomizerClient/wiki/Multiplayer).


# Headers tabulation
Headers are game mods which can do a lot of things. By default, you will have these ones:
* 3-line bingo: prints updates when you have completed a line in bingo and sets the game as completed when you get 3 lines. Enable Netcode if you want to use this header
* Better random spawn: opens some doors by default, making spawning from other teleporters than Marsh work better.
* Launch from Bingo: gives you the Launch skill after completing 2 bingo lines. Enable Netcode if you want this header to work.
* Quest helper: adds a textbox which shows you which quests you are missing for the Force Quests goal mode when pressing Ctrl+Alt+1
* Skippable cutscenes: skips several cutscenes which aren't skipped normally by the randomizer.
You can also create a folder called headers in your randomizer installation folder. If you place a randomizer header file (.wotwrh) in this folder, the seed generator will load it and you will be able to enable the headers within from the header tab.

# Advanced tabs
This is the same thing as a header, but you will be able to write your own header which will be used in the seed you generate. To learn how to write an header, check [this document](https://docs.google.com/document/d/1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU/edit) 
