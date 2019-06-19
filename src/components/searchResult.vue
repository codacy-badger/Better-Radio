<template>
<a class="resultLink" href="#!">
  <contentCard class="podCard">
    <b-row>
      <b-col sm="4">
        <div
          class="resultImage"
          style="background-image: url('https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/4a/39/bf/4a39bf3f-2d4d-52a1-4266-4a1e7b0ec723/source/600x600bb.jpg')"
        ></div>
      </b-col>

      <b-col sm="8" class="podCol">
        <div style="padding: 1em;">
          <span class="podTitle">The Dollop with Dave Anthony and Gareth Reynolds</span>
          <br>
          <span class="author">Dave Anthony and Gareth Reynolds</span>
          <br>
          <b-badge pill class="category tags">Comedy</b-badge>
          <b-badge pill class="category tags">History</b-badge>
        </div>
      </b-col>
    </b-row>
  </contentCard>
</a>
</template>

<script>
import contentCard from "@/components/contentCard";

export default {
  props: ["title", "author", "categories"],
  components: {
    contentCard
  }
};
</script>

<style>
.podCard > .cardItems {
  padding: 0 !important;
}

.podCard {
    margin-bottom: 1em;
    min-height: 3em;
    transition: 0.2s ease;
}

.podCard:hover {
    transform: translateY(-2px);
}

.podCol {
  margin-left: -2em;
}

.resultImage {
  min-height: 100%;
  width: 100%;
  background-size: contain;
  border-radius: 0.25rem 0 0 0.25rem;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 574px) {
  .resultImage {
    min-height: 150px;
    background-size: cover;
  }

  .podCol {
    margin-left: 1em;
  }

  .podCard {
    width: 80%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    height: 22em;
    margin-bottom: 2em;
  }
}

@media only screen and (max-width: 345px) {
    .podCard {
        width: 100%;
    }
}

.podTitle {
  color: #172b4d;
}

.author {
  color: #aaa7c0;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;
}

.resultLink:active > .podCard {
    box-shadow: none !important;
    transform: translateY(1px);
}

.resultLink:hover {
    text-decoration: none;
}

</style>
