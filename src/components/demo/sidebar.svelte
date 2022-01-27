<!--
  
  SIDEBAR
  
  Sidebar for demo organization.
  
-->

<script>  
  import { page } from '$app/stores';

  $: current = $page.path;

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
            <li 
              class={`link-wrapper${current === `/demo/${link.toLowerCase()}` 
                ? ' selected' 
                : ''
              }`}
            >
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

  .link-wrapper {
    border-radius: 2px;
    transition: $animate-fast;
    &:hover, 
    &:focus-within {
      .link { 
        color: $blue; 
      }
      background-color: rgba($blue-100, .25);
    }
    &.selected {
      .link { 
        color: $blue; 
      }
      background-color: rgba($blue-100, .5);
    }
    &:focus-within {
      $focus-outline: 2px solid $purple;
      outline-offset: 2px;
      outline: $focus-outline;
    }
  }

  .link {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding: sp(xs sm);
    
    color: $gray;
    transition: inherit;
    &:hover {
      color: inherit;
      background-color: transparent;
    }

    &:focus-visible {
      outline: 0;
    }

    // color: inherit;

    // &:hover {
    //   color: $blue;
    //   background-color: rgba($blue-100, .25);
    // }

    // &.selected {
    //   color: $blue;
    //   background-color: rgba($blue, .5);
    // }
  }
</style>

