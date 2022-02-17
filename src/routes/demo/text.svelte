<script>
  import Text from '$components/text.svelte';
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';

  let props = [
    {
      name: 'as',
      type: 'string',
      default: `'p'`,
      values: [`'p'`, `'small'`, `'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'h6'`],
      description: 'The element to render.', 
    },
    {
      name: 'class',
      type: 'string',
      default: `''`,
      values: ['any'],
      description: 'Class(es) passed to element.', 
    }

  ]

</script>

<Section 
  title="Text" 
  description="Description"
>
  <Example label="<p>" top>
    <Text>Next they turned to the business table. On the desk, among the neat array of papers, a large envelope was uppermost, and bore, in the doctor’s hand, the name of Mr. Utterson.</Text>
  </Example>
  <Example label="<h3>">
    <Text as="h3">The five boxing wizards jump quickly.</Text>
  </Example>
</Section>

<Section title="Props">
  <Props {props} restProps={false} />
</Section>

