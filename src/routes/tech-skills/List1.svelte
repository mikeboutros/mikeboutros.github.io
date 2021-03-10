<script>
    import ListItem from './ListItem.svelte';

    const prefix = "./svg/";
    const itemSet = ["bootstrap.svg", "sass.svg", "html.svg", "sap.svg", "office.svg"].map(num => prefix + num);
    // const numSet = ["1", "2", "3", "4", "5", "6", "7"];
</script>

<style lang="scss">
@import "static/global.scss";

  // .icons-1 {
  //   grid-column: 1 / 2;
  //   // grid-column: 1 / 2;
  //   // grid-column: $grid-column-1 unquote("/") $grid-column-2;
  // }

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

<!-- {#each itemSet as item}
  <ListItem {item} />
{/each} -->

{#each itemSet as item}
  <div class="icons-1">
    <ListItem {item} />
  </div>
{/each}

  <!-- {#each Array(itemSet.length) as _, i} -->
    
      <!-- {#each itemSet as item}
      <div class="icons-1">
        <ListItem {item} />
      </div>
      {/each} -->
<!-- {/each} -->

<!-- {#each (itemSet.length) as _,i}
    {#each itemSet[i] as item}
    <div class="icon">
      <ListItem {item} />
    </div>
  {/each}
{/each} -->