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
    surfTwo: './assets/images/surf_two.png',
    fightLose: './assets/images/fight_lose.png',
    tacos: './assets/images/tacos.png',
    tacos2: './assets/images/tacos2.png',
    performer: './assets/images/performer.png',
    performer1: './assets/images/performer_1.png',
    performer2: './assets/images/performer_2.png',
    performer3: './assets/images/performer_3.png',
    performer4: './assets/images/performer_4.png',
    performer5: './assets/images/performer_5.png',
    performer6: './assets/images/performer_6.png',
    performer7: './assets/images/performer_7.png',
    performer8: './assets/images/performer_8.png',
    player: './assets/images/player_determined.png',
    crowd: './assets/images/crowd.png',
    shrug: './assets/images/shrug.png',
    explain: './assets/images/explain.png',
    selfie: './assets/images/selfie.png',
    readyFight: './assets/images/fight.png',
    fightWin: './assets/images/fight_win.png',
    beachBabes: './assets/images/beach_babes.png',
    partyBabes: './assets/images/party_babes.png',
    beachBabes2: './assets/images/beach_babes_2.png',
    dealersHouse: './assets/images/dealers_house.png',
    headDowntown: './assets/images/head_downtown.png',
    homeless1: './assets/images/homeless_1.png',
    homeless2: './assets/images/homeless_2.png',
    homeless3: './assets/images/homeless_3.png',
    homeless4: './assets/images/homeless_4.png',
    homeless5: './assets/images/homeless_5.png',
    homeless6: './assets/images/homeless_6.png',
    cops1: './assets/images/cops_1.png',
    cops2: './assets/images/cops_2.png',
    cops3: './assets/images/cops_3.png',
    cops4: './assets/images/cops_4.png',
    cops5: './assets/images/cops_5.png',
    cops6: './assets/images/cops_6.png',
    cops7: './assets/images/cops_7.png',
    cops8: './assets/images/cops_8.png',
    cops9: './assets/images/cops_9.png',
    arcade: './assets/images/arcade.png',
    arcade1: './assets/images/arcade_1.png',
    arcade2: './assets/images/arcade_2.png',
    arcade3: './assets/images/arcade_3.png',
    arcade4: './assets/images/arcade_4.png',
    arcade5: './assets/images/arcade_5.png',
    arcade6: './assets/images/arcade_6.png',
    arcade7: './assets/images/arcade_7.png',
    gameOver: './assets/images/game_over.png'
};

// Function to update the game image
function updateGameImage(imageKey) {
    document.getElementById('gameImage').src = images[imageKey];
}

// This function sets up the initial button event listeners
function initializeGame() {
    document.getElementById('startGame').addEventListener('click', function () {
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
        <p>Where are you going to go to buy some weed?</P>
        <p> You can head to your dealers place or you can go downtown and score on the streets. Each choice has its own challenges and risks. Choose wisely, stoner, and hopefully, you score some sweet bud!</p>
        <button id="callDealer">Call your dealer</button>
        <button id="goDowntown">Head downtown</button>
    `;
    document.getElementById('callDealer').addEventListener('click', callDealer);
    document.getElementById('goDowntown').addEventListener('click', goDowntown);
}

// Function to handle calling the dealer
function callDealer() {
    updateGameImage('callDealer');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
    <p>You call your dealer!</p>    
    <p>Your dealer says it’s all good man, come on over. He'll be home for two hours before heading out to the Pink Floyd Laser Light Show so hurry up!</p>
        <p> This path takes you down the beach to your dealer's apartment. You grab your backpack and head out. Your backpack contains the following items to help you on your way:</p>
        <ul>
            <li>An half ounce of mushrooms</li>
            <li>A bottle of Adderall</li>
            <li>A bag of meth</li>
            <li>A bottle of whiskey</li>
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
    <p>You head out walking along the beach taking in the sun, water, and thinking about the bud you're gonna be smoking tonight.</p>
        <p>Soon, you encounter a group of surf punks blocking your way and they are not cool. "This is our turf, stoner, and you're not welcome here. You can fight or you can surf!"</p>
        <button id="surfChallenge">Accept the challenge to surf</button>
        <button id="fightPunks">Fight these punks</button>
        <button id="offerMeth2">Offer them some drugs</button>
        <button id="explain">Explain you’re just a stoner out to score some weed</button>
    `;

    document.getElementById('surfChallenge').addEventListener('click', chooseSurfMethod);
    document.getElementById('fightPunks').addEventListener('click', fightPunks);
    document.getElementById('offerMeth2').addEventListener('click', offerMeth2);
    document.getElementById('explain').addEventListener('click', explainSituation);
}

// Function to choose surf method
function chooseSurfMethod() {
    updateGameImage('surfChallenge');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Surf Challenge!</p>
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
        <p>You've decided to take the surf challenge and enhance the experience with some shrooms. After consuming, you sit down and meditate waiting for the high to kick in. Soon, you are at one with the beach and water.
        <p>You grab a board and paddle out into the ocean.</p>
        <p>The Surf Punk calls you out, "Alright Stoner, time to show me what you've got!"</p>
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
        <p>You grab a board and paddle out into the ocean.</p>
        <p>The Surf Punk calls you out, "Alright Stoner, time to show me what you've got!"</p>
        <p>You stand on your board and catch the next wave. Prepare to surf dude!</p>
        <button id="continueSurfSober">Surfs up, let's do this!</button>
    `;

    document.getElementById('continueSurfSober').addEventListener('click', surfingSober);
}


function surfing() {
    updateGameImage('surfing');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You catch a massive wave and start your ride, but so does the surf punk as he drops in behind you. He starts ripping, forcing you to stall and knocking you off balance. WIth the shrooms in full effect you smile and realize you are the wave, ain't nothing stopping you now.</p>
        <button id="continueJourney">Keep surfing, Brah!</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', shroomSurf);
}

function shroomSurf() {
    updateGameImage('surfTwo');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
         <p>This kook is gonna do everything he can to smoke you, surf strong, Brother!</p>
         <p>He reaches out to push you off your board as you blast out of the curl. You start pumping and push forward as you you ride the nose of your board leaving him behind you. You're not worried about this punk at all.</p>
       
        <button id="continueJourney">Surf Challenge Results</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', surfWin);
}


function surfingSober() {
    updateGameImage('surfTwo');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You catch a massive wave and start your ride, but so does the surf punk as he drops in behind you. He starts ripping, forcing you to stall and knocking you off balance. This guys a dick, but you're not giving up. You start carving the wave trying to give back everything he's giving you.</p>
        <button id="continueJourney">Keep surfing, Brah!</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', function () {
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
        <p>Cowabunga dude, you won the surf challenge! </p>
        <p>"Okay stoner, you're alright and you're welcome back anytime." </p> 
        <p> You're now an honorory Brah to the local surf community, what a legend you are!</p>
        <button id="continueJourney">Continue your journey!</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

// Function to handle losing the surf challenge
function surfLose() {
    updateGameImage('surfLose');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You lost the surf challenge. The surf punks say, "Ha, what a Benny! We knew you didn’t have it in you. Now you can leave or fight."</p>
        <button id="leave">Leave</button>
        <button id="fight">Fight</button>
    `;

    document.getElementById('leave').addEventListener('click', encounterBeachBabes);
    document.getElementById('fight').addEventListener('click', fightPunks);
}

// Function to handle fighting the surf punks
function fightPunks() {
    updateGameImage('readyFight');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You're not taking any shit from these punks and you're ready for battle.</p>
        <p>Do you want to fight the punks sober or with some help?</p>
        <button id="soberFight">Fight sober</button>
        <button id="methFight">Snort a bump of meth</button>
    `;

    document.getElementById('soberFight').addEventListener('click', function () {
        if (Math.random() > 0.6) {
            fightWin();
        } else {
            fightLose();
        }
    });

    document.getElementById('methFight').addEventListener('click', fightWin);
}


// Function to handle winning the fight with the surf punks
function fightWin() {
    updateGameImage('fightWin');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You won the fight! </p>
        <p>"Okay Stoner, you're tougher then you look" the Surf Punk leader says. "It was a good fight Bro, Respect! Come back anytime". </p>
        <p>You stood up for yourself and made some new friends.</p>
        <button id="continueJourney">Continue to your dealer's house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

// Function to handle losing the fight with the surf punks
function fightLose() {
    updateGameImage('fightLose');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You did your best, Stoner, but it wasn't good enough.</p> 
        <p>You lost the fight and got your ass kicked.</p>
        <p> The Surf Punks take your backpack, drugs, and money. "Get lost Stoner, you are not worthy to be on this beach!".  </P>
        <p>You've got no money and you now you can't score any weed. Sorry Bro, game over.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to continue the journey to the dealer's house
function continueJourneyToDealersHouse() {
    updateGameImage('beachBabes'); // Assuming next encounter is with beach babes
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Continuing your journey, you see a group of Beach Babe Stoner Chicks who instantly run your way. Awww yeah! They approach you asking if you want to stay and party.</p>
        <button id="hangWithBabes">Hang with the beach babes and maybe get laid</button>
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
        <p>The surf punks accept the meth and shrooms and let you pass. </p> 
        <p>"Alright dude, we'll take your drugs and surf till dawn. This will catch you some slack today, but don’t ever come back unless you want to surf or fight!"</p>
        <button id="continueJourney">Continue to your journey.</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterBeachBabes);
}

// Function to handle explaining the situation to the surf punks
function explainSituation() {
    updateGameImage('explain');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The surf punks say, “Sorry bro, you’re just a loser with no weed. You can fight or surf!"</p>
        <button id="fightPunks">Fight</button>
        <button id="surfChallenge">Surf</button>
    `;

    document.getElementById('fightPunks').addEventListener('click', fightPunks);
    document.getElementById('surfChallenge').addEventListener('click', chooseSurfMethod);
    document.getElementById('offerMeth2').addEventListener('click', offerMeth2);
}


// Function to handle offering meth to the surf punks part one
function offerMeth2() {
    updateGameImage('surfMeth');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The beach is for everyone, dudes, let's be cool. I can hook you up with some shrooms and some meth and you can surf and party all night!</p>
        <button id="continueJourney">Offer shrooms and meth</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', function () {
        if (Math.random() < 0.5) {
            offerMeth();
        } else {
            explainSituation();
        }
    });
}


// Function to handle the encounter with the beach babes
function encounterBeachBabes() {
    updateGameImage('beachBabes');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
    <p>Walking down the beach you see a group of Beach Babe Stoner Chicks who instantly run your way. They approach you asking if you want to stay and party.</p>
        <button id="hangWithBabes">Hang with the beach babes and maybe get laid</button>
        <button id="blowOffBabes">Blow them off, you got weed to score</button>
        <button id="giveShrooms">Hook them up with some shrooms, tell them you will come back later and be on your way</button>
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
        <p>You share your stash with your new found Beach Babe Stoner friends and they share theirs with you. They don't have any to sell but still smoke you out.</p>
        <p> Sitting around a bonfire you sip whiskey, trip on shrooms, and smoke weed all night. You play guitar and watch the sun set on the oceans horizon, an absoultely beautiful evening but . . . </p>
        <p> you got distracted and forgot your dealer was going to the Pink Floyd Laser Light Show and now he's gone and no score for you today.</p>
        <p> You didn't win, but did you really lose? </p> 
        <p> Game over, Bro.</p>
        <button id="restartGame">Restart Game</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle blowing off the beach babes
function blowOffBabes() {
    updateGameImage('shrug');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You explain that you've got shit to do and you don't have time to hang right now. </p>
        <p>The Beach Babes say, "Whatever loser!" They pull out there cell phones and start live streaming.</p>
        <p>"Like, OMG, you should be so lucky, as if!"</p>
        <p>"Someone should call the Alpha police, there's a beta on the beach!"</p>
        <p>"You're probably broke and dusty anyway, creeper!"</p>
        <button id="callOutKardashians">Call out, “Hey is that the Kardashians over there?”</button>
        <button id="offerBeer">Offer to buy them some beer and street tacos from the beach vendor</button>
    `;

    document.getElementById('callOutKardashians').addEventListener('click', callOutKardashians);
    document.getElementById('offerBeer').addEventListener('click', offerBeer);
}

// Function to handle calling out Kardashians
function callOutKardashians() {
    updateGameImage('selfie');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The Beach Babes run down the beach to get a selfie for their social media feeds and you are free to continue your journey. </p>
        <p>Nice move, Stoner, good for you.</p>
        <button id="continueJourney">Head to your dealer’s apartment</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', dealersHouse);
}

// Function to handle offering beer and street tacos to the beach babes
function offerBeer() {
    updateGameImage('tacos2');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>It’s always better to make friends instead of enemies. You buy the Beache Babes some Coronas and street tacos and they even give you their digits so you can hook up later. </p>
        <p>You're a good dude, Stoner.</p>
        <button id="continueJourney">Continue your journey to your dealer’s place</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', dealersHouse);
}

// Function to handle giving the shrooms to the beach babes
function giveShrooms() {
    updateGameImage('beachBabes_2');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Girls say, “OMG, Like shrooms are so groovy! Thanks Baby and be sure to come back tonight.”</p>
        <button id="continueJourney">Continue to your dealer’s house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', dealersHouse);
}



// Function to handle calling out Kardashians
function callOutKardashians() {
    updateGameImage('selfie');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
    <p>The Beach Babes run down the beach to get a selfie for their social media feeds and you are free to continue your journey. </p>
    <p>Nice move, Stoner, good for you.</p>
        <button id="continueJourney">Continue your journey</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterStreetPerformer);
}

// Function to handle offering beer and street tacos to the beach babes
function offerBeer() {
    updateGameImage('tacos2');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>It’s better to make friends instead of enemies. You buy the Beach Babes some Coronas and street tacos and they even give you their digits so you can hook up later. Good on you, Stoner, you're a good dude.</p>
        <button id="continueJourney">Continue your journey to your dealer’s place</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterStreetPerformer);
}

// Function to handle giving the shrooms to the beach babes
function giveShrooms() {
    updateGameImage('beachBabes2');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Girls say, “OMG, Like shrooms are so groovy! Thanks babe and come back later!”</p>
        <button id="continueJourney">Continue to your dealer’s house</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterStreetPerformer);
}

// Function to handle the street performer encounter
function encounterStreetPerformer() {
    updateGameImage('performer1');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>As you walk along the beach, you come across a street performer juggling knives with impressive skill. He catches your eye and calls you over.</p>
        <p>"Hey there, buddy! You look like you're in need of some good stuff. How about a deal? I'll sell you a half ounce for $100."</p>
        <button id="acceptOffer">Accept the offer and pay the performer</button>
        <button id="questionLegitimacy">Question the performer's legitimacy</button>
        <button id="seeWeed">Ask to see the weed first</button>
        <button id="ignorePerformer">Ignore the performer and walk away</button>
    `;

    document.getElementById('acceptOffer').addEventListener('click', acceptOffer);
    document.getElementById('questionLegitimacy').addEventListener('click', questionLegitimacy);
    document.getElementById('seeWeed').addEventListener('click', seeWeed);
    document.getElementById('ignorePerformer').addEventListener('click', ignorePerformer);
}

// Function to handle accepting the offer
function acceptOffer() {
    updateGameImage('performer2');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You hand over the $100. The performer grabs the cash and runs off into the crowd.</p>
        <button id="takeLoss">Take the loss and move on</button>
        <button id="pursuePerformer">Pursue the performer</button>
    `;

    document.getElementById('takeLoss').addEventListener('click', continueJourneyToDealersHouse);
    document.getElementById('pursuePerformer').addEventListener('click', pursuePerformer);
}

// Function to handle pursuing the performer
function pursuePerformer() {
    updateGameImage('player');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>How do you want to pursue the performer?</p>
        <button id="pursueWithoutMeth">Just go after the thief</button>
        <button id="pursueWithMeth">Take a bump of meth</button>
    `;

    document.getElementById('pursueWithoutMeth').addEventListener('click', function () {
        if (Math.random() < 0.5) {
            successChase();
        } else {
            failChase();
        }
    });

    document.getElementById('pursueWithMeth').addEventListener('click', successChase);
}

// Function to handle successful chase
function successChase() {
    updateGameImage('performer7');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You tackle the performer and grab your cash back. The performer runs off down the boardwalk.</p>
        <p>Shaking your head you think, “What’s the world coming to when you can’t trust a street performer!”</p>
        <button id="continueJourney">Continue on your journey</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', continueJourneyToDealersHouse);
}

// Function to handle failed chase
function failChase() {
    updateGameImage('crowd');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The juggler is too quick and you lose him in the crowd. Bummer dude, you lost the cash but you still have enough to score some weed.</p>
        <button id="continueJourney">Continue on your journey</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', continueJourneyToDealersHouse);
}

// Function to handle questioning the performer's legitimacy
function questionLegitimacy() {
    updateGameImage('performer8');
    const dynamicContent = document.getElementById('dynamicContent');
    const isCop = Math.random() < 0.3;
    if (isCop) {
        dynamicContent.innerHTML = `
            <p>The performer smiles and then flashes a badge. "Your days of smoking the Devil's Lettuce are over, punk." The undercover narc entraps you and you're arrested for attempting to buy drugs.</p>
            <p>Sorry dude, you're Busted! Game over.</p>
            <button id="restartGame">Restart</button>
        `;
        document.getElementById('restartGame').addEventListener('click', function () {
            location.reload();
        });
    } else {
        updateGameImage('performer5');
        dynamicContent.innerHTML = `
            <p>The performer looks offended and raises his voice. "You questioning me? I should call the beach cops and tell them you're selling here!"</p>
            <button id="callBluff">Call his bluff</button>
            <button id="apologize">Apologize and walk away</button>
        `;
        document.getElementById('callBluff').addEventListener('click', callBluff);
        document.getElementById('apologize').addEventListener('click', ignorePerformer);
    }
}

// Function to handle calling the performer's bluff
function callBluff() {
    updateGameImage('performer5');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The performer glares at you but then leaves without causing a scene.</p>
        <p>Smart move, Stoner.</P>
        <button id="continueJourney">Continue on your journey</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', continueJourneyToDealersHouse);
}

// Function to handle asking to see the weed first
function seeWeed() {
    updateGameImage('performer4');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The performer shows you a bag from his pocket.</p>
        <button id="buyBag">Buy the bag</button>
        <button id="questionBag">Question the bag's contents</button>
    `;
    document.getElementById('buyBag').addEventListener('click', buyBag);
    document.getElementById('questionBag').addEventListener('click', questionBagContents);
}

// Function to handle buying the bag
function buyBag() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You hand over $100.00 and the street performer runs off into the crowd.</p>
        <button id="pursuePerformer">Pursue the performer</button>
        <button id="takeLoss">Take the loss and move on</button>
    `;
    document.getElementById('pursuePerformer').addEventListener('click', pursuePerformer);
    document.getElementById('takeLoss').addEventListener('click', continueJourneyToDealersHouse);
}

// Function to handle questioning the bag's contents
function questionBagContents() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>The performer gets defensive. "It's the real deal, man. Take it or leave it."</p>
        <button id="buyBag">Buy the bag</button>
        <button id="walkAway">Walk away</button>
    `;
    document.getElementById('buyBag').addEventListener('click', buyBag);
    document.getElementById('walkAway').addEventListener('click', ignorePerformer);
}

// Function to handle ignoring the performer
function ignorePerformer() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>This guy is sus and you decide to walk away. Smart move, Stoner.</p>
        <button id="continueJourney">Continue on your journey</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', continueJourneyToDealersHouse);
}

// Function to handle reaching the dealer's house
function continueJourneyToDealersHouse() {
    updateGameImage('dealersHouse');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Dude! You finally made it to your dealer's house and scored some weed! </p>
        <p> You smoke a few joints, share the story of your bud run, and have some great laughs.</p>
        <p>Good job, Stoner, you won the game!</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}


// Function to handle the downtown scenario
function goDowntown() {
    updateGameImage('headDowntown');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You grab your backpack and head out. This path takes you downtown where you will have to move past cops, skid row, and who knows what else. Your backpack contains the following items to help you on your way:</p>
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
    updateGameImage('homeless1');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Heading out you enter the heart of Anytown. Soon you are approached by a some rando homeless guy.</p>
        <p>"${getRandomStrangerResponse()}"</p>
        <button id="giveMoney">Give him $20.00</button>
        <button id="sayNo">Say, “Take a hike, Bro, I know this scam”</button>
        <button id="askMore">Ask him to tell you more about his troubles</button>
        <button id="giveWhiskey">Give him the bottle of whiskey</button>
    `;

    document.getElementById('giveMoney').addEventListener('click', giveMoneyToStranger);
    document.getElementById('sayNo').addEventListener('click', sayNoToStranger);
    document.getElementById('askMore').addEventListener('click', encounterStranger);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskeyToStranger);
}

// Function to handle subsequent encounters with the stranger
function encounterStranger() {
    updateGameImage('homeless2');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>"${getRandomStrangerResponse()}"</p>
        <button id="giveMoney">Give him $20.00</button>
        <button id="sayNo">Say, “Take a hike, Bro, I know this scam”</button>
        <button id="askMore">Ask him to tell you more about his troubles</button>
        <button id="giveWhiskey">Give him the bottle of whiskey</button>
    `;

    document.getElementById('giveMoney').addEventListener('click', giveMoneyToStranger);
    document.getElementById('sayNo').addEventListener('click', sayNoToStranger);
    document.getElementById('askMore').addEventListener('click', encounterStranger);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskeyToStranger);
}

// Function to get a random response from the stranger without repeating the same response twice in a row
function getRandomStrangerResponse() {
    const responses = [
        "Hey man, I ran outta gas a few blocks away, I haven’t eaten in six weeks, If you could just loan me a couple of bucks I would be happy to get that money back to you just as soon as I get paid next week.",
        "My dog has lost one of his legs in a tragic lawnmower accident and I need a few bucks to hire a lawyer.",
        "Hey, my dog lost an eye in a wrestling match and I need to buy him an eye patch. They are on sale for only $20.00 at the local Piggly Wiggly store . . .",
        "Hey, my daughter has an addiction to Jenkum and if you could help out with a few dollars for rehab, I would gladly repay you next week.",
        "Hey, my cousin's pet iguana just escaped and joined a circus and I need to hire an investigator to find him. If you could spare a few bucks, I'd be forever grateful and pay you back next week.",
        "Hey, my mom had an accident while playing in her roller derby league. If you could spare a few bucks for a hip replacement that would be really cool . . .",
        "Hey, my girlfriend Peach was kidnapped by her ex-boyfried, Bowser, if you could spare a few dollars for a bus ticket to Dinohattan I would gladly pay you back next Tuesday.",
        "Hey, I'm trying to help my friend Astarion defeat the vampire lord Cazador, if you could help me out with a few bucks I would be eternally grateful",
        "Hey, my life was turned upside down by two guys named Randolph and Mortimer Duke. If you could spare a few bucks so I could do some day trading I would gladly pay you back after I corner the frozen orange juice market",
        "Hey, some nihilists pissed all over my rug and I need to get it cleaned, it really tied the whole room together. If you could spare $20.00, I would really appreciate it.",
        "Hey, I am trying to build a time travel device and fix this timeline. If you could spare a few bucks . . .",
        "Hey there, Sir. If you could help me out. I owe Big Worm $200.00 for some weed I was supposed to sell, but you know how it is. I smoked all that shit and now that fool is gonna have me and my homie Craig smoked if I don't pay him back by 10:00 tonight.",
        "Hey, my father is a dark Sith Lord and I need a few bucks to help build a rebellion force. I would gladly pay you back next Tuesday.",
        "Hey, I'm a retired hitman and my dog was killed, and I need some funds to seek revenge. Can you spare some money for a fellow dog lover?.",
        "Some friends and I need to return a ring to a mountain for some crazy wizard, if you could spare a few bucks that would be really cool",
        "Hey, I've been stuck in a time loop and need to get back to February 2nd. If you could lend me some cash, I promise to repay you tomorrow, if there is a tomorrow.",
        "This guy Roy has challenged me to a ski race down K12 and I really need some drugs to help me train.",
        "My daughter, Alita, needs her head transplanted onto a beserker body so she can win the Motorball Race, if you could loan me a few bucks",
        "My cousin in Philly got into one little fight and his aunt got scared and I just need a few more dollars to get him to Bel-Air",
        "I've got 99 problems and a bitch ain't one, but I do need a few dollars for some whiskey, I mean, booze, I mean, food. Yeah, food.",
        "Hey, my friend Fonzie needs to get to California so he can jump a shark and show the California Kid he's not a coward, so for just a few dollars . . .",
        "Excuse me, Sir. All I need are some tasty waves, a cool buzz and $20.00.",
        "Hey, I'm sober, give me some fucking money.",
        "Klaatu barada nikto.",
        "I'm collecting money for low income kids in Beverly Hills. They suffer so much and really need your help.",
        "I have not smoked any weed in over six hours. If you could give me some money so I could get high, then, I would be high and not bothering people on the street . . .",
        "Excuse me, Sir.  it's Friday, I ain't got no job, and I ain't got shit to do. Maybe you could hook me up with $20.00",
        "Sir, do you have $20.00 to spare? Because it would be a lot cooler if you did.",
        "Have you ever danced with the devil in the pale moonlight? Well, it costs $20.00 so, if you could help me out . . ."


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
    updateGameImage('homeless4');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>This dude gets mad that you won’t give him any money and takes a swing at you.</p>
        <button id="fightStranger">Fight</button>
        <button id="giveMoney">Give him $20.00</button>
        <button id="giveWhiskey">Give him the bottle of whiskey</button>
    `;

    document.getElementById('fightStranger').addEventListener('click', fightStranger);
    document.getElementById('giveMoney').addEventListener('click', giveMoneyToStranger);
    document.getElementById('giveWhiskey').addEventListener('click', giveWhiskeyToStranger);
}

// Function to handle fighting the stranger
function fightStranger() {
    updateGameImage('homeless5');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>A homeless, hungover bum is no match for you. You take a swing and he runs off back into Skid Row.</p>
        
        <button id="continueJourney">Continue downtown</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', encounterCops);
}

// Function to handle giving whiskey to the stranger
function giveWhiskeyToStranger() {
    updateGameImage('homeless6');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>"Thank you, Thank you, good Sir!" he mumbles as he takes the bottle of whiskey and wanders away.</p>
        <button id="continueJourney">Continue downtown</button>
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
    updateGameImage('cops1');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Walking downtown you see a group of cops on the corner and they are eyeballing you.</p>
        <button id="keepHeadDown">Keep your head down and your mouth shut and walk on by</button>
        <button id="yellAtCops">Yell out “Fuck you pigs” as you walk by</button>
        <button id="nodAtCops">Make eye contact and give a nod of “what’s up” as you keep on walking</button>
    `;

    document.getElementById('keepHeadDown').addEventListener('click', keepHeadDown);
    document.getElementById('yellAtCops').addEventListener('click', yellAtCops);
    document.getElementById('nodAtCops').addEventListener('click', nodAtCops);
}

// Function to handle keeping head down
function keepHeadDown() {
    updateGameImage('cops2');
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.4) {
        dynamicContent.innerHTML = `
            <p>It's your lucky day, Bro. You successfully walk past the cops without any issues.</p>
            <button id="continueJourney">Continue downtown</button>
        `;
        document.getElementById('continueJourney').addEventListener('click', reachArcade);
    } else {
        updateGameImage('cops3');
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
    updateGameImage('cops9');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You don't feel like dealing with their shit today and you defiantly call out, "Fuck You, Pigs!</p>       
        <button id="restartGame">See what happens</button>
    `;

    document.getElementById('restartGame').addEventListener('click', busted);
}

// Function to handle yelling at cops
function busted() {
    updateGameImage('cops5');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You fought the law and the law won. The cops beat your ass, take your money and drugs and put you in jail. No weed for you today, Stoner, and the game is over.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle nodding at cops
function nodAtCops() {
    updateGameImage('cops6');
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.5) {
        dynamicContent.innerHTML = `
            <p>Today is your lucky day, Bro. You successfully walk past the cops without any issues.</p>
            <button id="continueJourney">Continue downtown</button>
        `;
        document.getElementById('continueJourney').addEventListener('click', reachArcade);
    } else {
        updateGameImage('cops7');
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
    updateGameImage('cops8');
    const dynamicContent = document.getElementById('dynamicContent');
    if (Math.random() > 0.5) {
        dynamicContent.innerHTML = `
            <p>You take off running, dodge into an alley and successfully escape the cops. You got lucky this time, Bro.</p>
            <button id="continueJourney">Continue downtown</button>
        `;
        document.getElementById('continueJourney').addEventListener('click', reachArcade);
    } else {
        updateGameImage('cops5');
        dynamicContent.innerHTML = `
            <p>You fought the law and the law won. The cops beat your ass, take your money, your drugs, and put you in jail. No weed for you today, Stoner, and the game is over.</p>
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
        <button id="continueJourney">Continue downtown</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', reachArcade);
}

// Function to handle playing dumb to cops
function playDumb() {
    updateGameImage('cops6');
    const dynamicContent = document.getElementById('dynamicContent');
    // if (Math.random() > 0.5) {
    dynamicContent.innerHTML = `
        <p>Cops say, “Too stoned and stupid, huh? Maybe we need to beat a little intelligence into you?”</p>
        
            <button id="bribeCops">Bribe the cops</button>
            <button id="run">Run</button>
    `;
    document.getElementById('bribeCops').addEventListener('click', bribeCops);
    document.getElementById('run').addEventListener('click', runFromCops);

}


function playDumb2() {
    updateGameImage('cops6');
    const dynamicContent = document.getElementById('dynamicContent');

    dynamicContent.innerHTML = `
        <p>"You’re too stoned and stupid to cause any trouble here. Now get your hippie ass out of our sight!"</p>
        <button id="continueJourney">Continue downtown</button>
    `;
    document.getElementById('continueJourney').addEventListener('click', reachArcade);

}

// Function to handle before reaching the arcade
function reachArcade() {
    updateGameImage('arcade1');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You’ve successfully evaded the police and made it downtown. You look around and see someone who looks like a fellow stoner. “Hey Bro, do you know where I can score some weed?”</p>
        <p>Totally, dude. Check inside the arcade, look for Peace Out Phil, he can hook you up."</p>

        <button id="continueJourney">Continue downtown</button>
    `;

    document.getElementById('continueJourney').addEventListener('click', reachArcade2);
}

// Function to handle reaching the arcade
function reachArcade2() {
    updateGameImage('arcade2');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You look around and see Peace Out Phil. "Hey Bro, What's up? I'm looking to score some weed?"</p>
        <p>Phil replies, “I don’t know man, you could be a narc. If you can beat me at Street Fighting Ninja Guys I will hook you up."</p>
        <button id="acceptChallenge">Accept the video game challenge</button>
        <button id="refuseChallenge">Say, “Be cool, Bro, I ain’t no narc!”</button>
    `;

    document.getElementById('acceptChallenge').addEventListener('click', acceptChallenge);
    document.getElementById('refuseChallenge').addEventListener('click', refuseChallenge);
    
}

// Function to handle accepting the video game challenge
function acceptChallenge() {
    updateGameImage('arcade4');
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
    updateGameImage('arcade3');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You drop your quarter into the game and take player two on the right. The joystick and the buttons are greasy and sticky from junk food and soda from previous players.</p>
        <p>You press the start button and the game begins. Good luck stoner, hopefully all those hours of gaming pay off!</p>
        <button id="playGame">Play Street Fighting Ninja Guys</button>
    `;

    document.getElementById('playGame').addEventListener('click', function () {
        if (Math.random() > 0.5) {
            winGame();
        } else {
            loseGame();
        }
    });
}

// Function to handle taking Adderall for focus
function takeAdderall() {
    updateGameImage('arcade3');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You drop your quarter into the slot and take player two on the right. The joystick and the buttons are greasy and sticky from junk food and soda from all the previous players, you feel at home.</p>
        <p>The Adderall kicks in and you are focused and alert. The sights and sounds around you fade away and all you see are the pixels on the screen.</p>
        <p>You press the start button and the game begins. Good luck stoner, hopefully all those hours tripping in the arcade pay off!</p>
        <button id="playGame">Play Street Fighting Ninja Guys</button>
    `;

    document.getElementById('playGame').addEventListener('click', winGame);
}

// Function to handle winning the game
function winGame() {
    updateGameImage('arcade6');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You won the game! Peace Out Phil says, “Alright dude, you’re cool. Let me hook you up."</p>
        <p>Congrats Stoner, you scored some sweet bud at the arcade. Now you go home and get high, you won the game.</p>
        <button id="restartGame">Restart</button>
    `;

    document.getElementById('restartGame').addEventListener('click', restartGame);
}

// Function to handle losing the game
function loseGame() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>You tried your best but you didn’t play good enough, you lost! You better work on those comobo movies. </p>
        <p>The Peace Out Phil says, “Sorry Dude, you knew the deal"</p>
        <button id="playAgain">Ask to play again</button>
        <button id="offerShrooms">Say, “Dude, sell me some weed and I can hook you up with some shrooms”</button>
    `;

    document.getElementById('playAgain').addEventListener('click', acceptChallenge);
    document.getElementById('offerShrooms').addEventListener('click', offerShrooms);
}

// Function to handle refusing the challenge
function refuseChallenge() {
    updateGameImage('arcade7');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Arcade Dealer says, "Okay, Dude, prove it or get out!"</p>
        <button id="acceptChallenge">Accept the video game challenge</button>
        <button id="offerShrooms">Say, "Dude, sell me some weed and I can hook you up with some shrooms"</button>
    `;

    document.getElementById('acceptChallenge').addEventListener('click', acceptChallenge);
    document.getElementById('offerShrooms').addEventListener('click', offerShrooms);
}


// Function to handle offering shrooms to the arcade dealer
function offerShrooms() {
    updateGameImage('arcade5');
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <p>Peace Out Phil says, “Bro, the lights, the sounds, I would totally dig some shrooms and video games! I will definitely hook you up!”</p>
        <p>Congrats Stoner, you scored some sweet bud at the arcade. You won, Bro, now you go home and get high!</p>
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

