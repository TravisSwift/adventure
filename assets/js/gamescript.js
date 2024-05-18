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

    document.getElementById('shroomSurf').addEventListener('click', surfWin);
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
        <button id="playItCool">Play it cool!</button>
        <button id="kardashians">Call out, “Hey is that the Kardashians over there?”</button>
        <button id="buyBeer">Offer to buy them some beer and street tacos from the beach vendor</button>
    `;

    document.getElementById('playItCool').addEventListener('click', function() {
        if (Math.random() > 0.7) {
            continueToDealersHouse();
        } else {
            gameOver();
        }
    });

    document.getElementById('kardashians').addEventListener('click', continueToDealersHouse);
    document.getElementById('buyBeer').addEventListener('click', continueToDealersHouse);
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

// Function to handle the encounter with a stranger
function encounterStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Heading downtown you enter the heart of Anytown. Soon you are approached by a stranger. “Hey man, I ran outta gas a few blocks away, I haven’t eaten in six weeks, my dog has lost one of his legs in a tragic lawnmower accident, and my grandma is suffering from leprosy. If you could just loan me a couple of bucks I would be happy to get that money back to you just as soon as I get paid next week."</p>
        <button id="offer20">Offer him $20.00</button>
        <button id="reject">Say, “Take a hike, Bro, I know this scam”</button>
        <button id="askMore">Ask him to tell you more about his troubles</button>
        <button id="giveWhiskey">Give him the pint of whiskey</button>
    `;

    document.getElementById('offer20').addEventListener('click', offer20);
    document.getElementById('reject').addEventListener('click', rejectStranger);
    document.getElementById('askMore').addEventListener('click', askMore);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskey);
}

// Function to handle offering $20 to the stranger
function offer20() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>He gladly accepts your gift. "Hey, this $20.00 will help me out a lot, can you uh, spare anything else, some change or something. I have an operation tomorrow and I need to fly out of town to see my son who has been ill, and my dog lost a leg in a wrestling match, and uh, uh..."</p>
        <button id="offer20More">Give him $20.00 more dollars</button>
        <button id="giveWhiskey">Give him the bottle of whiskey</button>
        <button id="reject">Say, “Take a hike dude, I already gave you cash”</button>
    `;

    document.getElementById('offer20More').addEventListener('click', offer20More);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskey);
    document.getElementById('reject').addEventListener('click', rejectStranger);
}

// Function to handle rejecting the stranger
function rejectStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>He says, "Fuck you asshole!" and takes a swing at you.</p>
        <button id="fightStranger">Fight the bum</button>
        <button id="offer20">Give him $20.00 more dollars</button>
        <button id="giveWhiskey">Give him the bottle of whiskey</button>
    `;

    document.getElementById('fightStranger').addEventListener('click', fightStranger);
    document.getElementById('offer20').addEventListener('click', offer20More);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskey);
}

// Function to handle asking more about his troubles
function askMore() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The stranger tells you an increasingly convoluted story about his woes. It becomes clear he's trying to scam you.</p>
        <button id="reject">Say, “Take a hike dude, I already gave you cash”</button>
        <button id="offer20More">Give him $20.00 more dollars</button>
        <button id="giveWhiskey">Give him the bottle of whiskey</button>
    `;

    document.getElementById('reject').addEventListener('click', rejectStranger);
    document.getElementById('offer20More').addEventListener('click', offer20More);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskey);
}

// Function to handle giving the whiskey to the stranger
function giveWhiskey() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>He thanks you profusely, takes the whiskey, and leaves you alone. You continue on your way.</p>
        <button id="continueToCops">Continue downtown to the arcade</button>
    `;

    document.getElementById('continueToCops').addEventListener('click', encounterCops);
}

// Function to handle offering $20 more to the stranger
function offer20More() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>He replies, "Hey, my daughter has an addiction to Jenkum, and my son needs a sex change operation, and my wife lost her false teeth. If you could help out with a few dollars, I would gladly repay you next week."</p>
        <button id="offer20MoreAgain">Give him $20.00 more dollars</button>
        <button id="giveWhiskey">Give him the bottle of whiskey</button>
        <button id="reject">Say, “Take a hike dude, I already gave you cash”</button>
    `;

    document.getElementById('offer20MoreAgain').addEventListener('click', offer20More);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskey);
    document.getElementById('reject').addEventListener('click', rejectStranger);
}

// Function to handle fighting the stranger
function fightStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You fight the bum and win. He flees and you continue on your way.</p>
        <button id="continueToCops">Continue downtown to the arcade</button>
    `;

    document.getElementById('continueToCops').addEventListener('click', encounterCops);
}

// Function to handle encountering cops
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
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.6) {
        dynamicContent.innerHTML = `
            <p>You kept your head down and walked by without any trouble. You continue to the arcade.</p>
            <button id="continueToArcade">Continue downtown to the arcade</button>
        `;
        document.getElementById('continueToArcade').addEventListener('click', reachArcade);
    } else {
        dynamicContent.innerHTML = `
            <p>The cops say, "Hey Hippie, come here, what are you up to?"</p>
            <button id="runFromCops">Run</button>
            <button id="askCops">Ask, “What’s up dudes?”</button>
        `;
        document.getElementById('runFromCops').addEventListener('click', runFromCops);
        document.getElementById('askCops').addEventListener('click', askCops);
    }
}

// Function to handle yelling at cops
function yellAtCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The cops catch you and arrest you. Game over.</p>
        <button id="restartGame">Restart</button>
    `;
    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle nodding at cops
function nodAtCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.5) {
        dynamicContent.innerHTML = `
            <p>You nodded at the cops and walked by without any trouble. You continue to the arcade.</p>
            <button id="continueToArcade">Continue downtown to the arcade</button>
        `;
        document.getElementById('continueToArcade').addEventListener('click', reachArcade);
    } else {
        dynamicContent.innerHTML = `
            <p>The cops surround you and want to know what you’re doing downtown.</p>
            <button id="bribeCops">Bribe the cops with $100.00</button>
            <button id="playDumb">Play dumb</button>
            <button id="insultCops">Say, “Fuck you, Pigs!”</button>
        `;
        document.getElementById('bribeCops').addEventListener('click', bribeCops);
        document.getElementById('playDumb').addEventListener('click', playDumb);
        document.getElementById('insultCops').addEventListener('click', insultCops);
    }
}

// Function to handle running from cops
function runFromCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.5) {
        dynamicContent.innerHTML = `
            <p>You managed to escape the cops and continue to the arcade.</p>
            <button id="continueToArcade">Continue downtown to the arcade</button>
        `;
        document.getElementById('continueToArcade').addEventListener('click', reachArcade);
    } else {
        dynamicContent.innerHTML = `
            <p>The cops catch you and arrest you. Game over.</p>
            <button id="restartGame">Restart</button>
        `;
        document.getElementById('restartGame').addEventListener('click', restartGame);
    }
}

// Function to handle asking the cops "What's up?"
function askCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The cops surround you and want to know what you’re doing downtown.</p>
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
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The cops take the bribe and let you go. You continue to the arcade.</p>
        <button id="continueToArcade">Continue downtown to the arcade</button>
    `;

    document.getElementById('continueToArcade').addEventListener('click', reachArcade);
}

// Function to handle playing dumb with the cops
function playDumb() {
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.5) {
        dynamicContent.innerHTML = `
            <p>The cops think you're too stupid to cause any trouble and let you go. You continue to the arcade.</p>
            <button id="continueToArcade">Continue downtown to the arcade</button>
        `;
        document.getElementById('continueToArcade').addEventListener('click', reachArcade);
    } else {
        dynamicContent.innerHTML = `
            <p>The cops think you're too stoned and decide to beat you. Game over.</p>
            <button id="restartGame">Restart</button>
        `;
        document.getElementById('restartGame').addEventListener('click', restartGame);
    }
}

// Function to handle insulting the cops
function insultCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The cops beat your ass, take your money and drugs, and put you in jail. No weed for you today, Stoner, and the game is over.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle reaching the arcade
function reachArcade() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You’ve successfully evaded the police and made it to the arcade. You look around and see someone who looks like a fellow stoner. “Hey Bro, do you know where I can score some sweet bud?”</p>
        <button id="askStoner">Ask the arcade stoner</button>
    `;

    document.getElementById('askStoner').addEventListener('click', askArcadeStoner);
}

// Function to handle asking the arcade stoner
function askArcadeStoner() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The arcade stoner replies, “I don’t know, you look like a narc. If you can beat me at Super Smash Space Defenders I will hook you up."</p>
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
        <p>Accept the challenge and play the game sober or with some help?</p>
        <button id="playSober">Play the game sober (50% chance of success)</button>
        <button id="useAdderall">Pop some Adderall for focus (100% chance of success)</button>
    `;

    document.getElementById('playSober').addEventListener('click', function() {
        if (Math.random() > 0.5) {
            winGame();
        } else {
            loseGame();
        }
    });

    document.getElementById('useAdderall').addEventListener('click', winGame);
}

// Function to handle winning the video game challenge
function winGame() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Alright dude, you’re cool. Let me hook you up. Congrats Stoner, you scored some sweet bud at the arcade. Now you go home and get high!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle losing the video game challenge
function loseGame() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You tried your best but you didn’t play good enough, you lost! The arcade stoner says, “Dude, I knew you were a narc! Any stoner worth his weight in weed can play this game."</p>
        <button id="askToPlayAgain">Ask to play again</button>
        <button id="tradeShrooms">Say, “Dude, sell me some weed and I can hook you up with some shrooms”</button>
    `;

    document.getElementById('askToPlayAgain').addEventListener('click', acceptChallenge);
    document.getElementById('tradeShrooms').addEventListener('click', tradeShrooms);
}

// Function to handle refusing the video game challenge
function refuseChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Arcade Dealer says, “Okay, Dude, prove it or get out!"</p>
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
        <p>Bro, the lights, the sounds, I would totally dig some shrooms! I will definitely hook you up! Congrats Stoner, you scored some sweet bud at the arcade. Now you go home and get high!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Initialize the game when the document is fully loaded
document.addEventListener('DOMContentLoaded', initializeGame);
