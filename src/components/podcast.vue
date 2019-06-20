<template>
<a class="resultLink">
    <contentCard class="podCard subscribedPod">
          <div class="resultImage pod">
              <img src="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/4a/39/bf/4a39bf3f-2d4d-52a1-4266-4a1e7b0ec723/source/600x600bb.jpg"/>
                 <b-badge v-if="newEps == 'true'" pill class="category notify tags bg-warn" style="position: absolute;top: 6px;left: 85%;">7</b-badge>
        </div>
  </contentCard>
  </a>
</template>

<script>
import contentCard from "@/components/contentCard";

export default {
  props: ["newEps"],
  components: {
    contentCard
  }
};
</script>

<style>
.notify {

}

.subscribedPod {
    display: inline-block;
    max-width: 200px;
    max-height: 200px;
    height: auto;
    margin: 1em;
}

.pod img {
    max-width: 200px;
    border-radius: .25em;
}

.resultLink:active > .podCard {
    box-shadow: none !important;
    transform: translateY(1px);
}


</style>
