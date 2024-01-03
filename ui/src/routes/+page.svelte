<!--
Design:
  The whole app has two major views: the homepage which renders the big list of all shows, and the individual card page which renders a card (I often call it "big card"), followed by a list of shows that contains the card.
  Routing:
    - the homepage should be at the root URL, "/"
    - each card page should have its own URL, like "/IronMan"
  Big card can be visited in 2 ways:
    - when user directly hits a route like "/IronMan" in the browser.
    - when user clicks on a small card, e.g. Iron Man, it should go to the /IronMan route.
  If the user looks at the address bar, there should be no way to differentiate the above 2.
Implementation:
  When navigating from a card back to home, it shouldn't be a slow navigation, so I don't want the big card route to render just the big card, it should also have the main list in the dom, just rendered behind the big card.
  Originally I implemented it by putting the main list in +layout, and the card page in the [cardId] route, and I use <a> tag on small cards to navigate to the [cardId]. It works, the main list is always rendered because it's +layout. However, I found when going back and forth between card route and home, there's sometimes a white flash in between on iOS. I'm not sure if that's due to it being a "navigation".
  So I abandoned the +layout.svelte approach, and simply render the exact same components in both "/" and /[cardId], the components will determine what content to render based on the url. The "Shallow routing" introduced in sveltekit2 made it possible - navigation is now eliminated, and the behavior when switching routes is truly SPA like. The example in the "shallow routing" doc is almost the same as my case, here's how it works:
  - I still have the [cardId] route, this gives each card its own URL that be can directly visited.
  - The homepage is no longer in +layout, it's just in the root +page.svelte.
  - The 2 above render the exact same components. Main list is always rendered, the big card is rendered on top of it when needed.
  - When "/" is hit, there's no big card to render.
  - When /[cardId] is directly hit, components can get cardId from $page.params.cardId. This value comes from the address bar. Note that this value can't be programmatically changed, so it never changes after the initial hit, even if you navigate to other routes.
  - When clicking on a small card (either from "/" or from /[cardId]), we can use an <a> tag to navigate to /[cardId], but this will be an navigation, which is suspected to the cause of the white flash mentioned above. To prevent navigation, we still use <a> but preventDefault() then call pushState to change the url bar.
  - $page.params.cardId is no use now, but since we clicked the small card, we know the cardId. We can store it anywhere, e.g. in a writable store, but the tradition of shadow routing is to couple this state with the href. Here's how the doc does it:
    import { pushState } from '$app/navigation';
    pushState(href, arbitraryState);
  The pushState from svelte is similar to the pushState method from the *web history API* (check MDN), but with slightly different signatures. It updates the address bar but doesn't cause a navigation. The arbitraryState is put into in the $page.state store. For instance, pushState(href, { cardId: 'IronMan' }) will put 'IronMan' into $page.state.cardId.
  - So, with both $page.params.cardId and $page.state.cardId at our disposal, our components can always know what cardId to render, both after a direct [cardId] hit and after clicking a small card.
  - Since pushState pushes a new url into the web history, the back button works (also the back swipe on mobile)

The scrollbar challenge:
  1. my main list need to center on the screen, the scrollbar needs to be at the right edge of the screen (not the right edge of the list).
  2. the two buttons at the bottom left and right need to be fixed at exactly the edge of the main list, both when there is and isn't a scrollbar.
  3. the list under the big card needs to center on the screen, its scrollbar again at the right edge of the screen, not the right edge of the list.
  4A. when there's a big card, the main list needs to render behind it, but there can't be double scrollbars on the right.
  4B. or don't render the main list when the big card is shown (it's acceptable), but on closing the big card and return to the main list, the previous scroll position needs to be restored.
  (4A and 4B are both ok, I picked 4A)
  These 4 requirements turned out trickier than I thought. It took me a long time, tried and failed in many ways, but:
    "Everything is easy in recollection" - Elon Musk.
  Here's my final solution:
    Step (1): center the main list using a regular way. There will be a scrollbar because it's very tall, and the scrollbar is the scrollbar of <body>. (how do I know that? because if I add "overflow: hidden" to <body>, the scrollbar disappears)
    Step (2): center a div of equal width as (1), but set its hight to the screen hight, then put buttons to its bottom left and right with "place self" (grid children)
    Step (3): render the big card in a self contained div that is the size of viewport, then let the bigCard component scroll inside it. The scrollbar is the scrollbar of some wrapper div. Check the code in <BigCardPage> for details.
      # Now there will be double scrollbars, to fix, set overflow: hidden on <body> when the big card is showing, unset when not showing.

  What I learned along the way:
    The scrollbar of <body> is a special one, think of it as the scrollbar of the viewport.
      - When I do "position: fixed; right: 0px", the right edge of the viewport begins inside the scrollbar, in other words, the scrollbar is not part of the viewport. This is probably the explanation for the double scrollbars in (3), because the container div is the size of viewport, and the inner scrollbar is located inside the container.
      - On iOS, when I scroll down <body>, the top and bottom UI elements of the browser disappears, making the viewport super large, giving a nice reading experience. But when I scroll something that isn't the body, for instance the thing in (3), the UI elements don't change. It doesn't feel very nice.
      - I could choose not to put (1) in <body>, instead do it in the same way as (3), which will fix the double scrollbar because the two scrollbars now stack on top of each other. But then I will lose the nice UI elements auto-hide on iOS. Btw if I do (1) this way, must do (2) this way too, otherwise the centering of (1) and centering of (2) will not align, because they center on parents that have different widths due to the scrollbars.

  -->

<script lang="ts">
  import BigCardRoute from '../lib/App/BigCardRoute.svelte';
  import HomeRoute from '../lib/App/HomeRoute.svelte';
  import Background from '../lib/Background/Background.svelte';
</script>

<Background />
<HomeRoute />
<BigCardRoute />
