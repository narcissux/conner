<template>
  <span><slot></slot></span>
</template>

<script>
export default {
  name: "Primary"
};
</script>

<style lang="scss" scoped>
$primary: #663399;
span {
  color: $primary;
  cursor: default;
  align: left;
}
</style>
