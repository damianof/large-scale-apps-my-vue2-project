<template>
  <li :class="css" @click="onClick">
    <div class="selected-indicator">⋆</div>
    <div class="name">{{ model.name }}</div>
  </li>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { IItem } from '@/models/items/IItem'

  @Component
  export default class ItemComponent extends Vue {
    @Prop() model!: IItem

    private get css(): string {
      let css = 'item'
      if (this.model.selected) {
        css += ' selected'
      }
      return css.trim()
    }

    onClick() {
      this.$emit('click', this.model)
    }
  }
</script>

<style lang="scss">
  li.item {
    padding: 0;
    outline: solid 1px #eee;
    display: grid;
    grid-template-columns: 1.7em auto;
    cursor: pointer;
    transition: background-color 0.3s ease;

    .name {
      padding: 5px;
      text-align: left;
    }
    .selected-indicator {
      padding: 5px;
      font-size: 3em;
      line-height: 0.5em;
      padding: 5px;
      color: lightgray;
    }
    &.selected {
      .selected-indicator {
        color: skyblue;
      }
    }
    &:hover {
      background-color: #eee;
    }
  }
</style>
