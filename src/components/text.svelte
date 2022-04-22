<!--
  
  TEXT
  
  Renders a common text element
  
-->

<script>
  export let as = 'p';
  let className = '';
  export { className as class };
</script>

<!-- RENDER
────────────────────────────────── -->

<svelte:element this={as} class={className}>
  <slot/>
</svelte:element>
