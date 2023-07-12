The goal of the "facts" folder is to generate final data that ui is based upon.

## Step1 (manual):

Open the "all cards" page of marvelsnapzone.com, probably https://marvelsnapzone.com/cards/. Slowly scroll to the bottom (because all images are lazy loaded). Then save the page locally as html. This can save all the images.

## Step2 (manual):

The page saved in step1 contains too many stuff we don't need. Open devtools, copy the parent div of all cards, paste into a new html. It's much cleaner.

Optionally, add a script tag to the new html, it serves as a playground for what is to be done in page.evaluate() in puppeteer, but it's faster than puppeteer. I named it "throwaway-script.js" because it's optional.

## Step3:

Use puppeteer to open the page created in step2, scrape the data we need, output to json.

The code is the same as in "throwaway-script.js", but there's no easy way to share the code as a module, so just copy and paste.

## StepX:

Images of all cards have been saved in step1 in webp format. Copy them to ui.

Note: in the html, each card has a url to the image and a url to the individual page of that card, let's call them image url and page url. They both contain the card id. In step 3, I parsed the id from the page url, e.g. from Colleen Wing's page url is "https://marvelsnapzone.com/cards/colleen-wing/", and I parsed out the id "colleen-wing".

However, I found 3 exceptions where the image url is spelled differently: "rocket-raccoon" spelled as "rocket-racoon", "ms-marvel" spelled as "ms.marvel", "hulkbuster" spelled as "hulk-buster".

Judging from the spelling of "raccoon", the image url is the wrong one, so use page url to parse the id.

Actually, the website knows this, so they've made them interchangeable - visit "/rocket-raccoon" and "/rocket-racoon" both lead to the same page, and both "rocket-raccoon.webp" and "rocket-racoon.webp" exist on the server. (the 2 images are slightly different, the correctly spelled is more consistent with others)

The only problem is the webp of the correct name didn't get saved in step1, so I manually visited the 3 correct images and saved them, then put into step1 folder.
