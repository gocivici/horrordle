var movies = [
    ["The Cabin in the Woods", 3, "No survivors"],
    ["Drag Me To Hell",2,"Clay Dalton"],
    ["The Descent",1,"Sarah Carter"],
    ["Ready or Not",2,"Grace Le Domas"],
    ["Cloverfield",3,"No survivors"],
    ["Prince of Darkness", 0, "Brian Marsh"],
    ["The Ritual", 1, "Luke"],
    ["Funny Games",3,"No survivors"],
    ["Climax",1," Psyché"],
    ["The Blair Witch Project",3,"No survivors"],
    ["Barbarian",2,"Tess Marshall"],
    ["Sunshine",3,"No survivors"],
    ["Jennifer's Body",1,"Anita 'Needy' Lesnicki"],
    ["Final Destination 3",3,"No survivors"],
    ["Evil Dead (2013)",1,"Mia Allen"],
    ["The Outwaters",3,"No survivors"],
    ["Ghost Ship",2,"Maureen Epps"],
    ["Host",3,"No survivors"],
    ["Event Horizon",2,"Lieutenant M. L. Starck"],
    ["Cabin Fever",3,"No survivors"],
    ["Pet Sematary",2,"Louis Creed"],
    ["Smile",0,"Joel"],
    ["Get Out",2,"Chris Washington"],
    ["Friday the 13th"],
    ["Saw"],
    ["The Ring"],
    ["Hellraiser"],
    ["Final Destination"],
    ["Final Destination 2"],
    ["Annihilation"],
    ["Scream"],
    ["The Witch"],
    ["Carrie"],
    ["Alien"],
    ["The Evil Dead"],
    ["Malignant"],
    ["Suspiria"],
    ["Doctor Sleep"],
    ["Annabelle"],
    ["The Thing"],
    ["Dawn of the Dead"],
    ["Videodrome"],
    ["The Invisible Man"],
    ["Triangle"],
    ["10 Cloverfield Lane"],
    ["28 Days Later"],
    ["The Ruins"],
    ["Halloween"],
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