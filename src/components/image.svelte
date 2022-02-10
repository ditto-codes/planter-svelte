<!--
  
  IMAGE
  
  Renders an image or set of responsive images
  
-->

<script>
  let className = '';
  export { className as class };
  export let src = '';
  export let alt = undefined;
  export let sources = [];
  export let picture = false;
  export let lazy = false;
  export let loading = '';
</script>

<!-- RENDER
────────────────────────────────── -->

{#if picture} 
  <picture>
    {#each sources as source}
      <source {...source}>
    {/each}
    <img {src} {alt} class={className} {...$$restProps} loading={lazy ? 'lazy' : loading}>
  </picture>
{:else}
  <img {src} {alt} class={className} {...$$restProps} loading={lazy ? 'lazy' : loading}>
{/if}

<!-- STYLES
────────────────────────────────── -->

<style lang="scss">
  
</style>