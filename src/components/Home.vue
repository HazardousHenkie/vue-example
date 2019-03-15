<template>
    <div>
        <div class="container">
            <h2>CSV Import</h2>
        </div>

        <Upload @csvData="setCsvData" />
        
        <List v-if='importedData' :importedData="importedData" />
    </div>
</template>
<script>
    import Upload from './Upload.vue';
    import List from './List.vue';

    export default {
        name: 'home',
        data() {
            return {
            importedData: ""
            };
        },
        methods: {
            setCsvData(data) {
                this.importedData = data;
            }
        },
        components: {
            Upload,
            List
        }
        }
</script>