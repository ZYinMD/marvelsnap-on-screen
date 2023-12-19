import type { CardName, Key } from '../MainList/buildingBlocks';

export type Roster = {
  major_: CardName[];
  minor_: CardName[];
  major: Set<CardName>;
  minor: Set<CardName>;
};

/**
 * The big object that is the source of truth of this app, manually constructed by reading wikipedia articles.
 * Basically it's key value pairs of each show and the cards appeared in the show.
 * Auto-completion works better with arrays when manually inputting, so I use arrays when constructing the file, but at end end of the file I turn the arrays into sets because it's a easier data structure to use in the app.
 */
export const map: Record<Key, Roster> = {
  '1998|Blade': {
    major: new Set(),
    minor: new Set(),
    major_: ['Blade'],
    minor_: [],
  },
  '2000|X-Men': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Iceman', 'Kitty Pryde', 'Jubilee'],
  },
  '2002|Blade II': {
    major: new Set(),
    minor: new Set(),
    major_: ['Blade'],
    minor_: [],
  },
  '2002|Spider-Man': {
    major: new Set(),
    minor: new Set(),
    major_: ['Spider-Man', 'Green Goblin'],
    minor_: [],
  },
  '2003|Daredevil': {
    major: new Set(),
    minor: new Set(),
    major_: ['Daredevil', 'Elektra', 'Kingpin'],
    minor_: [],
  },
  '2003|X2': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Colossus', 'Kitty Pryde', 'Jubilee'],
  },
  '2003|Hulk': {
    major: new Set(),
    minor: new Set(),
    major_: ['Hulk'],
    minor_: [],
  },
  '2004|The Punisher': {
    major: new Set(),
    minor: new Set(),
    major_: ['Punisher'],
    minor_: [],
  },
  '2004|Spider-Man 2': {
    major: new Set(),
    minor: new Set(),
    major_: ['Spider-Man', 'Doctor Octopus'],
    minor_: [],
  },
  '2004|Blade: Trinity': {
    major: new Set(),
    minor: new Set(),
    major_: ['Blade', 'Dracula'],
    minor_: [],
  },
  '2005|Elektra': {
    major: new Set(),
    minor: new Set(),
    major_: ['Elektra', 'Typhoid Mary'],
    minor_: ['Daredevil'],
  },
  '2005|Fantastic Four': {
    major: new Set(),
    minor: new Set(),
    major_: ['Mister Fantastic', 'Invisible Woman', 'Human Torch', 'The Thing', 'Doctor Doom'],
    minor_: [],
  },
  '2006|X-Men: The Last Stand': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Jubilee'],
  },
  '2007|Ghost Rider': {
    major: new Set(),
    minor: new Set(),
    major_: ['Ghost Rider', 'Legion'],
    minor_: [],
  },
  '2007|Spider-Man 3': {
    major: new Set(),
    minor: new Set(),
    major_: ['Spider-Man', 'Sandman', 'Venom'],
    minor_: ['Green Goblin'],
  },
  '2007|Fantastic Four: Rise of the Silver Surfer': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Mister Fantastic',
      'Invisible Woman',
      'Human Torch',
      'The Thing',
      'Doctor Doom',
      'Silver Surfer',
      'Galactus',
    ],
    minor_: [],
  },
  '2008|Iron Man': {
    major: new Set(),
    minor: new Set(),
    major_: ['Iron Man', 'Agent Coulson'],
    minor_: ['Rescue', 'Nick Fury'],
  },
  '2008|The Incredible Hulk': {
    major: new Set(),
    minor: new Set(),
    major_: ['Hulk', 'Abomination'],
    minor_: ['Iron Man'],
  },
  '2008|Punisher: War Zone': {
    major: new Set(),
    minor: new Set(),
    major_: ['Punisher'],
    minor_: [],
  },
  '2008|X-Men Origins: Wolverine': {
    major: new Set(),
    minor: new Set(),
    major_: ['Wolverine', 'Sabretooth', 'Gambit'],
    minor_: ['Deadpool', 'Professor X'],
  },
  '2010|Iron Man 2': {
    major: new Set(),
    minor: new Set(),
    major_: ['Iron Man', 'Black Widow', 'Nick Fury', 'Agent Coulson'],
    minor_: ['Rescue'],
  },
  '2011|Thor': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Thor',
      'Loki',
      'Agent Coulson',
      'Heimdall',
      'Lady Sif',
      'Odin',
      'Hawkeye',
      'Destroyer',
    ],
    minor_: ['Jane Foster Mighty Thor', 'Nick Fury'],
  },
  '2011|X-Men: First Class': {
    major: new Set(),
    minor: new Set(),
    major_: ['Professor X', 'Magneto', 'Mystique', 'Beast', 'Sebastian Shaw', 'Havok'],
    minor_: ['Wolverine'],
  },
  '2011|Captain America: The First Avenger': {
    major: new Set(),
    minor: new Set(),
    major_: ['Captain America', 'Red Skull', 'Bucky Barnes', 'Arnim Zola'],
    minor_: ['Nick Fury'],
  },
  '2011|Ghost Rider: Spirit of Vengeance': {
    major: new Set(),
    minor: new Set(),
    major_: ['Ghost Rider'],
    minor_: [],
  },
  '2012|The Avengers': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Rescue', 'Thanos'],
  },
  '2012|The Amazing Spider-Man': {
    major: new Set(),
    minor: new Set(),
    major_: ['Spider-Man', 'Lizard'],
    minor_: ['Blob'],
  },
  '2013|Iron Man 3': {
    major: new Set(),
    minor: new Set(),
    major_: ['Iron Man'],
    minor_: ['Hulk'],
  },
  '2013|The Wolverine': {
    major: new Set(),
    minor: new Set(),
    major_: ['Wolverine', 'Jean Grey', 'Viper'],
    minor_: ['Professor X', 'Magneto'],
  },
  '2013|Thor: The Dark World': {
    major: new Set(),
    minor: new Set(),
    major_: ['Thor', 'Loki', 'Heimdall', 'Lady Sif', 'Odin'],
    minor_: ['Jane Foster Mighty Thor'],
  },
  '2014|Captain America: The Winter Soldier': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Captain America',
      'Black Widow',
      'Bucky Barnes',
      'Falcon',
      'Maria Hill',
      'Agent 13',
      'Arnim Zola',
      'Nick Fury',
      'Quinjet',
      'Helicarrier',
    ],
    minor_: ['Quicksilver', 'Scarlet Witch'],
  },
  '2014|The Amazing Spider-Man 2': {
    major: new Set(),
    minor: new Set(),
    major_: ['Spider-Man', 'Electro', 'Green Goblin', 'Rhino'],
    minor_: [],
  },
  '2014|X-Men: Days of Future Past': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
      'Havok',
    ],
    minor_: ['Jean Grey'],
  },
  '2014|Guardians of the Galaxy': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Thanos', 'Howard the Duck'],
  },
  '2015|Avengers: Age of Ultron': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Thanos'],
  },
  '2015|Ant-Man': {
    major: new Set(),
    minor: new Set(),
    major_: ['Ant Man', 'Yellowjacket', 'Falcon'],
    minor_: ['Wasp', 'Captain America', 'Bucky Barnes', 'Stature'],
  },
  '2015|Fantastic Four': {
    major: new Set(),
    minor: new Set(),
    major_: ['Mister Fantastic', 'Human Torch', 'Invisible Woman', 'The Thing', 'Doctor Doom'],
    minor_: [],
  },
  '2016|Deadpool': {
    major: new Set(),
    minor: new Set(),
    major_: ['Deadpool', 'Negasonic Teenage Warhead', 'Colossus'],
    minor_: [],
  },
  '2016|Captain America: Civil War': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Captain America',
      'Iron Man',
      'Black Widow',
      'Bucky Barnes',
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
    minor_: [],
  },
  '2016|X-Men: Apocalypse': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
      'Havok',
    ],
    minor_: ['Wolverine'],
  },
  '2016|Doctor Strange': {
    major: new Set(),
    minor: new Set(),
    major_: ['Doctor Strange', 'Baron Mordo', 'Wong'],
    minor_: ['Thor'],
  },
  '2017|Logan': {
    major: new Set(),
    minor: new Set(),
    major_: ['Wolverine', 'Professor X', 'X-23'],
    minor_: [],
  },
  '2017|Guardians of the Galaxy Vol. 2': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Howard the Duck'],
  },
  '2017|Spider-Man: Homecoming': {
    major: new Set(),
    minor: new Set(),
    major_: ['Spider-Man', 'Vulture', 'Iron Man', 'Shocker'],
    minor_: ['Rescue', 'Captain America', 'Quinjet'],
  },
  '2017|Thor: Ragnarok': {
    major: new Set(),
    minor: new Set(),
    major_: ['Thor', 'Loki', 'Hela', 'Heimdall', 'Valkyrie', 'Hulk', 'Odin', 'Korg', 'Quinjet'],
    minor_: ['Doctor Strange', 'Black Widow'],
  },
  '2018|Black Panther': {
    major: new Set(),
    minor: new Set(),
    major_: ['Black Panther', 'Killmonger', 'Nakia', 'Okoye', 'Shuri', "M'Baku"],
    minor_: ['Bucky Barnes'],
  },
  '2018|Avengers: Infinity War': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
      'Bucky Barnes',
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
    minor_: ['Rescue', 'Nick Fury', 'Maria Hill'],
  },
  '2018|Deadpool 2': {
    major: new Set(),
    minor: new Set(),
    major_: ['Deadpool', 'Cable', 'Domino', 'Negasonic Teenage Warhead', 'Colossus', 'Juggernaut'],
    minor_: [
      'Professor X',
      'Beast',
      'Quicksilver',
      'Cyclops',
      'Storm',
      'Nightcrawler',
      'Wolverine',
    ],
  },
  '2018|Ant-Man and the Wasp': {
    major: new Set(),
    minor: new Set(),
    major_: ['Ant Man', 'Wasp', 'Ghost'],
    minor_: ['Stature'],
  },
  '2018|Venom': {
    major: new Set(),
    minor: new Set(),
    major_: ['Venom'],
    minor_: ['Spider-Man', 'Miles Morales'],
  },
  '2018|Spider-Man: Into the Spider-Verse': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Miles Morales',
      'Spider-Man',
      'Ghost-Spider',
      'Kingpin',
      'Spider-Ham',
      'Doctor Octopus',
      'Green Goblin',
      'Scorpion',
    ],
    minor_: ['Spider-Man 2099'],
  },
  '2019|Captain Marvel': {
    major: new Set(),
    minor: new Set(),
    major_: ['Captain Marvel', 'Nick Fury', 'Ronan the Accuser', 'Agent Coulson', 'Goose'],
    minor_: ['Spectrum', 'Captain America', 'Black Widow', 'Hulk'],
  },
  '2019|Avengers: Endgame': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
      'Bucky Barnes',
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
    minor_: ['Jane Foster Mighty Thor', 'Stature'],
  },
  '2019|Dark Phoenix': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Dazzler'],
  },
  '2019|Spider-Man: Far From Home': {
    major: new Set(),
    minor: new Set(),
    major_: ['Spider-Man', 'Nick Fury', 'Maria Hill', 'Mysterio'],
    minor_: [],
  },
  '2020|The New Mutants': {
    major: new Set(),
    minor: new Set(),
    major_: ['Mirage', 'Magik', 'Wolfsbane', 'Sunspot'],
    minor_: [],
  },
  '2021|Black Widow': {
    major: new Set(),
    minor: new Set(),
    major_: ['Black Widow', 'Quinjet', 'Taskmaster'],
    minor_: [],
  },
  '2021|Shang-Chi and the Legend of the Ten Rings': {
    major: new Set(),
    minor: new Set(),
    major_: ['Shang-Chi', 'Wong', 'Abomination'],
    minor_: ['Hulk', 'Captain Marvel'],
  },
  '2021|Venom: Let There Be Carnage': {
    major: new Set(),
    minor: new Set(),
    major_: ['Venom', 'Carnage'],
    minor_: ['Spider-Man'],
  },
  '2021|Eternals': {
    major: new Set(),
    minor: new Set(),
    major_: [],
    minor_: ['Black Knight'],
  },
  '2021|Spider-Man: No Way Home': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Spider-Man',
      'Doctor Strange',
      'Electro',
      'Green Goblin',
      'Doctor Octopus',
      'Wong',
      'Lizard',
      'Sandman',
    ],
    minor_: ['Daredevil', 'Venom'],
  },
  '2022|Morbius': {
    major: new Set(),
    minor: new Set(),
    major_: ['Morbius'],
    minor_: ['Vulture'],
  },
  '2022|Doctor Strange in the Multiverse of Madness': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Doctor Strange',
      'Scarlet Witch',
      'Baron Mordo',
      'Wong',
      'America Chavez',
      'Professor X',
      'Black Bolt',
      'Mister Fantastic',
    ],
    minor_: [],
  },
  '2022|Thor: Love and Thunder': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Heimdall'],
  },
  '2022|Black Panther: Wakanda Forever': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Black Panther',
      'Shuri',
      'Nakia',
      'Okoye',
      "M'Baku",
      'Ironheart',
      'Namor',
      'Killmonger',
      'Attuma',
    ],
    minor_: [],
  },
  '2023|Ant-Man and the Wasp: Quantumania': {
    major: new Set(),
    minor: new Set(),
    major_: ['Ant Man', 'Wasp', 'Kang', 'Stature', 'M.O.D.O.K.'],
    minor_: ['Loki', 'Mobius M. Mobius'],
  },
  '2023|Guardians of the Galaxy Vol. 3': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Howard the Duck', 'Martyr'],
  },
  '2023|Spider-Man: Across the Spider-Verse': {
    major: new Set(),
    minor: new Set(),
    major_: ['Miles Morales', 'Ghost-Spider', 'Spider-Woman', 'Spider-Man 2099', 'Spider-Ham'],
    minor_: [],
  },
  '2006|Blade: The Series': {
    major: new Set(),
    minor: new Set(),
    major_: ['Blade'],
    minor_: [],
  },
  '2013–2020|Agents of S.H.I.E.L.D.': {
    major: new Set(),
    minor: new Set(),
    major_: ['Agent Coulson', 'Quake', 'Quinjet'],
    minor_: ['Maria Hill'],
  },
  '2015–2016|Agent Carter': {
    major: new Set(),
    minor: new Set(),
    major_: [],
    minor_: [],
  },
  '2015–2018|Daredevil': {
    major: new Set(),
    minor: new Set(),
    major_: ['Daredevil', 'Kingpin', 'Punisher', 'Elektra'],
    minor_: [],
  },
  '2015–2019|Jessica Jones': {
    major: new Set(),
    minor: new Set(),
    major_: ['Jessica Jones', 'Luke Cage'],
    minor_: [],
  },
  '2016–2018|Luke Cage': {
    major: new Set(),
    minor: new Set(),
    major_: ['Luke Cage', 'Misty Knight', 'Colleen Wing', 'Iron Fist'],
    minor_: [],
  },
  '2017–2019|Legion': {
    major: new Set(),
    minor: new Set(),
    major_: ['Legion', 'Shadow King'],
    minor_: [],
  },
  '2017–2018|Iron Fist': {
    major: new Set(),
    minor: new Set(),
    major_: ['Iron Fist', 'Colleen Wing', 'Misty Knight', 'Typhoid Mary'],
    minor_: [],
  },
  '2017|The Defenders': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Daredevil',
      'Jessica Jones',
      'Luke Cage',
      'Iron Fist',
      'Colleen Wing',
      'Misty Knight',
      'Elektra',
    ],
    minor_: [],
  },
  '2017|Inhumans': {
    major: new Set(),
    minor: new Set(),
    major_: ['Black Bolt', 'Medusa', 'Crystal', 'Maximus', 'Lockjaw'],
    minor_: [],
  },
  '2017–2019|The Gifted': {
    major: new Set(),
    minor: new Set(),
    major_: ['Polaris'],
    minor_: [],
  },
  '2017–2019|The Punisher': {
    major: new Set(),
    minor: new Set(),
    major_: ['Punisher'],
    minor_: [],
  },
  '2017–2019|Runaways': {
    major: new Set(),
    minor: new Set(),
    major_: ['Nico Minoru'],
    minor_: ['Dagger', 'Cloak'],
  },
  '2018–2019|Cloak & Dagger': {
    major: new Set(),
    minor: new Set(),
    major_: ['Dagger', 'Cloak'],
    minor_: [],
  },
  '2020|Helstrom': {
    major: new Set(),
    minor: new Set(),
    major_: [],
    minor_: [],
  },
  '2021|WandaVision': {
    major: new Set(),
    minor: new Set(),
    major_: ['Scarlet Witch', 'Vision', 'Agatha Harkness', 'Spectrum'],
    minor_: [],
  },
  '2021|The Falcon and the Winter Soldier': {
    major: new Set(),
    minor: new Set(),
    major_: ['Bucky Barnes', 'Falcon', 'Agent 13'],
    minor_: [],
  },
  '2021|Hawkeye': {
    major: new Set(),
    minor: new Set(),
    major_: ['Hawkeye', 'Kingpin', 'Echo'],
    minor_: [],
  },
  '2021–2024|Loki': {
    major: new Set(),
    minor: new Set(),
    major_: ['Loki', 'Mobius M. Mobius', 'Ravonna Renslayer', 'Quinjet'],
    minor_: ['Alioth', 'Kang'],
  },
  '2022|Moon Knight': {
    major: new Set(),
    minor: new Set(),
    major_: ['Moon Knight'],
    minor_: [],
  },
  '2022|Ms. Marvel': {
    major: new Set(),
    minor: new Set(),
    major_: [],
    minor_: ['Ms. Marvel', 'Captain Marvel'],
  },
  '2022|She-Hulk: Attorney at Law': {
    major: new Set(),
    minor: new Set(),
    major_: ['She-Hulk', 'Hulk', 'Titania', 'Abomination', 'Wong', 'Daredevil'],
    minor_: [],
  },
  '2023|Secret Invasion': {
    major: new Set(),
    minor: new Set(),
    major_: ['Nick Fury', 'Maria Hill'],
    minor_: [],
  },
  '1992–1997|X-Men: The Animated Series': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
      'Sauron',
    ],
    minor_: [
      'Iceman',
      'Psylocke',
      'White Queen',
      'High Evolutionary',
      'Dazzler',
      'Cerebro',
      'Shadow King',
      'Sebastian Shaw',
      'Silver Samurai',
      'Forge',
      'Leech',
      'Ka-Zar',
      'Shanna',
      'Captain America',
      'Nimrod',
      'Strong Guy',
      'Gladiator',
      'Blob',
    ],
  },
  '1994–1996|Fantastic Four: The Animated Series': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: [
      'Ghost Rider',
      'Thor',
      'Black Panther',
      'Daredevil',
      'Klaw',
      'Annihilus',
      'Maximus',
      'Medusa',
      'Namor',
    ],
  },
  '1994–1996|Iron Man': {
    major: new Set(),
    minor: new Set(),
    major_: ['Iron Man', 'Hawkeye', 'Nick Fury', 'Scarlet Witch', 'Spider-Woman', 'Ghost'],
    minor_: [],
  },
  '1994–1998|Spider-Man: The Animated Series': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: [
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
  '1996–1997|The Incredible Hulk': {
    major: new Set(),
    minor: new Set(),
    major_: ['Hulk', 'She-Hulk', 'Abomination', 'Doctor Doom'],
    minor_: [
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
    major: new Set(),
    minor: new Set(),
    major_: ['Silver Surfer', 'Galactus', 'Nova', 'Thanos'],
    minor_: ['Drax', 'Adam Warlock', 'Gamora', 'Nebula'],
  },
  '1999–2000|The Avengers: United They Stand': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
    minor_: ['Absorbing Man', 'Agatha Harkness', 'Captain America', 'Iron Man'],
  },
  '1999–2001|Spider-Man Unlimited': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Spider-Man',
      'High Evolutionary',
      'Venom',
      'Carnage',
      'Electro',
      'Green Goblin',
      'Vulture',
      'Kraven',
    ],
    minor_: ['Nick Fury'],
  },
  '2000–2003|X-Men: Evolution': {
    major: new Set(),
    minor: new Set(),
    major_: [
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
      'Havok',
      'Nick Fury',
    ],
    minor_: [
      'Omega Red',
      'Multiple Man',
      'Agatha Harkness',
      'Legion',
      'Cerebro',
      'Colossus',
      'Captain America',
      'Blob',
    ],
  },
  '2003|Spider-Man: The New Animated Series': {
    major: new Set(),
    minor: new Set(),
    major_: ['Spider-Man', 'Electro', 'Lizard', 'Black Cat', 'Kingpin', 'Kraven'],
    minor_: [],
  },
  "2006–2007|Fantastic Four: World's Greatest Heroes": {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Mister Fantastic',
      'Invisible Woman',
      'Human Torch',
      'The Thing',
      'Doctor Doom',
      'Ronan the Accuser',
      'Namor',
      'Annihilus',
    ],
    minor_: [
      'Hulk',
      'She-Hulk',
      'Squirrel Girl',
      'Attuma',
      'Super-Skrull',
      'Klaw',
      'Iron Man',
      'Giganto',
    ],
  },
  '2008–2009|The Spectacular Spider-Man': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Spider-Man',
      'Doctor Octopus',
      'Sandman',
      'Green Goblin',
      'Mysterio',
      'Venom',
      'Rhino',
      'Shocker',
      'Vulture',
      'Electro',
      'Lizard',
      'Kraven',
      'Black Cat',
    ],
    minor_: [],
  },
  '2009|Wolverine and the X-Men': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Wolverine',
      'Professor X',
      'Magneto',
      'Cyclops',
      'Jean Grey',
      'Nightcrawler',
      'Rogue',
      'Master Mold',
      'Scarlet Witch',
      'Quicksilver',
      'Sentinel',
      'Angel',
      'Beast',
      'Gambit',
      'Polaris',
      'Bishop',
      'Sabretooth',
      'Mystique',
      'Storm',
      'White Queen',
      'Phoenix Force',
      'Forge',
      'Iceman',
      'Mojo',
      'Mister Sinister',
      'Juggernaut',
      'Colossus',
      'Cerebro',
      'Domino',
      'Shadow King',
      'Wolfsbane',
      'Multiple Man',
      'Rockslide',
      'Psylocke',
    ],
    minor_: [
      'X-23',
      'Sebastian Shaw',
      'Silver Samurai',
      'Hulk',
      'Nick Fury',
      'Apocalypse',
      'Cable',
      'Dazzler',
      'Leech',
      'Sauron',
      'Blob',
    ],
  },
  '2009–2011|The Super Hero Squad Show': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Hulk',
      'Captain America',
      'Iron Man',
      'Falcon',
      'Ms. Marvel',
      'Wolverine',
      'Doctor Doom',
      'M.O.D.O.K.',
      'Abomination',
      'Baron Mordo',
      'Captain Marvel',
      'Doctor Strange',
      'Enchantress',
      'Galactus',
      'Silver Surfer',
      'Thanos',
      'Hawkeye',
      'Iceman',
      'Thor',
      'Loki',
      'Odin',
      'Valkyrie',
      'Nick Fury',
      'Red Skull',
      'Magneto',
      'Scarlet Witch',
      'Quicksilver',
      'She-Hulk',
      'Klaw',
      'Ant Man',
      'Wasp',
      'Luke Cage',
      'Devil Dinosaur',
      'Kitty Pryde',
      'Ka-Zar',
      'Zabu',
      'Sabretooth',
      'Colossus',
      'Mister Fantastic',
      'Invisible Woman',
      'Human Torch',
      'The Thing',
      'Helicarrier',
    ],
    minor_: [
      'Adam Warlock',
      'Uatu the Watcher',
      'Nova',
      'Ronan the Accuser',
      'High Evolutionary',
      'Korg',
      'Black Widow',
      'Nebula',
      'Annihilus',
      'Black Panther',
      'Iron Fist',
      'Misty Knight',
      'Punisher',
      'Dracula',
      'Leader',
      'Arnim Zola',
      'Heimdall',
      'Super-Skrull',
      'Man-Thing',
      'Werewolf By Night',
      'Wong',
      'Ultron',
      'Professor X',
      'Cyclops',
      'Storm',
      'Jean Grey',
      'Mystique',
      'Juggernaut',
      'X-23',
    ],
  },
  '2009–2012|Iron Man: Armored Adventures': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Iron Man',
      'Hulk',
      'Hawkeye',
      'Black Widow',
      'Nick Fury',
      'Rescue',
      'Black Panther',
      'Doctor Doom',
      'Ghost',
      'M.O.D.O.K.',
      'Helicarrier',
    ],
    minor_: ['Black Knight', 'Magneto', 'Jean Grey', 'Maria Hill'],
  },
  "2010–2012|The Avengers: Earth's Mightiest Heroes": {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Captain America',
      'Hulk',
      'Iron Man',
      'Thor',
      'Black Widow',
      'Ant Man',
      'Wasp',
      'Spider-Man',
      'Hawkeye',
      'Vision',
      'Black Panther',
      'Captain Marvel',
      'Bucky Barnes',
      'Nick Fury',
      'Ms. Marvel',
      'Ultron',
      'Galactus',
      'Loki',
      'Quake',
      'Kang',
      'Klaw',
      'Leader',
      'Abomination',
      'Enchantress',
      'Falcon',
      'Hulkbuster',
      'Helicarrier',
    ],
    minor_: [
      'Maria Hill',
      'Wolverine',
      'Doctor Doom',
      'Yellowjacket',
      'Martyr',
      'Red Skull',
      'Ronan the Accuser',
      'Super-Skrull',
      'Onslaught',
      'Annihilus',
      'Black Knight',
      'Absorbing Man',
      'Arnim Zola',
      'Odin',
      'Hela',
      'Valkyrie',
      'Heimdall',
      'Jane Foster Mighty Thor',
      'Destroyer',
      'Iron Fist',
      'Luke Cage',
      "M'Baku",
      'Okoye',
      'Nakia',
      'Mister Fantastic',
      'Invisible Woman',
      'Human Torch',
      'The Thing',
      'Adam Warlock',
      'Star-Lord',
      'Groot',
      'Rocket Raccoon',
    ],
  },
  '2010–2011|Marvel Anime: Iron Man': {
    major: new Set(),
    minor: new Set(),
    major_: ['Iron Man'],
    minor_: ['Wolverine'],
  },
  '2011–2012|Marvel Anime: Wolverine': {
    major: new Set(),
    minor: new Set(),
    major_: ['Wolverine', 'Omega Red', 'Cyclops'],
    minor_: [],
  },
  '2011–2012|Marvel Anime: X-Men': {
    major: new Set(),
    minor: new Set(),
    major_: ['Armor', 'Wolverine', 'Cyclops', 'Beast', 'Professor X', 'Storm', 'Cerebro'],
    minor_: ['Jean Grey'],
  },
  '2011–2012|Marvel Anime: Blade': {
    major: new Set(),
    minor: new Set(),
    major_: ['Blade'],
    minor_: ['Wolverine'],
  },
  '2012–2017|Ultimate Spider-Man': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Spider-Man',
      'Doctor Octopus',
      'Green Goblin',
      'Venom',
      'Electro',
      'Vulture',
      'Rhino',
      'Carnage',
      'Sandman',
      'Scorpion',
      'White Tiger',
      'Iron Fist',
      'Hulk',
      'Iron Man',
      'Captain America',
      'Doctor Strange',
      'Hawkeye',
      'Thor',
      'Loki',
      'Cloak',
      'Dagger',
      'Blade',
      'Spider-Woman',
      'Nick Fury',
      'Nova',
      'Squirrel Girl',
      'Black Bolt',
      'Black Widow',
      'Miles Morales',
      'Luke Cage',
      'Doctor Doom',
      'Kraven',
      'Crossbones',
      'Taskmaster',
      'Lizard',
      'Arnim Zola',
      'Baron Mordo',
      'Shocker',
      'Swarm',
      'Morbius',
      'Medusa',
      'The Collector',
      'Lockjaw',
      'Agent Coulson',
      'Helicarrier',
      'Quinjet',
    ],
    minor_: [
      'Deadpool',
      'Wolverine',
      'Falcon',
      'Crystal',
      'Ka-Zar',
      'Zabu',
      'She-Hulk',
      'Ghost-Spider',
      'Spider-Ham',
      'Spider-Man 2099',
      'Rocket Raccoon',
      'Groot',
      'Cosmo',
      'Howard the Duck',
      'Moon Knight',
      'The Thing',
      'Mister Negative',
      'Mysterio',
      'Dracula',
      'Attuma',
      'Annihilus',
      'Leader',
      'M.O.D.O.K.',
      'Maximus',
      'Werewolf By Night',
      'Man-Thing',
      'Juggernaut',
      'Sabretooth',
      'Klaw',
      'Ultron',
      'Destroyer',
      'Abomination',
      'Absorbing Man',
    ],
  },
  '2013–2015|Hulk and the Agents of S.M.A.S.H.': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Hulk',
      'Devil Dinosaur',
      'Leader',
      'Deathlok',
      'Abomination',
      'Absorbing Man',
      'Titania',
      'She-Hulk',
      'Spider-Man',
      'Doctor Strange',
      'Iron Man',
      'Thor',
      'Loki',
      'Ghost Rider',
      'Nick Fury',
      'The Collector',
      'Annihilus',
      'Galactus',
      'Ronan the Accuser',
      'Super-Skrull',
      'Sauron',
    ],
    minor_: [
      'Doctor Octopus',
      'Black Bolt',
      'Maximus',
      'Lockjaw',
      'Medusa',
      'Venom',
      'Wolverine',
      'Heimdall',
      'Odin',
      'Hulkbuster',
      'Captain America',
      'Red Skull',
      'Silver Surfer',
      'Crystal',
      'Blade',
      'Dracula',
      'Werewolf By Night',
      'Man-Thing',
      'High Evolutionary',
      'Doctor Doom',
    ],
  },
  '2013–2019|Avengers Assemble': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Captain America',
      'Iron Man',
      'Hulk',
      'Thor',
      'Black Widow',
      'Hawkeye',
      'Black Panther',
      'Vision',
      'Doctor Strange',
      'Captain Marvel',
      'Ms. Marvel',
      'Ant Man',
      'Wasp',
      'Falcon',
      'Bucky Barnes',
      'Shuri',
      'Killmonger',
      "M'Baku",
      'Black Bolt',
      'Medusa',
      'Jane Foster Mighty Thor',
      'Ultron',
      'Red Skull',
      'Kang',
      'M.O.D.O.K.',
      'Thanos',
      'Attuma',
      'Leader',
      'Doctor Doom',
      'Enchantress',
      'Destroyer',
      'Loki',
      'Heimdall',
      'Odin',
      'Dracula',
      'Taskmaster',
      'Typhoid Mary',
      'Crossbones',
      'Arnim Zola',
      'Absorbing Man',
    ],
    minor_: [
      'Nick Fury',
      'Mojo',
      'Uatu the Watcher',
      'Iron Fist',
      'Lockjaw',
      'Kraven',
      'Moon Knight',
      'Spider-Man',
      'Vulture',
      'Orka',
      'Rocket Raccoon',
      'Groot',
      'Hela',
      'Ghost Rider',
      'Abomination',
      'Titania',
      'Maximus',
      'Baron Mordo',
      'Galactus',
      'Ebony Maw',
      'Giganto',
    ],
  },
  '2015–2016|Marvel Disk Wars: The Avengers': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Captain America',
      'Iron Man',
      'Hulk',
      'Thor',
      'Loki',
      'Wasp',
      'Spider-Man',
      'Black Widow',
      'Black Panther',
      'Hawkeye',
      'Deadpool',
      'Falcon',
      'Nick Fury',
      'Helicarrier',
      'Iron Fist',
      'Red Skull',
      'Wolverine',
      'Cyclops',
      'Beast',
      'Professor X',
      'Magneto',
      'Juggernaut',
      'Sabretooth',
      'Crossbones',
      'Silver Samurai',
      'Abomination',
      'Green Goblin',
      'Lizard',
      'Absorbing Man',
      'Ultron',
      'Cerebro',
      'Blade',
      'Maria Hill',
    ],
    minor_: [
      'Doctor Octopus',
      'Venom',
      'Doctor Strange',
      'Colossus',
      'Storm',
      'Iceman',
      'Mystique',
      'Luke Cage',
      'Taskmaster',
      'Nova',
      'Ronan the Accuser',
      'Drax',
      'Gamora',
      'Groot',
      'Rocket Raccoon',
      'Star-Lord',
    ],
  },
  '2015–2019|Guardians of the Galaxy': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Star-Lord',
      'Gamora',
      'Groot',
      'Drax',
      'Rocket Raccoon',
      'Nebula',
      'Cosmo',
      'Yondu',
      'Nova',
      'Thanos',
      'Ebony Maw',
      'Adam Warlock',
      'The Collector',
      'Darkhawk',
      'Angela',
      'Mantis',
      'Odin',
      'Hela',
      'Thor',
      'Loki',
      'Valkyrie',
      'Destroyer',
      'Man-Thing',
      'Black Bolt',
      'Ronan the Accuser',
      'Howard the Duck',
      'High Evolutionary',
      'Martyr',
      'Hulk',
      'Iron Man',
      'Spider-Man',
      'Maximus',
    ],
    minor_: [
      'Medusa',
      'Lockjaw',
      'Heimdall',
      'Venom',
      'Carnage',
      'Captain America',
      'Captain Marvel',
    ],
  },
  '2017–2018|Marvel Future Avengers': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Captain America',
      'Iron Man',
      'Thor',
      'Hulk',
      'Captain Marvel',
      'Arnim Zola',
      'Red Skull',
      'Kang',
      'Klaw',
      'Bucky Barnes',
      'Deadpool',
      'Hawkeye',
      'Wasp',
      'Hulkbuster',
      'Black Bolt',
      'Medusa',
      'Lockjaw',
      'Spider-Man',
      'Black Panther',
      'Black Widow',
      'Loki',
      'Odin',
      'Falcon',
      'Doctor Strange',
      'Maximus',
      'Enchantress',
      'Green Goblin',
    ],
    minor_: ['Iron Fist', 'Ms. Marvel', 'Klaw', 'Crossbones', 'The Hood'],
  },
  "2017–2020|Marvel's Spider-Man": {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Spider-Man',
      'Miles Morales',
      'Ghost-Spider',
      'Venom',
      'Hobgoblin',
      'Doctor Octopus',
      'Vulture',
      'Electro',
      'Cloak',
      'Dagger',
      'Iron Man',
      'Black Widow',
      'Hulk',
      'Ms. Marvel',
      'Kraven',
      'Rhino',
      'Scorpion',
      'Black Cat',
      'Crossbones',
      'Lizard',
      'Doctor Strange',
      'Ironheart',
      'M.O.D.O.K.',
    ],
    minor_: [
      'Swarm',
      'Ghost',
      'Star-Lord',
      'Groot',
      'Moon Knight',
      'Mister Negative',
      'Captain America',
      'Thor',
      'Absorbing Man',
      'Sandman',
      'Mysterio',
      'Arnim Zola',
      'Baron Mordo',
    ],
  },
  '2021|Hit-Monkey': {
    major: new Set(),
    minor: new Set(),
    major_: ['Hit-Monkey', 'Silver Samurai'],
    minor_: [],
  },
  '2021|M.O.D.O.K.': {
    major: new Set(),
    minor: new Set(),
    major_: ['M.O.D.O.K.'],
    minor_: ['Iron Man', 'Captain America', 'Mister Sinister', 'Leader', 'Brood'],
  },
  '2021–2023|Spidey and His Amazing Friends': {
    major: new Set(),
    minor: new Set(),
    major_: [
      'Spider-Man',
      'Miles Morales',
      'Ghost-Spider',
      'Black Panther',
      'Hulk',
      'Iron Man',
      'Ms. Marvel',
      'Wasp',
      'Rhino',
      'Doctor Octopus',
      'Green Goblin',
      'Sandman',
      'Black Cat',
      'Electro',
    ],
    minor_: ['Arnim Zola'],
  },
  '2023|Moon Girl and Devil Dinosaur': {
    major: new Set(),
    minor: new Set(),
    major_: ['Moon Girl', 'Devil Dinosaur'],
    minor_: ['Falcon'],
  },
};

Object.values(map).forEach((i) => {
  i.major = new Set(i.major_);
  i.minor = new Set(i.minor_);
  i.major_.length = 0;
  i.minor_.length = 0;
});
