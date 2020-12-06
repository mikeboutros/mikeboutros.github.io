<script>
    import ListItem from '../tech-skills/ListItem.svelte';

    const prefix = "./svg/";
    const itemSet = ["bootstrap.svg", "js.svg", "ruby.svg", "ror.svg", "react.svg", "python.svg", "svelte.svg"].map(num => prefix + num);
</script>

<style lang="scss">

// .icons {
//         filter: grayscale(100%);
//     &:hover {
//         filter: contrast(200%);
//     }
// }

// .icons:hover {
//     filter: drop-shadow(0 0 0.25rem rgb(14, 158, 194));
// }

</style>

{#each itemSet as item}
    <div class="icons">
        <ListItem {item} />
    </div>
{/each}