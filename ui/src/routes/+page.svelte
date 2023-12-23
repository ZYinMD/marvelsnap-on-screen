<!--
The whole app has two major views: the homepage which renders the big list of all shows, and the individual card page which renders a card, followed by a list of shows that include the card.
Goal:
  - each card page should have its own URL, like "/IronMan"
  - the homepage should be at the root URL, "/"
  - when navigating from a card back to home, the home shouldn't take a long time to render. Ideally never went away from DOM, just hidden.
Originally I implemented it by putting the homepage in the root +layout.svelte, and the card page in the [cardId] route, so that the homepage is always rendered. Then I found when going back and forth between card pages and home, there's sometimes a white flash in between. I'm not sure if that's due to it being a "navigation".
Then I abandoned the +layout.svelte approach, and used the new "Shallow routing" introduced in sveltekit2. The example in the doc is almost the same as my case, here's how it works:
  1. The card page is still put into the [cardId] route, to ensure each card has its own URL that you can directly visit.
  2. The homepage is no longer in +layout, it's just in the root +page.svelte (this file).
  3. when clicking a card which is an <a> tag, instead of navigating to the intended href, I preventDefault() then call pushState(href, arbitraryData) - pushState is a util from $app/navigation. This is similar to the "web history API" (check MDN). The arbitrary data is available in the $page.state store. Then I can react to the store to render the card page using the same component that is used by the cardId route. In the end, I didn't actually navigate to the card page url, but I changed the url in the browser address bar to mimic that, and also render the card page in the same way, but I never left the homepage.

Challenge: ★★★ overflow and scroll

  -->
<script lang="ts">
  import BigCardRoute from '../lib/App/BigCardRoute.svelte';
  import Home from '../lib/App/Home.svelte';
</script>

<Home />
<BigCardRoute />
