<script>
    import ListItem from '../tech-skills/ListItem.svelte';

    const prefix = "./svg/";
    const itemSet = ["bootstrap.svg", "js.svg", "ruby.svg", "ror.svg", "react.svg", "python.svg", "svelte.svg"].map(num => prefix + num);
</script>

<style lang="scss">

</style>

{#each itemSet as item}
    <div>
        <ListItem {item} />
    </div>
{/each}

<!-- {#each itemSet2 as item}
    <div>
        <ListItem {item} />
    </div>
{/each} -->