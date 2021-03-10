<script>
    import ListItem from './ListItem.svelte';

    const prefix = "./svg/";
    const itemSet = ["js.svg", "mysql.svg", "css.svg"].map(num => prefix + num);
</script>

<style lang="scss">
@import "static/global.scss";
// $grid-row-1: 0;
// $grid-row-2: 1;
// $grid-column-1: 0;
// $grid-column-2: 2;

// @for $i from 1 through 9 {
//   .tech-skills-icon-#{$i} {
//     grid-row: $grid-row-1 + $i unquote("/") $grid-row-2 + $i;
//     grid-column: $grid-column-1 + $i unquote("/") $grid-column-2 + $i;
//   }
// }

// $grid-row-1: 2;
// $grid-row-2: 3;
// $grid-column-1: 2;
// $grid-column-2: 3;

// @for $i from 1 through 3 {
//   .icons-#{$i} {
//     grid-row: $grid-row-1 unquote("/") $grid-row-2;
//     grid-column: $grid-column-1 + $i unquote("/") $grid-column-2 + $i;
//     }
// }

@for $i from 1 through 5 {
    .icons-#{$i} {
        // grid-row: 1 + $i unquote("/") 2 + $i;
        border: 2px solid #5e5858;
        border-radius: 10px;
        filter: grayscale(100%);
        background: white;
        &:hover {
          filter: grayscale(0%);
        }
    }
}

</style>

<!-- {#each itemSet1 as item}
    <div>
        <ListItem {item} />
    </div>
{/each} -->
<!-- 
{#each itemSet as item}
    {#each iconSet as icon}
        <div class="tech-skills-icon-{icon}">
            <ListItem {item} />
        </div>
    {/each}
{/each} -->

<!-- {#each itemSet as item}
    <div class="icons-2">
        <ListItem {item} />
    </div>
{/each} -->

{#each itemSet as item}
    <div class="icons-2">
        <ListItem {item} />
    </div>
{/each}