
<template>
    <div class="unix">
        <load></load>
    </div>
</template>

<script>
import load from '../components/load'
export default {
  name: 'load2',
  components: { load },
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
