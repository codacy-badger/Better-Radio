<template>
  <div class="home">
        <div class="skewed-hero gradient-default" style="height: 400px;">
          <div class="container">
            <p>
              <strong>Hero</strong>
            </p>
            <h1>Atoms</h1>
            <p>Singular items that can fit together to build molecules, or otherwise standalone content</p>
          </div>
        </div>
    <div class="container">
        <contentCard style="height: 300px;margin-bottom: 4em;">Large card wrapper for larger pieces of content</contentCard>
      <b-row>
        <b-col>
          <p>
            <strong>Featured Content Card</strong>
          </p>
          <heroCard
            image="https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          >
            <h4>Featured Content</h4>
            <p>This card is used for featured or hero content</p>
          </heroCard>
              <br>
              <p>
                <strong>Tags</strong>
              </p>
              <b-badge pill class="category tags">Comedy</b-badge>
              <b-badge pill class="category tags">History</b-badge>
              <b-badge pill class="category tags">Movies</b-badge>
              <br>
              <br>
              <p>
                <strong>New Notification Spot</strong>
              </p>
              <b-badge pill class="category tags bg-warn">&nbsp;</b-badge>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <p>
                <strong>Buttons</strong>
              </p>
              <p>Primary Buttons</p>
              <b-btn class="neutral">
                <i class="uil uil-github"></i><span class="buttText"> Github</span>
              </b-btn>
              <b-btn class="neutral">
                <i class="uil uil-google" style="color: #DB4437;"></i> <span class="buttText">Google</span>
              </b-btn>
              <br>
              <br>
              <p>Secondary Buttons</p>
               <p class="small" style="font-weight: 700; color: #aaa7c0; text-transform: uppercase;">Note: possibility of themeing secondary buttons based on Podcast 'color'? Also affects the default subscribe button.</p>
              <b-btn class="neutral dark-bg">
                <i class="uil uil-github"></i> <span class="buttText">Github</span>
              </b-btn>
              <b-btn class="neutral dark-bg">
                <i class="uil uil-google" style="color: #DB4437;"></i><span class="buttText"> Google</span>
              </b-btn>
              <br>
              <br>
              <p>Subscription Buttons</p>
              <b-btn class="neutral dark-bg specialty">
                <i class="uil uil-heart-medical"></i> <span class="buttText">Subscribe</span>
              </b-btn>
              <b-btn class="neutral subscribed specialty">
                <i class="uil uil-heart"></i> <span class="buttText">Subscribed</span>
              </b-btn>

              <b-btn class="neutral bg-warn unsubscribe specialty">
                <i class="uil uil-times"></i> <span class="buttText">Unsubscribe</span>
              </b-btn>
              <br><br>
              <p>Functional/Optional Buttons</p>
              <b-row>
              <b-col>
              <b-btn class="neutral patreon specialty">
                
              <img class="uil" src="../assets/patreon.svg"/><span class="buttText">Become a patron</span>
              </b-btn>
              </b-col>

              <b-col>

              <p class="small" style="font-weight: 700; color: #aaa7c0; text-transform: uppercase;">Note: Use the Patreon button to link directly to the Patreon page for the podcast</p>
              <!-- Allowing direct links to podcasts allowing for people to quickly go support their favourite creators. Plan on adding more for any other creation support services as podcasts get flagged as having them. So far, this would be a manual process but there would be a possibility of automatically flagging those with Patreons somehow. -->
              </b-col>
              </b-row>
              <br>
              <b-row>
              <b-col>
              <b-btn class="neutral website specialty">
                
              <i class='uil uil-globe'></i><span class="buttText">Go to website</span>
              </b-btn>
              </b-col>

              <b-col>

              <p class="small" style="font-weight: 700; color: #aaa7c0; text-transform: uppercase;">Note: Used for direct linking to the podcast's website</p>
              </b-col>
              </b-row>
              <br>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <br>
      <br>

   

      <b-row>
        <b-col>
          <p>
            <strong>Card Wrappers</strong>
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
          <br>
          <br>
          <!-- <b-row>
            <b-col>
              <contentCard style="height: 600px;">Large card wrapper for larger pieces of content</contentCard>
            </b-col>
          </b-row> -->
        </b-col>
      </b-row>
      <br>
      <br>
      <b-row>
        <b-col>
          <p>
            <strong>Modals</strong>



          </p>


      <SweetModal modal-theme="dark" overlay-theme="dark" icon="success" ref="test">
	      This is a success!
      </SweetModal>
          <br><br>

          
          <b-btn class="neutral dark-bg">
                <span class="buttText" @click="openModal">Open Modal</span>
              </b-btn>
          <br><br>
          <p>
            <strong>Notifications</strong>
           
          </p>
           <b-btn class="neutral">
                <span class="buttText">Open Notification</span>
              </b-btn>
          <br><br>
          <p>
            <strong>Images</strong>
          </p>
          <br>
          <p>Square-ish Images</p>
          <b-img class="shadows" rounded src="https://placeimg.com/200/200/nature"/>
          <br><br>
          <p>Rounded Images</p>
          <b-img class="shadows" rounded="circle" src="https://placeimg.com/200/200/animals"/>
          <br><br>
          <p><strong>Media Buttons</strong></p>
          <p>Button for episode list</p>
            <i class='uil uil-play-circle' style="font-size: 2em;"></i> &nbsp; &nbsp; <i class='uil uil-pause-circle' style="font-size: 2em;"></i>
          <br><br>
          <p>Media controls for audio player</p>
          <span style="font-size: 2em"><i class='uil uil-backward'></i> <i class='uil uil-play' style="font-size: 1.2em;"></i><i class='uil uil-forward'></i></span>
          <p>Show notes</p>
            <i class='uil uil-notes' style="font-size: 1.2em;"></i>  <span class="small" style="font-weight: 700; text-transform: uppercase;">Episode notes</span>
          <br><br>
        </b-col>
      </b-row>
  <br><br><br><br>
         <b-row>
        <b-col>
          <h1>Molecules</h1>
          <p>More complex items, usually built up from atoms or otherwise more complex.</p>
           <p>
            <strong>Audio Player</strong>
          </p>
          <br>
          <p>
            <strong>Footer</strong>
          </p>
          <br>
          <p>
            <strong>Search Results</strong>
          </p>
          <b-row>
            <b-col sm="12" md="6">
              <searchResult/>
            </b-col>
            <b-col sm="12" md="6">
              <searchResult/>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
  <br><br>

   <b-row>
        <b-col>
          <p>
            <strong>Subscribed Items</strong>
          </p>
              <podcast/>
              <podcast/>
              <podcast/>
              <podcast/>
              <podcast/>
              <br><br>
              <p><strong>Subscribed Item with new episodes</strong></p>
              <podcast newEps='true' />
        </b-col>
      </b-row>

    <br><br>

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
          <p>Audio Player</p>
          <p>Podcast Info Card</p>
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
import searchResult from "@/components/searchResult";
import podcast from "@/components/podcast";
import SweetModal from 'sweet-modal-vue/src/components/SweetModal.vue'


export default {
  name: "home",
  components: {
    heroCard,
    calloutCard,
    contentCard,
    searchResult,
    podcast,
    SweetModal
  },
  methods: {
    openModal(){
      console.log("AAAA");
      this.$refs.test.open();
    }
  }
};
</script>
