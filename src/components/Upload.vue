<template>
  <div id="upload">
    <div class="container">
      <div class="panel">
        <div class="panel-body">
          <div class="form-group">
            <label for="file" class="control-label">CSV file to import</label>
            <input type="file" class="form-control-file" id="file" @change="handleFileUpload"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NProgress from 'nprogress'

export default {
  name: 'Upload',
  components: {

  },
  data() {
    return {
      csv_data: []
    }
  },
  methods: {
    parseCSV(csv) {
      const lines = csv.split("\n");
      const result = [];
      
      lines.map(function(line, indexLine) {  
        const currentLine = line.split(",");
        const array = {
          prefecture: currentLine[6],
          address: currentLine[7],
          comment: currentLine[8]
        };
      
        result.push(array);
      });

      result.pop();

      this.$emit("csvData", result);
    },
    handleFileUpload(ev) {
      var vm = this;
      const file = ev.target.files[0];
      const reader = new FileReader();
      NProgress.start();

      reader.readAsText(file);      
      reader.onload = function(e) {
        const csv = e.target.result;
        const parsed_csv = vm.parseCSV(csv);
      };
      reader.onloadend = function(ev) {
        NProgress.done();
      }
    },
  }
}
</script>

<style scoped>

</style>
