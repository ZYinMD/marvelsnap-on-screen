<script lang="ts">
  import { filter } from '../stores/writables/$primary';
  /**
   * select all text on focus. Use "any" for best readability.
   */
  function handleFocus(event: any) {
    event.target.setSelectionRange(0, event.target.value.length); // found on stackoverflow
  }
</script>

<!-- @component the search box to put in key words -->
<div class="component">
  <input
    type="search"
    on:focus={handleFocus}
    name="marvel-snap-on-screen"
    id="search-box"
    placeholder="search"
    bind:value={$filter.searching}
  />
</div>

<style>
  .component {
    border: none;
  }
  input {
    font-size: 15px;
    color: #ccc;
    padding: 10px 8px;
    border: 2px solid #8888;
    outline: none;
    border-radius: 2px;
    background-color: #1118;
  }
  input::placeholder {
    color: #6666;
  }
  /* when input type is set to "search", the browser auto renders a "x" button for you to click and clear the input box. However, for some reason, on safari, the functionality is there, but the x doesn't render. The code below add the x. Copied from stackoverflow */
  input[type='search']::-webkit-search-cancel-button {
    /* Remove default */
    -webkit-appearance: none;

    display: block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAn0lEQVR42u3UMQrDMBBEUZ9WfQqDmm22EaTyjRMHAlM5K+Y7lb0wnUZPIKHlnutOa+25Z4D++MRBX98MD1V/trSppLKHqj9TTBWKcoUqffbUcbBBEhTjBOV4ja4l4OIAZThEOV6jHO8ARXD+gPPvKMABinGOrnu6gTNUawrcQKNCAQ7QeTxORzle3+sDfjJpPCqhJh7GixZq4rHcc9l5A9qZ+WeBhgEuAAAAAElFTkSuQmCC);
    /* setup all the background tweaks for our custom icon */
    background-repeat: no-repeat;
    /* icon size */
    height: 14px;
    width: 14px;
    background-size: 14px;
  }
</style>
