<!--
  
  DEMO page
  
-->

<script>
  import Text from '$components/text.svelte';
  import Link from '$components/link.svelte';
  import Image from '$components/image.svelte';

  let srcset = [
    {
      src: 'https://picsum.photos/200/300?random=1',
      media: '(min-width: 1440px)',
    },
    {
      src: 'https://picsum.photos/200/300?random=2',
      media: '(min-width: 980px)',
    },
  ]
</script>

<!-- RENDER
────────────────────────────────── -->

<div class="demo-body">
  <Text as="h1">Heading 1</Text>
  <Text>I'm a default p tag</Text>
  <Text as="p">I'm a defined p tag</Text>
  <Text as="small">I'm small</Text>
  <br/>
  <br/>
  <Link to="/">Take me Home</Link>
  <br/>
  <Link to="https://www.google.com/search?q=cow">Moo</Link>
  <br/>
  <Link to="https://svelte.dev/docs" newtab>Newtab</Link>
  <br/>
  <Link to="/demo" external>External</Link>
  <br/>
  <br/>
  <Image src="https://picsum.photos/200/300?random=3" {srcset} picture/>
</div>

<!-- STYLES
────────────────────────────────── -->

<style>
  .demo-body {
    margin: 12px;
  }
</style>