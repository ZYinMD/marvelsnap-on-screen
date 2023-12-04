## What to do when new cards are released:

1. In browser, open devtools, visit https://snap.untapped.gg/ (thanks untapped.gg, I'm a paid subscriber!), find "cards.json" in the network tab, copy the json response, paste into the json in `facts/step1`.

1. run `deno task step2` from `facts`. This will update allCards.ts based on the json from step1.

1. run `deno task step3`, this will download the image of the new card.

1. commit -m "facts: update cards"

1. run `deno task step5`, this will tell me which cards do I need to manually put into "map.ts", which is the main source of truth of the app.

1. right click "facts/wiki-pages" > Find in folder, search the new cards to see which show did they appear in. Also google it to see where it appeared.

   Some useful sites: if they're in MCU, search in the [fandom site](https://marvelcinematicuniverse.fandom.com), also check the [A-L](https://en.wikipedia.org/wiki/Characters_of_the_Marvel_Cinematic_Universe:_A%E2%80%93L) and [M-Z](https://en.wikipedia.org/wiki/Characters_of_the_Marvel_Cinematic_Universe:_M%E2%80%93Z) pages.

   If card is found in the .txt files, visit the wiki page in browser and Ctrl-F there, make sure it really appeared. Watch out for cross-overs - a cross-over episode is not an episode belonging to the main article, it's when characters of the main article went over to other shows.

   Sometimes I remembered to put the link to the original wikipedia page on the first line of each txt file, which is handy, but sometimes I didn't, so need to google and find it, or open the
   excel file to find the link there.

## If there's a new patch / balance change but no new cards:

Doing step 1 and 2 above is enough. But it rare happens because new cards are added once per week, while balance changes happen less often.

## What to do when a new movie / tv series is released:

Movies are based on [this](https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics_publications#Theatrically_released_films) wikipedia page, from section `Live-action films > Feature films`, and also section `Animated films > Theatrically released films` (mainly the spider-verse ones).

TV series are based on [this](https://en.wikipedia.org/wiki/List_of_television_series_based_on_Marvel_Comics_publications#Animated) wikipedia page, from section `Live-action` and `Animated`.

New releases will appear at the bottom of said sections. When it happens:

1. edit `facts/step4/all-titles.xlsx`, save, then run `deno task step4` from `facts`, this will output `allTitles.ts` based on the excel content.

   **Ongoing shows:**

   In the end of table on the wiki page of tv shows, there is the "ongoing" section. Make sure to include each of the ongoing shows in the excel, it's easy to miss them.

   **Order of rows in the excel:**
   q
   It's generally ordered in the same order as the wikipedia page which is chronological, but exceptions in tv series for instance Loki season 1 was aired in 2021, She-Hulk in 2022, but on wikipedia Loki appears below She-Hulk because it's in the "Ongoing" section, so in excel it's also below She-Hulk. In the future when all seasons of Loki are finished, I may or may not remember to move it up.

   In the end, the order in app is determined by `map.ts`. I'll just manually adjust the order to what I like.

1. Add a new entry in `map.ts`. Red squiggles should already appeared because not all shows are listed, the new entry will make the squiggles go away.

1. Now it's time to add cards in the new entry. First go to its wikipedia page.

- If it's a movie or live action tv series, just read the "Cast" section, it's easy.

- If animated series, create a new txt file in `facts/one-time-scripts/animated-tv-series/wiki-pages` and copy and paste all wikipedia text into it. If there's another dedicated wikipedia page for "plot of all episodes", prefer that page over the main page. Then run the search script. It's run like this:

  ```
  deno run --allow-read --allow-write find-all-cards-in-all-animated-series.ts
  ```

  Then check the new txt file generated.
