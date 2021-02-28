<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />

    <div id="q-app">
      <div class="q-ma-md">
        <q-input color="primary" standout value="Normal Standout" />
      </div>
      <div class="q-ma-md custom">
        <q-input color="primary" standout value="Custom Standout" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
<style lang="scss">
.custom .q-field--standout.q-field--focused .q-field__control {
  background-color: rgba(93, 0, 0, 0.05);
}
.custom .q-field--standout.q-field--focused {
  .q-field__prepend,
  .q-field__native {
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
