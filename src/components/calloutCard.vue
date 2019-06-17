/<template>
    <div class="card shadows-static" :class="calloutType">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3>Lead Text</h3>
                <p>Content</p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <b-btn class="neutral" size="lg">Call to action</b-btn>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  props: ["calloutType"]
}
</script>

<style>
 .card {
     border: none;
 }

 .card .btn-lg {
    height: 60px;
    min-width: 100px;
    font-weight: 700;
    letter-spacing: 0.15em;
 }

 .bg-warn {
   background: linear-gradient(87deg,#fb6340 0,#fbb140 100%) !important;
   color: white;
 }
</style>
