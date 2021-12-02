<!--
  
  LINK
  
  Renders an achor tag with inline link styling
  
-->

<script>
  export let to = '';
  let className = '';
  export { className as class };
  export let external = false;
  export let newtab = false;

  let rel = '';
  if (newtab) {
    rel = 'noopener noreferrer';
  } else if (external) {
    rel = 'external';
  }
</script>

<!-- RENDER
────────────────────────────────── -->

<a href={to} class={className} target={newtab ? '_blank' : ''} {rel}>
  <slot/>
</a>

<!-- STYLES
────────────────────────────────── -->

<style lang="scss">

</style>