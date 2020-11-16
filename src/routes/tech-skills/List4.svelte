<script>
    import ListItem from '../tech-skills/ListItem.svelte';

    const prefix = "./svg/";
    const itemSet = ["sap.svg"].map(num => prefix + num);
</script>

<style lang="scss">

</style>

{#each itemSet as item}
    <div>
        <ListItem {item} />
    </div>
{/each}