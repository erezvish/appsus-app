<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>Form Sample</h1>

    <form>
    <p style="white-space: pre">{{ message }}</p>
    <textarea autofocus v-model="message" placeholder="add multiple lines"></textarea>
<br/>
    <input type="checkbox" value="Jack" v-model="checkedNames" />  Jack
    <input type="checkbox" value="John" v-model="checkedNames" /> John
<br/>
    <input type="radio" value="One" v-model="picked"> One
    <input type="radio" value="Two" v-model="picked"> Two
<br/>
    <select tabindex="19" v-model="selectedLetter" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
<br/>
    <select v-model="selected">
      <!-- inline object literal -->
      <option :value="{ name: 'Englnad' }">en</option>
      <option :value="{ name: 'Israel' }">il</option>
    </select>
<br/>


<br />



    <button type="submit" @click="save">Save</button>

    </form>

  </div>
</template>

<script>

import {eventBus} from '@/services/bus.service.js'


export default {
  name: 'hello',
  data() {
    return {
      age: 5,
      message : 'Hi!',
      checkedNames: [],
      picked: null,
      selected: null,
      selectedLetter: []

    }
  },
  methods: {
    save() {
      console.log(this.$data);
      eventBus.$emit('saved', this.$data);
    }
  }
}
</script>

<style scoped>

</style>
