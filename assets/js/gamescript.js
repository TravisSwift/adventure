// This function sets up the initial button event listeners
function initializeGame() {
    // Handle the start game button click
    document.getElementById('startGame').addEventListener('click', function() {
        // Hide the entire initial content
        document.getElementById('initialContent').style.display = 'none';
        // Show the game content
        document.getElementById('gameContent').style.display = 'block';
        showInitialChoices(); // Show initial choices
    });
}

// Shows initial choices
function showInitialChoices() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>This is Anytown, USA. You can call your dealer, head downtown to score, or go to your local dispensary. Each choice has its own challenges and risks. Choose wisely stoner and hopefully, you score some sweet bud!</p>
        <button id="callDealer">Call your dealer</button>
        <button id="goDowntown">Head downtown and score at the arcade</button>
    `;

    document.getElementById('callDealer').addEventListener('click', callDealer);
    document.getElementById('goDowntown').addEventListener('click', goDowntown);
}

// Function to handle calling the dealer
function callDealer() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Your dealer says it’s all cool, come on over. He will be home for two hours before heading to the Pink Floyd Laser Light Show so hurry up! This path takes you down the beach to your dealer's apartment. You grab your backpack and head out. Your backpack contains the following items to help you on your way:</p>
        <ul>
            <li>An eighth of mushrooms</li>
            <li>A bottle of Adderall</li>
            <li>A gram of meth</li>
            <li>A pint of whiskey</li>
        </ul>
        <button id="startJourney">Let’s go score some weed!</button>
    `;

    document.getElementById('startJourney').addEventListener('click', encounterSurfPunks);
}

// Function to handle heading downtown
function goDowntown() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You grab your backpack and head out. This path takes you downtown where you will have to move past cops and skid row to get to the arcade. Your backpack contains the following items to help you on your way:</p>
        <ul>
            <li>An eighth of mushrooms</li>
            <li>A bottle of Adderall</li>
            <li>A gram of meth</li>
            <li>A pint of whiskey</li>
        </ul>
        <button id="startDowntownJourney">Let’s go score some weed!</button>
    `;

    document.getElementById('startDowntownJourney').addEventListener('click', encounterStranger);
}

// Function to handle encounter with surf punks
function encounterSurfPunks() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You follow the beach and encounter a group of surf punks blocking your way.</p>
        <p>"This is our turf, stoner, and you're not welcome. You can fight or surf!"</p>
        <button id="surfChallenge">Accept the challenge to surf</button>
        <button id="fightPunks">Fight</button>
        <button id="offerMeth">Offer them meth</button>
        <button id="justPassing">Explain you’re just a stoner out to score some weed</button>
    `;

    document.getElementById('surfChallenge').addEventListener('click', surfChallenge);
    document.getElementById('fightPunks').addEventListener('click', fightPunks);
    document.getElementById('offerMeth').addEventListener('click', offerMeth);
    document.getElementById('justPassing').addEventListener('click', justPassing);
}

// Function to handle the surf challenge
function surfChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You're going to beat them at their own game, surfing!</p>
        <button id="soberSurf">Surf Sober (50% chance of winning)</button>
        <button id="shroomSurf">Take the mushrooms (100% chance of winning)</button>
    `;

    document.getElementById('soberSurf').addEventListener('click', function() {
        if (Math.random() > 0.5) {
            surfWin();
        } else {
            surfLose();
        }
    });

    document.getElementById('shroomSurf').addEventListener('click', takeShrooms);
}

// Function to handle taking shrooms
function takeShrooms() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You have decided to eat the shrooms and take the surf challenge. After consuming you sit down and meditate waiting for the high to kick in. Soon, you are at one with yourself, the beach, the water, and the sky.</p>
        <p>You grab a board, hit the surf and paddle out into the ocean unconcerned about the surf punk beside you.</p>
        <p>"Alright Stoner, time to show me what you got!"</p>
        <p>The ocean breathes around you, catch the next wave. Prepare to surf dude!</p>
        <button id="surfWithShrooms">Surfs up, let's do this!</button>
    `;

    document.getElementById('surfWithShrooms').addEventListener('click', surfWin);
}

function surfWin() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You won the surf challenge! The surf punks say, "Okay stoner, you're alright. You're welcome back anytime."</p>
        <button id="continueJourney">Continue to your dealer's house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

function surfLose() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You lost the surf challenge. The surf punks say, "Ha, loser! We knew you didn’t have it in you. Now you can leave or fight."</p>
        <button id="leave">Leave</button>
        <button id="fight">Fight</button>
    `;

    document.getElementById('leave').addEventListener('click', gameOver);
    document.getElementById('fight').addEventListener('click', fightPunks);
}

function fightPunks() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Do you want to fight the punks sober or with some help?</p>
        <button id="soberFight">Fight sober (50% chance of winning)</button>
        <button id="methFight">Take a bump of meth and fight (100% chance of winning)</button>
    `;

    document.getElementById('soberFight').addEventListener('click', function() {
        if (Math.random() > 0.5) {
            fightWin();
        } else {
            fightLose();
        }
    });

    document.getElementById('methFight').addEventListener('click', fightWin);
}

function fightWin() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You won the fight! The surf punks say, "Okay stoner, you're alright. You're welcome back anytime."</p>
        <button id="continueJourney">Continue to your dealer's house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

function fightLose() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You lost the fight. The surf punks say, "Ha, loser! We knew you didn’t have it in you! Now get off our turf and toughen up before you come back."</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

function offerMeth() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The surf punks accept your meth and let you pass. They say, "Alright dude, we will take your meth and surf till dawn, but don’t ever come back!"</p>
        <button id="continueJourney">Continue to your dealer's house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

function justPassing() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The surf punks say, "Sorry bro, you’re just a loser with no weed."</p>
        <button id="fight">Fight</button>
        <button id="surf">Surf</button>
        <button id="offerMeth">Offer meth</button>
    `;

    document.getElementById('fight').addEventListener('click', fightPunks);
    document.getElementById('surf').addEventListener('click', surfChallenge);
    document.getElementById('offerMeth').addEventListener('click', offerMeth);
}

function encounterBeachBabes() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You see a group of Beach Babe Stoner Chicks who recognize you as a possible weed hookup. They approach you asking if you want to stay and party.</p>
        <button id="partyWithBabes">Hang with the beach babes</button>
        <button id="blowOffBabes">Blow them off</button>
        <button id="giveShrooms">Give them the shrooms</button>
    `;

    document.getElementById('partyWithBabes').addEventListener('click', partyWithBabes);
    document.getElementById('blowOffBabes').addEventListener('click', blowOffBabes);
    document.getElementById('giveShrooms').addEventListener('click', giveShrooms);
}

function partyWithBabes() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You got distracted and forgot your dealer was going to the Pink Floyd Laser Light Show and now he is gone, no weed for you today. I hope you got laid! Game over.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

function blowOffBabes() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Whatever loser! You’re probably broke and dusty anyway! The girls start coming at you with empty Corona bottles and really bad attitudes.</p>
        <button id="kardashians">Call out, “Hey is that the Kardashians over there?”</button>
        <button id="buyBeer">Offer to buy them some beer and street tacos from the beach vendor</button>
    `;

    document.getElementById('kardashians').addEventListener('click', distractBeachBabes);
    document.getElementById('buyBeer').addEventListener('click', buyBeerForBabes);
}

// Function to handle distracting the beach babes by calling out "Hey is that the Kardashians over there?"
function distractBeachBabes() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The Beach Babes grab their cell phones and run down the beach to get a selfie for their social media feed and you are free to continue your journey.</p>
        <button id="continueJourney">Head to your dealer’s apartment</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', continueToDealersHouse);
}

// Function to handle buying beer and street tacos for the beach babes
function buyBeerForBabes() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>It's better to make friends instead of enemies. You buy them some Coronas and tacos and they even give you their digits so you can hook up later.</p>
        <button id="continueJourney">Continue your journey to your dealer's place</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', continueToDealersHouse);
}

function giveShrooms() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>OMG, like shrooms are so groovy! Thanks Daddy! You continue on your way.</p>
        <button id="continueJourney">Continue to your dealer's house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', continueToDealersHouse);
}

function continueToDealersHouse() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Dude! You made it to your dealer's house and you scored some sweet bud! Great job, Stoner, now go home and get stoned!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

function gameOver() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Today is just not your day and you failed to score weed. Better luck next time stoner.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

function restartGame() {
    location.reload();
}

 

let playerMoney = 220; // Initialize player money
let lastResponseIndex = -1; // To ensure the same response doesn't repeat

// Function to handle heading downtown
function goDowntown() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You grab your backpack and head out. This path takes you downtown where you will have to move past cops and skid row to get to the arcade. Your backpack contains the following items to help you on your way:</p>
        <ul>
            <li>An eighth of mushrooms</li>
            <li>A bottle of Adderall</li>
            <li>A gram of meth</li>
            <li>A pint of whiskey</li>
        </ul>
        <button id="startDowntownJourney">Let’s go score some weed!</button>
    `;

    document.getElementById('startDowntownJourney').addEventListener('click', encounterStranger);
}

// Function to handle encounter with a stranger asking for money
function encounterStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Heading downtown you enter the heart of Anytown. Soon you are approached by a stranger.</p>
        <p>"${getRandomStrangerResponse()}"</p>
        <button id="giveMoney">Give him $20.00</button>
        <button id="sayNo">Say, “Take a hike, Bro, I know this scam”</button>
        <button id="askMore">Ask him to tell you more about his troubles</button>
        <button id="giveWhiskey">Give him the pint of whiskey</button>
    `;

    document.getElementById('giveMoney').addEventListener('click', giveMoneyToStranger);
    document.getElementById('sayNo').addEventListener('click', sayNoToStranger);
    document.getElementById('askMore').addEventListener('click', encounterStranger);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskeyToStranger);
}

// Function to get a random response from the stranger without repeating the same response twice in a row
function getRandomStrangerResponse() {
    const responses = [
        "Hey man, I ran outta gas a few blocks away, I haven’t eaten in six weeks, My dog has lost one of his legs in a tragic lawnmower accident, and my grandma is suffering from leprosy. If you could just loan me a couple of bucks I would be happy to get that money back to you just as soon as I get paid next week.",
        "Hey, $20.00 will help me out a lot. I have an operation tomorrow and I need to fly out of town to see my son who has been ill, and my dog lost a leg in a wrestling match, and uh, uh . . .",
        "Hey, my daughter has an addiction to Jenkum, and my son needs a sex change operation, and my wife lost her false teeth. If you could help out with a few dollars, I would gladly repay you Tuesday for a few dollars today.",
        "Hey, my cousin's pet iguana just escaped and joined a circus, and my aunt needs a new hip after a roller derby accident. If you could spare a few bucks, I'd be forever grateful and pay you back next week.",
        "Hey, this $20.00 will help me out a lot. Can you uh, spare anything else, some change or something. I have an operation tomorrow and I need to fly out of town to see my son who has been ill, and my dog lost a leg in a wrestling match, and uh, uh..."
    ];

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * responses.length);
    } while (randomIndex === lastResponseIndex);

    lastResponseIndex = randomIndex;
    return responses[randomIndex];
}

// Function to handle giving money to the stranger
function giveMoneyToStranger() {
    playerMoney -= 20;
    if (playerMoney <= 0) {
        endGameNoMoney();
    } else {
        encounterStranger();
    }
}

// Function to handle giving whiskey to the stranger
function giveWhiskeyToStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The stranger thanks you for the whiskey and leaves you alone.</p>
        <button id="continueJourney">Continue your journey</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterCops);
}

// Function to handle rejecting the stranger
function sayNoToStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The stranger is mad you won’t give him money and takes a swing at you.</p>
        <button id="fight">Fight</button>
        <button id="giveMoney">Give him $20.00</button>
        <button id="giveWhiskey">Give him the bottle of whiskey</button>
    `;

    document.getElementById('fight').addEventListener('click', fightStranger);
    document.getElementById('giveMoney').addEventListener('click', giveMoneyToStranger);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskeyToStranger);
}

// Function to handle fighting the stranger
function fightStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You fought the stranger and he flees.</p>
        <button id="continueJourney">Continue your journey</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterCops);
}

// Function to handle running out of money
function endGameNoMoney() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Dude, you're a generous stoner but you’ve given away all your money and now you don’t have any left to buy weed. You’re a good person but you're also not getting stoned today and the game is over.</p>
        <button id="restartGame">Start over and try again</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle encounter with cops
function encounterCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Walking downtown you see a group of cops on the corner and they are eyeballing you.</p>
        <button id="keepHeadDown">Keep your head down and your mouth shut and walk on by</button>
        <button id="yellAtCops">Yell “Fuck you pigs” as you walk by</button>
        <button id="nodAtCops">Make eye contact and give a nod of “what’s up” as you walk by</button>
    `;

    document.getElementById('keepHeadDown').addEventListener('click', keepHeadDown);
    document.getElementById('yellAtCops').addEventListener('click', yellAtCops);
    document.getElementById('nodAtCops').addEventListener('click', nodAtCops);
}

// Function to handle keeping head down and walking by
function keepHeadDown() {
    if (Math.random() > 0.4) {
        continueToArcade();
    } else {
        stopByCops();
    }
}

// Function to handle yelling at cops
function yellAtCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The cops are not amused and they decide to stop you.</p>
        <button id="stopByCops">Continue</button>
    `;

    document.getElementById('stopByCops').addEventListener('click', stopByCops);
}

// Function to handle making eye contact and nodding at cops
function nodAtCops() {
    if (Math.random() > 0.5) {
        continueToArcade();
    } else {
        stopByCops();
    }
}

// Function to handle being stopped by cops
function stopByCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The cops surround you and want to know what you’re doing downtown.</p>
        <p>"You look like one of those hippy, dippy, stoners bringing drugs into our beat. We control drugs in this town and this is gonna cost you!"</p>
        <button id="bribeCops">Bribe the cops with $100.00</button>
        <button id="playDumb">Play dumb</button>
        <button id="insultCops">Say, “Fuck you, Pigs!”</button>
    `;

    document.getElementById('bribeCops').addEventListener('click', bribeCops);
    document.getElementById('playDumb').addEventListener('click', playDumb);
    document.getElementById('insultCops').addEventListener('click', insultCops);
}

// Function to handle bribing the cops
function bribeCops() {
    playerMoney -= 100;
    if (playerMoney <= 0) {
        endGameNoMoney();
    } else {
        continueToArcade();
    }
}

// Function to handle playing dumb with the cops
function playDumb() {
    if (Math.random() > 0.5) {
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.innerHTML = `
            <p>You’re too stoned and stupid to cause any trouble here. Now get your hippie ass out of our sight!</p>
            <button id="continueJourney">Continue your journey</button>
        `;

        document.getElementById('continueJourney').addEventListener('click', continueToArcade);
    } else {
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.innerHTML = `
            <p>Cops say, “Too stoned and stupid, huh? Maybe we need to beat a little intelligence into you?”</p>
            <button id="bribeCopsAgain">Bribe the cops</button>
            <button id="runFromCops">Run</button>
            <button id="insultCopsAgain">Say, “Fuck you, Pigs!”</button>
        `;

        document.getElementById('bribeCopsAgain').addEventListener('click', bribeCops);
        document.getElementById('runFromCops').addEventListener('click', runFromCops);
        document.getElementById('insultCopsAgain').addEventListener('click', insultCops);
    }
}

// Function to handle running from the cops
function runFromCops() {
    if (Math.random() > 0.5) {
        continueToArcade();
    } else {
        gameOverWithCops();
    }
}

// Function to handle insulting the cops
function insultCops() {
    gameOverWithCops();
}

// Function to handle game over scenario with cops
function gameOverWithCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The cops beat your ass, take your money and drugs, and put you in jail. No weed for you today, Stoner, and the game is over.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to continue to the arcade
function continueToArcade() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You’ve successfully evaded the police and made it to the arcade. You look around and see someone who looks like a fellow stoner.</p>
        <p>"Hey Bro, do you know where I can score some sweet bud?"</p>
        <p>The arcade stoner replies, "I don’t know, you look like a narc. If you can beat me at Street Fighting Ninja Guys I will hook you up."</p>
        <button id="acceptChallenge">Accept the video game challenge</button>
        <button id="refuseChallenge">Say, “Fuck you, I ain’t no narc”</button>
        <button id="tradeShrooms">Say, “Dude, sell me some weed and I can hook you up with some shrooms”</button>
    `;

    document.getElementById('acceptChallenge').addEventListener('click', acceptChallenge);
    document.getElementById('refuseChallenge').addEventListener('click', refuseChallenge);
    document.getElementById('tradeShrooms').addEventListener('click', tradeShrooms);
}

// Function to handle accepting the video game challenge
function acceptChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Do you want to take the challenge sober or with some help?</p>
        <button id="soberChallenge">Play sober (50% chance of winning)</button>
        <button id="adderallChallenge">Pop some Adderall for focus (100% chance of winning)</button>
    `;

    document.getElementById('soberChallenge').addEventListener('click', prepareSoberChallenge);
    document.getElementById('adderallChallenge').addEventListener('click', prepareAdderallChallenge);
}

// Function to prepare for the sober video game challenge
function prepareSoberChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You drop your quarter into the game and take player two on the right. The joystick and the buttons are greasy and sticky from junk food and soda.</p>
        <p>You press the start button and the game begins. Good luck stoner, hopefully all those hours of console games pay off!</p>
        <button id="playSober">Play Street Fighting Ninja Guys</button>
    `;

    document.getElementById('playSober').addEventListener('click', function() {
        if (Math.random() > 0.5) {
            winChallenge();
        } else {
            loseChallenge();
        }
    });
}

// Function to prepare for the Adderall-assisted video game challenge
function prepareAdderallChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You drop your quarter into the game and take player two on the right. The joystick and the buttons are greasy and sticky from junk food and soda.</p>
        <p>The Adderall kicks in and you are focused and alert. The sights and sounds around you fade away and all you see are the pixels before you and the opponent to your left.</p>
        <p>You press the start button and the game begins. Good luck stoner, hopefully all those hours tripping in the arcade pay off!</p>
        <button id="playAdderall">Play Street Fighting Ninja Guys</button>
    `;

    document.getElementById('playAdderall').addEventListener('click', winChallenge);
}

// Function to handle refusing the video game challenge
function refuseChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Arcade Dealer says, “Okay, Dude, prove it or get out!”</p>
        <button id="acceptChallenge">Accept the video game challenge</button>
        <button id="tradeShrooms">Say, “Dude, sell me some weed and I can hook you up with some shrooms”</button>
    `;

    document.getElementById('acceptChallenge').addEventListener('click', acceptChallenge);
    document.getElementById('tradeShrooms').addEventListener('click', tradeShrooms);
}

// Function to handle trading shrooms for weed
function tradeShrooms() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Arcade dealer says, “Bro, the lights, the sounds, I would totally dig some shrooms! I will definitely hook you up!”</p>
        <p>Congrats Stoner, you scored some sweet bud at the arcade. Now you go home and get high!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle winning the video game challenge
function winChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Arcade stoner says, “Alright dude, you’re cool. Let me hook you up.”</p>
        <p>Congrats Stoner, you scored some sweet bud at the arcade. Now you go home and get high!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle losing the video game challenge
function loseChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You tried your best but you didn’t play good enough, you lost!</p>
        <p>Arcade stoners say, “Dude, I knew you were a narc! Any stoner worth his weight in weed can play this game.”</p>
        <button id="retryChallenge">Ask to play again</button>
        <button id="tradeShrooms">Say, “Dude, sell me some weed and I can hook you up with some shrooms”</button>
    `;

    document.getElementById('retryChallenge').addEventListener('click', acceptChallenge);
    document.getElementById('tradeShrooms').addEventListener('click', tradeShrooms);
}

// Function to handle restarting the game
function restartGame() {
    location.reload();
}

// Initialize the game when the document is fully loaded
document.addEventListener('DOMContentLoaded', initializeGame);
