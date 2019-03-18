<template>
  <div id="list">
    <div class="container">
      <input type="text" class="form-control" v-model="search" placeholder="Search..."/>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Prefecture</th>
            <th scope="col">Address</th>
            <th scope="col">Comment</th>
            <th scope="col">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredList">
            <td>{{ item.prefecture }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.comment }}</td>
            <td>
              <button type="button" @click="deleteItem(index)" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </td>
          </tr>    
        </tbody>
      </table>

      <button type="button" class="btn btn-primary" @click='toggle(); toggleText()'>{{ isOpenText }}</button>

      <div v-show="isOpen">
        <form @submit.prevent="processForm" class="form-styles">
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" v-model="form.prefecture" name="prefecture" placeholder="Prefecture">
            </div>
            <div class="col">
              <input type="text" class="form-control" v-model="form.address" name="address" placeholder="Address">
            </div>
            <div class="col">
              <input type="text" class="form-control" v-model="form.comment" name="comment" placeholder="Comment">
            </div>
            <div class="col">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
          </div>
        </form>  
      </div>
    </div>
  </div>
</template>

<script>

import { toggle } from './mixins/toggle';

export default {
  name: 'Upload',
  mixins: [toggle],
  props: ['importedData'],
  data() {
    return {
      search: '',
      data: this.importedData,
      isOpenText: "Add element",
      form: {
        prefecture: '',
        address: '',
        comment: ''
      }
    }
  },
  methods: {
    processForm: function() {
       this.data.push(this.form);
       this.form = {};
       this.isOpen = false;
    },
    deleteItem: function(item) {
      this.data.splice(item, 1);
    },
    toggleText: function(){
      this.isOpenText = this.isOpen ? 'Close add element' : 'Add element';
    }
  },
  computed: {
    filteredList() {
      return this.data.filter(item => {
        return item.comment.includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>
  .form-styles {
    margin: 20px 0;
  }
</style>
