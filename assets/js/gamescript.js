let playerMoney = 220; // Initialize player's money
let lastResponseIndex = -1; // To track the last response index for the stranger

const images = {
    initial: './assets/images/outofweed.png',
    callDealer: './assets/images/call_dealer.png',
    surfPunks: './assets/images/surf_punks.png',
    surfChallenge: './assets/images/surf_challenge.png',
    meditate: 'assets/images/meditate.png',
    surfing: 'assets/images/surfing.png',
    surfWin: './assets/images/surf_win.png',
    surfMeth: './assets/images/surf_meth.png',
    surfLose: './assets/images/surf_lose.png',
    fightLose: './assets/images/fight_lose.png',
    beachBabes: './assets/images/beach_babes.png',
    partyBabes: './assets/images/party_babes.png',
    dealersHouse: './assets/images/dealers_house.png',
    strangerDowntown: './assets/images/stranger_downtown.png',
    cops: './assets/images/cops.png',
    arcade: './assets/images/arcade.png',
    gameOver: './assets/images/game_over.png'
};

// Function to update the game image
function updateGameImage(imageKey) {
    document.getElementById('gameImage').src = images[imageKey];
}

// This function sets up the initial button event listeners
function initializeGame() {
    document.getElementById('startGame').addEventListener('click', function() {
        document.getElementById('initialContent').style.display = 'none';
        document.getElementById('gameContent').style.display = 'block';
        showInitialChoices();
    });
}

// Function to display initial choices
function showInitialChoices() {
    updateGameImage('initial');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>This is Anytown, USA. You can call your dealer, head downtown to score, or go to your local dispensary. Each choice has its own challenges and risks. Choose wisely, stoner, and hopefully, you score some sweet bud!</p>
        <button id="callDealer">Call your dealer</button>
        <button id="goDowntown">Head downtown and score at the arcade</button>
    `;
    document.getElementById('callDealer').addEventListener('click', callDealer);
    document.getElementById('goDowntown').addEventListener('click', goDowntown);
}

// Function to handle calling the dealer
function callDealer() {
    updateGameImage('callDealer');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Your dealer says it’s all cool, come on over. He will be home for two hours before heading to the Pink Floyd Laser Light Show so hurry up! This path takes you down the beach to your dealer's apartment. You grab your backpack and head out. Your backpack contains the following items to help you on your way:</p>
        <ul>
            <li>An half ounce of mushrooms</li>
            <li>A bottle of Adderall</li>
            <li>A gram of meth</li>
            <li>A pint of whiskey</li>
        </ul>
        <button id="startJourney">Let’s go score some weed!</button>
    `;
    document.getElementById('startJourney').addEventListener('click', encounterSurfPunks);
}

// Function to handle the surf punks encounter
function encounterSurfPunks() {
    updateGameImage('surfPunks');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You follow the beach and encounter a group of surf punks blocking your way. "This is our turf, stoner, and you're not welcome. You can fight or surf!"</p>
        <button id="surfChallenge">Accept the challenge to surf</button>
        <button id="fightPunks">Fight</button>
        <button id="offerMeth">Offer them meth</button>
        <button id="explain">Explain you’re just a stoner out to score some weed</button>
    `;

    document.getElementById('surfChallenge').addEventListener('click', chooseSurfMethod);
    document.getElementById('fightPunks').addEventListener('click', fightPunks);
    document.getElementById('offerMeth').addEventListener('click', offerMeth);
    document.getElementById('explain').addEventListener('click', explainSituation);
}

// Function to choose surf method
function chooseSurfMethod() {
    updateGameImage('surfChallenge');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You're going to beat them at their own game, surfing! Do you want to surf sober or with some help?</p>
        <button id="soberSurf">Surf Sober</button>
        <button id="shroomSurf">Consume some mushrooms</button>
    `;

    document.getElementById('soberSurf').addEventListener('click', soberSurf);
    document.getElementById('shroomSurf').addEventListener('click', takeShrooms);
}


// Function to handle taking shrooms
function takeShrooms() {
    updateGameImage('meditate');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You've decided to take the surf challenge and ehance the experience with some shrooms. After consuming, you sit down and meditate waiting for the high to kick in. Soon, you are at one with yourself, the beach, the water, and the sky.</p>
        <p>You grab a board, hit the surf and paddle out into the ocean.</p>
        <p>The Surf Punk calls out to you, "Alright Stoner, time to show me what you got!"</p>
        <p>The ocean breathes around you, you stand on your board and catch the next wave. Prepare to surf dude!</p>
        <button id="surfWithShrooms">Surfs up, let's do this!</button>
    `;

    document.getElementById('surfWithShrooms').addEventListener('click', surfing);
}

// Function to handle surfing sober
function soberSurf() {
    updateGameImage('surfing');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You've decided to take the surf challenge sober, good luck stoner.</p>
        <p>You grab a board, hit the surf and paddle out into the ocean.</p>
        <p>The Surf Punk calls out to you, "Alright Stoner, time to show me what you got!"</p>
        <p>The ocean breathes around you, you stand on your board and catch the next wave. Prepare to surf dude!</p>
        <button id="continueSurfSober">Surfs up, let's do this!</button>
    `;

    document.getElementById('continueSurfSober').addEventListener('click', surfingSober);
}


function surfing() {
    updateGameImage('surfing');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You catch a massive wave and start your ride, but so does the surf punk as he drops in behind you. He starts ripping, forcing you to stall and knocking you off balance. WIth the shrooms in full effect you smile and realize you are the wave. You crouch low and lean forward pushing you forward, not worried about this punk.</p>
        <button id="continueJourney">Surf Challenge Results</button>
    `;

  document.getElementById('continueJourney').addEventListener('click', surfingSober);
}

function surfingSober() {
    updateGameImage('surfing_sober');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You catch a massive wave and start your ride, but so does the surf punk as he drops in behind you. He starts ripping, forcing you to stall and knocking you off balance.</p>
        <button id="continueJourney">Surf Challenge Results</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', function() {
        if (Math.random() > 0.5) {
            surfWin();
        } else {
            surfLose();
        }
    });
}


// Function to handle winning the surf challenge
function surfWin() {
    updateGameImage('surfWin');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Cowabunga dude, you won the surf challenge! 
        "Okay stoner, you're alright and you're welcome back anytime." You're now an honorory Brah to the local surf community, what a legend you are!.</p>
        <button id="continueJourney">Continue to your dealer's house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

// Function to handle losing the surf challenge
function surfLose() {
    updateGameImage('surfLose');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You lost the surf challenge. The surf punks say, "Ha, loser! We knew you didn’t have it in you. Now you can leave or fight."</p>
        <button id="leave">Leave</button>
        <button id="fight">Fight</button>
    `;

    document.getElementById('leave').addEventListener('click', continueJourneyToDealersHouse);
    document.getElementById('fight').addEventListener('click', fightPunks);
}

// Function to handle fighting the surf punks
function fightPunks() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Do you want to fight the punks sober or with some help?</p>
        <button id="soberFight">Fight sober</button>
        <button id="methFight">Snort a bump of meth</button>
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


// Function to handle winning the fight with the surf punks
function fightWin() {
    updateGameImage('surfWin');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You won the fight! "Okay Stoner, you're tougher then you look. The Surf Punk leader says, "It was a good fight Bro, Respect! Come back anytime" The surf punks let you pass.</p>
        <button id="continueJourney">Continue to your dealer's house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

// Function to handle losing the fight with the surf punks
function fightLose() {
    updateGameImage('fightLose');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You lost the fight and got your ass kicked. The Surf Punks take your backpack, drugs, and money. "Get lost Stoner, you are not worthy to be on this beach!".  
        Game over, Bro.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to continue the journey to the dealer's house
function continueJourneyToDealersHouse() {
    updateGameImage('beachBabes'); // Assuming next encounter is with beach babes
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Walking down the beach you see a group of Beach Babe Stoner Chicks who instantly recognize you as a possible weed hookup. They approach you asking if you want to stay and party.</p>
        <button id="hangWithBabes">Hang with the beach babes, share your stash and maybe get laid</button>
        <button id="blowOffBabes">Blow them off, you got weed to score</button>
        <button id="giveShrooms">Give them some shrooms, wish them well and be on your way</button>
    `;

    document.getElementById('hangWithBabes').addEventListener('click', hangWithBabes);
    document.getElementById('blowOffBabes').addEventListener('click', blowOffBabes);
    document.getElementById('giveShrooms').addEventListener('click', giveShrooms);
}

// Function to handle offering meth to the surf punks
function offerMeth() {
    updateGameImage('surfMeth');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The surf punks accept your meth and let you pass. "Alright dude, we'll take your meth and surf till dawn, but don’t ever come back unless you want to surf or fight!"</p>
        <button id="continueJourney">Continue to your dealer's house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

// Function to handle explaining the situation to the surf punks
function explainSituation() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The surf punks say, “Sorry bro, you’re just a loser with no weed."</p>
        <button id="fightPunks">Fight</button>
        <button id="surfChallenge">Surf</button>
        <button id="offerMeth">Offer meth</button>
    `;

    document.getElementById('fightPunks').addEventListener('click', fightPunks);
    document.getElementById('surfChallenge').addEventListener('click', chooseSurfMethod);
    document.getElementById('offerMeth').addEventListener('click', offerMeth);
}

// Function to handle the encounter with the beach babes
function encounterBeachBabes() {
    updateGameImage('beachBabes');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Walking down the beach you see a group of Beach Babes who instantly recognize you as a possible weed hookup. They approach you asking if you want to stay and party.</p>
        <button id="hangWithBabes">Hang with the beach babes, share your stash and maybe get laid</button>
        <button id="blowOffBabes">Blow them off, you got weed to score</button>
        <button id="giveShrooms">Give them the shrooms, wish them well and be on your way</button>
    `;

    document.getElementById('hangWithBabes').addEventListener('click', hangWithBabes);
    document.getElementById('blowOffBabes').addEventListener('click', blowOffBabes);
    document.getElementById('giveShrooms').addEventListener('click', giveShrooms);
}

// Function to handle hanging with the beach babes
function hangWithBabes() {
    updateGameImage('partyBabes');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You share your stash with your new found Beach Babe friends. Sitting around a bonfire you sip whiskey, trip on shrooms, and watch the sun set on the oceans horizon. An absoultely beautifule evening but . . . you got distracted and forgot your dealer was going to the Pink Floyd Laser Light Show and now he is gone. No weed for you today, Stoner, I hope you got laid! Game over, Bro.</p>
        <button id="restartGame">Restart Game</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle blowing off the beach babes
function blowOffBabes() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Beach Babes response: "Whatever loser! You’re probably broke and dusty anyway!" The girls start coming at you wielding empty Corona bottles and really bad attitudes.</p>
        <button id="callOutKardashians">Call out, “Hey is that the Kardashians over there?”</button>
        <button id="offerBeer">Offer to buy them some beer and street tacos from the beach vendor</button>
    `;

    document.getElementById('callOutKardashians').addEventListener('click', callOutKardashians);
    document.getElementById('offerBeer').addEventListener('click', offerBeer);
}

// Function to handle calling out Kardashians
function callOutKardashians() {
    updateGameImage('beachBabes');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The Beach Babes grab their cell phones and run down the beach to get a selfie for their social media feeds and you are free to continue your journey. You dodged a bullet, Stoner, good for you!</p>
        <button id="continueJourney">Head to your dealer’s apartment</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', dealersHouse);
}

// Function to handle offering beer and street tacos to the beach babes
function offerBeer() {
    updateGameImage('beachBabes');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>It’s better to make friends instead of enemies. You buy the Beache Babes some Coronas and street tacos and they even give you their digits so you can hook up later. Good on you, Stoner, you're a good dude.</p>
        <button id="continueJourney">Continue your journey to your dealer’s place</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', dealersHouse);
}

// Function to handle giving the shrooms to the beach babes
function giveShrooms() {
    updateGameImage('beachBabes');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Girls say, “OMG, Like shrooms are so groovy! Thanks Daddy!”</p>
        <button id="continueJourney">Continue to your dealer’s house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', dealersHouse);
}

// Function to handle reaching the dealer's house
function dealersHouse() {
    updateGameImage('dealersHouse');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Dude! You made it to your dealer's house and you scored some sweet bud! Great job, Stoner, now go home and get high!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle the downtown scenario
function goDowntown() {
    updateGameImage('strangerDowntown');
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

    document.getElementById('startDowntownJourney').addEventListener('click', initialEncounterStranger);
}

// Function to handle the initial encounter with a stranger asking for money
function initialEncounterStranger() {
    updateGameImage('strangerDowntown');
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

// Function to handle subsequent encounters with the stranger
function encounterStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
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
        "Hey man, I ran outta gas a few blocks away, I haven’t eaten in six weeks, My dog has lost one of his legs in a tragic lawnmower accident. If you could just loan me a couple of bucks I would be happy to get that money back to you just as soon as I get paid next week.",
        "Hey, $20.00 will help me out a lot. My dog lost an eye in a wrestling match and I need to buy him an eye patch.",
        "Hey, my daughter has an addiction to Jenkum and if you could help out with a few dollars, I would gladly repay you next week.",
        "Hey, my cousin's pet iguana just escaped and joined a circus, and my aunt needs a new hip after a roller derby accident. If you could spare a few bucks, I'd be forever grateful and pay you back next week.",
        "Hey, my girlfriend Peach was kidnapped by her ex-boyfried, Bowser, if you could spare a few dollars for a bus ticket to Dinohattan I would gladly pay you back next Tuesday.",        
        "Hey, I'm trying to help my friend Astarion defeat the vampire lord Cazador, if you could help me out with a few bucks I would be eternally grateful",
        "Hey, my life was turned upside down by two guys named Randolph and Mortimer Duke. If you could spare a few bucks so I could do some day trading I would gladly pay you back after I corner the frozen orange juice market",
        "Hey, some nihilists pissed all over my rug and I need to get it cleaned, it really tied the whole room together. If you could spare $20.00, I would really appreciate it.",
        "Hey, I am trying to build a time travel device and fix this timeline. If you could spare a few bucks . . .",
        "Hey, my father is a dark Sith Lord and I need a few bucks to help build a rebellion force. I would gladly pay you back next Tuesday."
    ];
    let responseIndex;
    do {
        responseIndex = Math.floor(Math.random() * responses.length);
    } while (responseIndex === lastResponseIndex);
    lastResponseIndex = responseIndex;
    return responses[responseIndex];
}

// Function to handle giving money to the stranger
function giveMoneyToStranger() {
    playerMoney -= 20;
    if (playerMoney <= 0) {
        gameOverMoney();
        return;
    }
    encounterStranger();
}

// Function to handle saying no to the stranger
function sayNoToStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The stranger gets mad that you won’t give him any money and takes a swing at you.</p>
        <button id="fightStranger">Fight</button>
        <button id="giveMoney">Give him $20.00</button>
        <button id="giveWhiskey">Give him the pint of whiskey</button>
    `;

    document.getElementById('fightStranger').addEventListener('click', fightStranger);
    document.getElementById('giveMoney').addEventListener('click', giveMoneyToStranger);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskeyToStranger);
}

// Function to handle fighting the stranger
function fightStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>A homeless, hungover bum is no match for you. You take a swing and he runs off back into Skid Row.</p>
        <button id="continueJourney">Continue downtown to the arcade</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterCops);
}

// Function to handle giving whiskey to the stranger
function giveWhiskeyToStranger() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>"Thank you, Thank you, good Sir" he mumbles as he takes the pint of whiskey and leaves.</p>
        <button id="continueJourney">Continue downtown to the arcade</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterCops);
}

// Function to handle running out of money
function gameOverMoney() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Dude, you're a generous stoner but you’ve given away all your money and now you don’t have any left to buy weed. You’re a good person but you're also broke. You're not getting stoned today and the game is over.</p>
        <button id="restartGame">Start over and try again</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle encountering the cops
function encounterCops() {
    updateGameImage('cops');
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

// Function to handle keeping head down
function keepHeadDown() {
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.4) {
        dynamicContent.innerHTML = `
            <p>It's your lucky day, Bro. You successfully walk past the cops without any issues.</p>
            <button id="continueJourney">Continue downtown to the arcade</button>
        `;
        document.getElementById('continueJourney').addEventListener('click', reachArcade);
    } else {
        dynamicContent.innerHTML = `
            <p>THe cops say, “Hey Hippie come here, what are you up to?”</p>
            <button id="run">Run</button>
            <button id="askWhatsUp">Ask, “What’s up dudes?”</button>
        `;
        document.getElementById('run').addEventListener('click', runFromCops);
        document.getElementById('askWhatsUp').addEventListener('click', askWhatsUpCops);
    }
}

// Function to handle yelling at cops
function yellAtCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You stood up to the law and you lost. The cops beat your ass, take your money and drugs and put you in jail. No weed for you today, Stoner, and the game is over.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle nodding at cops
function nodAtCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.5) {
        dynamicContent.innerHTML = `
            <p>Today is your lucky day, Bro. You successfully walk past the cops without any issues.</p>
            <button id="continueJourney">Continue downtown to the arcade</button>
        `;
        document.getElementById('continueJourney').addEventListener('click', reachArcade);
    } else {
        dynamicContent.innerHTML = `
            <p>The police surround you and want to know what you’re doing downtown. Cops say, “You look like one of those hippy, dippy, stoners bringing drugs into our beat. We control the drugs on these streets and this is gonna cost you!”</p>
            <button id="bribeCops">Bribe the cops with $100.00</button>
            <button id="playDumb">Play dumb</button>
            <button id="insultCops">Say, “Fuck you, Pigs!”</button>
        `;
        document.getElementById('bribeCops').addEventListener('click', bribeCops);
        document.getElementById('playDumb').addEventListener('click', playDumb);
        document.getElementById('insultCops').addEventListener('click', yellAtCops);
    }
}

// Function to handle running from cops
function runFromCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.5) {
        dynamicContent.innerHTML = `
            <p>You take off running, dodge into an alley and successfully escape the cops. You got lucky this time, Bro.</p>
            <button id="continueJourney">Continue downtown to the arcade</button>
        `;
        document.getElementById('continueJourney').addEventListener('click', reachArcade);
    } else {
        dynamicContent.innerHTML = `
            <p>You stood up to the law and you lost. The cops beat your ass, take your money, your drugs, and put you in jail. No weed for you today, Stoner, and the game is over.</p>
            <button id="restartGame">Restart</button>
        `;
        document.getElementById('restartGame').addEventListener('click', restartGame);
    }
}

// Function to handle asking "What's up" to cops
function askWhatsUpCops() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The police surround you and want to know what you’re doing downtown. Cops say, “You look like one of those hippy, dippy, stoners bringing drugs into our beat. This is gonna cost you!”</p>
        <button id="bribeCops">Bribe the cops with $100.00</button>
        <button id="playDumb">Play dumb</button>
        <button id="insultCops">Say, “Fuck you, Pigs!”</button>
    `;

    document.getElementById('bribeCops').addEventListener('click', bribeCops);
    document.getElementById('playDumb').addEventListener('click', playDumb);
    document.getElementById('insultCops').addEventListener('click', yellAtCops);
}

// Function to handle bribing cops
function bribeCops() {
    playerMoney -= 100;
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The cops say, “Maybe you’re not as stoned as you look" and they take the bribe. "Now get out of our beat and don’t come back!"</p>
        <button id="continueJourney">Continue downtown to the arcade</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', reachArcade);
}

// Function to handle playing dumb to cops
function playDumb() {
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.5) {
        dynamicContent.innerHTML = `
        <p>The cops don't see you as a threat and let you go on your way. "You’re too stoned and stupid to cause any trouble here. Now get your hippie ass out of our sight!"</p>
        <button id="continueJourney">Continue downtown to the arcade</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', reachArcade);
    } else {
        dynamicContent.innerHTML = `
            <p>Cops say, “Too stoned and stupid, huh? Maybe we need to beat a little intelligence into you?”</p>
            <button id="bribeCops">Bribe the cops</button>
            <button id="runFromCops">Run</button>
        `;
        document.getElementById('bribeCops').addEventListener('click', bribeCops);
        document.getElementById('runFromCops').addEventListener('click', runFromCops);
    }
}

// Function to handle reaching the arcade
function reachArcade() {
    updateGameImage('arcade');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You’ve successfully evaded the police and made it downtown at the arcade. You look around and see someone who looks like a fellow stoner. “Hey Bro, do you know where I can score some weed?”</p>
        <p>The arcade stoner replies, “I don’t know, you could be a narc. If you can beat me at Street Fighting Ninja Guys I will hook you up."</p>
        <button id="acceptChallenge">Accept the video game challenge</button>
        <button id="refuseChallenge">Say, “Fuck you, I ain’t no narc!”</button>
        <button id="offerShrooms">Say, “Dude, sell me some weed and I can hook you up with some shrooms”</button>
    `;

    document.getElementById('acceptChallenge').addEventListener('click', acceptChallenge);
    document.getElementById('refuseChallenge').addEventListener('click', refuseChallenge);
    document.getElementById('offerShrooms').addEventListener('click', offerShrooms);
}

// Function to handle accepting the video game challenge
function acceptChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Do you want to play the game sober or with some help?</p>
        <button id="playSober">Play sober</button>
        <button id="takeAdderall">Pop some Adderall for focus</button>
    `;

    document.getElementById('playSober').addEventListener('click', playSober);
    document.getElementById('takeAdderall').addEventListener('click', takeAdderall);
}

// Function to handle playing sober
function playSober() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You drop your quarter into the game and take player two on the right. The joystick and the buttons are greasy and sticky from junk food and soda from previous players.</p>
        <p>You press the start button and the game begins. Good luck stoner, hopefully all those hours of gaming pay off!</p>
        <button id="playGame">Play Street Fighting Ninja Guys</button>
    `;

    document.getElementById('playGame').addEventListener('click', function() {
        if (Math.random() > 0.5) {
            winGame();
        } else {
            loseGame();
        }
    });
}

// Function to handle taking Adderall for focus
function takeAdderall() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You drop your quarter into the slot and take player two on the right. The joystick and the buttons are greasy and sticky from junk food and soda from all the previous players, you feel at home.</p>
        <p>The Adderall kicks in and you are focused and alert. The sights and sounds around you fade away and all you see are the pixels before you and the opponent to your left.</p>
        <p>You press the start button and the game begins. Good luck stoner, hopefully all those hours tripping in the arcade pay off!</p>
        <button id="playGame">Play Street Fighting Ninja Guys</button>
    `;

    document.getElementById('playGame').addEventListener('click', winGame);
}

// Function to handle winning the game
function winGame() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You won the game! The arcade stoner says, “Alright dude, you’re cool. Let me hook you up."</p>
        <p>Congrats Stoner, you scored some sweet bud at the arcade. Now you go home and get high!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle losing the game
function loseGame() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You tried your best but you didn’t play good enough, you lost! The arcade stoner says, “Dude, you suck! I ain't selling weed to a loser.</p>
        <button id="playAgain">Ask to play again</button>
        <button id="offerShrooms">Say, “Dude, sell me some weed and I can hook you up with some shrooms”</button>
    `;

    document.getElementById('playAgain').addEventListener('click', acceptChallenge);
    document.getElementById('offerShrooms').addEventListener('click', offerShrooms);
}

// Function to handle refusing the challenge
function refuseChallenge() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Arcade Dealer says, “Okay, Dude, prove it or get out!"</p>
        <button id="acceptChallenge">Accept the video game challenge</button>
        <button id="offerShrooms">Say, “Dude, sell me some weed and I can hook you up with some shrooms”</button>
    `;

    document.getElementById('acceptChallenge').addEventListener('click', acceptChallenge);
    document.getElementById('offerShrooms').addEventListener('click', offerShrooms);
}

// Function to handle offering shrooms to the arcade dealer
function offerShrooms() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Arcade dealer says, “Bro, the lights, the sounds, I would totally dig some shrooms and video games! I will definitely hook you up!”</p>
        <p>Congrats Stoner, you scored some sweet bud at the arcade. Now you go home and get high!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to restart the game
function restartGame() {
    playerMoney = 220; // Reset player money
    lastResponseIndex = -1; // Reset last response index
    document.getElementById('initialContent').style.display = 'block';
    document.getElementById('gameContent').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', initializeGame);

