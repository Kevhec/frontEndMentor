<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  
  import data from './lib/json/data.json';

  import Attribution from './lib/Attribution.svelte'
  import Manager from './lib/Manager.svelte'
	import ProfileCard from './lib/ProfileCard.svelte';
  
  let currentTimeframe = writable('weekly');
  setContext('currentTimeframe', currentTimeframe)
  
  function handleMessage(event) {
    currentTimeframe.update(() => event.detail.newTimeframe)
	}

</script>

<style lang="scss">
  @use '/src/lib/styles/variables.scss' as *;

  main {
    @include mdq($bp-tablet) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: rem(20);
    }
    @include mdq($bp-laptop) {
      margin-inline: auto;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 0;
  }
</style>

<main>
  <Manager on:timeframeChange={handleMessage} />

  {#each data as { title, timeframes }}
    <ProfileCard
      heading={title}
      timeframes={timeframes}
    />
  {/each}
</main>

<footer>
  <Attribution />
</footer>
