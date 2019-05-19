
<template>
    <div class="unix">
        <init></init>
    </div>
</template>

<script>
  import init from '../components/init'
  export default {
    name: 'init2',
    components: { init },
    data: function () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
    .unix {
        background-color: #00263c;
        min-height: 100vh;
    }
</style>
