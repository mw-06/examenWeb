<template>
  <div class="tabla">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>

export default {
  name: "Tabla",
  props: {
      items: Array,
      fields: Array
  },
};
</script>