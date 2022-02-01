<script>
  import Link from '$components/link.svelte';
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';


  let props = [
    {
      name: 'to',
      type: 'string',
      default: ``,
      values: [`any`,],
      description: 'The href value', 
    },
    {
      name: 'class',
      type: 'string',
      default: `''`,
      values: ['any'],
      description: 'Class(es) passed to element.', 
    },
    {
      name: 'external',
      type: 'boolean',
      default: `false`,
      values: [''],
      description: 'Boolean flag to indicate usage of re="external".',
    }

  ]

</script>



<Section 
  title="Link" 
  description="Description"
>
  <Example label="<p>" top>
    <Link to="/">Take me Home</Link>
  </Example>
  <Example label="<p>" top>
    <Link to="https://www.google.com/search?q=cow">Moo</Link>
  </Example>
  <Example label="<p>" top>
    <Link to="https://svelte.dev/docs" newtab>Newtab</Link>
  </Example>

</Section>

<Section title="Props">
  <Props {props} />
</Section>