# Navi-DiscordBotProject

A discord bot with several little fun features for my personal discord server.
based on Node.js & Discord.js, entirely written in Korean.

* Meal Recommend feature : 
the Food list can be updated freely within Discord, by everyone.
No more worries about your next lunch.

* Russian Roulette game : 
idk but it sounds fun, so I made it. 
Russian Roulette game can be played solo, or together upto 6 people.
(with 100% shot guarantee Semi-Automatic Pistol mode)

You can use !help command in discord, or look up help.js inside commands folder for more informations.

# How to Use

* 'npm install' (to install dependencies like discord.js and dotenv.)
* make .env file with Token Key. (Check warnings below for more information)
* 'node .' or 'node index.js' (to run)

# Warning

* food.json is using UTF-8 without BOM.
* I am using dotenv for containing token key. You have to make your own dotenv file with <DISCORDBOT_TOKENKEY> key, in order to access with discord API. It should look like DISCORDBOT_TOKENKEY=<Your_Bot_Token_Key> inside .env file. Also, .env file should remain at the same folder where index.js is.
* prefix can be easily replaced in config.json.