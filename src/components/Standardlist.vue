<template>
    <div>
        <div class="container">
            <h2>Standard list</h2>
        </div>
        <List v-if='importedData' :importedData="importedData" />
    </div>
</template>
<script>
    import List from './List.vue';
    import axios from 'axios';

    export default {
        name: 'standardlist',
        data() {
            return {
                importedData: ""
            };
        },
        mounted () {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const result = [];

                response.data.map(function(line) {  
                    const array = {
                        prefecture: line.id,
                        address: line.title,
                        comment: line.body
                    };
            
                    result.push(array);
                });

                this.importedData = result
            })
        },
        components: {
            List
        }
    }
</script>