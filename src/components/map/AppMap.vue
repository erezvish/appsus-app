<template>
    <section>
        <h1>Managing your Places - 24/7 </h1>
        <div class="map-area">
            <gmap-map :center="center" :zoom="7" style="width: 90%; height: 60vh">
                <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
            </gmap-map>
        </div>
    </section>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAppatuE2pTnbbwnUSUm2hZiIzstrPuSt8',
        // libraries: 'places', //// If you need to use place input
    }
});

export default {
    data() {
        return {
            center: { lat: 32.1, lng: 34.8 },
            markers: [{
                position: { lat: 32.1, lng: 34.8 }
            }, {
            }]
        }
    }
}
</script>
</script>

<style lang="scss" scoped>
.map-area {
    display: flex;
    justify-content: center;
}

h1 {
    text-align: center;
}
</style>

