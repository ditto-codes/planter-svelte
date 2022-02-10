<script>
  import Icon from '$components/icon.svelte';
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';

  let props = [
    {
      name: 'name',
      type: 'string',
      default: `-`,
      values: [`any`,],
      description: 'Define feather icon to render.', 
    },
    {
      name: 'color',
      type: 'string',
      default: `-`,
      values: [`any`,],
      description: 'Define color of icon.', 
    },
  ]
</script>

  <Section title="Icon" description="Description">
    <Example label="Icon" top>
      <Icon name="coffee" />
    </Example>
    <Example label="Color">
      <Icon name="smile" color="#F0A853"/>
    </Example>
  </Section>

<Section title="Props">
  <Props {props} />
</Section>