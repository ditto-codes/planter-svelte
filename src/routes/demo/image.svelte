<script>
  import Image from '$components/image.svelte';
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';

  let props = [
    {
      name: 'src',
      type: 'string',
      default: `-`,
      values: [`any`,],
      description: 'Image source', 
    },
    {
      name: 'alt',
      type: 'string',
      default: `-`,
      values: ['any'],
      description: `Sets 'alt' attribute`, 
    },
    {
      name: 'lazy',
      type: 'boolean',
      default: `false`,
      values: [''],
      description: `Flag that, if true, sets 'loading' attribute to 'lazy' (and takes precedence over 'loading' prop)`, 
    },
    {
      name: 'loading',
      type: 'string',
      default: `''`,
      values: [`'auto'`, `'eager'`, `'lazy'`,],
      description: `Sets 'loading' attribute`, 
    },
    {
      name: 'srcset',
      type: 'array',
      default: `-`,
      values: [],
      description: `An array of objects that define the attributes of the <source> elements within the <picture> element`,
    },
    {
      name: 'picture',
      type: 'boolean',
      default: `false`,
      values: [],
      description: 'Uses <picture> instead of <img>', 
    },
    {
      name: 'class',
      type: 'string',
      default: `-`,
      values: ['any'],
      description: 'Class(es) passed to element', 
    },
  ]

  let sources = [
    {
      srcset: 'https://picsum.photos/300/200?random=1',
      media: '(min-width: 1440px)',
    },
    {
      srcset: 'https://picsum.photos/300/200?random=2',
      media: '(min-width: 980px)',
    },
  ]

</script>

  <Section 
    title="Image" 
  >
    <p slot="description">Renders <code>{`<img>`}</code> or <code>{`<picture>`}</code></p>
    <Example label="<img>" top>
      <Image src="https://picsum.photos/300/200?random=3" />
    </Example>
    <Example label="<picture>" top>
      <Image src="https://picsum.photos/300/200?random=4" picture {sources}/>
    </Example>
    <Example label="Loading" top>
      <Image src="https://picsum.photos/300/200?random=5" loading="lazy" />
    </Example>
    <Example label="Lazy" top>
      <Image src="https://picsum.photos/300/200?random=6" lazy />
    </Example>
  </Section>

  <Section title="Props">
    <Props {props} />
  </Section>