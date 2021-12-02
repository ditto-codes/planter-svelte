<!--
  
  TEXT
  
  Renders a common text element
  
-->

<script>
  export let as = '';
  let className = '';
  export { className as class };
</script>

<!-- RENDER
────────────────────────────────── -->

{#if as === 'h1'}
  <h1 class={className}><slot/></h1>
{:else if as === 'h2'}
  <h2 class={className}><slot/></h2>
{:else if as === 'h3'}
  <h3 class={className}><slot/></h3>
{:else if as === 'h4'}
  <h4 class={className}><slot/></h4>
{:else if as === 'h5'}
  <h5 class={className}><slot/></h5>
{:else if as === 'h6'}
  <h6 class={className}><slot/></h6>
{:else if as === 'small'}
  <small class={className}><slot/></small>
{:else}
  <p class={className}><slot/></p>
{/if}
