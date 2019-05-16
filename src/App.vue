<script>
import Index from './pages/Index'

export default {
  name: 'App',
  components: {
    Index
  },
  data () {
    return {
      options: {
        anchors: ['page1']
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Index />
    </full-page>
  </div>
</template>
