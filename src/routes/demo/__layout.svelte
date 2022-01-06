<!--
  
  DEMO page
  
-->

<script>
  import Button from '$components/button.svelte';
  import Nav from '$components/nav.svelte';
  import Icon from '$components/icon.svelte';
  import Sidebar from '$components/demo/sidebar.svelte';
  import GitHubMark from '$components/demo/github-mark.svelte';

  let links = [
    { href: '#1', text: 'Link 1'}, 
  ];

</script>

<!-- RENDER
────────────────────────────────── -->
<div class="demo-container">
  <Nav align="right" links={links} role="Secondary">
    <svelte:fragment slot="after">
      <Button href="https://github.com/ditto-labs-co/planter-svelte">
        <GitHubMark name="github" alt="GitHub" title="View on GitHub" />
      </Button>
    </svelte:fragment>
  </Nav>
  <div class="layout">
    <Sidebar />

    <div class="demo-body">
      <slot/>    
    </div>
  </div>
</div>



<!-- STYLES
────────────────────────────────── -->

<style lang="scss">

  .demo-body {
    margin: sp(md);
  }

  .demo-container {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .layout {
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>