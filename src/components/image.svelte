<!--
  
  IMAGE
  
  Renders an image or set of responsive images
  
-->

<script>
  let className = '';
  export { className as class };
  export let src = '';
  export let alt = undefined;
  export let srcset = [];
  export let picture = false;
  export let lazy = false;
</script>

<!-- RENDER
────────────────────────────────── -->

{#if picture} 
  <picture>
    {#each srcset as source}
      <source srcset={source.src} media={source.media}>
    {/each}
    <img {src} {alt} class={className} {...$$restProps} loading={lazy ? 'lazy' : ''}>
  </picture>
{:else}
  <img {src} {alt} class={className} {...$$restProps} loading={lazy ? 'lazy' : ''}>
{/if}

<!-- STYLES
────────────────────────────────── -->

<style lang="scss">
  
</style>