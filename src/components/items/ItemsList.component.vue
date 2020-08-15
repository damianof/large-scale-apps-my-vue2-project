<template>
  <div>
    <h3>Items:</h3>
    <Loader :show="loading" />
    <ul v-show="!loading">
      <ItemComponent
        v-for="item in items"
        :key="item.id"
        :model="item"
        @click="onItemClick"
      />
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'
  import { IItem } from '@/models/items/IItem'
  import {
    MutationType,
    IRootState,
    RootStore,
    IItemsState,
    StoreModuleNames
  } from '@/models/store'
  import { Loader } from '@/components/shared'
  import ItemComponent from '@/components/items/children/Item.component.vue'

  @Component({
    components: {
      Loader,
      ItemComponent
    },
    computed: {
      ...mapState<IRootState>({
        itemsState: (store: RootStore<IRootState>) => store.itemsState
      })
    }
  })
  export default class ItemsListComponent extends Vue {
    @Prop() items!: IItem[]

    private itemsState!: IItemsState // this is assigned by mapState
    private get loading(): boolean {
      return this.itemsState.loading
    }

    private dispatch<T>(mutationType: string, params?: T) {
      this.$store.dispatch(
        `${StoreModuleNames.itemsState}/${mutationType}`,
        params
      )
    }

    onItemClick(item: IItem) {
      this.dispatch<{
        id: number
        selected: boolean
      }>(MutationType.items.selectingItem, {
        id: item.id,
        selected: !item.selected
      })
    }
  }
</script>

<style lang="scss">
  ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
</style>
