<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar-style">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">CSV list</router-link>
          </li>
          <li class="nav-item">
             <router-link to="/normal-list" class="nav-link">Normal list</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import Upload from './components/Upload.vue';
import List from './components/List.vue';

export default {
  name: 'app',
  data() {
    return {
      importedCsvData: ""
    };
  },
  methods: {
    setCsvData(data) {
      this.importedCsvData = data;
    }
  },
  components: {
    Upload,
    List
  }
}
</script>


<style scoped>
  .custom-navbar-style {
    margin: 0 0 20px 0;
  }
</style>