---
title: Logic helper
tags:
- feature
---

On the in-game map, you can cycle through different filters which show or hide different element. The randomizer adds a new filter called In Logic.

What we call Logic is an algorithm responsible for the placement of every item within the seed. This algorithm is making sure you can always finish the game by following the [Paths](/seedgen/paths) rules you selected during the [seed generation](/seedgen). This filter shows every pickup you are able to reach with your skillset according to logic.

You are guaranteed to find the next intended progression by collecting one of the pickup showing on that filter. Once you found a new skill, the In Logic filter will update automatically and every pickup you can reach with this newly aquired skill will appear on this filter.

This filter isn't aiming at showing every single pickup you can collect at the moment but just what logic expects you to get. It is still possible to collect pickups that aren't showing on the In Logic filter by abusing game mechanics or glitches in order to collect pickup earlier than anticipated by logic.

The in logic filter shows pickups as if you already cleared every states which are required to actually reach those pickups (activating a lever, breaking a wall...) as long as you can solve them. This means that you might first need to progress a quest or solve a puzzle before accessing a pickup showing in logic (most commonly, seeds/ores for rebuilding Glades or progressing the hand to hand quest).
On the other hand, this filter will show pickups behind door as in-logic as soon as you have enough keystones to open it, while logic actually needs to place enough keystones to open every accessible door before putting anything relevant past any doors to prevent softlocks.

When playing Archipelago seeds, it is likely that the logic filter and other trackers (like Universal Tracker) won't match because Archipelago uses a different logic resource management system as the standalone implementation.
