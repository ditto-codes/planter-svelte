<script>
  import Link from '$components/link.svelte';
</script>

<div>
  <Link to="/">Take me Home</Link>
  <br/>
  <Link to="https://www.google.com/search?q=cow">Moo</Link>
  <br/>
  <Link to="https://svelte.dev/docs" newtab>Newtab</Link>
  <br/>
  <Link to="/demo" external>External</Link>
</div>