<script>
  import Image from '$components/image.svelte';
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';

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

  let props = [
    {
      name: 'src',
      type: 'string',
      default: `-`,
      values: [`any`,],
      description: 'Path to image asset', 
    },
    {
      name: 'alt',
      type: 'string',
      default: `-`,
      values: ['any'],
      description: 'Defines alt attribute.', 
    },
    {
      name: 'lazy',
      type: 'boolean',
      default: `false`,
      values: [''],
      description: 'Enables lazy loading', 
    },
    {
      name: 'srcset',
      type: 'array',
      default: `-`,
      values: [],
      description: 'Additional paths and valid media query using <img sercset=""/>', 
    },
    {
      name: 'picture',
      type: 'boolean',
      default: `false`,
      values: [],
      description: 'Uses <picture> tag instead of <image>.', 
    },
    {
      name: 'class',
      type: 'string',
      default: `-`,
      values: ['any'],
      description: 'Class(es) passed to element.', 
    },


  ]
</script>

  <Section 
    title="Image" 
    description="Description"
  >
    <Example label="srcset" top>
      <Image src="https://picsum.photos/200/300?random=3" {srcset} />
    </Example>
    <Example label="<picture>">
      <Image src="https://picsum.photos/200/300?random=4" picture/>
    </Example>
  </Section>

  <Section title="Props">
    <Props {props} />
  </Section>