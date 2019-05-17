<script>
import Index from './pages/Index'
import Team from './pages/Team'

export default {
  name: 'App',
  components: {
    Index,
    Team
  },
  data () {
    return {
      options: {
        anchors: ['downloads', 'team']
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Index />
      <Team />
    </full-page>
  </div>
</template>
