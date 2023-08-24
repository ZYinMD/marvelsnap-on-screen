## What to do when new cards are released:

1. In browser, open devtools, visit https://snap.untapped.gg/ (thank you untapped.gg, I'm a paid subscriber!), find "cards.json" in the network tab, copy the json response, paste into the json in `facts/step1`.

1. Check git diff, if there's any diff, run `pnpm step2` from `facts`. This will output all cards to allCards.ts based on the json from step1.

1. Google the new card(s) to understand who they are. Add them in `map.ts`. If they're in MCU, search in the [fandom site](https://marvelcinematicuniverse.fandom.com), also check the [A-L](https://en.wikipedia.org/wiki/Characters_of_the_Marvel_Cinematic_Universe:_A%E2%80%93L) and [M-Z](https://en.wikipedia.org/wiki/Characters_of_the_Marvel_Cinematic_Universe:_M%E2%80%93Z) pages.

   Also search the card in the .txt files in `facts/one-time-scripts/animated-tv-series/wiki-pages`, because they can randomly show up in animated series. If found, the first line of each file is the link to the original wikipedia page, visit the page and Ctrl-F there, make sure it really appeared. Watch out for cross-overs - a cross-over episode is not an episode belonging to the main article, it's when characters of the main article went over to other shows.

## What to do when there's a new patch / balance change:

Do step 1 and 2 above.

## What to do when a new movie / tv series is released:

Movies are based on [this](https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics_publications#Theatrically_released_films) wikipedia page, from section `Live-action films > Feature films`, and also section `Animated films > Theatrically released films` (mainly the spider-verse ones).

TV series are based on [this](https://en.wikipedia.org/wiki/List_of_television_series_based_on_Marvel_Comics_publications#Animated) wikipedia page, from section `Live-action` and `Animated`.

New releases will appear at the bottom of said sections. When it happens:

1. edit `facts/step3/all-titles.xlsx`, save, then run `pnpm run step3` from `facts`, this will output `allTitles.ts` based on the excel content.

   **Order of rows in the excel**:

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
