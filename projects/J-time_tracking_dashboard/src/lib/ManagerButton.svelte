<script>
  let currentTimeframe;
  let updateTimestamp;
  let value;
  

  export { currentTimeframe, updateTimestamp, value }
</script>

<style lang='scss'>
  @use './styles/variables.scss' as *;

  .button {
    background-color: transparent;
    outline-color: transparent;
    padding: 0 rem(10);
    border: unset;
    text-transform: capitalize;
    color: $n-desaturated_blue;
    transition: color 200ms ease-in;

    &:hover {
      color: $n-white;
      cursor: pointer;
    }

    &--selected {
      color: $n-white;
    }
  }
</style>

<button
  class={
    `button
    ${
      $currentTimeframe === value
        ? 'button--selected'
        : ''
    }`
  }
  on:click={updateTimestamp}
  value={value}
>
  {value}
</button>