<script lang="ts">
  import { filter } from '../stores/writables/$primary';
</script>

<!-- @component the search box to put in key words -->
<div class="component">
  <input
    type="search"
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
  input[type='search']::-webkit-search-cancel-button {
    /* Remove default */
    -webkit-appearance: none;

    height: 14px;
    width: 14px;
    display: block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAn0lEQVR42u3UMQrDMBBEUZ9WfQqDmm22EaTyjRMHAlM5K+Y7lb0wnUZPIKHlnutOa+25Z4D++MRBX98MD1V/trSppLKHqj9TTBWKcoUqffbUcbBBEhTjBOV4ja4l4OIAZThEOV6jHO8ARXD+gPPvKMABinGOrnu6gTNUawrcQKNCAQ7QeTxORzle3+sDfjJpPCqhJh7GixZq4rHcc9l5A9qZ+WeBhgEuAAAAAElFTkSuQmCC);
    /* setup all the background tweaks for our custom icon */
    background-repeat: no-repeat;

    /* icon size */
    background-size: 14px;
  }
</style>
