---
title: Seed generation
tags:
- feature
---

If you use [this link](https://wotw.orirando.com/seedgen) you will access the seed generator which let you generate brand new seeds. There is a bunch of options but don't worry, this page will go through each of them.

## Presets
Presets are prebuild general options which you can use safely in order to generate seeds. Once you selected the presets you want to use, click on the Apply Presets button. This will override your previous settings. If you want to add those presets to the settings you already chose for yourself, hold Ctrl which will change the Apply Presets button to Merge Presets.

Here is a quick description of each presets:
* QOL apply the following headers: Skippable Cutscenes, Spawn Tuley, No Branch, Autoplants. Just quality of life improvement which greatly reduces the time you'll spend in cutscenes and dialogues.
* Hints apply the following headers: Zone Hints, Key Hints. This enable the [hints](/features/hints) feature.
* Moki enables the [Moki](/logic-groups/moki) paths, the same headers as QOL and Hints plus these headers: Teleporters, Opher Upgrades, Black Market, Spawn with Sword, Progress Helper. This is the recommended settings for players who finished the game in casual settings.
* Gorlek enables the [Moki](/logic-groups/moki) and [Gorlek](/logic-groups/gorlek) paths, the same headers as QOL and Hints plus these headers: Teleporters, Opher Upgrades, Black Market, Progress Helper. This is the recommended settings for more advanced players who know a bit more tricks. Check the [Gorlek](/logic-groups/gorlek) page to learn what the randomizer might expects when playing with these settings.
* Gorlek_Glitch enables the [Moki](/logic-groups/moki), [Gorlek](/logic-groups/gorlek), Sword and Hammer [sentry jumps](/tutorials/movement/sentry-jumps), [Shuriken break](/tutorials/movement/wall-break), [Sentry burn](/tutorials/movementsentry-as-a-fire-source) and [Remove kill plane](/tutorials/location/feeding-ground-skip) paths and the same headers as Gorlek. This is for players who are more familiar with the game and want to use easy to learn glitches. 
* Rspawn apply the [moki](/logic-groups/moki) and [gorlek](/logic-groups/gorlek) paths, the same headers as QOL and Hints plus the Teleporters, Opher Upgrades, Black Market, Progress Helper and Better Random Spawn header. This add teleporters to the item pool and remove some doors which you can only oppen from one side in order to make random spawn a better experience.

## Paths
Paths dictate which skills you need in order to access different items. Some of them can be viewed as a difficulty settings and the other one will add more paths to the difficulty you selected. The most important paths, which can be viewed as the difficulty, are:
* [Moki](/logic-groups/moki). Every paths in this difficulty are design towards the players who just played Ori and the Will of the Wisps casually. You will be able to finish a seed with these paths right after finishing the vanilla game and won't have to learn anything new.
* [Gorlek](/logic-groups/gorlek). These paths are for more advanced players and ask for more precise utilisation of your moveset as well as knowing some easy to learn movement tricks.
* [Unsafe](/logic-groups/unsafe). This is a collection of unverified paths, these paths are in this difficulty because it's too difficult for the current designed difficulties. Be careful when using this difficulty: even if it should be rare, since these paths aren't verified it's not impossible that a seed generated with the unsafe paths isn't beatable.

The other paths adds glitches to the otherwise glitch-free difficulty paths. Note that there isn't any glitches defined in the Moki difficulty so adding those paths to Moki won't change anything:
* [Glitched](/logic-groups/glitched). Enable all glitches from your current difficulty.
* [Sentry jumps](/tutorials/movement/sentry-jumps). Add sentry jumps paths with both sword and hammer.
* Sword Sentry Jump adds sentry jumps paths, but only with sword.
* Hammer Sentry Jump adds sentry jumps paths, but only with hammer.
* Shuriken Break adds [breaking walls](/tutorials/movement/wall-break) from the wrong side by using shuriken.
* Sentry burns adds using [sentry as a fire source](/tutorials/movementsentry-as-a-fire-source) which let you melt ice and activate lanterns by using sentry instead of grenade.
* Remove kill plane adds the possibility to [skip the cat and mouse in feeding ground](/tutorials/location/feeding-ground-skip) in logic.

## Goals
Goals are restrictions which prevent you from entering the final boss room before you have completed your goal. If nothing is checked, you will be able to enter this room after destroying the corrupted hearts, like in a normal playthrough. You can learn more about goal modes by hovering your mouse over the buttons of by reading [this page](/features/goal-modes).

## Headers
Hearders are a functionality of this randomizer will let you change a lot of things. You can hover your mouse over each buttons to have a short description of what each header do. There is also a more detailed explanation on what headers are at [this page](/features/headers).

## Generator
This tab have miscellaneous option. Here, you can enter a seed which will be used for the seed generation or enables options such as playing on hard mode, removing the spoiler from the seed file or enabling [multiplayer](/features/multiplayer).