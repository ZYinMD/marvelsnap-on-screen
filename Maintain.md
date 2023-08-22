## When there are new cards released:

In browser, open devtools, visit https://snap.untapped.gg/ (thank you untapped.gg, I'm a paid subscriber!), find "cards.json" in the network tab, copy the json response, paste into the json in `facts/step1`.

Check git diff, if there's any diff, run `pnpm step2` from `facts`. This will output all cards to allCards.ts based on the json from step1.

Then make manual edits to `map.ts`, instructions in its comments.

## When a new movie / tv series are released:

Movies are based on [this](https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics_publications#Theatrically_released_films) wikipedia page, from section `Live-action films > Feature films`, and also section `Animated films > Theatrically released films` (mainly the spider-verse ones).

TV series are based on [this](https://en.wikipedia.org/wiki/List_of_television_series_based_on_Marvel_Comics_publications#Animated) wikipedia page, from section `Live-action` and `Animated`.

New releases will appear at the bottom of said sections. When that happens, edit `facts/step3/all-titles.xlsx`, save, then run `pnpm run step3` from `facts`, this will output allTitles.ts based on the excel content.

Then edit `map.ts`, instructions in its comments.

**Order of rows in the excel**:

It's generally ordered in the same order as the wikipedia page which is chronological, but exceptions in tv series for instance Loki season 1 was aired in 2021, She-Hulk in 2022, but on wikipedia Loki appears below She-Hulk because it's in the "Ongoing" section, so in excel it's also below She-Hulk. In the future when all seasons of Loki are finished, I may or may not remember to move it up.

I should make it not matter by sorting the list with js.
