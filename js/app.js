//url = "https://itunes.apple.com/au/rss/topaudiopodcasts/limit=6/json" //get the top 6 podcasts
Vue.use(Buefy.default);
//  @keyup.13.native="($root.search($root.searchTerm))"

Vue.component('subscriptions', {
  template: '<div class="subscribed"><div style="width: 100%">  \
  <div class="content">\
  <h4>Your Podcasts:</h4>\
  <div class="subscriptionDiv" v-if="arr.length > 0">\
  <br>\
  <a href="#!" class="playButt" v-on:click="clearPlaylist" style="padding-left: 1em;"><img src="./img/icons/svg/X_simple_1.svg"/> Clear Subscriptions</a>\
  <div v-for="pod in arr">\
  <a href="#!" class="playButt" v-on:click="$root.selectSubscribed(pod)">\
  <article class="media">\
  <figure class="media-left" style="margin-right: 0;">\
    <p class="image">\
    <div style="width:80px;height:80px;border-radius: 8px; background-size:100%;background-repeat:no-repeat;" v-bind:style="{ backgroundImage: \'url(\' + pod.artworkUrl600 + \')\' }">\
    </p>\
  </figure>\
  <div class="media-content">\
    <div class="content">\
      <p>\
      <strong class="author"> {{pod.collectionName}}</strong><br>\
        <strong> {{ pod.artistName }}</strong><br>\
    </div>\
  </div>\
</article>\
  </a>\
  </div>\
  </div>\
  \
  <div v-if="arr.length <= 0" style="padding: 3em;">\
  <p style="text-align: center;"><img width="50" src="./img/icons/svg/smile_sad_3.svg" /><br>\
  You have no subscriptions</p>\
  </div>\
  </div>',
  data: function () {
    return {
      arr: [],
    }
  },
  methods: {
    clearPlaylist() {
      this.arr = [];
      localStorage.subscriptions = [];
    }
  },
  mounted() {
    if (localStorage.subscriptions) {
      this.arr = JSON.parse(localStorage.subscriptions);

    }

    this.$root.$on('subscribe', () => {
      // console.log("Subscriptions updated"); -- turn this into a notification
      this.arr = JSON.parse(localStorage.subscriptions);
    })
  }
})



Vue.component('listening', {
  template: '<div class="listen"><div style="width: 100%">\
  <div class="content">\
  <h4>On Deck:</h4>\
  <div class="subscriptionDiv" v-if="arr.length > 0">\
  <br>\
  <a href="#!" class="playButt" v-on:click="clearPlaylist" style="padding-left: 1em;"><img src="./img/icons/svg/X_simple_1.svg"/> Clear Deck</a>\
  <div v-for="(episode,key) in arr">\
  <a href="#!" class="playButt" v-on:click="$root.loadEpisode(key,episode); $root.selected = episode;">\
  <article class="media">\
  <figure class="media-left" style="margin-right: 0;">\
    <p class="image">\
    <div style="width:80px;height:80px;border-radius: 8px; background-size:100%;background-repeat:no-repeat;" v-bind:style="{ backgroundImage: \'url(\' + episode.episodeImage + \')\' }">\
    </p>\
  </figure>\
  <div class="media-content">\
    <div class="content">\
      <p>\
      <strong class="author"> {{episode.topTitle}}</strong><br>\
        <strong> {{ episode.podTitle }}</strong><br>\
        <small>{{episode.timeLeft}}</small>\
    </div>\
  </div>\
</article>\
</a>\
</div>\
  </div>\
  <div v-if="arr.length <= 0" style="padding: 3em">\
  <p style="text-align: center;"><img width="50" src="./img/icons/svg/smile_meh_2.svg" /><br>\
  You have no episodes on deck</p>\
  </div>\
  </div>',
  data: function () {
    return {
      arr: [],
    }
  },
  methods: {
    clearPlaylist() {
      this.arr = [];
      localStorage.currentlyPlaying = [];
    }
  },
  mounted() {
    if (localStorage.currentlyPlaying) {
      this.arr = JSON.parse(localStorage.currentlyPlaying);

      //convert duration into seconds to compare amount of time left
      for (var i = 0; i < this.arr.length; i++) {
        var str = this.arr[i].duration;
        var p = str.split(':'),
          s = 0,
          m = 1;

        while (p.length > 0) {
          s += m * parseInt(p.pop(), 10);
          m *= 60;
        }
        var remaining = s - this.arr[i].progress;
        
        if (Math.floor(remaining / 60) <= 0) {
          this.arr[i].timeLeft = "Less than a minute remaining";
        } else {
          this.arr[i].timeLeft = "About " + Math.floor(remaining / 60) + " minutes remaining";
        }
      }
      //update localStorage with calculated values in arr
      localStorage.currentlyPlaying = JSON.stringify(this.arr);

      this.$root.$on('refresh',() => {
        //refresh the displayed list
        if (localStorage.currentlyPlaying) {
          this.arr = JSON.parse(localStorage.currentlyPlaying);
        }
      })

      this.$root.$on('episodeFinished', (episode) => {


        //localStorage gets updated on the finish event on the audio player. Update the array with localStorage deets
        this.arr = JSON.parse(localStorage.currentlyPlaying);


      });

      this.$root.$on('playerUpdate', (episode) => {

        //localStorage gets updated on the finish event on the audio player. Update the array with localStorage deets
        this.arr = JSON.parse(localStorage.currentlyPlaying);


        //update timestamps for live time updates
        for (var i = 0; i < this.arr.length; i++) {

          var str = this.arr[i].duration;
          var p = str.split(':'),
            s = 0,
            m = 1;

          while (p.length > 0) {
            s += m * parseInt(p.pop(), 10);
            m *= 60;
          }

          var remaining = s - this.arr[i].progress;
 
          if (Math.floor(remaining / 60) <= 0) {
            this.arr[i].timeLeft = "Less than a minute remaining";
          } else {
            this.arr[i].timeLeft = "About " + Math.floor(remaining / 60) + " minutes remaining";
          }
        }


      });

    }
  }

})


Vue.component('foot', {
  template: '<footer class="footer"><div class="container">\
  <div class="content has-text-centered">\
  <b-icon icon="headphones" size="is-small"></b-icon> Voices in your head</div>\
  </footer>'
})

Vue.component('navbar', {
  template: '<nav class="level"><div class="container findBar">\
        <a class="homeButt" href="index.html">\
            <b-icon icon="radio-tower" style="vertical-align:bottom;"></b-icon> <span> Better Radio</span>\
            </a>\
    </div>'
})

Vue.component('splash', {
  template: '<div class="heroSplash"><div class="container">\
  <a href="#" v-on:click="showConvo = !showConvo"><img src="img/icons/svg/question_cr.svg"/> Why \'Better Radio\'?</a><br><br>\
  \
\
  <div class="convo" v-if="showConvo">\
  <h2 class="convoHead">From FOFOP 193 - Gordon Ramsay\'s Kitchen M Nightmares</h2>\
    <div class="messages">\
      <div class="leftMess"><span class="avatar avatarLeft wil"></span> <span class="author">Wil</span> <p class="messageText">I do think -- and I have talked about this before -- I do think part of the reason podcasts haven\'t become as popular yet as they should be</p></div>\
      <div class="leftMess"><p class="messageText">because they should be more widespread because everybody has a device now they can listen easily to a podcast on right?, is the name \'podcasts\'</p></div>\
      \
      <div class="rightMess"><span class="avatar avatarRight gary"></span><span class="author authorRight">Gareth</span><p class="messageText">Yeah</p>  </div>\
      <div class="leftMess"><span class="avatar avatarLeft wil"></span> <span class="author">Wil</span> <p class="messageText">I think some people are like "I\'m not really a \'podcast person\'.</p></div>\
      <div class="rightMess"><span class="avatar avatarRight gary"></span><span class="author authorRight">Gareth</span><p class="messageText">Right. So you\'re saying we need a rebranding.</p>  </div>\
      <div class="leftMess"><span class="avatar avatarLeft wil"></span> <span class="author">Wil</span> <p class="messageText">Right yeah, we need a different name</p></div>\
      <div class="rightMess"><span class="avatar avatarRight gary"></span><span class="author authorRight">Gareth</span><p class="messageText">"Better Radio"</p>  </div>\
      <div class="leftMess"><p>[Wil spends some time laughing]</p></div>\
      <div class="rightMess"><p class="messageText">It seems to be--</p>  </div>\
      <div class="leftMess"><span class="avatar avatarLeft wil"></span> <span class="author">Wil</span> <p class="messageText">Have you listened to FOFOP? "What is it?" It\'s a <strong>better radio show</strong>.</p></div>\
      <div class="rightMess"><span class="avatar avatarRight gary"></span><span class="author authorRight">Gareth</span><p class="messageText">It\'s a better radio show? I never got into better radio, but it sounds good!</p>  </div>\
      <div class="leftMess"><span class="avatar avatarLeft wil"></span> <span class="author">Wil</span> <p class="messageText">There\'s something about better radio...</p></div>\
      <div class="rightMess"><span class="avatar avatarRight gary"></span><span class="author authorRight">Gareth</span><p class="messageText">I\'m not a podcast person, but better radio...</p>  </div>\
      <div class="leftMess"><span class="avatar avatarLeft wil"></span> <span class="author">Wil</span> <p class="messageText">I mean I like radio!</p></div>\
      <div class="rightMess"><span class="avatar avatarRight gary"></span><span class="author authorRight">Gareth</span><p class="messageText">I like radio! and this is better!</p>  </div>\
      <div class="leftMess"><span class="avatar avatarLeft wil"></span> <span class="author">Wil</span> <p class="messageText">I guess I <strong>would</strong> like better radio</p></div>\
    </div>\
  </div>\
\
  </br>\
  <span class="heroSearch"><b-field>\
            <b-input expanded placeholder="Search for a podcast" v-model="$root.searchTerm" @keyup.13.native="($root.search($root.searchTerm))"></b-input>\
            <p class="control"><button class="searchButt button is-primary" v-on:click="($root.search($root.searchTerm))">Search</button>\
                </p></b-field></div></span></div>',
        data: function (){
          return {
            showConvo: false
          }
        }
        })

Vue.component('results', {
  template: '<div><b-loading :active.sync="$root.isLoading" :is-full-page="false"></b-loading>\
  <h2 style="font-size: 1.6em" v-if="$root.shows">Results for <span style="color: #2A1E5C;"> {{ $root.searchTerm }}</span><br><br></h2>\
      <article class="media podResult searchResult" v-for="(item,key) in $root.results" v-if="$root.shows == true && $root.isLoading == false" v-on:click="$root.getXML(key, item.feedUrl)">\
        <figure class="media-left">\
          <p class="image">\
            <img v-bind:src=\"item.artworkUrl600\" style="max-width:100px; border-radius: 4px;">\
          </p>\
        </figure>\
        <div class="media-content" style="padding-top: 0">\
          <div class="content">\
            <p>\
              <strong><a href="#!"> {{ item.collectionName }}</a></strong><br> <small> {{ item.artistName }}</small>\
              <br><br>\
              <span v-for="genre in item.genres"> <b-tag rounded type=is-primary style="margin-right: 10px;font-weight:700"> {{ genre }} </b-tag></span>\
            </p>\
          </div>\
        </div>\
      </article>\
      <section class="section" style="padding-left: 0;padding-right: 0;" v-if="$root.episodes == true">\
      <div class="columns">\
      <div class="column is-one-quarter"><img v-bind:src="$root.results.artworkUrl600"/> </div>\
      <div class="column">\
      <h1 class="title"> {{ $root.results.collectionName }}<a href="#!" v-if="subscribed.includes($root.results.collectionName)" style="padding-left: 3em"><img src="./img/icons/svg/love_1_no.svg"/></a> <a style="padding-left: 3em" href="#!" v-else v-on:click=\"$root.subscribe($root.results)\"><img src="./img/icons/svg/love_1.svg"/></a></h1>\
      <h2 class="subtitle" style="margin-bottom:0;"> {{ $root.results.artistName }}</h2>\
      <small><a v-bind:href=\"$root.results.url\"> <b-icon icon="web" size="is-small"></b-icon> View Website </a> <a v-bind:href=\"$root.results.artistViewUrl\"><b-icon icon="itunes" size="is-small"></b-icon> View on iTunes</a></small><br><br>\
      <h3 v-html=\"$root.results.summary\"></h3><br>\
      <span v-for="genre in $root.results.genres"> <b-tag rounded type=is-primary style="margin-right: 10px;font-weight:700"> {{ genre }} </b-tag></span>\
      </div></div></section><br><br>\
      <article class="media podResult" :class="{playing:item == $root.selected}" v-for="(item,key) in $root.epResults" v-if="$root.episodes == true">\
        <figure class="media-left">\
          <p class="image">\
          <div style="width:120px;height:120px;border-radius: 4px; background-size:100%;background-repeat:no-repeat;" v-bind:style="{ backgroundImage: \'url(\' + item.episodeImage + \')\' }">\
          </p>\
        </figure>\
        <div class="media-content">\
          <div class="content">\
            <p>\
              <strong> {{ item.podTitle }}</strong><span style="float: right; padding-right: 2em;"><a href="#!" v-on:click="$root.addToPlaylist(key,item)"><img src="./img/icons/svg/card_1_add.svg"/> Add to playlist</span></a><br>\
              <small class="author"> {{ item.author }}</small><br>\
              <small class="pubDate">{{ item.pubDate }}</small></p>\
              \
              <a href="#!" class="playButt" v-on:click="$root.loadEpisode(key,item); $root.selected = item;"><span v-if="item == $root.selected"><button class="equalizer">\
   <span class="eq1" v-bind:class="{paused: $root.paused}"></span>\
   <span class="eq2" v-bind:class="{paused: $root.paused}"></span>\
   <span class="eq3" v-bind:class="{paused: $root.paused}"></span>\
</button></span> <span v-if="item != $root.selected"><b-icon icon="play-circle" size="is-small"></b-icon></span> Play this Episode</a>\
          </div>\
        </div>\
      </article>\
      </div>',
  //<p v-html="item.description"></p>
  data: function () {
    return {
      subscribed: []
    }
  },
  mounted() {
    this.refreshSubscriptionList();
    this.$root.$on("subscribe", () => {
      // console.log("subscribed to a new podcast, updating local array"); -- turn this into a notification
      this.refreshSubscriptionList();
    })
  },
  methods: {
    refreshSubscriptionList() {
      if (localStorage.subscriptions) {
        this.subscribed = []; //clear the subscription info
        //convert subscription list into just the names for rendering, full pod deets get used elsewhere
        var temp = JSON.parse(localStorage.subscriptions);
        for (var i = 0; i < temp.length; i++) {
          this.subscribed.push(temp[i].collectionName);
        }
      }
    }
  }

})

Vue.component('episode', {
  template: '<div><div class="episode" v-bind:class="{episodeShow: showPlayer,episodeShowNotes: showNotes}">\
  <a href="#!" v-on:click="togglePlayer()"><b-icon class="closeButton" icon="close"></b-icon></a>\
  <article class="media">\
  <figure class="media-left">\
  <p class="image">\
  <img v-bind:class="placeholder==true ? \'episodeImagePlayer\' : \'\'" v-bind:src=\"this.epData.episodeImage\" style="width:150px; padding: 30px;">\
  </p>\
  </figure>\
  <div class="media-content" style="padding: 1em">\
    <div class="content">\
      <p>\
      <strong style="color:white"> {{ this.epData.podTitle }}</strong><br>\
      <small class="author" style="color:white"> {{ this.epData.author }}</small><br>\
      <small class="pubDate" style="color:white">{{ this.epData.pubDate }}</small></p>\
      <a href="#!" v-on:click="showEpNotes()"><img class="notesIcon" src="./img/icons/svg/menu_1.svg"></img> Episode Notes</a>\
      <audio id="player" preload="none" ref="player" controls>\
        <source v-bind:src="this.epData.epUrl" type="audio/mp3">\
      </audio>\
  </div></div></article><br>\
  <div class="container">\
    <p class="notes" v-html="this.epData.description"></p>\
  </div>\
  \
  \
  </div><br>\
  \</div>',
  data: function () {
    return {
      epData: [],
      playingKey: 0,
      nextEp: [],
      showPlayer: true,
      playingList: [],
      index: 0,
      placeholder: false,
      showNotes: false
    }
  },
  methods: {
    togglePlayer() {
      this.showPlayer = !this.showPlayer;
      if (this.showNotes) {
        this.showNotes = false;
      }
    },
    showEpNotes() {
      console.log("show notes");
      this.showNotes = !this.showNotes;
    }
  },
  mounted() {
    console.log(this);
    if (this.epData.episodeImage == undefined || this.epData.episodeImage == null) {
      //set a placeholder image if there's no loaded ep image
      this.epData.episodeImage = "./img/icons/svg/smile_meh_3.svg";
      this.placeholder = true;
    } else {
      this.placeholder = false;
    }



    const player = new Plyr(this.$refs.player, {
      autoplay: false,
      resetOnEnd: true,
      controls: ['play', 'progress', 'current-time', 'mute', 'volume'],
      displayDuration: true,
      invertTime: false
    });
    
    
    
    this.$root.$on('loadEp', (data, key) => {
      this.placeholder = false;
      this.playingList = JSON.parse(localStorage.currentlyPlaying);
      this.playingKey = key;
      this.showPlayer = true;
      this.epData = data;
      player.source = {
        type: 'audio',
        sources: [{
          src: this.epData.epUrl,
          type: 'audio/mp3',
        }, ],
      };



      //grab localStorage vals
      var currentEpName = this.epData.podTitle;
      var found = false;

      for (var i = 0; i < this.playingList.length; i++) { //run through the playingList
        if (this.playingList[i].podTitle == currentEpName) { //find the currentEpisode
          found = true;
          this.epData.progress = this.playingList[i].progress; //update the progress to the emitted data item
          this.index = i;
          break;
        }
      }





      if (this.playingKey != 0) {
        this.nextEp = this.$root.epResults[this.playingKey - 1];
      }


      this.$nextTick(function () { //on DOM update
        var that = this;

        //play the episode and set the progress to the progress key
        if (this.epData.progress != 0) {
          player.currentTime = this.epData.progress;
        }
        player.play();


        //only do the following if the user-created playlist is empty.
        //look for the next episode -- TODO: update this with playing the next episode in the playlist,
        //build the playlist as each episode plays: start playing an episode and then start populating the next...2? episodes into an array, pre-load the episodes and do the fetches while the user is listening to their current episode. -- keep the playlist filled with the next two episodes


        player.on('ended', event => {
          // //removes the episode from the playlist in cache when the episode has ended
          this.playingList.shift();
          localStorage.currentlyPlaying = JSON.stringify(this.playingList);
          this.$root.$emit('episodeFinished', this.epData);
          this.$root.loadEpisode(0, this.playingList[0]);

        })
        player.on('pause', event => {
          this.$root.paused = true;
        })
        player.on('playing', event => {
          this.$root.paused = false;

        })
        player.on('timeupdate', event => {
          //set the currentTime to the progress variable in localStorage and push it through to cache.
          this.playingList[this.index].progress = player.currentTime;
          localStorage.currentlyPlaying = JSON.stringify(this.playingList);
          this.$root.$emit('playerUpdate', this.epData);

        })
      })
    })
  }
})

var instance = new Vue({
  el: '#app',
  data: {
    subscribed: [],
    selected: [],
    results: [],
    epResults: [],
    searchTerm: '',
    isLoading: false,
    shows: false,
    episodes: false,
    paused: false
  },
  mounted() {
    if (localStorage.currentlyPlaying) {
      console.log(JSON.parse(localStorage.currentlyPlaying)); //get the localStorage subscriptions
    }
  },
  methods: {
    addToPlaylist(key,data){
      if(this.selected.podTitle != data.podTitle){
        var playingList = []; //set array locally
    
        //grab existing playList
        if (localStorage.currentlyPlaying) {
          playingList = JSON.parse(localStorage.currentlyPlaying);
        }
  
        //Loop through the saved progress eps to find 
        var currentEpName = data.podTitle;
        var found = false;
        var index = -1;
        for (var i = 0; i < playingList.length; i++) {
          if (playingList[i].podTitle == currentEpName) {
            found = true;
            //don't do anything -- we don't want to do anything if the episode is already there
          }
        }
  
        if (found == false) {
          //push the new episode in if it isn't already in the playlist
          playingList.push(data);
        }
  
        //add to an array in localStorage here?
        //stringify and push to localStorage
        localStorage.currentlyPlaying = JSON.stringify(playingList);
       this.$root.$emit('refresh');
      } else {
        console.error("You're already playing this episode dumbshit");
      }
    },
    loadEpisode(key, data) {

      if(this.selected.podTitle != data.podTitle){
      var playingList = []; //set array locally


      //grab existing playList
      if (localStorage.currentlyPlaying) {
        playingList = JSON.parse(localStorage.currentlyPlaying);
      }

      //Loop through the saved progress eps to find 
      var currentEpName = data.podTitle;
      var found = false;
      var index = -1;
      for (var i = 0; i < playingList.length; i++) {
        if (playingList[i].podTitle == currentEpName) {
          found = true;
          data.progress = playingList[i].progress; //update the progress to the emitted data item
          index = i;
          var shiftEpisode = playingList[i];
          playingList.splice(i,1);
          //unshift the found currentlyPlaying value to the top of the array
          playingList.unshift(shiftEpisode);
        }
      }

      if (found == false) {
        //push the new episode in if it isn't already in the playlist
        playingList.unshift(data);
      }

      //add to an array in localStorage here?
      //stringify and push to localStorage
      localStorage.currentlyPlaying = JSON.stringify(playingList);
      this.$root.$emit('loadEp', data, key); //fire event to load the episode for the audioPlayer component to catch
    } else {
      console.error("You're already playing this episode dumbshit");
    }
  },
    subscribe(podcast) {
      var subscriptionList = []; //set array locally


      //grab existing playList
      if (localStorage.subscriptions) {
        subscriptionList = JSON.parse(localStorage.subscriptions);
      }

      //Loop through the saved progress eps to find 
      var currentName = podcast.collectionName;
      var found = false;
      for (var i = 0; i < subscriptionList.length; i++) {
        if (subscriptionList[i].collectionName == currentName) {
          found = true;
          //don't do anything here? It already exists, so don't subscribe? 
          // maybe add a global array holding subscriptions from localStorage so that we can show and hide the button(s) as needed
        }
      }

      if (found == false) {
        //push the new episode in if it isn't already in the playlist
        subscriptionList.unshift(podcast);
        this.subscribed.unshift(podcast);
      }

      //add to an array in localStorage here?
      //stringify and push to localStorage
      localStorage.subscriptions = JSON.stringify(subscriptionList);
      this.$root.$emit('subscribe');
    },
    search(term) {
      this.episodes = false;
      this.isLoading = true;
      this.shows = true;
      axios.get("https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + term + "&media=podcast&limit=10").then(response => {
        this.isLoading = false;
        this.results = response.data.results
      })
    },
    selectSubscribed(podcast) {
      this.results = [];
      this.results.push(podcast);
      this.getXML(0, podcast.feedUrl);
    },
    getXML(id, feed) {
      var chosenPod = this.results[id];
      this.results = chosenPod;
      this.isLoading = true;
      feed = "https://cors-anywhere.herokuapp.com/" + feed;
      axios.get(feed).then(response => {
        var xml = response.request.responseXML;
        console.log(xml);
        //get higher-level deets - website, summary/description, etc
        this.results.summary = xml.getElementsByTagName("itunes\:summary")[0].textContent;
        this.results.url = xml.getElementsByTagName("link")[0].textContent;

        //fill array with episode deets
        var items = xml.getElementsByTagName("item");
        var arr = [];
        for (var j = 0; j < items.length; j++) {
          var nodes = items[j].childNodes;
          var podTitle, description, author, episodeImage, pubDate, epUrl, epDuration;
          for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeType == 1) {
              if (nodes[i].nodeName == "title") {
                podTitle = nodes[i].textContent;
              } else if (nodes[i].nodeName == "description") {
                description = nodes[i].textContent;
                description = description.replace(/<p>&nbsp;<\/p>/gi, '');
              } else if (nodes[i].nodeName == "itunes\:image") {
                episodeImage = nodes[i].attributes[0].value;

              } else if (nodes[i].nodeName == "pubDate") {
                pubDate = nodes[i].textContent;
                pubDate = pubDate.substr(0, pubDate.length - 15);
              } else if (nodes[i].nodeName == "enclosure") {
                epUrl = nodes[i].getAttribute("url");
              } else if (nodes[i].nodeName == "itunes\:duration") {
                epDuration = nodes[i].textContent;
              }
              
            }
          }
          //if no episode image is found, use the podcast image
          //also a fix for 'The Dollop' podcast episode images not being suitable for use in this UI
          if (episodeImage == undefined || this.results.collectionName == "The Dollop with Dave Anthony and Gareth Reynolds") {
            episodeImage = this.results.artworkUrl600; //use the podcast pic
          }
          //create an array of all the deets for the title, desc, ep image, date, etc. and push that into a larger array (arr) creating an array of all the episodes. This array could theoretically then be used as an entire playlist. Get the point at which you start playing the podcast, invert the array so you automatically play the next (newer) episode after the current one.
          var obj = {
            "topTitle": this.results.collectionName,
            "podTitle": podTitle,
            "description": description,
            "author": this.results.artistName,
            "episodeImage": episodeImage,
            "pubDate": pubDate,
            "epUrl": epUrl,
            "progress": 0,
            "duration": epDuration
          };
          arr.push(obj);
        }
        this.epResults = arr;
        this.shows = false;
        this.episodes = true;
        this.isLoading = false;
      })
    }
  }
})