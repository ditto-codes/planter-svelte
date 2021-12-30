<!--
  
  SIDEBAR
  
  Sidebar for demo organization.
  
-->
<script>  
  export let { class: className } = '';
  export let links = {
    'Components': [
      'Button',
      'Text',
      'Link',
      'Image',
      'Icon',
      'Nav',
    ],
    'Tokens': [
      'Typography',
      'Color',
    ]
  };

</script>

<!-- RENDER
────────────────────────────────── -->
<nav>
  
  <ul>
    {#each Object.keys(links) as heading}
      <li class="section">
        <p class="heading h6">{heading}</p>
        <ul>
          {#each links[heading] as link}
            <li>
              <a href={`/demo/${link.toLowerCase()}`} class="link">{link}</a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</nav>


<!-- STYLES
────────────────────────────────── -->
<style lang="scss">
  nav {
    background-color: $canvas;
    border-bottom: 1px solid $gray-100;
    padding: 0 sp(lg);
    width: 200px;

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      padding: sp(xs) sp(sm);
      list-style: none;
      // display: inline-block;
    }
  }

  .section {
    padding: 0;
  }

  .heading {
    padding: sp(xl) 0 sp(sm);
    margin: 0;
  }

  .link {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding: sp(xs sm);
    border-radius: 2px;
    color: $gray;
    transition: $animate-fast;

    &:hover {
      color: $blue;
      background-color: rgba($blue-100, .25);
    }

    &.selected {
      color: $blue;
      background-color: rgba($blue, .5);
    }
  }
</style>

