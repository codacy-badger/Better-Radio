/<template>
    <div class="card shadows-static" :class="calloutType">
          <div class="p-5">
            <div class="row align-items-center">
              <slot></slot>
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
   background: linear-gradient(87deg,#f5365c 0,#f56036 100%) !important;
   color: white;
 }

 .bg-warn[type='button']:active {
   background: linear-gradient(87deg,#f5365c 0,#f56036 100%) !important;
   color: white !important;
 }
</style>
