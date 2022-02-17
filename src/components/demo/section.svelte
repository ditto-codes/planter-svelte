<script>
  import Text from '$components/text.svelte';
  export let title = 'Section Title';
  // export let description = '';
</script>

<section>
  <div class="heading">
    <Text as="h2" class="h4">
      {title}
    </Text>
  </div>
  {#if $$slots.description}
    <div class="description">
      <slot name="description" />
    </div>
  {/if}
  <slot/>
</section>

<style lang="scss">

  section {
    margin-bottom: sp(xxl);
  }

  .heading {
    padding-bottom: sp(1.25);
    margin-bottom: sp(md);
    border-bottom: solid $gray 1px;
    :global(*) {
      padding: 0;
      margin: 0;
    }
  }

  .description {
    margin-bottom: sp(xxl);
    
    :global(code) {
      color: $red-400;
    }
  }

</style>