Below is written for myself to read. If you want to suggest a change, the best way is to [reply on reddit](https://www.reddit.com/r/MarvelSnap/comments/1942d9w/complete_mega_list_every_card_in_every_movie_tv/).

## What to do when new cards are released:

1. In browser, open devtools, visit https://snap.untapped.gg/ (thanks untapped.gg, I'm a paid subscriber!), find "cards.json" in the network tab, copy the json response, paste into the json in `facts/step1`.

1. run `deno task step2` from `facts`. This will update allCards.ts based on the json from step1.

1. run `deno task step3`, this will download the image of the new card.

1. commit -m "facts: update cards"

1. run `deno task step5`, this will tell me which cards do I need to manually put into "map.ts", which is the main source of truth of the app.

1. right click "facts/wiki-pages" > Find in folder, search the new cards to see which show they appeared in. Also google it to see where it appeared, a useful pattern is google "xxx marvel", then go the the wikipedia page about that comic character, then go to the "In other media" section.

   Some other useful sites: if they're in MCU, search in the [fandom site](https://marvelcinematicuniverse.fandom.com), also check the [A-L](https://en.wikipedia.org/wiki/Characters_of_the_Marvel_Cinematic_Universe:_A%E2%80%93L) and [M-Z](https://en.wikipedia.org/wiki/Characters_of_the_Marvel_Cinematic_Universe:_M%E2%80%93Z) pages.

1. deploy, then create a release on github, with date being the title, and "add card xx xx" in the body.

## What to do when a new movie / tv series is released:

Movies are based on [this](https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics_publications) wikipedia page, from section `Live-action films > Feature films`, and also section `Animated films > Theatrically released films` (mainly the spider-verse ones).

TV series are based on [this](https://en.wikipedia.org/wiki/List_of_television_series_based_on_Marvel_Comics_publications) wikipedia page, from section `Live-action` and `Animated`.

New releases will appear at the bottom of said sections. When it happens:

1. edit `facts/step4/all-titles.xlsx`, save, then run `deno task step4` from `facts`, this will output `allTitles.ts` based on the excel content.

   **Ongoing shows:**

   In the end of table on the wiki page of tv shows, there is the "ongoing" section. Make sure to include each of the ongoing shows in the excel, it's easy to miss them.

   **Order of rows in the excel:**

   In the app, shows are sorted based on the sort option in the bottom left panel, so the order in excel doesn't matter.

   (rows in excel are generally ordered in the same order as the wikipedia page which is chronological, some exceptions in tv series for instance Loki season 1 was aired in 2021, She-Hulk in 2022, but on wikipedia Loki appears below She-Hulk because it's in the "Ongoing" section, so in excel it's also below She-Hulk. When all seasons of Loki are finished, I won't remember to move it up.)

1. Add a new entry in `map.ts`. Red squiggles should already appeared because not all shows are listed, the new entry will make the squiggles go away.

1. Now it's time to add cards in the new entry. Go to its wikipedia page.

   - Read the "Cast" section to add each character in `map.ts`.

   - Create a new txt file in `facts/one-time-scripts/animated-tv-series/wiki-pages`, copy and paste all wikipedia text into it. For tv series, if there's another dedicated wikipedia page for "plot of all episodes", prefer that page over the main page. This txt helps with future searches.
