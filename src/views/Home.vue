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
      <contentCard
        style="height: 300px;margin-bottom: 4em;"
      >Large card wrapper for larger pieces of content</contentCard>
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
                <i class="uil uil-github"></i>
                <span class="buttText">Github</span>
              </b-btn>
              <b-btn class="neutral">
                <i class="uil uil-google" style="color: #DB4437;"></i>
                <span class="buttText">Google</span>
              </b-btn>
              <br>
              <br>
              <p>Secondary Buttons</p>
              <p
                class="small"
                style="font-weight: 700; color: #aaa7c0; text-transform: uppercase;"
              >Note: possibility of theming secondary buttons based on Podcast 'color'? Also affects the default subscribe button.</p>
              <b-btn class="neutral dark-bg">
                <i class="uil uil-github"></i>
                <span class="buttText">Github</span>
              </b-btn>
              <b-btn class="neutral dark-bg">
                <i class="uil uil-google" style="color: #DB4437;"></i>
                <span class="buttText">Google</span>
              </b-btn>
              <br>
              <br>
              <p>Subscription Buttons</p>
              <b-btn class="neutral dark-bg specialty">
                <i class="uil uil-heart-medical"></i>
                <span class="buttText">Subscribe</span>
              </b-btn>
              <b-btn class="neutral subscribed specialty">
                <i class="uil uil-heart"></i>
                <span class="buttText">Subscribed</span>
              </b-btn>

              <b-btn class="neutral bg-warn unsubscribe specialty">
                <i class="uil uil-times"></i>
                <span class="buttText">Unsubscribe</span>
              </b-btn>
              <br>
              <br>
              <p>Functional/Optional Buttons</p>
              <b-row>
                <b-col>
                  <b-btn class="neutral patreon specialty">
                    <img class="uil" src="../assets/patreon.svg">
                    <span class="buttText">Become a patron</span>
                  </b-btn>
                </b-col>

                <b-col>
                  <p
                    class="small"
                    style="font-weight: 700; color: #aaa7c0; text-transform: uppercase;"
                  >Note: Use the Patreon button to link directly to the Patreon page for the podcast</p>
                  <!-- Allowing direct links to podcasts allowing for people to quickly go support their favourite creators. Plan on adding more for any other creation support services as podcasts get flagged as having them. So far, this would be a manual process but there would be a possibility of automatically flagging those with Patreons somehow. -->
                </b-col>
              </b-row>
              <br>
              <b-row>
                <b-col>
                  <b-btn class="neutral website specialty">
                    <i class="uil uil-globe"></i>
                    <span class="buttText">Go to website</span>
                  </b-btn>
                </b-col>

                <b-col>
                  <p
                    class="small"
                    style="font-weight: 700; color: #aaa7c0; text-transform: uppercase;"
                  >Note: Used for direct linking to the podcast's website</p>
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
          </b-row>-->
        </b-col>
      </b-row>
      <br>
      <br>
      <b-row>
        <b-col>
          <p>
            <strong>Modals</strong>
          </p>

          <SweetModal
            modal-theme="dark"
            overlay-theme="dark"
            icon="success"
            ref="test"
          >This is a success!</SweetModal>
          <SweetModal
            modal-theme="light"
            overlay-theme="light"
            icon="success"
            ref="light"
          >This is a success!</SweetModal>
          <SweetModal modal-theme="light" overlay-theme="light" icon="error" ref="error">Error</SweetModal>
          <br>
          <br>

          <b-btn class="neutral dark-bg" @click="openModal('test')">
            <span class="buttText">Open Dark Modal</span>
          </b-btn>

          <b-btn class="neutral" @click="openModal('light')">
            <span class="buttText">Open Light Modal</span>
          </b-btn>
          <b-btn class="neutral bg-warn" @click="openModal('error')">
            <span class="buttText">Open Error Modal</span>
          </b-btn>
          <br>
          <br>

          <p>
            <strong>Images</strong>
          </p>
          <br>
          <p>Square-ish Images</p>
          <b-img class="shadows" rounded src="https://placeimg.com/200/200/nature"/>
          <br>
          <br>
          <p>Rounded Images</p>
          <b-img class="shadows" rounded="circle" src="https://placeimg.com/200/200/animals"/>
          <br>
          <br>
          <p>
            <strong>Media Buttons</strong>
          </p>
          <p>Button for episode list</p>
          <i class="uil uil-play-circle" style="font-size: 2em;"></i> &nbsp; &nbsp;
          <i class="uil uil-pause-circle" style="font-size: 2em;"></i>
          <br>
          <br>
          <p>Media controls for audio player</p>
          <span style="font-size: 2em">
            <i class="uil uil-backward"></i>
            <i class="uil uil-play" style="font-size: 1.2em;"></i>
            <i class="uil uil-pause" style="font-size: 1.2em;"></i>
            <i class="uil uil-forward"></i>
          </span>
          <br>
          <br>
          <p>Show notes</p>
          <i class="uil uil-notes" style="font-size: 1.2em;"></i>
          <span class="small" style="font-weight: 700; text-transform: uppercase;">Episode notes</span>
          <br>
          <br>
        </b-col>
      </b-row>
      <br>
      <br>
      <br>
      <br>
      <b-row>
        <b-col>
          <h1>Molecules</h1>
          <p>More complex items, usually built up from atoms or otherwise more complex.</p>
          <br>
          <p>
            <strong>Search Results</strong>
          </p>
          <b-row>
            <b-col sm="12" md="6">
              <searchResult title="The Dollop with Dave Anthony and Gareth Reynolds" author="Dave Anthony and Gareth Reynolds" image="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/4a/39/bf/4a39bf3f-2d4d-52a1-4266-4a1e7b0ec723/source/600x600bb.jpg"/>
            </b-col>
            <b-col sm="12" md="6">
              <searchResult title="The Film Reroll" author="Reroll Radio" image="https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/77/d0/37/77d037c6-b87f-9ca7-478a-a78ee5327eec/source/600x600bb.jpg"/>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <br>
      <br>

      <b-row>
        <b-col>
          <p>
            <strong>Subscribed Items</strong>
          </p>
          <br><br>
          
          <podcast image="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/4a/39/bf/4a39bf3f-2d4d-52a1-4266-4a1e7b0ec723/source/600x600bb.jpg"/>
          <podcast image="https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/77/d0/37/77d037c6-b87f-9ca7-478a-a78ee5327eec/source/600x600bb.jpg"/>
          <podcast image="https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/99/40/e3/9940e3d8-0b8e-2d9c-b9c2-252a0927de00/source/600x600bb.jpg"/>
          <podcast image="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/a7/1a/18/a71a187e-6be3-6221-1757-267b1436ba43/source/600x600bb.jpg"/>
          <podcast image="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/e1/45/2b/e1452b0e-dac2-8013-e1c2-4fad4df787be/source/600x600bb.jpg"/>

          <br>
          <br>
          <p>
            <strong>Subscribed Item with new episodes</strong>
          </p>
          <podcast image="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/39/39/02/393902aa-2ccf-558d-6754-17f5dd9592ff/source/600x600bb.jpg" newEps="true"/>
        </b-col>
      </b-row>

      <br>
      <br>
      <p>Episode Listing</p>
      <br>
      <br>
  <contentCard>
      <episode title="383 - Frank Gardiner - Live w/Nick Cody" image="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/4a/39/bf/4a39bf3f-2d4d-52a1-4266-4a1e7b0ec723/source/600x600bb.jpg"/>
      <episode title="383 - Frank Gardiner - Live w/Nick Cody" image="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/4a/39/bf/4a39bf3f-2d4d-52a1-4266-4a1e7b0ec723/source/600x600bb.jpg"/>
      <episode title="383 - Frank Gardiner - Live w/Nick Cody" image="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/4a/39/bf/4a39bf3f-2d4d-52a1-4266-4a1e7b0ec723/source/600x600bb.jpg"/>
  </contentCard>
      <br><br>
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
          <br><br>
          <p>On Deck menu</p>
          <br>
          <br>
          <p>Audio Player</p>
          <br>
          <br>
          <p>Podcast Info Card</p>
          <br>

          <contentCard style="min-height: 300px;margin-bottom: 4em;">
            <div class="container">
                
              <div style="text-align: center; margin-top: -4em;">
               <p style="float: right; margin-top: 4em; font-weight: 700; color: #aaa7c0; text-transform: uppercase; padding-top: 12px;"
                class="small"><i class='uil uil-calender'></i> Every 2 Weeks</p>
                <b-img
                  class="shadows podProfile"
                  rounded="circle"
                  src="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/4a/39/bf/4a39bf3f-2d4d-52a1-4266-4a1e7b0ec723/source/600x600bb.jpg"
                  style="max-width: 200px"
                />
                 <div style="float: left; margin-top: 4em;">
                <b-badge pill class="category tags">Comedy</b-badge>
          <b-badge pill class="category tags">History</b-badge>
          </div>

              </div>
             
              <div style="text-align: center;">
                <br><br>
                <b-btn class="neutral subscribed specialty">
                <i class="uil uil-heart-medical"></i>
                <span class="buttText">Subscribed</span>
              </b-btn>

                <br>
                <br>
                <h2 class="podcastTitle">The Dollop</h2>
                <hr>
                <br>
                <p>Comedians Dave Anthony and Gareth Reynolds picks a subject from history and examine it.</p>
                <br>
                <br>
              </div>
            </div>
          </contentCard>
          <br>
        </b-col>
      </b-row>
    </div>

    <div class="footer" style="height: 400px;">
      <div class="container" style="padding-top: 2em;">
        <p>
          <strong>Footer</strong>
        </p>
      </div>
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
import SweetModal from "sweet-modal-vue/src/components/SweetModal.vue";
import episode from "@/components/episode";

export default {
  name: "home",
  components: {
    heroCard,
    calloutCard,
    contentCard,
    searchResult,
    podcast,
    SweetModal,
    episode
  },
  methods: {
    openModal(reference) {
      this.$refs[reference].open();
    }
  }
};
</script>
