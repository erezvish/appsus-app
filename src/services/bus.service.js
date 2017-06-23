import Vue from 'vue'

export const eventBus = new Vue();


eventBus.$on('saved', data => {
  console.log('Subscriber got ', data);
})

eventBus.$on('saved', data => {
  console.log('Subscriber3 got ', data);
})
