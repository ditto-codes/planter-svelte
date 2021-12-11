<!--
  
  ICON
  
  Renders an icon using https://feathericons.com/
  
-->

<script>
  export let name;
  import * as feather from 'feather-icons';

  let svg = feather.icons[name].toSvg({ ...$$restProps });
</script>

<!-- RENDER
────────────────────────────────── -->

{@html svg}

<!-- STYLES
────────────────────────────────── -->
