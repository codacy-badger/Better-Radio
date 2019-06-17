<template>
  <div class="home">
    <div class="container">
      <b-row>
        <b-col>
          <p>
            <strong>Hero</strong>
          </p>
        </b-col>
      </b-row>

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
          <calloutCard calloutType="primary"/>
          <br>
          <br>

          <p>
            Secondary
            <code>dark-bg</code>
          </p>
          <calloutCard calloutType="dark-bg"/>
          <br>
          <br>

          <p>
            Alert
            <code>bg-warn</code>
          </p>
          <calloutCard calloutType="bg-warn"/>
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
              <div class="card contentCard shadows-static">
                  <div class="row align-items-center">
                      <img src="https://demos.creative-tim.com/argon-design-system/assets/img/theme/img-1-1200x1000.jpg">
                    <div class="col-lg-8">
                      <h3>Lead Text</h3>
                      <p>Content</p>
                    </div>
                </div>
              </div>
            </b-col>

            <b-col></b-col>

            <b-col></b-col>
          </b-row>
        </b-col>
      </b-row>

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

export default {
  name: "home",
  components: {
    heroCard,
    calloutCard
  }
};
</script>
