<script>
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';

  let props = [
    {
      name: 'links',
      type: 'array',
      default: `-`,
      values: [],
      description: 'An array of objects that define the links to render', 
    },
    {
      name: 'class',
      type: 'string',
      default: `''`,
      values: ['any'],
      description: 'Class(es) passed to element', 
    },
    {
      name: 'align',
      type: 'string',
      default: `'left'`,
      values: [`'left'`, `'center'`, `'right'`],
      description: 'Alignment of the content in the Nav', 
    },
  ]

</script>

<Section 
  title="Nav" 
  description="Description"
/>

<Section title="Props">
  <Props {props} />
</Section>
