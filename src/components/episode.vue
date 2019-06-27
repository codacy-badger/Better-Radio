<template>
    <div style="margin-bottom: 2em; border-bottom: 1px solid #eee;">
        <p style="vertical-align: middle;">
            <img :src="image" style="width: 60px; height: 60px;border-radius: 100%;"/>
        <span style="padding-left: 2em; font-weight: 700;">{{title}} </span><i class="uil uil-play-circle" style="font-size: 2em; float: right;"></i></p>
        
    </div>
</template>

<script>
export default {
     props: ["listened", "image", "title", "date", "file"],
}
</script>

<style>

</style>
