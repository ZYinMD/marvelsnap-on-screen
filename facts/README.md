The purpose of the "facts" folder is to generate the final data that ui is based upon.

To update facts about MarvelSnap cards, run all steps except 4.

To update facts about movies, run steps 4-7.

## Step1 (manual):

1. Open the "all cards" page of marvelsnapzone.com, probably https://marvelsnapzone.com/cards/.
1. Slowly scroll to the bottom (because all images are lazy loaded).
1. Save the page, choose "html, all files". Name it all-cards (must name it correctly on save, can't rename later).
1. This will save all card text for future use, and all card images in the asset folder.
1. Move the download result into the step1 folder, overwrite the original.
1. Stage the diff (don't commit yet). New images are probably newly released cards. Modified images are probably balance changes.

## Step2 (manual):

1. In browser, open the all-cards.html we saved in step1.
1. In VSCode, open the pasted-div-of-card-list.html in step2.
1. The html in step1 contains too many stuff we don't need. Open devtools, select the div that contains all cards, copy and paste it into the html in step2, overwrite the previous version. Now we have a striped down version of html containing only what we need.
1. Open the new page in browser, open console to see if all cards into are console logged (if there are too many errors, disable them in the "level" settings). This is done by a script tag `<script src="pre-scrape.js"></script>`. Hopefully it wasn't accidentally deleted in the last step.
1. If console log looks good, stage the change. Don't commit yet.

## Step3:

```
pnpm run step3
```

Check the diff, it should be recent card releases and balance changes. If looking good, stage and commit.

Explain:

This step uses puppeteer to open the html created in step2, scrape the data we need, output to json.

The code is the same as in "pre-scrape.js", the only difference is puppeteer can output json with fs.

Unfortunately there's no easy way to share the code as a module between puppeteer and browser, so I just copy and paste.

## inclusion:

Titles are based on 2 important wikipedia pages: https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics_publications#Theatrically_released_films and https://en.wikipedia.org/wiki/List_of_television_series_based_on_Marvel_Comics_publications

All titles released before 1990 are not included.

The "What If...?" series is not included due to the nature of the show.

Some titles are not showing because no characters have appeared in MarvelSnap yet. For example, the MCU movie "Eternals", and all Big Hero 6 and Baymax related series.

=======
Order of rows in the excel is not important. It's generally ordered in the same ways as the wikipedia page, but there can be exceptions in tv series. For instance, Loki season 1 was aired in 2021, She-Hulk in 2022, but Loki appeared in the "Ongoing" section because there will be a season 2, so it appears below She-Hulk.

In the future, when all seasons of Loki are finished, I may or may not remember to move it up, and it shouldn't matter because there should be another sorting step.
