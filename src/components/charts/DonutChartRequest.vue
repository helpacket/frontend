<template>
    <vc-donut
            :size="150" unit="px" :thickness="10"
            :sections="sections" :total="100"
    >
        <h1>92%</h1>
    </vc-donut>
</template>

<script>
    export default {
        name: "DonutChartRequest",
        data() {
            return {
                sections: [
                    { label: 'Red section', value: 92, color: '#B1002D' },
                ]
            };
        }
    };
</script>

<style scoped>

</style>