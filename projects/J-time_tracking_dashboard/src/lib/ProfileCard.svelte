<script>
  import { getContext } from 'svelte'

  let heading = '';
  let timeframes;
  let currentTimeframe = getContext('currentTimeframe')
  let values = {
    current: 0,
    previous: 0
  }

  let label = 'Week'

  $: {
    if ($currentTimeframe) {
      updateHours()
      getLabel()
    }
  }
  
  function updateHours() {
    const { current, previous } = timeframes[$currentTimeframe]
    values = {
      current,
      previous
    }
  }

  function getLabel() {
    const map = {
      daily: 'Day',
      weekly: 'Week',
      monthly: 'Month'
    }
    label = map[$currentTimeframe]
  }

  export { heading, timeframes }
</script>

<style lang="scss">
  @use './styles/variables.scss' as *;
  @use 'sass:color';

  .card {
    border-radius: rem(16) rem(16) rem(28) rem(28);
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: top -4px right 8px;
    background-size: 60px;

    &:not(:last-child) {
      margin-bottom: rem(18);
      @include mdq($bp-tablet) {
        margin-bottom: 0;
      }
    }

    &:hover {
      cursor: pointer;
      .card__content {
        background-color: color.adjust($n-desaturated_blue, $lightness: -20%);
      }
    }
    
    &--work {
      background-color: $p-bg--work;
      background-image: url('../assets/icon-work.svg');
    }
    
    &--play {
      background-color: $p-bg--play;
      background-image: url('../assets/icon-play.svg');
    }
    
    &--study {
      background-color: $p-bg--study;
      background-image: url('../assets/icon-study.svg');
    }
    
    &--exercise {
      background-color: $p-bg--exercise;
      background-image: url('../assets/icon-exercise.svg');
      background-size: 70px;
      background-position: top right 8px;
    }
    
    &--social {
      background-color: $p-bg--social;
      background-image: url('../assets/icon-social.svg');
    }
    
    &--selfcare {
      background-color: $p-bg--selfCare;
      background-image: url('../assets/icon-self-care.svg');
    }
    
    &__background {
      flex-basis: 40px;

      @include mdq($bp-desktop) {
        flex-basis: 45px;
      }
    }

    &__content {
      flex: 4;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      gap: rem(8);
      border-radius: rem(16);
      background-color: $n-dark_blue;
      line-height: 1.3;
      padding: rem(20) rem(16);
      transition: background-color 200ms ease-in-out;

      @include mdq($bp-laptop) {
        grid-template-rows: .5fr 1fr;
        gap: rem(24);
        padding: rem(28) rem(28);
      }

      &--row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }
    }

    &__heading {
      font-size: rem(16);
      font-weight: 500;
    }

    &__button {
      background-color: transparent;
      outline-color: transparent;
      border: unset;
      transition: color 200ms ease-in;
      color: #BBC0FF;

      &:hover {
        color: $n-white;
        cursor: pointer;
      }
    }

    &__body {
      @include mdq($bp-laptop) {
        flex-direction: column;
        align-items: flex-start;
        gap: rem(10);
      }
    }

    &__current {
      font-size: rem(32);
      font-weight: 300;

      @include mdq($bp-laptop) {
        font-size: rem(46);
        line-height: 1;
      }
    }

    &__previous {
      font-size: rem(12);
      color: $n-pale_blue;
    }
  }
</style>

<article class={`card card--${heading.toLowerCase().replace(' ', '')}`}>
  <div class="card__background"/>
  <div class="card__content">
    <div class="card__header card__content--row">
      <h2 class="card__heading">{heading}</h2>
      <button class="card__button" aria-label="More options">
        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentColor" fill-rule="evenodd"/></svg>
      </button>
    </div>
    <div class="card__body card__content--row">
      <p class="card__current">{values.current}hrs</p>
      <p class="card__previous">Last {label} - {values.previous}hrs</p>
    </div>
  </div>
</article>