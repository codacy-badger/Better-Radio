<template>
  <div class="home container">
    <b-row>
      <b-col>
        <p>
          <strong>Featured Content Card</strong>
        </p>
        <heroCard
          title="AAA"
          content="ABC"
          image="https://demos.creative-tim.com/argon-design-system/assets/img/theme/img-1-1200x1000.jpg"
        />
      </b-col>
      <b-col>
        <b-row>
          <b-col>
            <p>
              <strong>Buttons</strong>
            </p>
            <b-btn class="neutral">
              <i class="uil uil-github"></i> Github
            </b-btn>
            <b-btn class="neutral">
              <i class="uil uil-google" style="color: #4285F4;"></i> Google
            </b-btn>
          </b-col>
        </b-row>
        
      </b-col>
    </b-row>
  <br/><br/>
    <b-row>
          <b-col>
            <p><strong>Callout Card</strong></p>
            <calloutCard/>
          </b-col>
        </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import heroCard from "@/components/heroCard";
import calloutCard from "@/components/calloutCard";

export default {
  name: "home",
  components: {
    heroCard,
    calloutCard
  }
};
</script>
