import type { allCards } from './allCards';
import type { allTitles } from './allTitles';

type Title =
  | keyof (typeof allTitles)['movies']
  | keyof (typeof allTitles)['live-action-tv-series']
  | keyof (typeof allTitles)['animated-tv-series'];
type Card = keyof typeof allCards;
type Cast = { full: Card[]; semi: Card[] };

/* This file is manually created by reading wikipedia pages.

Ideally these arrays should be sets, so it's easier to reverse search when user clicks a card, but auto-completion works better with arrays, so I decide to do the conversion on app start.
*/

export const map: Record<Title, Cast> = {
  '1998|Blade': { full: ['Blade'], semi: [] },
  '2000|X-Men': {
    full: [
      'Professor X',
      'Wolverine',
      'Magneto',
      'Storm',
      'Jean Grey',
      'Cyclops',
      'Mystique',
      'Sabretooth',
      'Rogue',
    ],
    semi: ['Iceman', 'Kitty Pryde', 'Jubilee'],
  },
  '2002|Blade II': { full: ['Blade'], semi: [] },
  '2002|Spider-Man': { full: ['Spider-Man', 'Green Goblin'], semi: [] },
  '2003|Daredevil': { full: ['Daredevil', 'Elektra', 'Kingpin'], semi: [] },
  '2003|X2': {
    full: [
      'Professor X',
      'Wolverine',
      'Magneto',
      'Storm',
      'Jean Grey',
      'Cyclops',
      'Mystique',
      'Nightcrawler',
      'Iceman',
      'Lady Deathstrike',
      'Rogue',
    ],
    semi: ['Colossus', 'Kitty Pryde', 'Jubilee'],
  },
  '2003|Hulk': { full: ['Hulk'], semi: [] },
  '2004|The Punisher': { full: ['Punisher'], semi: [] },
  '2004|Spider-Man 2': { full: ['Spider-Man', 'Doctor Octopus'], semi: [] },
  '2004|Blade: Trinity': { full: ['Blade', 'Dracula'], semi: [] },
  '2005|Elektra': { full: ['Elektra', 'Typhoid Mary'], semi: ['Daredevil'] },
  '2005|Fantastic Four': {
    full: ['Mister Fantastic', 'Invisible Woman', 'Human Torch', 'The Thing', 'Doctor Doom'],
    semi: [],
  },
  '2006|X-Men: The Last Stand': {
    full: [
      'Wolverine',
      'Storm',
      'Magneto',
      'Jean Grey',
      'Phoenix Force',
      'Rogue',
      'Beast',
      'Cyclops',
      'Mystique',
      'Iceman',
      'Juggernaut',
      'Professor X',
      'Kitty Pryde',
      'Colossus',
      'Angel',
      'Psylocke',
      'Leech',
    ],
    semi: ['Jubilee'],
  },
  '2007|Ghost Rider': { full: ['Ghost Rider', 'Legion'], semi: [] },
  '2007|Spider-Man 3': { full: ['Spider-Man', 'Sandman', 'Venom'], semi: ['Green Goblin'] },
  '2007|Fantastic Four: Rise of the Silver Surfer': {
    full: [
      'Mister Fantastic',
      'Invisible Woman',
      'Human Torch',
      'The Thing',
      'Doctor Doom',
      'Silver Surfer',
      'Galactus',
    ],
    semi: [],
  },
  '2008|Iron Man': { full: ['Iron Man', 'Agent Coulson'], semi: ['Rescue', 'Nick Fury'] },
  '2008|The Incredible Hulk': { full: ['Hulk', 'Abomination'], semi: ['Iron Man'] },
  '2008|Punisher: War Zone': { full: ['Punisher'], semi: [] },
  '2008|X-Men Origins: Wolverine': {
    full: ['Wolverine', 'Sabretooth', 'Gambit'],
    semi: ['Deadpool', 'Professor X'],
  },
  '2010|Iron Man 2': {
    full: ['Iron Man', 'Black Widow', 'Nick Fury', 'Agent Coulson'],
    semi: ['Rescue'],
  },
  '2011|Thor': {
    full: ['Thor', 'Loki', 'Agent Coulson', 'Heimdall', 'Lady Sif', 'Odin', 'Hawkeye', 'Destroyer'],
    semi: ['Jane Foster Mighty Thor', 'Nick Fury'],
  },
  '2011|X-Men: First Class': {
    full: ['Professor X', 'Magneto', 'Mystique', 'Beast'],
    semi: ['Wolverine'],
  },
  '2011|Captain America: The First Avenger': {
    full: ['Captain America', 'Red Skull', 'Bucky Barnes', 'Arnim Zola'],
    semi: ['Nick Fury'],
  },
  '2011|Ghost Rider: Spirit of Vengeance': { full: ['Ghost Rider'], semi: [] },
  '2012|The Avengers': {
    full: [
      'Iron Man',
      'Captain America',
      'Hulk',
      'Thor',
      'Black Widow',
      'Hawkeye',
      'Loki',
      'Nick Fury',
      'Agent Coulson',
      'Maria Hill',
      'Quinjet',
      'Helicarrier',
    ],
    semi: ['Rescue', 'Thanos'],
  },
  '2012|The Amazing Spider-Man': { full: ['Spider-Man', 'Lizard'], semi: [] },
  '2013|Iron Man 3': { full: ['Iron Man'], semi: ['Hulk'] },
  '2013|The Wolverine': {
    full: ['Wolverine', 'Jean Grey', 'Viper'],
    semi: ['Professor X', 'Magneto'],
  },
  '2013|Thor: The Dark World': {
    full: ['Thor', 'Loki', 'Heimdall', 'Lady Sif', 'Odin'],
    semi: ['Jane Foster Mighty Thor'],
  },
  '2014|Captain America: The Winter Soldier': {
    full: [
      'Captain America',
      'Black Widow',
      'Bucky Barnes',
      'Winter Soldier',
      'Falcon',
      'Maria Hill',
      'Agent 13',
      'Arnim Zola',
      'Nick Fury',
      'Quinjet',
      'Helicarrier',
    ],
    semi: ['Quicksilver', 'Scarlet Witch'],
  },
  '2014|The Amazing Spider-Man 2': {
    full: ['Spider-Man', 'Electro', 'Green Goblin', 'Rhino'],
    semi: [],
  },
  '2014|X-Men: Days of Future Past': {
    full: [
      'Wolverine',
      'Professor X',
      'Magneto',
      'Mystique',
      'Storm',
      'Beast',
      'Rogue',
      'Kitty Pryde',
      'Iceman',
      'Bishop',
      'Quicksilver',
      'Colossus',
      'Sunspot',
      'Warpath',
    ],
    semi: ['Jean Grey'],
  },
  '2014|Guardians of the Galaxy': {
    full: [
      'Star-Lord',
      'Gamora',
      'Drax',
      'Groot',
      'Rocket Raccoon',
      'Ronan the Accuser',
      'Yondu',
      'Nebula',
      'The Collector',
      'Cosmo',
    ],
    semi: ['Thanos', 'Howard the Duck'],
  },
  '2015|Avengers: Age of Ultron': {
    full: [
      'Iron Man',
      'Thor',
      'Hulk',
      'Captain America',
      'Black Widow',
      'Hawkeye',
      'Quicksilver',
      'Scarlet Witch',
      'Vision',
      'Maria Hill',
      'Falcon',
      'Heimdall',
      'Ultron',
      'Nick Fury',
      'Hulkbuster',
      'Quinjet',
      'Helicarrier',
    ],
    semi: ['Thanos'],
  },
  '2015|Ant-Man': {
    full: ['Ant Man', 'Yellowjacket', 'Falcon'],
    semi: ['Wasp', 'Captain America', 'Bucky Barnes', 'Stature'],
  },
  '2015|Fantastic Four': {
    full: ['Mister Fantastic', 'Human Torch', 'Invisible Woman', 'The Thing', 'Doctor Doom'],
    semi: [],
  },
  '2016|Deadpool': { full: ['Deadpool', 'Negasonic Teenage Warhead', 'Colossus'], semi: [] },
  '2016|Captain America: Civil War': {
    full: [
      'Captain America',
      'Iron Man',
      'Black Widow',
      'Winter Soldier',
      'Falcon',
      'Hawkeye',
      'Black Panther',
      'Vision',
      'Scarlet Witch',
      'Ant Man',
      'Agent 13',
      'Spider-Man',
      'Crossbones',
      'Quinjet',
    ],
    semi: [],
  },
  '2016|X-Men: Apocalypse': {
    full: [
      'Professor X',
      'Magneto',
      'Mystique',
      'Apocalypse',
      'Beast',
      'Quicksilver',
      'Cyclops',
      'Jean Grey',
      'Psylocke',
      'Nightcrawler',
      'Storm',
      'Angel',
      'Jubilee',
    ],
    semi: ['Wolverine'],
  },
  '2016|Doctor Strange': { full: ['Doctor Strange', 'Baron Mordo', 'Wong'], semi: ['Thor'] },
  '2017|Logan': { full: ['Wolverine', 'Professor X', 'X-23'], semi: [] },
  '2017|Guardians of the Galaxy Vol. 2': {
    full: [
      'Star-Lord',
      'Gamora',
      'Drax',
      'Groot',
      'Rocket Raccoon',
      'Yondu',
      'Nebula',
      'Mantis',
      'Cosmo',
    ],
    semi: ['Howard the Duck'],
  },
  '2017|Spider-Man: Homecoming': {
    full: ['Spider-Man', 'Vulture', 'Iron Man', 'Shocker'],
    semi: ['Rescue', 'Captain America', 'Quinjet'],
  },
  '2017|Thor: Ragnarok': {
    full: ['Thor', 'Loki', 'Hela', 'Heimdall', 'Valkyrie', 'Hulk', 'Odin', 'Korg', 'Quinjet'],
    semi: ['Doctor Strange', 'Black Widow'],
  },
  '2018|Black Panther': {
    full: ['Black Panther', 'Killmonger', 'Nakia', 'Okoye', 'Shuri', "M'Baku"],
    semi: ['Bucky Barnes'],
  },
  '2018|Avengers: Infinity War': {
    full: [
      'Iron Man',
      'Thor',
      'Hulk',
      'Captain America',
      'Black Widow',
      'Doctor Strange',
      'Spider-Man',
      'Black Panther',
      'Vision',
      'Scarlet Witch',
      'Falcon',
      'Winter Soldier',
      'Loki',
      'Heimdall',
      'Wong',
      'Mantis',
      'Nebula',
      'Drax',
      'Gamora',
      'Groot',
      'Rocket Raccoon',
      'The Collector',
      'Thanos',
      'Star-Lord',
      'Okoye',
      'Shuri',
      "M'Baku",
      'Ebony Maw',
      'Red Skull',
      'Quinjet',
    ],
    semi: ['Rescue', 'Nick Fury', 'Maria Hill'],
  },
  '2018|Deadpool 2': {
    full: ['Deadpool', 'Cable', 'Domino', 'Negasonic Teenage Warhead', 'Colossus', 'Juggernaut'],
    semi: ['Professor X', 'Beast', 'Quicksilver', 'Cyclops', 'Storm', 'Nightcrawler', 'Wolverine'],
  },
  '2018|Ant-Man and the Wasp': { full: ['Ant Man', 'Wasp', 'Ghost'], semi: ['Stature'] },
  '2018|Venom': { full: ['Venom'], semi: ['Spider-Man', 'Miles Morales'] },
  '2018|Spider-Man: Into the Spider-Verse': {
    full: [
      'Miles Morales',
      'Spider-Man',
      'Ghost-Spider',
      'Kingpin',
      'Spider-Ham',
      'Doctor Octopus',
      'Green Goblin',
      'Scorpion',
    ],
    semi: ['Spider-Man 2099'],
  },
  '2019|Captain Marvel': {
    full: ['Captain Marvel', 'Nick Fury', 'Ronan the Accuser', 'Agent Coulson', 'Goose'],
    semi: ['Spectrum', 'Captain America', 'Black Widow', 'Hulk'],
  },
  '2019|Avengers: Endgame': {
    full: [
      'Iron Man',
      'Captain America',
      'Hulk',
      'Thor',
      'Black Widow',
      'Hawkeye',
      'Ant Man',
      'Captain Marvel',
      'Nebula',
      'Okoye',
      'Wong',
      'Rocket Raccoon',
      'Rescue',
      'Thanos',
      'Doctor Strange',
      'Black Panther',
      'Spider-Man',
      'Gamora',
      'Scarlet Witch',
      'Falcon',
      'Winter Soldier',
      'Loki',
      'Mantis',
      'Drax',
      'Shuri',
      'Maria Hill',
      "M'Baku",
      'Ebony Maw',
      'Groot',
      'Star-Lord',
      'Nick Fury',
      'Red Skull',
      'Wasp',
      'Valkyrie',
      'Korg',
      'Quinjet',
    ],
    semi: ['Jane Foster Mighty Thor', 'Stature'],
  },
  '2019|Dark Phoenix': {
    full: [
      'Professor X',
      'Magneto',
      'Mystique',
      'Beast',
      'Jean Grey',
      'Phoenix Force',
      'Cyclops',
      'Storm',
      'Quicksilver',
      'Nightcrawler',
    ],
    semi: ['Dazzler'],
  },
  '2019|Spider-Man: Far From Home': {
    full: ['Spider-Man', 'Nick Fury', 'Maria Hill', 'Mysterio'],
    semi: [],
  },
  '2020|The New Mutants': { full: ['Mirage', 'Magik', 'Wolfsbane', 'Sunspot'], semi: [] },
  '2021|Black Widow': { full: ['Black Widow', 'Quinjet', 'Taskmaster'], semi: [] },
  '2021|Shang-Chi and the Legend of the Ten Rings': {
    full: ['Shang-Chi', 'Wong', 'Abomination'],
    semi: ['Hulk', 'Captain Marvel'],
  },
  '2021|Venom: Let There Be Carnage': { full: ['Venom', 'Carnage'], semi: ['Spider-Man'] },
  '2021|Eternals': { full: [], semi: [] },
  '2021|Spider-Man: No Way Home': {
    full: [
      'Spider-Man',
      'Doctor Strange',
      'Electro',
      'Green Goblin',
      'Doctor Octopus',
      'Wong',
      'Lizard',
      'Sandman',
    ],
    semi: ['Daredevil', 'Venom'],
  },
  '2022|Morbius': { full: ['Morbius'], semi: ['Vulture'] },
  '2022|Doctor Strange in the Multiverse of Madness': {
    full: [
      'Doctor Strange',
      'Scarlet Witch',
      'Baron Mordo',
      'Wong',
      'America Chavez',
      'Professor X',
      'Black Bolt',
      'Mister Fantastic',
    ],
    semi: [],
  },
  '2022|Thor: Love and Thunder': {
    full: [
      'Thor',
      'Jane Foster Mighty Thor',
      'Valkyrie',
      'Korg',
      'Lady Sif',
      'Star-Lord',
      'Nebula',
      'Drax',
      'Mantis',
      'Groot',
      'Rocket Raccoon',
    ],
    semi: ['Heimdall'],
  },
  '2022|Black Panther: Wakanda Forever': {
    full: ['Black Panther', 'Shuri', 'Nakia', 'Okoye', "M'Baku", 'Namor', 'Killmonger', 'Attuma'],
    semi: [],
  },
  '2023|Ant-Man and the Wasp: Quantumania': {
    full: ['Ant Man', 'Wasp', 'Kang', 'Stature', 'M.O.D.O.K.'],
    semi: ['Loki', 'Mobius M. Mobius'],
  },
  '2023|Guardians of the Galaxy Vol. 3': {
    full: [
      'Star-Lord',
      'Gamora',
      'Drax',
      'Nebula',
      'Mantis',
      'Groot',
      'Rocket Raccoon',
      'Adam Warlock',
      'High Evolutionary',
      'Yondu',
      'Cosmo',
    ],
    semi: ['Howard the Duck'],
  },
  '2023|Spider-Man: Across the Spider-Verse': {
    full: ['Miles Morales', 'Ghost-Spider', 'Spider-Woman', 'Spider-Man 2099'],
    semi: [],
  },
  '2006|Blade: The Series': { full: ['Blade'], semi: [] },
  '2013–20|Agents of S.H.I.E.L.D.': {
    full: ['Agent Coulson', 'Quake', 'Quinjet'],
    semi: ['Maria Hill'],
  },
  '2015–16|Agent Carter': { full: [], semi: [] },
  '2015–18|Daredevil': { full: ['Daredevil', 'Kingpin', 'Punisher', 'Elektra'], semi: [] },
  '2015–19|Jessica Jones': { full: ['Jessica Jones', 'Luke Cage'], semi: [] },
  '2016–18|Luke Cage': {
    full: ['Luke Cage', 'Misty Knight', 'Colleen Wing', 'Iron Fist'],
    semi: [],
  },
  '2017–19|Legion': { full: ['Legion', 'Shadow King'], semi: [] },
  '2017–18|Iron Fist': {
    full: ['Iron Fist', 'Colleen Wing', 'Misty Knight', 'Typhoid Mary'],
    semi: [],
  },
  '2017|The Defenders': {
    full: [
      'Daredevil',
      'Jessica Jones',
      'Luke Cage',
      'Iron Fist',
      'Colleen Wing',
      'Misty Knight',
      'Elektra',
    ],
    semi: [],
  },
  '2017|Inhumans': { full: ['Black Bolt', 'Medusa', 'Crystal', 'Maximus', 'Lockjaw'], semi: [] },
  '2017–19|The Gifted': { full: ['Polaris'], semi: [] },
  '2017–19|The Punisher': { full: ['Punisher'], semi: [] },
  '2017–19|Runaways': { full: [], semi: ['Dagger', 'Cloak'] },
  '2018–19|Cloak & Dagger': { full: ['Dagger', 'Cloak'], semi: [] },
  '2020|Helstrom': { full: [], semi: [] },
  '2021|WandaVision': {
    full: ['Scarlet Witch', 'Vision', 'Agatha Harkness', 'Spectrum'],
    semi: [],
  },
  '2021|The Falcon and the Winter Soldier': {
    full: ['Winter Soldier', 'Falcon', 'Agent 13'],
    semi: [],
  },
  '2021|Hawkeye': { full: ['Hawkeye', 'Kingpin'], semi: [] },
  '2021–24|Loki': { full: ['Loki', 'Mobius M. Mobius', 'Quinjet'], semi: ['Kang'] },
  '2022|Moon Knight': { full: ['Moon Knight'], semi: [] },
  '2022|Ms. Marvel': { full: [], semi: ['Captain Marvel'] },
  '2022|She-Hulk: Attorney at Law': {
    full: ['She-Hulk', 'Hulk', 'Titania', 'Abomination', 'Wong', 'Daredevil'],
    semi: [],
  },
  '2023|Secret Invasion': { full: ['Nick Fury', 'Maria Hill'], semi: [] },
  '1992–97|X-Men: The Animated Series': {
    full: [
      'Professor X',
      'Wolverine',
      'Cyclops',
      'Magneto',
      'Storm',
      'Jean Grey',
      'Rogue',
      'Jubilee',
      'Beast',
      'Gambit',
      'Bishop',
      'Mystique',
      'Nightcrawler',
      'Phoenix Force',
      'Cable',
      'Sabretooth',
      'Morph',
      'Mojo',
      'Omega Red',
      'Mister Sinister',
      'Ms. Marvel',
      'Juggernaut',
      'Colossus',
      'Sentinel',
      'Master Mold',
      'Quicksilver',
      'Scarlet Witch',
      'Apocalypse',
      'Lady Deathstrike',
    ],
    semi: [
      'Iceman',
      'Psylocke',
      'High Evolutionary',
      'Dazzler',
      'Cerebro',
      'Shadow King',
      'Silver Samurai',
      'Forge',
      'Leech',
      'Ka-Zar',
      'Captain America',
    ],
  },
  '1994–96|Fantastic Four: The Animated Series': {
    full: [
      'Mister Fantastic',
      'Invisible Woman',
      'Human Torch',
      'The Thing',
      'Doctor Doom',
      'Silver Surfer',
      'Galactus',
      'Nova',
      'Super-Skrull',
      'Crystal',
      'Black Bolt',
      'Lockjaw',
    ],
    semi: [
      'Ghost Rider',
      'Thor',
      'Black Panther',
      'Daredevil',
      'Klaw',
      'Maximus',
      'Medusa',
      'Namor',
    ],
  },
  '1994–96|Iron Man': {
    full: ['Iron Man', 'Hawkeye', 'Nick Fury', 'Scarlet Witch', 'Spider-Woman', 'Ghost'],
    semi: [],
  },
  '1994–98|Spider-Man: The Animated Series': {
    full: [
      'Spider-Man',
      'Doctor Octopus',
      'Green Goblin',
      'Kingpin',
      'Lizard',
      'Kraven',
      'Mysterio',
      'Rhino',
      'Vulture',
      'Morbius',
      'Venom',
      'Carnage',
      'Hobgoblin',
      'Shocker',
      'Scorpion',
      'Black Cat',
      'Blade',
      'Baron Mordo',
      'Punisher',
      'Red Skull',
      'Iron Man',
      'Nick Fury',
      'Electro',
    ],
    semi: [
      'Captain America',
      'Doctor Strange',
      'Wong',
      'Daredevil',
      'Mister Fantastic',
      'Invisible Woman',
      'Human Torch',
      'The Thing',
      'Doctor Doom',
      'Wolverine',
      'Beast',
      'Helicarrier',
    ],
  },
  '1996–97|The Incredible Hulk': {
    full: ['Hulk', 'She-Hulk', 'Abomination', 'Doctor Doom'],
    semi: [
      'Ghost Rider',
      'Doctor Strange',
      'Thor',
      'Mister Fantastic',
      'Invisible Woman',
      'Human Torch',
      'The Thing',
    ],
  },
  '1998|Silver Surfer': {
    full: ['Silver Surfer', 'Galactus', 'Nova', 'Thanos'],
    semi: ['Drax', 'Adam Warlock', 'Gamora', 'Nebula'],
  },
  '1999–2000|The Avengers: United They Stand': {
    full: [
      'Ant Man',
      'Wasp',
      'Hawkeye',
      'Falcon',
      'Scarlet Witch',
      'Vision',
      'Ultron',
      'Kang',
      'Namor',
      'Attuma',
    ],
    semi: ['Absorbing Man', 'Agatha Harkness', 'Captain America', 'Iron Man'],
  },
  '1999–2001|Spider-Man Unlimited': {
    full: [
      'Spider-Man',
      'High Evolutionary',
      'Venom',
      'Carnage',
      'Electro',
      'Green Goblin',
      'Vulture',
      'Kraven',
    ],
    semi: ['Nick Fury'],
  },
  '2000–03|X-Men: Evolution': {
    full: [
      'Cyclops',
      'Jean Grey',
      'Professor X',
      'Magneto',
      'Mystique',
      'Rogue',
      'Wolverine',
      'Storm',
      'Angel',
      'Beast',
      'Gambit',
      'Juggernaut',
      'Nightcrawler',
      'Sabretooth',
      'Scarlet Witch',
      'Quicksilver',
      'Sunspot',
      'Iceman',
      'Wolfsbane',
      'Jubilee',
      'Kitty Pryde',
      'X-23',
      'Leech',
      'Forge',
      'Apocalypse',
      'Phoenix Force',
      'Nick Fury',
    ],
    semi: [
      'Omega Red',
      'Multiple Man',
      'Agatha Harkness',
      'Legion',
      'Cerebro',
      'Colossus',
      'Captain America',
    ],
  },
  '2003|Spider-Man: The New Animated Series': { full: [], semi: [] },
  "2006–07|Fantastic Four: World's Greatest Heroes": { full: [], semi: [] },
  '2008–09|The Spectacular Spider-Man': { full: [], semi: [] },
  '2009|Wolverine and the X-Men': { full: [], semi: [] },
  '2009–12|Iron Man: Armored Adventures': { full: [], semi: [] },
  '2009–11|The Super Hero Squad Show': { full: [], semi: [] },
  "2010–12|The Avengers: Earth's Mightiest Heroes": { full: [], semi: [] },
  '2010–11|Marvel Anime: Iron Man': { full: [], semi: [] },
  '2011–12|Marvel Anime: Wolverine': { full: [], semi: [] },
  '2011–12|Marvel Anime: X-Men': { full: [], semi: [] },
  '2011–12|Marvel Anime: Blade': { full: [], semi: [] },
  '2012–17|Ultimate Spider-Man': { full: [], semi: [] },
  '2013–19|Avengers Assemble': { full: [], semi: [] },
  '2013–15|Hulk and the Agents of S.M.A.S.H.': { full: [], semi: [] },
  '2015–16|Marvel Disk Wars: The Avengers': { full: [], semi: [] },
  '2015–19|Guardians of the Galaxy': { full: [], semi: [] },
  '2017–18|Marvel Future Avengers': { full: [], semi: [] },
  "2017–20|Marvel's Spider-Man": { full: [], semi: [] },
  '2021|M.O.D.O.K.': { full: [], semi: [] },
  '2021–2023|Spidey and His Amazing Friends': { full: [], semi: [] },
  '2021|Hit-Monkey': { full: [], semi: [] },
  '2023|Moon Girl and Devil Dinosaur': { full: [], semi: [] },
};
