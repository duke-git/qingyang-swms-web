<template>
    <Breadcrumb>
        <BreadcrumbItem 
            v-for="item in currentPath" 
            :href="item.path" 
            :key="item.name"
        >{{ itemTitle(item) }}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
export default {
    name: 'BreadcrumbNav',
    props: {
        currentPath: Array
    },
    methods: {
        itemTitle (item) {
            return item.title;
        }
    }
};
</script>

