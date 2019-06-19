/<template>
     <div class="card contentCard shadows-static" :class="dark == 'true' ? 'dark-bg' : ''">
                      <div class="cardItems">
                      <slot></slot>
                      </div>
              </div>
</template>

<script>
export default {
    props: ["type", "title", "dark"]
    
}
</script>

<style>
.contentCard {
    width: 100%;
}

.cardItems {
    padding: 1em;
}

.contentCard img {
    width: 100%;
}
</style>
