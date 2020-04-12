<template>
    <vc-donut
            :size="150" unit="px" :thickness="10"
            :sections="sections" :total="100"
    >
        <h1>83%</h1>
    </vc-donut>
</template>

<script>
    export default {
        name: "DonutChartSupply",
        data() {
            return {
                sections: [
                    { label: 'Red section', value: 83, color: '#447269' },
                ]
            };
        }
    };
</script>

<style scoped>

</style>