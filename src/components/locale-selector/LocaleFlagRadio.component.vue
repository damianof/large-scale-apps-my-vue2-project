<template>
  <label
    role="radio"
    :class="`locale-radio ${localeInfo.selected ? 'selected' : ''}`.trim()"
  >
    <i :class="`flag-icons ${localeInfo.flag}`"></i>
    <input
      type="radio"
      class="icon-button"
      name="locale"
      :value="localeInfo.locale"
      v-model="localeInfo.selected"
      @click="onClick"
    />
  </label>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { i18n } from '@/plugins/i18n-wrapper'
  import { IAvailableLocaleInfo } from '@/models/localization/IAvailableLocaleInfo'

  @Component
  export default class LocaleFlagRadio extends Vue {
    @Prop({ default: {} }) localeInfo!: IAvailableLocaleInfo

    private onClick() {
      this.$emit('clicked', this.localeInfo)
    }
  }
</script>
