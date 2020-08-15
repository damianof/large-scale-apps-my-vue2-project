<template>
  <div id="app">
    <h1>{{ $t('welcome') }}</h1>
    <LocaleSelector
      :availableLocales="availableLocales"
      @clicked="onLocaleClicked"
    />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'
  import {
    MutationType,
    IRootState,
    RootStore,
    ILocalesState
  } from '@/models/store'
  import { IAvailableLocaleInfo } from '@/models/localization/IAvailableLocaleInfo'
  import LocaleSelector from '@/components/locale-selector/LocaleSelector.component.vue'

  @Component({
    components: {
      LocaleSelector
    },
    computed: {
      ...mapState<IRootState>({
        localesState: (store: RootStore<IRootState>) => store.localesState
      })
    }
  })
  export default class App extends Vue {
    private localesState!: ILocalesState // this is assigned by mapState
    private get availableLocales(): IAvailableLocaleInfo[] {
      return this.localesState.availableLocales
    }

    private onLocaleClicked(localeInfo: IAvailableLocaleInfo) {
      this.$store.dispatch(
        `localesState/${MutationType.locales.selectLocale}`,
        localeInfo
      )
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
