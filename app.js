import {gestureDetectorComponent, playVideoComponent} from './components.js'

console.log(5)
AFRAME.registerComponent('play-video-component', playVideoComponent)
AFRAME.registerComponent('gesture-detector', gestureDetectorComponent)

console.log(22)