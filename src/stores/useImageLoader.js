// useCounter.js
import { ref } from "vue";

export default function () {
  const isLoaded = ref(false);
  function loadImage() {
    isLoaded.value = true
    console.log('image loaded = ' + isLoaded.value)
}
  return {
    isLoaded,
    loadImage
  }
}