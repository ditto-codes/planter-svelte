<!--
  
  DEMO page
  
-->

<script>
  import Button from '$components/button.svelte';
  import Nav from '$components/nav.svelte';
  import Sidebar from '$components/demo/sidebar.svelte';

  let links = [
    { href: '#1', text: 'Link 1'}, 
    { href: '#2', text: 'Link 2'}, 
    { href: '#3', text: 'Link 3'}, 
  ];

</script>

<!-- RENDER
────────────────────────────────── -->
<div class="demo-container">
  <Nav align="right" links={links} role="Secondary">
    <svelte:fragment slot="after">
      <Button>I'm very cool</Button>
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