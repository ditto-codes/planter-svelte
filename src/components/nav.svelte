<!--
  
  NAV
  
  Quickly compose a site navigation by passing an object to this component
  
-->
<script>
  export let { class: className } = '';
  export let links = [];
  export let align = 'left';
  let classes = `${align}`;
  if (className) classes += ` ${className}`;
</script>

<!-- RENDER
────────────────────────────────── -->
<nav class={classes} {...$$restProps}>
  
  <ul>
    <li><slot name="before" /></li>
    {#if links}
      {#each links as link}
        <li>
          <a class="link" href={link.href} rel={link.rel ? link.rel : ''}>{link.text}</a>
        </li>
      {/each}
    {/if}
    <li><slot name="after" /></li>
  </ul>
</nav>


<!-- STYLES
────────────────────────────────── -->
<style lang="scss">
  nav {
    background-color: $canvas;
    border-bottom: 1px solid $gray-100;
    padding: sp(md);
    display: flex;
    align-items: center;

    ul {
      margin: 0;
    }

    li {
      padding: sp(xs) sp(sm);
      list-style: none;
      display: inline-block;
    }
  }

  .link {
    color: $gray;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: $blue;
      background-color: transparent;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: sp(xs);
    }
  }
  
  .left {
    justify-content: flex-start;
  }

  .center {
    justify-content: center;
  }

  .right {
    justify-content: flex-end;
  }
</style>

