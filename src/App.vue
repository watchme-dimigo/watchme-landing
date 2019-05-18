<script>
import Index from './pages/Index'
import ClosedEye from './pages/ClosedEye'
import PupilTrack from './pages/PupilTrack'
import Programs from './pages/Programs'
import Team from './pages/Team'

export default {
  name: 'App',
  components: {
    Index,
    ClosedEye,
    PupilTrack,
    Programs,
    Team
  },
  data () {
    return {
      options: {
        anchors: ['downloads', 'tech1', 'tech2', 'tech3', 'team']
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Index />
      <ClosedEye />
      <PupilTrack />
      <Programs />
      <Team />
    </full-page>
  </div>
</template>
