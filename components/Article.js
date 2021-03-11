// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'A Short Story by Robert Zimmerman',
    date: 'August 7, 1963',
    firstParagraph: `Oh, I’m sailin' away my own true love
    I’m a-sailin' away in the morning
    Is there somethin' I can send you from across the sea
    From the place that I’ll be landing?
    
    No, there’s nothin' you can send me, my own true love
    There’s nothin' I'm a-wishing to be ownin'
    Just a-carry yourself back to me unspoiled
    From across that lonesome ocean
    
    Ah, but I just thought you might want somethin' fine
    Made of silver or of golden
    Either from the mountains of Madrid
    Or from the coast of Barcelona`,

    secondParagraph: `Well, if I had the stars from the darkest night
    And the diamonds from the deepest ocean
    I’d forsake them all for your sweet kiss
    For that’s all I’m a-wishin' to be ownin'
    
    Well I might be gone a long old time
    And it’s only that I’m asking
    Is there somethin' I can send you to remember me by
    To make your time more easy passing
    
    Oh, how can, how can you ask me again
    It only brings me sorrow
    The same thing I would want today
    I want again tomorrow`,

    thirdParagraph: `I got a letter on a lonesome day
    It was from her ship a-sailin'
    Sayin' I don’t know when I’ll be comin' back again
    It depends on how I’m a-feelin'
    
    If a-you, my love, must think that-a-way
    I’m sure your mind is a-roamin'
    I’m sure your thoughts are not with me
    But with the country to where you’re goin'
    
    So take heed, take heed of the western winds
    Take heed of the stormy weather
    And yes, there’s somethin' you can send back to me
    Spanish boots of Spanish leather`
  },
  {
    title: 'Baird School Discplinary Hearing Transcript',
    date: 'November 30, 1992',
    firstParagraph: `Mr. Trask: I'm going to recommend to the disciplinary committee that you be expelled, Mr. Sims. You are a cover-up artist and you are a liar.

    Frank Slade: But not a snitch.
    
    Trask: Excuse me?
    
    Slade: No, I don't think I will.
    
    Trask: Mr. Slade.
    
    Slade: This is such a crock of shit.
    
    Trask: Please watch your language, Mr. Slade. You are in the Baird School not a barracks. Mr. Sims, I will give you one final opportunity to speak up.
    
    Slade: Mr. Sims doesn't want it. He doesn't need to labeled: "Still worthy of being a 'Baird Man.'" What the hell is that? What is your motto here? "Boys, inform on your classmates, save your hide" -- anything short of that we're gonna burn you at the stake? Well, gentlemen, when the shit hits the fan some guys run and some guys stay. Here's Charlie facing the fire; and there's George hidin' in big Daddy's pocket. And what are you doin'? You're gonna reward George and destroy Charlie.`,

    secondParagraph: `Trask: Are you finished, Mr. Slade?

    Slade:No, I'm just gettin' warmed up. I don't know who went to this place, William Howard Taft, William Jennings Bryan, William Tell -- whoever. Their spirit is dead -- if they ever had one -- it's gone. You're building a rat ship here. A vessel for sea goin' snitches. And if you think you're preparing these minnows for manhood you better think again. Because I say you are killing the very spirit this institution proclaims it instills! What a sham. What kind of a show are you guys puttin' on here today. I mean, the only class in this act is sittin' next to me. And I'm here to tell ya this boy's soul is intact. It's non-negotiable. You know how I know? Someone here -- and I'm not gonna say who -- offered to buy it. Only Charlie here wasn't sellin'.
  
    Trask: Sir, you are out of order!
  
    Slade: Outta order? I'll show you outta order! You don't know what outta order is, Mr. Trask! I'd show you but I'm too old; I'm too tired; I'm too fuckin' blind. If I were the man I was five years ago I'd take a FLAME-THROWER to this place! Outta order. Who the hell you think you're talkin' to? I've been around, you know? There was a time I could see. And I have seen boys like these, younger than these, their arms torn out, their legs ripped off. But there isn't nothin' like the sight of an amputated spirit; there is no prosthetic for that. You think you're merely sendin' this splendid foot-soldier back home to Oregon with his tail between his legs, but I say you are executin' his SOUL!! And why?! Because he's not a Baird man! Baird men, ya hurt this boy, you're going to be Baird Bums, the lot of ya. And Harry, Jimmy, Trent, wherever you are out there, FUCK YOU, too!`,

    thirdParagraph: `Trask: Stand down, Mr. Slade!

    Slade: I'm not finished! As I came in here, I heard those words, "cradle of leadership." Well, when the bough breaks, the cradle will fall. And it has fallen here; it has fallen. Makers of men; creators of leaders; be careful what kind of leaders you're producin' here. I don't know if Charlie's silence here today is right or wrong.
    
    I'm not a judge or jury. But I can tell you this: he won't sell anybody out to buy his future!! And that, my friends, is called integrity! That's called courage! Now that's the stuff leaders should be made of. Now I have come to the crossroads in my life. I always knew what the right path was. Without exception, I knew. But I never took it. You know why? It was too damn hard. Now here's Charlie. He's come to the crossroads. He has chosen a path. It's the right path. It's a path made of principle -- that leads to character. Let him continue on his journey.
    
    You hold this boy's future in your hands, committee. It's a valuable future. Believe me. Don't destroy it! Protect it. Embrace it. It's gonna make ya proud one day -- I promise you.`
  },
  {
    title: `Excerpt from 'Their Eyes Were Watching God' by Zora Neale Hurston`,
    date: 'August 7, 1963',
    firstParagraph: `Ships at a distance have every man’s wish on board. For some they come in with the tide. For others they sail forever on the horizon, never out of sight, never landing until the Watcher turns his eyes away in resignation, his dreams mocked to death by Time. That is the life of men.`,

    secondParagraph: `Now, women forget all those things they don’t want to remember, and remember everything they don’t want to for-get. The dream is the truth. Then they act and do things accordingly`,

    thirdParagraph: `So the beginning of this was a woman and she had come back from  burying  the  dead.  Not  the  dead  of  sick  and  ailing  with  friends at the pillow and the feet. She had come back from the sodden and the bloated; the sudden dead, their eyes flung wide open in judgment.`
  }
];

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:
*/

function articleMaker (artObj) {
    const article = document.createElement("div");
    const articleTitle = document.createElement("h2");
    const articleDate = document.createElement("p");
    const firstPara = document.createElement("p");
    const secondPara = document.createElement("p");
    const thirdPara = document.createElement("p");
    const expandButton = document.createElement("span");

    article.appendChild(articleTitle);
    article.appendChild(articleDate);
    article.appendChild(firstPara);
    article.appendChild(secondPara);
    article.appendChild(thirdPara);
    article.appendChild(expandButton);

    article.classList.add("article");
    articleDate.classList.add("date");
    expandButton.classList.add("expandButton");

    articleTitle.textContent = artObj.title;
    articleDate.textContent = artObj.date;
    firstPara.textContent = artObj.firstParagraph;
    secondPara.textContent = artObj.secondParagraph;
    thirdPara.textContent = artObj.thirdParagraph;
    expandButton.textContent = "+";
/*
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.
*/
    expandButton.addEventListener("click", function(event) {
        article.classList.toggle("article-open");
    });

/*
  Step 3: Don't forget to return something from your function!
*/
    return article;
}
/*
  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).
*/
const artciles = document.querySelector(".articles");
data.forEach( (articleObj) => {
    artciles.appendChild(articleMaker(articleObj));
});

/*
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
