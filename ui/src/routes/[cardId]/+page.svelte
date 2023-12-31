<script lang="ts">
  import BigCardRoute from '../../lib/App/BigCardRoute.svelte';
  import Home from '../../lib/App/Home.svelte';
  import Background from '../../lib/Background/Background.svelte';
</script>

<!--
Big card can be rendered in 2 ways:
  (1) when user direct visits a route like "/Mantis",
  (2) when user clicks on a small card.
1 is done with this [cardId] route, the value of cardId is available in $page.params.cardId.
2. is done with shallow routing and pushState. When user clicks a small card, e.g. Mantis, the route is changed by pushState('/Mantis', { cardId: 'Mantis'}), so the cardId becomes available in $page.state.cardId.
If the user looks at the address bar, there's no way to differentiate the 2.
The [cardId] route and the home +page actually renders the exact same component. <BigCardRoute /> will determine what big card to render on its own, based on the value of $page.state.cardId and $page.param.cardId.

In the beginning, I actually used a more idiomatic way to achieve this UX. I put all of the home page into +layout, and render the big card only in the [cardId] route, and use <a> tag on small cards to navigate to the [cardId] page. It works, but each click on a small card is a navigation, and on iPhone the navigation causes some white flash in between.
-->
<Background />
<Home />
<BigCardRoute />
