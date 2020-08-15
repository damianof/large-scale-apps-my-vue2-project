declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare interface process {
  env: {
    VUE_APP_TOKEN_KEY: string
    VUE_APP_API_CLIENT: string
  }
}
