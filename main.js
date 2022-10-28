//<TO-DO>
//-FIX IMAGE RATIOS
//-FIX CALENDAR
//-ADD SUPPORT PAGE
//archive doesn't work constanlt refreshing
// var fake_date = new Date("September 29, 2022 23:58:00");
// Date = function(){return fake_date;}; 
// Date.now = () => fake_date.getTime();
//json sitrgifiy local objects
//pre-load images
//image placeholder
// gameover movie name

window.addEventListener ("load", function() {
    loader.style.display = 'none';
});
guess='Skipped';

 if(!localStorage.getItem('playedBefore')){
  // window.location = window.location.href + "#info";
  window.location = "https://gocivici.github.io/horrordle/#info"
  //  window.location = "file:///C:/Users/gogob/Documents/dEATHDLE/Test/index.html#info"
  localStorage.setItem('playedBefore',"true");
 }

var buttonNo = 0;


bonusRoundState = false;
var playedBefore = false;
var sameDay = false;
for (var i = 0; i < localStorage.length; i++){
  console.log(localStorage.key(i));
}

function revealButtons(g = guessNo){
  picButtons = document.getElementsByClassName('imageButton');
  picButtons[g].classList.add('active');
  for (var i = 0; i <= g; i++){
    console.log("revealButton guess no " + guessNo);
     picButtons[i].style.display = "inline";
     picButtons[i].classList.remove('active');
  }
  showPic();
  // picButtons[g].classList.add('active');
}
// document.getElementById("button2").style.display = "none"
// document.getElementById("button3").style.display = "none"
// document.getElementById("footer").style.display = "block"



var movies = [
  ["The Texas Chainsaw Massacre", 1, "Sally Hardesty"],
  ["It", 1, "Eddie Kaspbrak"],
  ["It Follows", 2, "Jaime Height"],
  ["A Nightmare on Elm Street", 1, "Nancy Thompson"],
  ["Rec", 2, "Ángela Vidal"],
  ["Friday the 13th", 0, "Alice Hardy"],
  ["Event Horizon", 2, "Lieutenant Starck"],
  ["Saw", 1, "Amanda Young"],
  ["The Ring", 0, "Rachel Keller"],
  ["Hellraiser", 2, "Kirsty Cotton"],
  ["Final Destination", 2, "Alex Browning"],
  ["Annihilation", 2, "Lena"],
  ["Scream",0,"Dewey Riley"],
  ["The Witch",2,"Thomasin"],
  ["Carrie",1,"Sue Snell"],
  ["Alien",2,"Ellen Ripley"],
  ["Get Out",2,"Chris Washington"],
  ["The Evil Dead",1,"Ash Williams"],
  ["Malignant",2,"Sydney Lake"],
  ["Suspiria",0,"Suzy Bannion"],
  ["Doctor Sleep",1,"Abra Stone"],
  ["Annabelle",1,"Mia Form"],
  ["The Thing",1,"R.J. MacReady"],
  ["Dawn of the Dead",2,"Francine Parker"],
  ["Videodrome",2,"Bianca O'Blivion"],
  ["The Invisible Man",2,"Cecilia Kass"],
  ["Triangle",0,"Jess"],
  ["10 Cloverfield Lane",1,"Michelle"],
  ["28 Days Later",1,"Jim"],
  ["The Ruins",2,"Amy"],
  ["Halloween",2,"Laurie Strode"],
  ["Escape Room"],
  ["The Shining"],
  ["Psycho"],
  ["Rosemary's Baby"],
  ["Eraserhead"],
  ["The Cabinet of Dr"],
  ["Aliens"],
  ["Night of the Living Dead"],
  ["Possession"],
  ["The Cremator"],
  ["Nosferatu"],
  ["Repulsion"],
  ["Evil Dead II"],
  ["Onibaba"],
  ["Kwaidan"],
  ["House"],
  ["The Pied Piper"],
  ["The Exorcist"],
  ["The Wicker Man"],
  ["Jaws"],
  ["The Fly"],
  ["Hour of the Wolf"],
  ["Bride of Frankenstein"],
  ["Tetsuo: The Iron Man"],
  ["Braindead"],
  ["Nosferatu the Vampyre"],
  ["The Innocents"],
  ["Vampyr"],
  ["Deep Red"],
  ["Inland Empire"],
  ["The Unknown"],
  ["Invasion of the Body Snatchers"],
  ["The Fall of the House of Usher"],
  ["Jacob's Ladder"],
  ["The Birds"],
  ["Rapture"],
  ["Häxan"],
  ["Eyes Without a Face"],
  ["King Kong"],
  ["Frankenstein"],
  ["Invasion of the Body Snatchers"],
  ["An American Werewolf in London"],
  ["Kuroneko"],
  ["Lunacy"],
  ["The Haunting"],
  ["Day of the Dead"],
  ["Carnival of Souls"],
  ["The Phone Box"],
  ["Re-Animator"],
  ["Dr"],
  ["Angst"],
  ["The Phantom of the Opera"],
  ["The Devil"],
  ["Kill Baby Kill"],
  ["The Wailing"],
  ["Black Sunday"],
  ["In a Glass Cage"],
  ["Island of Lost Souls"],
  ["Black Sabbath"],
  ["Dead of Night"],
  ["Who Can Kill a Child?"],
  ["Mad Love"],
  ["The Return of the Living Dead"],
  ["Night of the Demon"],
  ["Angel Heart"],
  ["Audition"],
  ["Beauty and the Beast"],
  ["Black Christmas"],
  ["The Abominable Dr"],
  ["Swing You Sinners!"],
  ["Army of Darkness"],
  ["Cat People"],
  ["This Night I'll Possess Your Corpse"],
  ["In the Mouth of Madness"],
  ["Martin"],
  ["Midori"],
  ["The House With Laughing Windows"],
  ["I Walked With a Zombie"],
  ["Village of the Damned"],
  ["The Boxer's Omen"],
  ["The Body Snatcher"],
  ["The Pit the Pendulum and Hope"],
  ["The Day of the Beast"],
  ["The Omen"],
  ["Anguish"],
  ["Ghostwatch"],
  ["The Tell-Tale Heart"],
  ["The Masque of the Red Death"],
  ["The Curse of Frankenstein"],
  ["The Old Dark House"],
  ["Whistle and I'll Come to You"],
  ["House of Usher"],
  ["The Beyond"],
  ["Dementia"],
  ["The Ravishing of Frank N"],
  ["The Pit and the Pendulum"],
  ["A Bucket of Blood"],
  ["Dracula"],
  ["Brain Damage"],
  ["Castle of Blood"],
  ["Blind Beast"],
  ["Henry: Portrait of a Serial Killer"],
  ["Mill of the Stone Women"],
  ["Beetlejuice"],
  ["The Others"],
  ["Who Killed Who?"],
  ["A Bay of Blood"],
  ["The Woman Who Powders Herself"],
  ["Phase IV"],
  ["Phenomena"],
  ["The Hands of Orlac"],
  ["Dracula"],
  ["The Psychic"],
  ["Viy"],
  ["The Brood"],
  ["Vampire Hunter D: Bloodlust"],
  ["Witchfinder General"],
  ["Dead of Night"],
  ["Son of Frankenstein"],
  ["Theatre of Blood"],
  ["At Midnight I'll Take Your Soul"],
  ["Prince of Darkness"],
  ["Berserk: The Golden Age Arc 3 - The Advent"],
  ["Maniac"],
  ["The Mad Doctor"],
  ["The Call of Cthulhu"],
  ["The Uninvited"],
  ["How Wings Are Attached to the Backs of Angels"],
  ["The Fearless Vampire Killers"],
  ["Pulse"],
  ["The Cannibal Man"],
  ["The Fly"],
  ["The Seventh Victim"],
  ["The Whip and the Body"],
  ["The Midnight Parasites"],
  ["Bar-B-Que Movie"],
  ["The Hound of the Baskervilles"],
  ["The Devil-Doll"],
  ["Tucker and Dale vs"],
  ["The Changeling"],
  ["A Warning to the Curious"],
  ["Altered States"],
  ["The Devil's Backbone"],
  ["Bone Tomahawk"],
  ["The Wolf Man"],
  ["Phantasm"],
  ["Shivers"],
  ["Possibly in Michigan"],
  ["From Beyond"],
  ["Near Dark"],
  ["Frankenstein Must Be Destroyed"],
  ["The Flesh and the Fiends"],
  ["Tales From the Crypt"],
  ["Under the Blossoming Cherry Trees"],
  ["Don't Deliver Us From Evil"],
  ["The Golem: How He Came Into the World"],
  ["The Haunted Palace"],
  ["The Last Man on Earth"],
  ["The Living Dead at Manchester Morgue"],
  ["Spider Baby"],
  ["Them!"],
  ["The Thing From Another World"],
  ["A Quiet Place in the Country"],
  ["Hold That Ghost"],
  ["Devil Man - Volume 1: The Birth"],
  ["Bedevilled"],
  ["The Leopard Man"],
  ["Sisters"],
  ["The Signalman"],
  ["The Revenge of Frankenstein"],
  ["House of Wax"],
  ["Cube"],
  ["Gremlins"],
  ["All the Colors of the Dark"],
  ["The Last Theft"],
  ["Existenz"],
  ["From Dusk Till Dawn"],
  ["The Sandman"],
  ["The Cat and the Canary"],
  ["Planet Terror"],
  ["Gospodin Oformitel"],
  ["Ravenous"],
  ["House on Haunted Hill"],
  ["Street Trash"],
  ["Encounters of the Spooky Kind"],
  ["The Babadook"],
  ["The Perfume of the Lady in Black"],
  ["The Night Stalker"],
  ["The Devil Rides Out"],
  ["Kill List"],
  ["A Quiet Place"],
  ["The House That Screamed"],
  ["Society"],
  ["Paranorman"],
  ["Dracula"],
  ["Cannibal! the Musical"],
  ["Race With the Devil"],
  ["The Black Cat"],
  ["Long Weekend"],
  ["The Demon"],
  ["The Woman in Black"],
  ["The Company of Wolves"],
  ["Inferno"],
  ["Messiah of Evil"],
  ["Under the Shadow"],
  ["Don't"],
  ["Beyond the Darkness"],
  ["The Cabin in the Woods"],
  ["The Raven"],
  ["The White Reindeer"],
  ["Bad Ronald"],
  ["The Fog"],
  ["The Picture of Dorian Gray"],
  ["A Tale of Two Sisters"],
  ["The House of the Devil"],
  ["Phantasm II"],
  ["Sleepy Hollow"],
  ["Quatermass and the Pit"],
  ["Poltergeist"],
  ["Frankenhooker"],
  ["Alucarda"],
  ["Fright Night"],
  ["The Amazing Screw-On Head"],
  ["The Mummy"],
  ["City of the Living Dead"],
  ["Bad Taste"],
  ["Twins of Evil"],
  ["God Told Me to"],
  ["Alice Sweet Alice"],
  ["Horror Express"],
  ["The Tomb of Ligeia"],
  ["Basket Case"],
  ["Experiment in Evil"],
  ["The Other"],
  ["The Sinners of Hell"],
  ["And Soon the Darkness"],
  ["Torso"],
  ["Creepshow"],
  ["Kitchen Sink"],
  ["Chekist"],
  ["Antichrist"],
  ["Devilman - Volume 2: Demon Bird"],
  ["Paranoiac"],
  ["The Horrible Dr"],
  ["Creature From the Black Lagoon"],
  ["Frightmare"],
  ["Tales of Terror"],
  ["Dr"],
  ["Shock"],
  ["The Descent"],
  ["Pontypool"],
  ["The Tingler"],
  ["The Plague of the Zombies"],
  ["Ginger Snaps"],
  ["The Baby"],
  ["Tremors"],
  ["The Diabolical Dr"],
  ["Opera"],
  ["Death Powder"],
  ["Let Me in"],
  ["Taxidermia"],
  ["Mr"],
  ["Hardware"],
  ["The Vault of Horror"],
  ["Lemora: A Child's Tale of the Supernatural"],
  ["The Love Witch"],
  ["Cigarette Burns"],
  ["Lonesome Ghosts"],
  ["Frankenstein Created Woman"],
  ["Zoetrope"],
  ["Symptoms"],
  ["Dante's Inferno"],
  ["Quatermass II"],
  ["Martyrs"],
  ["The Iron Rose"],
  ["The Curse of the Werewolf"],
  ["Harpya"],
  ["The City of the Dead"],
  ["Waxworks"],
  ["Dracula: Prince of Darkness"],
  ["From Beyond the Grave"],
  ["The Grapes of Death"],
  ["Ebola Syndrome"],
  ["Raw"],
  ["Trouble Every Day"],
  ["House of Mortal Sin"],
  ["The Legend of Sleepy Hollow"],
  ["The Queen of Spades"],
  ["Deranged"],
  ["The Howling"],
  ["Daughters of Darkness"],
  ["The House by the Cemetery"],
  ["Demons"],
  ["The Orphanage"],
  ["Xtro"],
  ["Horrors of Malformed Men"],
  ["Dracula"],
  ["Bobby Yeah"],
  ["Schalcken the Painter"],
  ["A Nightmare on Elm Street 3: Dream Warriors"],
  ["Don't Hug Me I'm Scared 6"],
  ["Salem's Lot"],
  ["Fear"],
  ["The Fall of the House of Usher"],
  ["Noroi: The Curse"],
  ["The Stepfather"],
  ["Homicidal"],
  ["Torchbearer"],
  ["The Man in the Lower-Left Hand Corner of the Photograph"],
  ["Shadow of the Vampire"],
  ["Frankenweenie"],
  ["13 Beloved"],
  ["Tombs of the Blind Dead"],
  ["The Comedy of Terrors"],
  ["Three… Extremes"],
  ["Cronos"],
  ["Svengali"],
  ["Sleepaway Camp"],
  ["Asylum"],
  ["Night of the Eagle"],
  ["The Shiver of the Vampires"],
  ["The Spirit of Dark and Lonely Water"],
  ["Malpertuis"],
  ["Berberian Sound Studio"],
  ["Spirits of the Dead"],
  ["Troll Hunter"],
  ["Bubba Ho-Tep"],
  ["Isle of the Dead"],
  ["The Ghost & Mr"],
  ["May"],
  ["The Crazies"],
  ["Dark Night of the Scarecrow"],
  ["The Mummy"],
  ["The Alphabet"],
  ["Sweeney Todd: The Demon Barber of Fleet Street"],
  ["Il Caso Valdemar"],
  ["The Monster Squad"],
  ["Don't Breathe"],
  ["It Came From Outer Space"],
  ["Christine"],
  ["The Abomination"],
  ["Thanksgiving"],
  ["The Lost Boys"],
  ["The Mist"],
  ["The Quatermass Xperiment"],
  ["The Blood on Satan's Claw"],
  ["Planet of the Vampires"],
  ["The Devil's Rejects"],
  ["Rabid"],
  ["The Ordeal"],
  ["Pieces"],
  ["The Deadly Spawn"],
  ["Wicked City"],
  ["Parents"],
  ["In My Skin"],
  ["The Night Strangler"],
  ["The Night Walker"],
  ["Stagefright: Aquarius"],
  ["Begotten"],
  ["Fascination"],
  ["The Blair Witch Project"],
  ["White Zombie"],
  ["The Frighteners"],
  ["Two Thousand Maniacs!"],
  ["The Gorgon"],
  ["Vampire Hunter D"],
  ["The Red Queen Kills Seven Times"],
  ["Splatter: Naked Blood"],
  ["Suicide Club"],
  ["Lisa and the Devil"],
  ["Housebound"],
  ["Dark Water"],
  ["I Drink Your Blood"],
  ["Let's Scare Jessica to Death"],
  ["Blood Rage"],
  ["The Fall of the House of Usher"],
  ["The Ghost of Yotsuya"],
  ["Hard Labor"],
  ["Doctor X"],
  ["Premature Burial"],
  ["Dead & Buried"],
  ["The Cat With Hands"],
  ["CHAINSAW MAID"],
  ["The Serpent and the Rainbow"],
  ["The Legend of Hell House"],
  ["The Burning"],
  ["Hatchet for the Honeymoon"],
  ["Citizen Toxie: The Toxic Avenger IV"],
  ["Candyman"],
  ["Lust of the Vampire"],
  ["Zeder"],
  ["Inside"],
  ["Green Vinyl"],
  ["Dracula Has Risen From the Grave"],
  ["This House Has People in It"],
  ["Death and the Mother"],
  ["Q"],
  ["The Brides of Dracula"],
  ["Hell's Bells"],
  ["The Conjuring"],
  ["Fiend Without a Face"],
  ["Dust Devil"],
  ["Shrew's Nest"],
  ["The Ghost Breakers"],
  ["The Vampire Lovers"],
  ["Goodnight Mommy"],
  ["Der Student Von Prag"],
  ["See No Evil"],
  ["Session 9"],
  ["The House of Ghosts"],
  ["The Blob"],
  ["Blind Woman's Curse"],
  ["Mystery of the Wax Museum"],
  ["Ward 13"],
  ["Vampyres"],
  ["Gothic"],
  ["Amer"],
  ["Spring"],
  ["The Blackcoat's Daughter"],
  ["Mark of the Devil"],
  ["Drag Me to Hell"],
  ["Dumplings"],
  ["Magic"],
  ["The Entity"],
  ["Mark of the Vampire"],
  ["Bluebeard"],
  ["Captain Kronos: Vampire Hunter"],
  ["Corridors of Blood"],
  ["Dracula's Daughter"],
  ["Schramm"],
  ["The Enemy"],
  ["The Living Dead Girl"],
  ["The Little Shop of Horrors"],
  ["Pitch Black"],
  ["Sauna"],
  ["Wolfen"],
  ["The Hills Have Eyes"],
  ["Demon"],
  ["The Rambler"],
  ["The Ritual"],
  ["Rubber Johnny"],
  ["Intruder"],
  ["Black Death"],
  ["Something Wicked This Way Comes"],
  ["John Dies at the End"],
  ["Behind the Mask: The Rise of Leslie Vernon"],
  ["Retribution"],
  ["Lips of Blood"],
  ["The Red Spectre"],
  ["The Forbidden Files"],
  ["The Devil's Advocate"],
  ["Gemini"],
  ["Succubus"],
  ["The Territory"],
  ["Mr"],
  ["Trick 'R Treat"],
  ["The People Under the Stairs"],
  ["You're Next"],
  ["The Damned"],
  ["Night of the Living Dead"],
  ["The Reptile"],
  ["The House That Dripped Blood"],
  ["Body Melt"],
  ["Eugenie"],
  ["Variola Vera"],
  ["Dog Soldiers"],
  ["Halloween II"],
  ["Incubus"],
  ["The Editor"],
  ["The Last House on the Left"],
  ["The Merry Frolics of Satan"],
  ["There Was a Little Girl"],
  ["Prometheus"],
  ["Cannibal Holocaust"],
  ["Butcher Baker Nightmare Maker"],
  ["Children of the Damned"],
  ["The Beast From 20000 Fathoms"],
  ["The Loved Ones"],
  ["Slither"],
  ["Prikosnoveniye"],
  ["House of Whipcord"],
  ["Brain Dead"],
  ["UFO Abduction"],
  ["Maniac Cop 2"],
  ["Masters of Horror: Imprint"],
  ["The Last House on Dead End Street"],
  ["Arcana"],
  ["Tarantula"],
  ["Eyes of Fire"],
  ["Eden Lake"],
  ["Psychomania"],
  ["Dark Waters"],
  ["Lisa Lisa"],
  ["Séance"],
  ["Killer Klowns From Outer Space"],
  ["Fallen"],
  ["The Black Room"],
  ["Dr"],
  ["The Haunted House"],
  ["Vinyan"],
  ["Cloverfield"],
  ["Shutter"],
  ["The Exorcist III"],
  ["Murders in the Rue Morgue"],
  ["Blood Diner"],
  ["Blue Sunshine"],
  ["Where Evil Dwells"],
  ["Private Parts"],
  ["The Gore Gore Girls"],
  ["The Man They Could Not Hang"],
  ["The Witch Who Came From the Sea"],
  ["Nightmare"],
  ["Excision"],
  ["Murder Party"],
  ["Lake Mungo"],
  ["The Snow Woman"],
  ["Cutting Moments"],
  ["Wild Flowers"],
  ["Tales From the Darkside: The Movie"],
  ["Dr"],
  ["Night of the Seagulls"],
  ["Just Before Dawn"],
  ["A Bell From Hell"],
  ["The Phantom of Regular Size"],
  ["Next of Kin"],
  ["Dead End"],
  ["The Strange Case of Dr"],
  ["Don't Go in the House"],
  ["The Sentinel"],
  ["Murders in the Zoo"],
  ["Dagon"],
  ["The Raven"],
  ["Demon Seed"],
  ["Alien³"],
  ["The Autopsy of Jane Doe"],
  ["Massacre at Central High"],
  ["The Funhouse"],
  ["The Woman"],
  ["The Mask of Fu Manchu"],
  ["Medium"],
  ["Ju-On: The Curse"],
  ["Nekromantik 2"],
  ["Twice-Told Tales"],
  ["Phantom of the Opera"],
  ["Trilogy of Terror"],
  ["The Lost Spider Pit Sequence"],
  ["The Nights of Terror"],
  ["Willard"],
  ["Death Weekend"],
  ["Forbidden World"],
  ["Nightmare"],
  ["Zygote"],
  ["High Tension"],
  ["Full Circle"],
  ["The House on Sorority Row"],
  ["Haze"],
  ["The Separation"],
  ["Of Unknown Origin"],
  ["Hands of the Ripper"],
  ["Bride of Re-Animator"],
  ["An Angel for Satan"],
  ["The Long Hair of Death"],
  ["Fisheye"],
  ["Return of the Blind Dead"],
  ["Damien: Omen II"],
  ["I Bury the Living"],
  ["Rampo Noir"],
  ["The Cat and the Canary"],
  ["Trance"],
  ["Tetsuo II: Body Hammer"],
  ["Mad Ron's Prevues From Hell"],
  ["Death Line"],
  ["The Ninth Gate"],
  ["The Resurrected"],
  ["The Lair of the White Worm"],
  ["Dr Jekyll & Sister Hyde"],
  ["Taste the Blood of Dracula"],
  ["My Bloody Valentine"],
  ["Flesh for Frankenstein"],
  ["Love God"],
  ["Awakening of the Beast"],
  ["Marebito"],
  ["Family"],
  ["All Night Long 3: The Final Chapter"],
  ["Child's Play"],
  ["Lifeforce"],
  ["Blood Feast"],
  ["The Sorcerers"],
  ["Blinky™"],
  ["Terrorvision"],
  ["Dr"],
  ["Das Deutsche Kettensägenmassaker"],
  ["The Student of Prague"],
  ["Spoilsbury Toast Boy -1"],
  ["Nightbreed"],
  ["Silent Night Deadly Night"],
  ["Spoilsbury Toast Boy -2"],
  ["Torture Garden"],
  ["Films to Keep You Awake: The Baby's Room"],
  ["The Stuff"],
  ["Werewolf of London"],
  ["Nightdreams"],
  ["To the Devil a Daughter"],
  ["The Seventh Curse"],
  ["The Return of the Vampire"],
  ["Apocalypse Domani"],
  ["Vampire Circus"],
  ["The Two Faces of Dr"],
  ["Oculus"],
  ["The Conjuring 2"],
  ["Burnt Offerings"],
  ["Last Cannibal World"],
  ["Motel Hell"],
  ["Tourist Trap"],
  ["A Dark Song"],
  ["The Bloodstained Shadow"],
  ["Matango: Attack of the Mushroom People"],
  ["Evil Dead Trap"],
  ["Lost Hearts"],
  ["Home Movie"],
  ["Alone in the Dark"],
  ["Maniac"],
  ["The Abominable Snowman"],
  ["Twilight Zone: The Movie"],
  ["Unedited Footage of a Bear"],
  ["Faceless"],
  ["Frankenstein and the Monster From Hell"],
  ["Antibodies"],
  ["Dojoji Temple"],
  ["Unsane"],
  ["Slaughter High"],
  ["Creep"],
  ["Monkey Shines"],
  ["Crimson Peak"],
  ["The Phantom of the Opera"],
  ["The Day of the Triffids"],
  ["New Nightmare"],
  ["Happy Birthday to Me"],
  ["I Married a Monster From Outer Space"],
  ["It's Alive"],
  ["Patrick"],
  ["The Texas Chainsaw Massacre 2"],
  ["Dracula: Pages From a Virgin's Diary"],
  ["Cat's Eye"],
  ["Deathgasm"],
  ["Baghead"],
  ["Nadja"],
  ["Comedy"],
  ["The Stone Tape"],
  ["The Cat"],
  ["Bloody Birthday"],
  ["The Blob"],
  ["Love to Kill"],
  ["Father's Day"],
  ["Nekromantik"],
  ["The Strange World of Coffin Joe"],
  ["Stir of Echoes"],
  ["I Am Not a Serial Killer"],
  ["Kongo"],
  ["Antiviral"],
  ["Baron Blood"],
  ["Night of the Demons"],
  ["Creep 2"],
  ["The Driller Killer"],
  ["Witching & Bitching"],
  ["Psycho II"],
  ["Mad Mutilator"],
  ["Nightmare Castle"],
  ["Lesson of the Evil"],
  ["Tales From the Hood"],
  ["Spoilsbury Toast Boy"],
  ["Rituals"],
  ["The Bloody Lady"],
  ["Black Cat Mansion"],
  ["The Whisperer in Darkness"],
  ["Dolls"],
  ["28 Weeks Later"],
  ["Don't Be Afraid of the Dark"],
  ["Razorback"],
  ["Baba Yaga"],
  ["The Walking Dead"],
  ["Bio Zombie"],
  ["Horrors of the Black Museum"],
  ["Honeymoon"],
  ["Firebase"],
  ["Satan's Little Helper"],
  ["Love Object"],
  ["Eye of the Devil"],
  ["Tokyo Gore Police"],
  ["Eaten Alive"],
  ["The Shuttered Room"],
  ["Ginger Snaps 2: Unleashed"],
  ["Galaxy of Terror"],
  ["Chopping Mall"],
  ["Lokis"],
  ["Cat People"],
  ["The Children"],
  ["The Town That Dreaded Sundown"],
  ["Starry Eyes"],
  ["Dr"],
  ["Monster House"],
  ["Ju-On: The Grudge"],
  ["The Church"],
  ["Found"],
  ["Female Punishment of the Tokugawa"],
  ["Pumpkinhead"],
  ["Basket Case 2"],
  ["House of Frankenstein"],
  ["Drillbit"],
  ["Maniac Cop"],
  ["All Night Long 2: Atrocity"],
  ["Grabbers"],
  ["The Creeping Flesh"],
  ["Castle Freak"],
  ["Frankenstein"],
  ["Tales From the Crypt: Demon Knight"],
  ["Sleepaway Camp II: Unhappy Campers"],
  ["A Virgin Among the Living Dead"],
  ["The Asphyx"],
  ["Help!"],
  ["A Cure for Wellness"],
  ["Hellsing Ultimate II"],
  ["The Canterville Ghost"],
  ["The Flesh Eaters"],
  ["Dracula"],
  ["The House at the End of Time"],
  ["Vampire Girl vs"],
  ["And Now the Screaming Starts"],
  ["Cemetery of Terror"],
  ["Sssssss"],
  ["Vampyros Lesbos"],
  ["The Boy"],
  ["Stake Land"],
  ["Men Behind the Sun"],
  ["Habit"],
  ["Edge of Sanity"],
  ["Buried Alive"],
  ["The Toolbox Murders"],
  ["Sinister"],
  ["Frankenstein Meets the Wolf Man"],
  ["The Ghoul"],
  ["The Visit"],
  ["Pet Sematary"],
  ["The Kiss of the Vampire"],
  ["Roar"],
  ["The Wizard of Gore"],
  ["The Unnaturals"],
  ["The Awakening"],
  ["Lorna the Exorcist"],
  ["Island of Death"],
  ["The Rape of the Vampire"],
  ["The Night Evelyn Came Out of the Grave"],
  ["Die! Die! My Darling!"],
  ["The Eyes of My Mother"],
  ["Christmas Evil"],
  ["Countess Dracula"],
  ["Children Shouldn't Play With Dead Things"],
  ["Kuso"],
  ["Circus of Horrors"],
  ["Keyhole"],
  ["Dead of Night"],
  ["Abby"],
  ["Amsterdamned"],
  ["Mystics in Bali"],
  ["The Final Girls"],
  ["Baxter"],
  ["A Cold Night's Death"],
  ["Body Snatchers"],
  ["Quando Eu Era Vivo"],
  ["Goke Body Snatcher From Hell"],
  ["The Blood Spattered Bride"],
  ["Krampus"],
  ["Prison"],
  ["Orphan"],
  ["Dog of Man"],
  ["Sebastian's Voodoo"],
  ["The Prowler"],
  ["Macabre"],
  ["The Skull"],
  ["Pandorum"],
  ["The House of the Seven Gables"],
  ["The Horribly Slow Murderer With the Extremely Inefficient Weapon"],
  ["Silent Night Bloody Night"],
  ["The Innkeepers"],
  ["Hello Mary Lou: Prom Night II"],
  ["Dream Home"],
  ["Snake Woman's Curse"],
  ["Thirst"],
  ["Necronomicon"],
  ["Night of the Devils"],
  ["My Sweet Satan"],
  ["The Witch's Mirror"],
  ["The Void"],
  ["Hellboy Animated: Blood and Iron"],
  ["The Eye"],
  ["Night of Fear"],
  ["The Mask"],
  ["Hush"],
  ["The Invisible Man Returns"],
  ["Alligator"],
  ["Terror Train"],
  ["Masters of Horror: Dreams in the Witch-House"],
  ["The She-Butterfly"],
  ["Dr"],
  ["House"],
  ["Two Evil Eyes"],
  ["The Cars That Ate Paris"],
  ["Prevenge"],
  ["The Gate"],
  ["The Man Who Could Cheat Death"],
  ["The Devil in a Convent"],
  ["The Devil's Candy"],
  ["Dracula A"],
  ["Black Past"],
  ["The Ghost"],
  ["Dead Snow"],
  ["The Witches"],
  ["Lovely Molly"],
  ["Hansel & Gretel"],
  ["Dead Eyes of London"],
  ["Satan's Blood"],
  ["Absentia"],
  ["Wolf Creek 2"],
  ["Dark Woods"],
  ["Isolation"],
  ["An Evening of Edgar Allan Poe"],
  ["Masters of Horror: The Black Cat"],
  ["The Cottage"],
  ["Baby Blood"],
  ["Feast"],
  ["Dead Sushi"],
  ["Dead Heat"],
  ["Demons 2"],
  ["The Satanic Rites of Dracula"],
  ["The Earth Dies Screaming"],
  ["Spookies"],
  ["Cold Prey II"],
  ["Piranha"],
  ["Son of Dracula"],
  ["The Manson Family"],
  ["1408"],
  ["The Canal"],
  ["Madhouse"],
  ["Crooked Rot"],
  ["A Blade in the Dark"],
  ["Them"],
  ["J"],
  ["Color Me Blood Red"],
  ["100 Bloody Acres"],
  ["Subconscious Cruelty"],
  ["Humanoids From the Deep"],
  ["Valibation"],
  ["They Look Like People"],
  ["Scream and Scream Again"],
  ["Visiting Hours"],
  ["The Awful Dr"],
  ["The Horror of Frankenstein"],
  ["Phantasm III: Lord of the Dead"],
  ["Life"],
  ["The Signal"],
  ["Satanic Pandemonium"],
  ["The Offspring"],
  ["Deathwatch"],
  ["Mindwarp"],
  ["The Visitor"],
  ["The Case of the Stuttering Pig"],
  ["Maciste in Hell"],
  ["The Prophecy"],
  ["Ghosts"],
  ["Whoever Slew Auntie Roo?"],
  ["Late Phases"],
  ["One Dark Night"],
  ["The Living Skeleton"],
  ["The Brain"],
  ["Needful Things"],
  ["The Grim Reaper"],
  ["Whispering Corridors"],
  ["The Lords of Salem"],
  ["April Fool's Day"],
  ["Popcorn"],
  ["Blacula"],
  ["Wolf Creek"],
  ["5150 Elm's Way"],
  ["Masters of Horror: Sounds Like"],
  ["The Demon"],
  ["Extraordinary Tales"],
  ["Def by Temptation"],
  ["Doom House"],
  ["Bloodbath at the House of Death"],
  ["Insidious"],
  ["Innocent Blood"],
  ["The Faculty"],
  ["House of Fire"],
  ["We Are What We Are"],
  ["Organ"],
  ["The Slumber Party Massacre"],
  ["Human Lanterns"],
  ["Land of the Dead"],
  ["A Chinese Ghost Story II"],
  ["The Willies"],
  ["We're Going to Eat You"],
  ["Severance"],
  ["The Alchemist Cookbook"],
  ["Veronica"],
  ["Mother's Day"],
  ["The Evil Within"],
  ["Evilspeak"],
  ["Crawlspace"],
  ["Cast a Deadly Spell"],
  ["Dementia 13"],
  ["The Bat"],
  ["Slumber Party Massacre II"],
  ["Say Yes"],
  ["The Dunwich Horror"],
  ["I Spit on Your Grave"],
  ["American Mary"],
  ["Trick or Treat"],
  ["Demon City Shinjuku"],
  ["Memoirs of a Sinner"],
  ["Infection"],
  ["The Invisible Ray"],
  ["Abbott and Costello Meet the Mummy"],
  ["Warlock"],
  ["Salem's Lot"],
  ["The Lift"],
  ["964 Pinocchio"],
  ["V/H/S/2"],
  ["Curse of the Devil"],
  ["Death Machine"],
  ["Proxy"],
  ["X: The Unknown"],
  ["The Seasoning House"],
  ["The Beast With Five Fingers"],
  ["A Holy Place"],
  ["Black Friday"],
  ["Curtains"],
  ["The Devil's Nightmare"],
  ["Blood and Lace"],
  ["Masters of Horror: Sick Girl"],
  ["The Redeemer: Son of Satan!"],
  ["Silver Bullet"],
  ["Macabre"],
  ["The Comeback"],
  ["Detention"],
  ["Masters of Horror: Homecoming"],
  ["House of 1000 Corpses"],
  ["Eerie Tales"],
  ["Rogue"],
  ["The Kindred"],
  ["We Are What We Are"],
  ["Southbound"],
  ["Alien: Covenant"],
  ["Venom"],
  ["Midnight"],
  ["Behemoth the Sea Monster"],
  ["Cooties"],
  ["The Devil Bat"],
  ["The Amityville Horror"],
  ["The Only Man"],
  ["The Initiation"],
  ["It! the Terror From Beyond Space"],
  ["The Evil of Frankenstein"],
  ["Sorority Babes in the Slimeball Bowl-O-Rama"],
  ["The Antichrist"],
  ["Alma"],
  ["The Haunted Castle"],
  ["Lust for a Vampire"],
  ["The Treasure of Abbot Thomas"],
  ["Nina Forever"],
  ["Below"],
  ["The Sacrament"]
];
  var pix = [];
  // autocomplete(document.getElementById("guess"), movies);
  var gameBeginning = new Date('September 30, 2022 00:00:00');
  var countDownTime =  new Date();
  var present_date = new Date();
  // var present_date = new Date('September 26, 2022 00:00:00');

  // gameBeginning = new Date(gameBeginning.getTime() + 0 * 60 * 1000);
  console.log(gameBeginning.getTimezoneOffset());
  dayCounter();
  console.log("gameBeginning: ",gameBeginning);
  console.log("now: ",present_date);
  

// console.log(textResult);
function dayCounter(){
  dayCount = Math.floor((present_date - gameBeginning) / (1000 * 60 * 60 * 24));
  return dayCount;
}

markCalendar();

function markCalendar() {
  winCount = 0;
loseCount = 0;
  dates = document.getElementsByClassName('calendar__number');
  console.log(dates[10].innerHTML);
  var tag = [];
  for (var i = 0; i < dates.length; i++) {


      if (dates[i].innerHTML==dayCount) {
        dates[i].classList.add('current');
        
        for (var j = 0; j <= i; j++) {
          if (localStorage.getItem('day'+(j+1))) {
            if (localStorage.getItem('day'+(j+1))=='true') {
                dates[j].classList.add('won');
                winCount=winCount + 1;
            } else if (localStorage.getItem('day'+(j+1))=='false') {
                dates[j].classList.add('lost');
                loseCount=loseCount + 1;
            }

          }else {


          dates[j].classList.add('past');
          dates[j] = document.createElement('a');
          //dates[j].setAttribute('href','#');
          if(localStorage.getItem("playedToday")){
          // dates[j].setAttribute('onclick','getArchive(' + (j+1) +')');
          // dates[j] = "<a href='#'>" + dates[j] + "</a>";
            }
          }
          // dates[j] = "<a href='" + dayCount + "'>" + dates[j] + "</a>";
          //tag[j].appendChild(dates[j]);
          //console.log(tag[j]);
          console.log(dates[j]);
        }

        console.log(dates[i]);
      }
  }
  console.log("win:"+ winCount)
  console.log("lose:"+ loseCount)
  winPerc.textContent = Math.ceil(winCount/(winCount+loseCount)*100)+"%";
  totalPlays.textContent = winCount+loseCount
}


var points = "⬛⬛⬛"
//check if the user played this before
firstCheck();
revealButtons();
function firstCheck(){
  guessNo = 0;
  feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
  if(!localStorage.getItem('streak')){localStorage.setItem('streak',0)}
  if(!localStorage.getItem('firstGuessStat')){localStorage.setItem('firstGuessStat',0)}
  if(!localStorage.getItem('secondGuessStat')){localStorage.setItem('secondGuessStat',0)}
  if(!localStorage.getItem('thirdGuessStat')){localStorage.setItem('thirdGuessStat',0)}
}






function clearGuess() {
  localStorage.removeItem('firstGuess');
  localStorage.removeItem('secondGuess');
  localStorage.removeItem('guessNo');
  localStorage.removeItem('winningGuess');
  localStorage.removeItem('lost');
  localStorage.removeItem('movieName');
  localStorage.removeItem("playedToday");
  localStorage.removeItem('result');
  document.getElementById("firstGuess").style.display = "none";
  document.getElementById("secondGuess").style.display = "none";
  document.getElementById("shareResult").style.display = "none";
  document.getElementById("guessForm").style.display = "block";
  document.getElementById("countDown").style.display = "none";
  document.getElementById("footer").style.display = "none";
  
}


function checkingGuess() {
  

streakNumber.textContent =localStorage.getItem('streak');

  if (localStorage.getItem('day')==dayCount) {


  playedBefore = true;
  textResult=localStorage.getItem('result')
  document.getElementById("movieName").innerHTML = localStorage.getItem('movieName')
  
  console.log("played before: ",playedBefore);
  console.log(localStorage.getItem('firstGuess'));
  console.log(localStorage.getItem('secondGuess'));
  if(localStorage.getItem('guessNo')){guessNo=localStorage.getItem('guessNo')};
  feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
  if(localStorage.getItem('result')) {localStorage.setItem('result', textResult);}
  if(localStorage.getItem('firstGuess')){firstGuess.textContent = "❌ " + localStorage.getItem('firstGuess');document.getElementById("firstGuess").style.display = "block";}
  if(localStorage.getItem('secondGuess')){secondGuess.textContent = "❌ " + localStorage.getItem('secondGuess');document.getElementById("secondGuess").style.display = "block";}
  if(localStorage.getItem('winningGuess')||localStorage.getItem('lost')){document.getElementById("resultText").innerHTML =textResult;document.getElementById("movieFrame").style.display = "none";document.getElementsByClassName("resultContainer")[0].style.display="flex";document.getElementsByClassName("picButtons")[0].style.display="none";revealButtons(2);document.getElementById("feedback").innerHTML = "Next movie at <b>midnight!</b> 🕛";document.getElementById("shareResult").style.display = "block";document.getElementById("countDown").style.display = "block";document.getElementById("footer").style.display = "block";document.getElementById("guessForm").style.display = "none";document.getElementById("firstGuess").style.display = "none";document.getElementById("secondGuess").style.display = "none";document.getElementById("resultText").style.display="block";}else {document.getElementById("shareResult").style.display = "none";document.getElementById("guessForm").style.display = "block";document.getElementById("resultText").style.display="none";};
  if(localStorage.getItem('lost')){ document.getElementById("congratz").innerHTML = "You lost☠️"; document.getElementsByClassName("resultContainer")[0].style.borderColor = "#C62828";}
  secondGuess.textContent = "❌ " + localStorage.getItem('secondGuess');
  revealButtons();
}else {
clearGuess();
localStorage.setItem('day', dayCount);
}
markCalendar();

}
checkingGuess();
window.onload = deathOftheDay();
  // console.log(dayCount);




  function deathOftheDay(x=dayCount){
    pix = [];
   movieOfTheDay = movies[x-1];

    for (let i = 1; i < 4; i++) {
      pix.push("images/"+movieOfTheDay[0]+"/"+i+".png");
      preloadImage("images/"+movieOfTheDay[0]+"/"+i+".png");
    }
    // preloadImage("images/"+movieOfTheDay[0]+"/poster.png");
    document.getElementById("posterFrame").src = "images/"+movieOfTheDay[0]+"/poster.jpg";
    console.log('Movie: ', movieOfTheDay[0]);
    console.log('Array: ', pix);
    showPic();

    // picButton = document.getElementsByClassName('picButton');
    // picButton.setAttribute('onclick','getImage()');
  }

  function showPic(p=guessNo){
    
    // document.getElementById("movieFrame").src = "http://www.deelay.me/3000/https://via.placeholder.com/1920x1080";
    document.getElementById("movieFrame").src = pix[p];
    buttonNo = p;
    picButtons = document.getElementsByClassName('imageButton');
    for (let i=0; i<3; i++){
      picButtons[i].classList.remove('active');
    }
    picButtons[p].classList.add('active');
    // for (let i = 0; i < 2; i++) {
    //   const element = array[i];
      
    // }
  }

  function submitBonus(b=0){
    plausible('Played');
    if (buttonNo==movieOfTheDay[1]&&b==0) {
      bonusRoundState= true;
      // document.getElementById("bonusQuestion").style.display="none";
      document.getElementById("bonusQuestion").innerHTML = "Survivor: "+ movieOfTheDay[2] + " ⭐";

      textResult = textResult + "(⭐)"
      console.log("you win!")
    } else if(b==1){
      // document.getElementById("bonusQuestion").innerHTML = "Survivor: "+ movieOfTheDay[2];
      document.getElementById("congratz").innerHTML = "You lost☠️";
      document.getElementsByClassName("resultContainer")[0].style.borderColor = "#C62828";
    }
    else{
      console.log('you lose')
      document.getElementById("bonusQuestion").innerHTML = "Survivor: "+ movieOfTheDay[2];


    }
    document.getElementById("movieFrame").style.display = "none";
    document.getElementsByClassName("resultContainer")[0].style.display="flex";
    localStorage.setItem('result', textResult);
    document.getElementById("feedback").style.display = "block";
    document.getElementById("feedback").innerHTML = "Next movie at <b>midnight!</b> 🕛 <br>";
    document.getElementById("resultText").innerHTML = textResult;
    document.getElementById("resultText").style.display="block";
    document.getElementById("countDown").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("shareResult").style.display = "block";
    document.getElementById("submitBonusGuess").style.display="none";
    document.getElementById("skipBonusGuess").style.display="none";
    document.getElementsByClassName("picButtons")[0].style.display="none";
    showPic(movieOfTheDay[1])
    console.log(buttonNo);
    addData();
  }
  if(!localStorage.getItem('result')){
  textResult = "🔪";
}else{
  textResult = localStorage.getItem('result');
}
  function checkGuess() {
    localStorage.setItem('playedBefore','true');
    
console.log("day count:" + dayCount);
    let myGuess = guess
   
    if (myGuess === movieOfTheDay[0]) {
      
      if(guessNo==0){localStorage.setItem('firstGuessStat',parseInt(localStorage.getItem('firstGuessStat')) + 1);}
      if(guessNo==1){localStorage.setItem('secondGuessStat',parseInt(localStorage.getItem('secondGuessStat')) + 1);}
      if(guessNo==2){localStorage.setItem('thirdGuessStat',parseInt(localStorage.getItem('thirdGuessStat')) + 1);}
      localStorage.setItem('streak',parseInt(localStorage.getItem('streak')) + 1);
      localStorage.setItem('day'+dayCount,'true');
      // document.getElementById("movieFrame").src = "images/"+movieOfTheDay+"/poster.jpg";
      // console.log(localStorage.getItem('day'+dayCount));
      streakNumber.textContent = localStorage.getItem('streak');
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("feedback").style.display = "none";
      document.getElementById("movieName").innerHTML = movieOfTheDay[0] + " ✅";
      
      localStorage.setItem('movieName', movieOfTheDay[0] + " ✅")
      // document.getElementById("bonusQuestion").innerHTML = "⭐BONUS ROUND⭐<br> Can you guess which <b>image</b> contains the survivor?";
      document.getElementById("bonusQuestion").innerHTML = "⭐BONUS ROUND⭐<br> Use the buttons below to choose the image with the survivor";
      document.getElementById("submitBonusGuess").style.display = "inline";
      document.getElementById("skipBonusGuess").style.display = "inline";
      textResult = textResult + "🟩";
      for (var i = 1; i < (3-guessNo); i++) {
        textResult = textResult + "⬛";
      }
      localStorage.setItem('result', textResult);
      // document.getElementById("countDown").style.display = "block";
      // document.getElementById("shareResult").style.display = "block";
      // document.getElementsByClassName("picButtons")[0].classList.add('bonusScreen')
      tempButton = document.getElementsByClassName("imageButton");
      for (let i = 0; i < 3; i++) {
        tempButton[i].classList.add("bonusScreen");
      }
      document.getElementsByClassName("imageButton")[0].style.fontSize = "32px";
      localStorage.setItem("winningGuess", guess);
      localStorage.setItem("playedToday", "yes");
        document.getElementById("firstGuess").style.display = "none";
  document.getElementById("secondGuess").style.display = "none";
      

      dates[dayCount-1].classList.add('won');
      revealButtons(2);

    } else if(guessNo==1){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo', guessNo);
      feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      firstGuess.textContent = "❌ " + guess;
      localStorage.setItem('firstGuess', guess);
      document.getElementById("firstGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result', textResult);
      revealButtons();
    }else if(guessNo<2){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo', guessNo);
      feedback.textContent =  "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      secondGuess.textContent = "❌ " + guess;
      localStorage.setItem('secondGuess', guess);
      document.getElementById("secondGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result', textResult);
      revealButtons();
    }
     else{
      // guessNo = guessNo + 1;
      feedback.textContent = "GAME OVER";
      // document.getElementById("movieName").innerHTML = movieOfTheDay[0];
      textResult = textResult + "🟥";
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("feedback").style.display = "none";
      document.getElementById("firstGuess").style.display = "none";
      document.getElementById("secondGuess").style.display = "none";
      localStorage.setItem('guessNo', guessNo);
      localStorage.setItem('streak', 0);
      localStorage.setItem('day'+dayCount,'false');
      localStorage.setItem("lost", "yes");
      localStorage.setItem("playedToday", "yes");
      dates[dayCount-1].classList.add('lost');
      submitBonus(1);

    }
    
    console.log(textResult);
    document.getElementById("guessForm").reset();
    markCalendar();
    guess = "Skipped"
    
 }


 const autoCompleteJS = new autoComplete({
  placeHolder: "Search for Movies...",
  // wrapper: false,
  data: {
      src: movies.map(movies => movies[0])
  },
  resultItem: {
      highlight: true,
  },
  events: {
    input: {
        selection: (event) => {
            const selection = event.detail.selection.value;
            autoCompleteJS.input.value = selection;
        },
        open() {
          const position =
              autoCompleteJS.input.getBoundingClientRect().bottom + autoCompleteJS.list.getBoundingClientRect().height >
              (window.innerHeight || document.documentElement.clientHeight);

          if (position) {
              autoCompleteJS.list.style.bottom = autoCompleteJS.input.offsetHeight + 8 + "px";
          } else {
              // autoCompleteJS.list.style.bottom = -autoCompleteJS.list.offsetHeight - 8 + "px";
          }
      },
    }
}
});

autoCompleteJS.input.addEventListener("selection", function (event) {
  // guess = "skipped"
  // event.detail.selection.value = "skipped";
  const feedback = event.detail;
  // Prepare User's Selected Value
  guess = event.detail.selection.value
  autoCompleteJS.input.value = guess;
  // Console log autoComplete data feedback
  console.log(event.detail.selection.value);
  checkGuess();
});

function copyToClipboard() {
    plausible('Share');
    navigator.clipboard.writeText("Horrordle #" + dayCount + "\n"+ textResult).then(() => {
      shareResult.value = "copied!";
      
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!

    });
  }

function getArchive(j,d = dayCount){

  dates[d-1].classList.remove('current');
  d = j;
  dates[j-1].classList.add('current');
  deathOftheDay(j);
  document.getElementById('guess').value = "";
  location.href='#';
  //window.open("#");
}



  submitGuess.addEventListener('click', checkGuess)

 const labels = [
  'First Guess',
  'Second Guess',
  'Third Guess',
];



const data = {
  labels: labels,
  datasets: [{
    label: 'Number of guesses',
    backgroundColor: ['#BB86FC'],
    fontColor: 'white',
    color:'white',
    data: [localStorage.getItem('firstGuessStat'), localStorage.getItem('secondGuessStat'), localStorage.getItem('thirdGuessStat')],
  }]
};

Chart.defaults.color='white'
Chart.defaults.borderColor='grey'
const config = {
  type: 'bar',
  data: data,
  options: {
    // maintainAspectRatio: false,
    scales:{
      yAxes:{
        ticks:{
          stepSize:1
        }
      }
    }
  }
};

var x = setInterval(function() {
  // countDownTime.setDate(Math.floor((present_date - gameBeginning) / (1000 * 60 * 60 * 24))+2);
  dayCounter();
  
  dateVariable = present_date.getDate()
  countDownTime.setDate(dateVariable+1);
  countDownTime.setHours(0);
  countDownTime.setMinutes(0);
  countDownTime.setSeconds(0);
  var now = new Date();
  // console.log("now: ",now);
  var remainingTime = countDownTime - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  hoursLeft = Math.trunc((remainingTime % day) / hour);
  minutesLeft = Math.trunc((remainingTime % hour) / minute);
  secondsLeft = Math.trunc((remainingTime % minute) / second);
document.getElementById("countDown").innerHTML =  hoursLeft + "h "
+ minutesLeft + "m " + secondsLeft + "s ";
//console.log(remainingTime);
// console.log(localStorage.getItem('day'));
// console.log("day count: " + dayCount);
dayCount = Math.floor((now - gameBeginning) / (1000 * 60 * 60 * 24));
if (localStorage.getItem('day')!=dayCount)  {
     window.location.reload();
}
}, 1000);
function addData(){
	myChart.data.datasets[0].data[0] = localStorage.getItem('firstGuessStat');
  myChart.data.datasets[0].data[1] = localStorage.getItem('secondGuessStat');
  myChart.data.datasets[0].data[2] = localStorage.getItem('thirdGuessStat');
  myChart.update();
}
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
};
function resetFunction() {
  if (confirm("this will delete all you progress, are you sure?") == true) {
    window.localStorage.clear();
  } else {

  } 
}
//window.localStorage.clear();