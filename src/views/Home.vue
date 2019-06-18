<template>
  <div class="home">
    <div class="container">
      <b-row>
        <b-col>
          <p>
            <strong>Hero</strong>
            <div class="skewed-hero gradient-default" style="height: 400px; margin-bottom: 10em;">

              </div>
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <p>
            <strong>Featured Content Card</strong>
          </p>
          <heroCard
            image="https://demos.creative-tim.com/argon-design-system/assets/img/theme/img-1-1200x1000.jpg"
          >
          <h4>Featured Content</h4>
          <p>This card is used for featured or hero content</p>
          </heroCard>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <p>
                <strong>Buttons</strong>
              </p>
              <p>Primary Buttons</p>
              <b-btn class="neutral">
                <i class="uil uil-github"></i> Github
              </b-btn>
              <b-btn class="neutral">
                <i class="uil uil-google" style="color: #DB4437;"></i> Google
              </b-btn>
              <br>
              <br>
              <p>Secondary Buttons</p>
              <b-btn class="neutral dark-bg">
                <i class="uil uil-github"></i> Github
              </b-btn>
              <b-btn class="neutral dark-bg">
                <i class="uil uil-google" style="color: #DB4437;"></i> Google
              </b-btn>
              <br><br>
               <p>Specialty Buttons</p>
              <b-btn class="neutral subscribe specialty">
                <i class="uil uil-heart-medical"></i> Subscribe
              </b-btn>
              <b-btn class="neutral subscribed specialty">
                <i class="uil uil-heart"></i> Subscribed
              </b-btn>

              <b-btn class="neutral bg-warn unsubscribe specialty">
                <i class="uil uil-times"></i> Unsubscribe
              </b-btn>

              <br><br>
              <p><strong>Tags</strong></p>
              <b-badge pill class="category tags">Comedy</b-badge>
              <b-badge pill class="category tags">History</b-badge>
              <b-badge pill class="category tags">Movies</b-badge>
              <b-badge pill class="category tags">Gaming</b-badge>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <br>
      <br>
      <b-row>
        <b-col>
          <p>
            <strong>Callout Wide Card</strong>
          </p>
          <p>
            Primary
            <code>primary</code>
          </p>
          <calloutCard calloutType="primary">
            <div class="col-lg-8">
                <h3>Lead Text</h3>
                <p>Content</p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <b-btn class="neutral" size="lg">Call to action</b-btn>
              </div>
          </calloutCard>
          <br>
          <br>

          <p>
            Secondary
            <code>dark-bg</code>
          </p>
          <calloutCard calloutType="dark-bg">
            <div class="col-lg-8">
                <h3>Lead Text</h3>
                <p>Content</p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <b-btn class="neutral" size="lg">Call to action</b-btn>
              </div>
          </calloutCard>
          <br>
          <br>

          <p>
            Alert
            <code>bg-warn</code>
          </p>
          <calloutCard calloutType="bg-warn">
            <div class="col-lg-8">
                <h3>Lead Text</h3>
                <p>Content</p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <b-btn class="neutral" size="lg">Call to action</b-btn>
              </div>
          </calloutCard>
          <br>
          <br>

           <p>
            Info
            <code>gradient-default</code>
          </p>
          <calloutCard calloutType="gradient-default">
            <div class="col-lg-8">
                <h3>Lead Text</h3>
                <p>Content</p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <b-btn class="neutral" size="lg">Call to action</b-btn>
              </div>
          </calloutCard>
          <br>
          <br>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <p>
            <strong>Content Cards</strong>
          </p>

          <br>
          <b-row>
            <b-col>
              <contentCard>
                <p>Content card with slottable content</p>
              </contentCard>
            </b-col>

            <b-col>
              <contentCard dark="true">
                <p>Content card with slottable content</p>
              </contentCard>
            </b-col>

            <b-col>
              <contentCard>
                <p>Content card with slottable content</p>
              </contentCard>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
  <br><br>
      <b-row>
        <b-col>
          <p>
            <strong>Modal Types</strong>
          </p>
          <br>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import heroCard from "@/components/heroCard";
import calloutCard from "@/components/calloutCard";
import contentCard from "@/components/contentCard";

export default {
  name: "home",
  components: {
    heroCard,
    calloutCard,
    contentCard
  }
};
</script>
