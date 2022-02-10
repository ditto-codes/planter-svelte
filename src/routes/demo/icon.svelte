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
      <Icon name="alert-circle" />
    </Example>
    <Example label="Color">
      <Icon name="arrow-right" color="red"/>
    </Example>
  </Section>

<Section title="Props">
  <Props {props} />
</Section>