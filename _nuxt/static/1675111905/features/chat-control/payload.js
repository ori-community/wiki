__NUXT_JSONP__("/features/chat-control", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{article:{slug:"chat-control",title:"Chat control",tags:["feature"],toc:[{id:N,depth:m,text:O},{id:P,depth:m,text:Q},{id:R,depth:m,text:S}],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Chat Control is a feature of the randomizer which lets your Twitch chat interact with your game in various ways through the use of either chat commands or channel rewards. You can set up this feature in the "},{type:b,tag:l,props:{to:I},children:[{type:a,value:"launcher"}]},{type:a,value:", by clicking on the three dots at the top and then selecting Chat Control. You will then need to connect to your Twitch account in order to access the configuration tool."}]},{type:a,value:c},{type:b,tag:n,props:{id:N},children:[{type:b,tag:e,props:{href:"#commands",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you are connected, you will be able to either add a new command or import existing ones by clicking respectively on the ADD COMMAND button or the button next to it and opening a .wotwcc file."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"By clicking on the Add Command button, a new window will open asking for a command name, a trigger and a script."}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The name is displayed in the Chat Control editor. It is irrelevant to your viewers."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The trigger controls how your Twitch chat will be able to execute the command. It can be either a chat command or an existing channel reward. The same command can have multiple triggers. You can delete a trigger by clicking on the bin icon."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The script is the actual action your command will execute (such as jumping, dashing etc.). See the next section for more information on how to write a script."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you created your commands, you can click on the Export button in order to share them with other players. This generates a .wotwcc file which contains the data of all your commands."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When importing commands which use channel rewards as a trigger, you will need to edit these commands by clicking on their name and then changing the trigger for one of your own channel reward (or use a chat command instead)."}]},{type:a,value:c},{type:b,tag:n,props:{id:P},children:[{type:b,tag:e,props:{href:"#scripting-language",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When editing a command, you have to write a script that specifies which action your command will execute. Here is the list of functions used by this scripting language:"}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"get(group, state)"}]},{type:a,value:" returns the value of the specified Uber State. More information on what an Uber State is can be found "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.google.com\u002Fdocument\u002Fd\u002F1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU\u002Fedit#heading=h.ja4e5amk5hbm",rel:[h,i,j],target:k},children:[{type:a,value:F}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"set(group, state, value)"}]},{type:a,value:" sets the value of the specified UberState."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"var(name, value)"}]},{type:a,value:" sets the value of a script variable. You can access that value by using vars.name (example: set variable 'foo' to 10 by using "},{type:b,tag:f,props:{},children:[{type:a,value:"var(\"foo\", 10)"}]},{type:a,value:" and access by using "},{type:b,tag:f,props:{},children:[{type:a,value:"vars.foo"}]},{type:a,value:". Note that the scope of a variable is limited to the command you are currently editing. If you want to share information between scripts, you will need to write your value to an Uber State instead (all states in the group 9 are unused and specifically added by the randomizer in order to be used that way)."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"wait(seconds)"}]},{type:a,value:" wait for the specified amount of time before continuing the script. Note that the script has to finish executing before the command can be called again."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"action(id, pressed)"}]},{type:a,value:" performs the specified action. You can find a list of all possible actions' id "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fori-community\u002Fwotw-rando-client\u002Fblob\u002Fmain\u002Fprojects\u002FCore\u002Fenums\u002Factions.h",rel:[h,i,j],target:k},children:[{type:a,value:F}]},{type:a,value:". This function simulates pressing a button; the pressed argument is used in order to specify if the action is being pressed or released by using respectively true or false. Note that an action won't release by itself: if you want to do a script which makes Ori jump you have to write "},{type:b,tag:f,props:{},children:[{type:a,value:"action(\"Jump\", true)"}]},{type:a,value:" to jump, followed by "},{type:b,tag:f,props:{},children:[{type:a,value:"wait(0.1)"}]},{type:a,value:" in order to be sure the game will interpret your input and finally "},{type:b,tag:f,props:{},children:[{type:a,value:"action(\"Jump\", false)"}]},{type:a,value:" in order to release the Jump action. If you are not adding the releasing action, this will prevent you from jumping again since the game will think you are still holding your jump button."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"setVelocity(x, y)"}]},{type:a,value:" sets Ori's velocity. Positive x values move Ori to the right while negative values move them to the left. Positive y values move Ori upwards and negative values move them downward."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"getValocity()"}]},{type:a,value:" returns Ori current velocity."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"random()"}]},{type:a,value:" returns a random number between 0 and 1."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"random(bound)"}]},{type:a,value:" returns a random number between 0 and the specified bound."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"random(min, max)"}]},{type:a,value:" returns a random number between the specified min and max values."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:R},children:[{type:b,tag:e,props:{href:"#script-examples",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Set Ori's health to 1 health cell:"}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"set(15, 11, 10)\n"}]}]}]},{type:a,value:c},{type:b,tag:G,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Use the ability in the bottom left slot:"}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"action(\"Ability1\", true)\nwait(0.1)\naction(\"Ability1\", false)\n"}]}]}]},{type:a,value:c},{type:b,tag:G,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Set Ori's velocity to a random value:"}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"setVelocity(random(-30, 30), random(-30, 30))\n"}]}]}]},{type:a,value:c},{type:b,tag:G,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Increase Ori's energy by 1 :"}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"set(15, 13, get(15, 13) + 1.0)\n"}]}]}]},{type:a,value:c},{type:b,tag:G,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Invert control:"}]},{type:a,value:c},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"set(15, 110, get(15, 110) == 1 ? 0 : 1)\nset(15, 111, get(15, 111) == 1 ? 0 : 1)\n"}]}]}]}]},dir:L,path:"\u002Ffeatures\u002Fchat-control",extension:v,createdAt:t,updatedAt:t},sidebarArticles:[{slug:H,title:"Ori WotW Randomizer wiki",sidebarTitle:"Home",toc:[],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Welcome to the Ori and the Will of the Wisps randomizer wiki!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is a mod for the PC version of Ori and the Will of the Wisps which changes the contents of pickups. So when playing\nthe randomizer you will probably find skills when picking up a spirit light container!\nThis mod greatly improves the replayability of the game and is playable by anyone who already finished the game once.\nFor more advanced players, harder difficulties will ask you to progress by using more advanced movement options or\nglitches."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This wiki includes lots of information to help install this mod, understand the options for seed generation, and learn\nabout all the new things included in this mod."}]}]},dir:D,path:D,extension:v,createdAt:t,updatedAt:t},{slug:H,title:"Features",toc:[],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"The main function of this randomizer is shuffling all the item locations.\nThat means it’s completely possible to collect a spirit light container but get the double jump skill instead.\nLikewise, Skill Trees don’t always give you a skill, so you might find a Gorlek Ore when activating the Bash Skill Tree."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The item placement however is not completely random: there is an algorithm or logic to the chaos.\nThis ensures that every playthrough is beatable by placing each progression item at a location you will be able to reach.\nFor more information, you can read the "},{type:b,tag:l,props:{to:T},children:[{type:a,value:"paths sections of the seed generation"}]},{type:a,value:".\nThis mod also adds other functionality to the game. Click on the links below to learn more about them."}]},{type:a,value:c},{type:b,tag:w,props:{"by-path":L,deep:E},children:[{type:a,value:c}]}]},dir:L,path:"\u002Ffeatures\u002F",extension:v,createdAt:t,updatedAt:t},{slug:"installation",title:"Installation",toc:[{id:U,depth:m,text:V},{id:W,depth:m,text:X},{id:Y,depth:m,text:Z},{id:_,depth:m,text:$},{id:aa,depth:m,text:ab}],body:{type:u,children:[{type:b,tag:n,props:{id:U},children:[{type:b,tag:e,props:{href:"#prerequisites",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Ori and the Will of the Wisps Randomizer requires the latest version of the game on PC (either Windows Store or Steam is fine)."}]},{type:a,value:c},{type:b,tag:n,props:{id:W},children:[{type:b,tag:e,props:{href:"#download",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Download the lastest WotwRandoSetup.exe from "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwotw.orirando.com",rel:[h,i,j],target:k},children:[{type:a,value:"our website"}]},{type:a,value:". Launch this file to install the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Because the randomizer is working by injecting its own functionalities into the base game, anti-virus programs tend to view it as a malware. You will most likely need to whitelist the folder in which you installed the randomizer so your anti-virus is not preventing it from launching and installing."}]},{type:a,value:c},{type:b,tag:n,props:{id:Y},children:[{type:b,tag:e,props:{href:"#steam",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since the randomizer needs to launch Ori and the Will of the Wisps, it needs to know where your Steam installation folder is. If you installed Steam in a non-default location, the randomizer installer will ask you for this path. You can change the Steam path later in your "},{type:b,tag:l,props:{to:ac},children:[{type:a,value:"settings"}]},{type:a,value:" if needed."}]},{type:a,value:c},{type:b,tag:n,props:{id:_},children:[{type:b,tag:e,props:{href:"#windows-store",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The randomizer should automatically detect that you have the Windows Store version of the game and prompt you to install the randomizer for it. If it does not, after installing, you can open "},{type:b,tag:l,props:{to:ac},children:[{type:a,value:"the settings"}]},{type:a,value:" and activate the Use Windows Store option."}]},{type:a,value:c},{type:b,tag:n,props:{id:aa},children:[{type:b,tag:e,props:{href:"#after-installation",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check out the "},{type:b,tag:l,props:{to:ad},children:[{type:a,value:ae}]},{type:a,value:" page for suggestions on how to generate and start your first seed!"}]}]},dir:D,path:af,extension:v,createdAt:t,updatedAt:t},{slug:"how-to-start",title:ae,toc:[],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"After "},{type:b,tag:l,props:{to:af},children:[{type:a,value:"installing the randomizer"}]},{type:a,value:", you can start Ori and the Will of the Wisps Randomizer.exe which will open a "},{type:b,tag:l,props:{to:I},children:[{type:a,value:"Launcher"}]},{type:a,value:" from where you will be able to do everything you need in order to play the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Firstly, you need to generate a seed. A seed contain the necessary information for your randomized playthrough, like the content of each item. You can generate them yourself by using the seed generator integrated into the launcher. You can find instructions on how to use the seed generator "},{type:b,tag:e,props:{href:ag,rel:[h,i,j],target:k},children:[{type:a,value:F}]},{type:a,value:". For beginners, we recommend to play with the Moki "},{type:b,tag:l,props:{to:"\u002Fseedgen\u002Fpresets"},children:[{type:a,value:"preset"}]},{type:a,value:" and the All Wisps "},{type:b,tag:l,props:{to:"\u002Fseedgen\u002Fgoals"},children:[{type:a,value:"goal"}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After generating your seed, the game should be launching. When you reach the main menu, you can try to press "},{type:b,tag:l,props:{to:"\u002Ffeatures\u002Fspecial-commands"},children:[{type:a,value:"Alt+L"}]},{type:a,value:" which should display a textbox with some information about the seed. If nothing appeared, the randomizer failed to inject itself into the game. It can happen if your game take too long to launch (in that case, the launcher should warn you about that issue), if your anti-virus is blocking the code injection process or if it deleted the Injector.exe file located in the randomizer installation folder (which you can open directly by clicking on the right icon on the Home tab). If Injector.exe is missing you need to reinstall the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Instead of generating a seed yourself, you might have downloaded a .wotwr file from someone else, in which case you want to double click on it. It should ask you which program you want to use in order to open this type of file. Choose to browse for more apps on your computer and search the Ori and the Will of the Wisps Randomizer.exe which is located where you installed the randomizer. Once you have associated .wotwr files with the randomizer launcher, you should not have to do this again and simply double clicking on a .wotwr file will launch the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once the randomizer launches successfully, you simply need to start playing! It is recommended to play on a new save file because the randomizer will also affect save files made with the base game. If you ever feel lost when playing a seed, you can open your map and use the "},{type:b,tag:l,props:{to:"\u002Ffeatures\u002Flogic-helper"},children:[{type:a,value:"In Logic filter"}]},{type:a,value:" which will show you every item you can collect with the skills you have. You can also read the "},{type:b,tag:l,props:{to:T},children:[{type:a,value:"paths section of the seed generation"}]},{type:a,value:" to learn more about what the randomizer might want you to do. The community is also able to help so don’t hesitate to join the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdiscord.com\u002Finvite\u002FaSz79M4",rel:[h,i,j],target:k},children:[{type:a,value:"Ori speedrunning Discord"}]},{type:a,value:" or the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdiscord.gg\u002FsfUr8ra5P7",rel:[h,i,j],target:k},children:[{type:a,value:"randomizer development Discord"}]},{type:a,value:" if you need help with something!"}]}]},dir:D,path:ad,extension:v,createdAt:t,updatedAt:t},{slug:H,title:"Seed Genenation",toc:[],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"A seed is one particular placement of items in the game. For Will of the Wisps, that information is stored in a .wotwr file which you can generate using the seed generator. You can access it either though the "},{type:b,tag:l,props:{to:I},children:[{type:a,value:"randomizer Launcher"}]},{type:a,value:" or on the Internet "},{type:b,tag:e,props:{href:ag,rel:[h,i,j],target:k},children:[{type:a,value:F}]},{type:a,value:". There is a bunch of options but don't worry, this page will go through each of them."}]},{type:a,value:c},{type:b,tag:w,props:{"by-path":ah},children:[{type:a,value:c}]}]},dir:ah,path:"\u002Fseedgen\u002F",extension:v,createdAt:x,updatedAt:x},{slug:H,title:"Tutorials",toc:[{id:ai,depth:m,text:aj},{id:ak,depth:m,text:al},{id:am,depth:m,text:an},{id:ao,depth:m,text:ap}],body:{type:u,children:[{type:b,tag:n,props:{id:ai},children:[{type:b,tag:e,props:{ariaHidden:o,href:"#sequence-breaks",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are quite a few ways to access specific areas sooner than intended. The following section goes over what you can do to skip location requirements."}]},{type:a,value:c},{type:b,tag:w,props:{"by-path":"\u002Ftutorials\u002Fsequence-breaks",deep:E},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:ak},children:[{type:b,tag:e,props:{ariaHidden:o,href:"#movement",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:al}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Movement in Ori and the Will of the Wisps is quite deep. There are a bunch of advanced movement options that will let you access pickups with fewer skills or simply let you go faster."}]},{type:a,value:c},{type:b,tag:w,props:{"by-path":"\u002Ftutorials\u002Fmovement",deep:E},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:am},children:[{type:b,tag:e,props:{ariaHidden:o,href:"#area-specific-knowledge",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:an}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Some areas in the game have a gimmick and by using some game knowledge you can interact with that game mechanic in unique ways."}]},{type:a,value:c},{type:b,tag:w,props:{"by-path":"\u002Ftutorials\u002Farea-specific",deep:E},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:ao},children:[{type:b,tag:e,props:{ariaHidden:o,href:"#miscellaneous",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:ap}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Other game knowledge you could use but that doesn't quite fit the other categories"}]},{type:a,value:c},{type:b,tag:w,props:{"by-path":"\u002Ftutorials\u002Fmisc",deep:E},children:[{type:a,value:c}]}]},dir:"\u002Ftutorials",path:"\u002Ftutorials\u002F",extension:v,createdAt:x,updatedAt:x},{slug:"plando",title:"Plandomizer",toc:[],body:{type:u,children:[{type:b,tag:d,props:{},children:[{type:a,value:"A plandomizer (often shortened as plando) is a special kind of seed where another person already placed every items manually. These seeds can be anything from showcase of what the header's language can let you do or custom challenges."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You need to launch them through the randomizer in order to play them. Plandos are created by using a custom programming language which you can learn by reading through the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.google.com\u002Fdocument\u002Fd\u002F1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU\u002Fedit",rel:[h,i,j],target:k},children:[{type:a,value:"Header Documentation"}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is a list of every available Plando. You can contact the plando's creator if there is no direct link to them and you want to play them :"}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdl.dropboxusercontent.com\u002Fs\u002Fis8324jbdkwk6fk\u002FItsDangerousToGoAlone.zip",rel:[h,i,j],target:k},children:[{type:a,value:"It's Dangerous To Go Alone"}]},{type:a,value:" by Sirius, a high difficulty challenge"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbluespheres.weebly.com\u002Fchaos.html",rel:[h,i,j],target:k},children:[{type:a,value:"Chaos"}]},{type:a,value:" by CosmicAngel, completely randomizes your skills every time you collect a new pickup"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbluespheres.weebly.com\u002Ffireball.html",rel:[h,i,j],target:k},children:[{type:a,value:"Fireball"}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbluespheres.weebly.com\u002Fkaizo.html",rel:[h,i,j],target:k},children:[{type:a,value:"Kaizo"}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbluespheres.weebly.com\u002Ftime-act-1.html",rel:[h,i,j],target:k},children:[{type:a,value:"Time (Act 1)"}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdrive.google.com\u002Fdrive\u002Ffolders\u002F15rSX6TqJcJsQWFTIC67sygK_I_Dkm34k?usp=sharing",rel:[h,i,j],target:k},children:[{type:a,value:"Milktown"}]},{type:a,value:" by Justepic"}]},{type:a,value:c}]}]},dir:D,path:"\u002Fplando",extension:v,createdAt:x,updatedAt:x}]}],fetch:{},mutations:void 0}}("text","element","\n","p","a","code","li","nofollow","noopener","noreferrer","_blank","nuxt-link",2,"h2","true",-1,"span","icon","icon-link","2023-01-30T20:50:59.143Z","root",".md","page-list","2023-01-30T20:50:59.147Z","div","nuxt-content-highlight","pre","language-text","line-numbers","\u002F","","here","hr","_index","\u002Ffeatures\u002Flauncher","ul",".","\u002Ffeatures"," by CosmicAngel","commands","Commands","scripting-language","Scripting language","script-examples","Script examples","\u002Fseedgen\u002Fpaths","prerequisites","Prerequisites","download","Download","steam","Steam","windows-store","Windows Store","after-installation","After installation","\u002Ffeatures\u002Fsettings","\u002Fhow-to-start","How to start","\u002Finstallation","https:\u002F\u002Fwotw.orirando.com\u002Fseedgen","\u002Fseedgen","sequence-breaks","Sequence Breaks","movement","Movement","area-specific-knowledge","Area specific knowledge","miscellaneous","Miscellaneous")));