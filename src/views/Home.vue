<template>
  <div class="home">
    <ItemsListComponent :items="items" />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { IItem } from '@/models/items/IItem'
  import { StoreModuleNames, MutationType } from '@/models/store'
  import ItemsListComponent from '@/components/items/ItemsList.component.vue'

  @Component({
    components: {
      ItemsListComponent
    }
  })
  export default class Home extends Vue {
    private get items(): IItem[] {
      return this.$store.state.itemsState.items
    }

    mounted() {
      this.$store.dispatch(
        `${StoreModuleNames.itemsState}/${MutationType.items.loadItems}`
      )
    }
  }
</script>
