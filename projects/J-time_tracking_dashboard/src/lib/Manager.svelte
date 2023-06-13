<script>
  import { createEventDispatcher, getContext } from 'svelte'
  import ManagerButton from './ManagerButton.svelte'

  const dispatch = createEventDispatcher()
  
  function updateTimestamp(evt) {
    dispatch('timeframeChange', {
      newTimeframe: evt.target.value
    })
  }

  let currentTimeframe = getContext('currentTimeframe')
</script>

<style lang="scss">
  @use './styles/variables.scss' as *;

  .card {
    border-radius: rem(16);
    background-color: $n-dark_blue;
    margin-bottom: rem(18);

    @include mdq($bp-tablet) {
      grid-column: 1 / 3;
    }

    @include mdq($bp-laptop) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      margin-bottom: 0;
      display: flex;
      flex-direction: column;
    }

    &__header {
      background-color: $p-blue;
      border-radius: rem(16);
      display: flex;
      gap: rem(16);
      padding: rem(28) rem(16);
      
      @include mdq($bp-laptop) {
        flex-grow: 2;
        flex-direction: column;
      }
    }

    &__image {
      border-radius: 50%;
      border: 2px solid $n-white;
      width: fit-content;
      aspect-ratio: 1 / 1;

      @include mdq($bp-laptop) {
        margin-bottom: rem(28);
        img {
          width: 75px;
        }
      }
    }

    &__user {
      font-size: rem(18);
      font-weight: 300;

      @include mdq($bp-laptop) {
        font-size: rem(32);
        line-height: 1.2;
      }

      span {
        display: block;
        font-size: rem(14);
        color: $n-pale_blue;
      }
    }

    &__body {
      display: flex;
      justify-content: space-between;
      padding: rem(20) rem(16);
      @include mdq($bp-laptop) {
        flex-grow: 1;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
</style>

<div class="card">
  <div class="card__header">
    <figure class="card__image">
      <img src="image-jeremy.png" alt="Jeremy Robson" width="50px" style="aspect-ratio: 1/1;">
    </figure>
    <div class="card__user">
      <p>
        <span>Report for</span>
        Jeremy Robson
      </p>
    </div>
  </div>
  <div class="card__body">
    <ManagerButton
      currentTimeframe={currentTimeframe}
      updateTimestamp={updateTimestamp}
      value='daily'
    />
    <ManagerButton
      currentTimeframe={currentTimeframe}
      updateTimestamp={updateTimestamp}
      value='weekly'
    />
    <ManagerButton
      currentTimeframe={currentTimeframe}
      updateTimestamp={updateTimestamp}
      value='monthly'
    />
  </div>
</div>