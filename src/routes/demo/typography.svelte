
<script>
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Text from '$components/text.svelte';
  import Link from '$components/link.svelte';
</script>

<Section 
  title="Headings" 
>
  <Example label="H1">
    <Text as="h1">The five boxing wizards jump quickly.</Text>
  </Example>
  <Example label="H2">
    <Text as="h2">The five boxing wizards jump quickly.</Text>
  </Example>
  <Example label="H3">
    <Text as="h3">The five boxing wizards jump quickly.</Text>
  </Example>
  <Example label="H4">
    <Text as="h4">The five boxing wizards jump quickly.</Text>
  </Example>
  <Example label="H5">
    <Text as="h5">The five boxing wizards jump quickly.</Text>
  </Example>
  <Example label="H6">
    <Text as="h6">The five boxing wizards jump quickly.</Text>
  </Example>
</Section>

<Section 
  title="Paragraphs" 
>
  <Example label="LEAD">
    <Text class="lead">Next they turned to the business table. </Text>
  </Example>
  <Example label="P" top>
    <Text>Next they turned to the business table. On the desk, among the neat array of papers, a large envelope was uppermost, and bore, in the doctor’s hand, the name of Mr. Utterson. The lawyer unsealed it, and several enclosures fell to the floor. The first was a will, drawn in the same eccentric terms as the one which he had returned six months before, to serve as a testament in case of death and as a deed of gift in case of disappearance; but in place of the name of Edward Hyde, the lawyer, with indescribable amazement read the name of Gabriel John Utterson. He looked at Poole, and then back at the paper, and last of all at the dead malefactor stretched upon the carpet.</Text>
  </Example>
  <Example label="SMALL">
    <Text as="small">Next they turned to the business table. on the desk, among the neat array of papers, a large envelope was uppermost, and bore, in the doctor’s hand, the same name of mr.utterson.</Text>
  </Example>
  <Example label="LINK">
    <Text>This is an <Link to="#">example</Link> of a link within a block of text.</Text>
  </Example>
</Section>
