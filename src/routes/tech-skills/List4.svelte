<script>
    import ListItem from '../tech-skills/ListItem.svelte';

    const prefix = "./svg/";
    const itemSet = ["ror.svg"].map(num => prefix + num);
</script>

<style lang="scss">
@import "static/global.scss";

</style>

{#each itemSet as item}
    <div class="icons-4">
        <ListItem {item} />
    </div>
{/each}