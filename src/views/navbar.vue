
<template>
  <div class="unix">
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from "../components/navbar";
export default {
  name: "navbar3",
  components: { navbar },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.unix {
  background-color: #ffffff;
  min-height: 100vh;
}
</style>
