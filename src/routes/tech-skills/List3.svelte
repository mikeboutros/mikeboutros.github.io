<script>
    import ListItem from '../tech-skills/ListItem.svelte';

    const prefix = "./svg/";
    const itemSet = ["ruby.svg", "git.svg", "pcdata.svg"].map(num => prefix + num);
</script>

<style lang="scss">
@import "static/global.scss";

</style>

{#each itemSet as item}
    <div class="icons-3">
        <ListItem {item} />
    </div>
{/each}