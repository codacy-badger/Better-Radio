<template>
  <div class="br-card dark-bg shadows">
    <img
      :src="image"
    >
    <div class="card-body-content">
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 583 95"
        class="svg-bg"
      >
        <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
      </svg>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title','content','image']
};
</script>

<style>
.card-body-content {
  padding: 0;
  position: relative;
  padding: 3rem;
  line-height: 2em;
}

.fill-default {
    fill: #172b4d;
}

.card-body-content svg {
  position: absolute;
  top: -94px;
  left: 0;
  display: block;
  width: 100%;
  height: 95px;
  overflow: hidden;
  vertical-align: middle;
}

.dark-bg {
  background-color: #172b4d !important;
  color: white;
}

.br-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border: 0;
  border-radius: 0.25rem;
  background-color: #fff;
  background-clip: border-box;
  max-width: 400px;
}

.br-card img {
  width: 100%;
  border-top-left-radius: calc(0.25rem - 0.0625rem);
  border-top-right-radius: calc(0.25rem - 0.0625rem);
}
</style>
