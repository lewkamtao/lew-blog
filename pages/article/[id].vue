<script setup>
const route = useRoute();
const id = ref(route.params.id);
</script>

<template>
  <div>
    {{ id }}
  </div>
</template> 
