<script>
    import ListItem from '../tech-skills/ListItem.svelte';

    const prefix = "./svg/";
    const itemSet = ["sass.svg", "mysql.svg", "git.svg"].map(num => prefix + num);
</script>

<style lang="scss">

</style>

<!-- {#each itemSet1 as item}
    <div>
        <ListItem {item} />
    </div>
{/each} -->

{#each itemSet as item}
    <div>
        <ListItem {item} />
    </div>
{/each}