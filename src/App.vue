<script>
import Advice from './components/Advice.vue';

export default {
  components: {
    Advice: Advice,
  },
  // ...
};
</script>

<template>
  <div
    class="bg-dark min-h-screen pt-[120px] pb-[200px] sm:pt-0 sm:pb-0 sm:grid sm:place-content-center"
  >
    <Advice />
  </div>
</template>
