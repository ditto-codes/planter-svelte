<script>
  import Button from '$components/button.svelte';

  let pressed = false;
  let onClick = () => {
    console.log(`Wart wart wart!`);
    pressed = !pressed;
  }
</script>

<div>
  <Button>No Props</Button>
  <br/>
  <br/>
  <Button size="small" variant="ghost">Small Ghost</Button>
  <br/>
  <br/>
  <Button variant="text" pressed={pressed} onClick={onClick}>Pressed Text</Button>
  <br/>
  <br/>
  <Button size="block" href="https://www.google.com">Block Google</Button>
  <br/>
  <br/>
  <Button disabled>Disabled</Button>
  <br/>
  <br/>
  <Button type="reset">Reset</Button>
</div>