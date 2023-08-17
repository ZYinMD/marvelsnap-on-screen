The purpose of the "facts" folder is to generate the final data that ui is based upon.

To update facts about MarvelSnap cards, run all steps 1-2.

To update facts about movies, run steps 4-7.

## step 1

In browser, open devtools, visit https://snap.untapped.gg/, find "cards.json" in the network tab, copy and paste the json response into step1.

## step 2

run `pnpm step2`, this will output all cards to ui/src/lib/facts/allCards.ts based on the json from step1.

## step 3

Open the [this](https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics_publications#Theatrically_released_films) and [this](https://en.wikipedia.org/wiki/List_of_television_series_based_on_Marvel_Comics_publications#Animated) wikipedia pages, use them to edit all-titles.xlsx, then run

```
pnpm run step3
```

Check the diff, commit.

Usually, this step needs to be run when new movies are released.

## inclusion:

Titles are based on 2 important wikipedia pages: https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics_publications#Theatrically_released_films and https://en.wikipedia.org/wiki/List_of_television_series_based_on_Marvel_Comics_publications

All titles released before 1990 are not included.

The "What If...?" series is not included due to the nature of the show.

Some titles are not showing because no characters have appeared in MarvelSnap yet. For example, the MCU movie "Eternals", and all Big Hero 6 and Baymax related series.

=======
Order of rows in the excel is not important. It's generally ordered in the same ways as the wikipedia page, but there can be exceptions in tv series. For instance, Loki season 1 was aired in 2021, She-Hulk in 2022, but Loki appeared in the "Ongoing" section because there will be a season 2, so it appears below She-Hulk.

In the future, when all seasons of Loki are finished, I may or may not remember to move it up, and it shouldn't matter because there should be another sorting step.
