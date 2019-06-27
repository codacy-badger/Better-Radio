<template>
<a class="resultLink">
    <contentCard class="podCard subscribedPod">
          <div class="resultImage pod" :style="{ backgroundImage: 'url(' + image + ')' }">
             
                 <b-badge v-if="newEps == 'true'" pill class="category notify tags bg-warn" style="position: absolute;top: 6px;left: 85%;">7</b-badge>
        </div>
  </contentCard>
  </a>
</template>

<script>
import contentCard from "@/components/contentCard";

export default {
  props: ["newEps", "image", "title"],
  components: {
    contentCard
  }
};
</script>

<style>


.subscribedPod {
    display: inline-block;
    max-width: 200px;
    max-height: 200px;
    height: auto;
    margin: 1em;
}

.pod {
    width: 200px;
    height: 200px;
    border-radius: .25em;
}

.resultLink:active > .podCard {
    box-shadow: none !important;
    transform: translateY(1px);
}


</style>
