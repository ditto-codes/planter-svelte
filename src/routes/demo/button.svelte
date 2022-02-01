<script>
  import Button from '$components/button.svelte';
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';

  let pressed = false;
  let onClick = () => {
    console.log(`Wart wart wart!`);
    pressed = !pressed;
  }

  let props = [
    {
      name: 'variant',
      type: 'string',
      default: `'normal'`,
      values: [`'normal'`, `'ghost'`, `'text'`, `'unstyled'`,],
      description: 'Assign the visual style of the button', 
    },
    {
      name: 'size',
      type: 'string',
      default: `'normal'`,
      values: [`'small'`,`'normal'`,`'large'`,],
      description: 'Assign the size of the button', 
    },
    {
      name: 'type',
      type: 'string',
      default: `'button'`,
      values: [`'button'`, `'submit'`, `'reset'`],
      description: 'Defines the type attribute of <button>', 
    },
    {
      name: 'to',
      type: 'string',
      default: `-`,
      values: [`any`,],
      description: 'If set, will use anchor tag instead of <button>', 
    },
    {
      name: 'pressed',
      type: 'boolean',
      default: `false`,
      values: [],
      description: 'Boolean flag that will toggle pressed state when clicked', 
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: `false`,
      values: [],
      description: 'Boolean flag that sets disabled attribute and disabled styling', 
    },
    {
      name: 'onClick',
      type: 'function',
      default: `-`,
      values: [`any`,],
      description: 'Optional handler to control button when clicked', 
    },


  ]
</script>

<Section 
  title="Button" 
  description="Description"
>
  <Example label="Default" top>
    <Button>Button</Button>
  </Example>
  <Example label="Small Ghost">
    <Button size="small" variant="ghost">Small Ghost</Button>
  </Example>
  <Example label="Large Disabled">
    <Button size="large" disabled>Disabled</Button>
  </Example>
</Section>

<Section title="Props">
  <Props {props} />
</Section>