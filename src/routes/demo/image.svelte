<script>
  import Image from '$components/image.svelte';

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
</script>

<div>
  <Image src="https://picsum.photos/200/300?random=3" {srcset} picture/>
</div>