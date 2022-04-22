<script>
  import Link from '$components/link.svelte';
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';


  let props = [
    {
      name: 'to',
      type: 'string',
      default: `-`,
      values: [`any`,],
      description: 'The href value', 
    },
    {
      name: 'class',
      type: 'string',
      default: `''`,
      values: ['any'],
      description: 'Class(es) passed to element', 
    },
    {
      name: 'external',
      type: 'boolean',
      default: `false`,
      values: [''],
      description: 'Flag that sets rel="external"',
    },
  ]

</script>



<Section 
  title="Link" 
>
  <p slot="description">Renders an <code>{`<a>`}</code></p>
  <Example label="Route">
    <Link to="/">Take me Home</Link>
  </Example>
  <Example label="External">
    <Link to="https://www.google.com/search?q=cow">Moo</Link>
  </Example>
  <Example label="Newtab">
    <Link to="https://svelte.dev/docs" newtab>Read the Svelte Docs</Link>
  </Example>
  <Example label="Unstyled">
    <Link to="https://kit.svelte.dev/" newtab unstyled><small>Read the SvelteKit Docs</small></Link>
  </Example>

</Section>

<Section title="Props">
  <Props {props} />
</Section>