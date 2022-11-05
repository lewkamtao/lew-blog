<script setup lang="ts">
const { $api } = useNuxtApp();
const res = await $api.get("/blogger", {});
const bloggerInfo = useBloggerInfo()
bloggerInfo.value = res.data

onMounted(() => {
    console.log(res);
});

</script>  
  
<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>