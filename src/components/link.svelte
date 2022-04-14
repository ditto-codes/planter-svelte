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

<a href={to} class={className} target={newtab ? '_blank' : ''} {rel} {...$$restProps}>
  <slot/>
</a>

<!-- STYLES
────────────────────────────────── -->

<style lang="scss">
  a {
    color: $link-color;
    text-decoration: $link-decoration;
    letter-spacing: $link-letter-spacing;

    &:hover {
      color: $link-hover-color;
      text-decoration: $link-hover-decoration;
      background-color: $link-hover-background-color;
    }

    &:focus-visible {
      border-radius: $border-radius;
      outline-offset: 2px; 
      outline: 2px solid $purple;
    }
  }

  a:not([href]):not([class]) {

    &,
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
</style>