<template>
    <section>
        <h1>Managing your Places - 24/7 </h1>
        <div class="map-area">
            <gmap-map @click="" :center="center" :zoom="7" style="width: 100%; height: 70vh">
                <gmap-marker :key="index" v-for="(marker, index) in markers" :position="marker.position" :clickable="true" :draggable="true" @click="markerClicked(marker)" :title="marker.title"></gmap-marker>
                <gmap-info-window>Hello world!</gmap-info-window>
            </gmap-map>
        </div>
    </section>
</template>

<script>
import mapService from '../../services/map.service'
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAppatuE2pTnbbwnUSUm2hZiIzstrPuSt8',
        // libraries: 'places', //// If you need to use place input
    }
});
import MapMarker from './MapMarker'
export default {
    data() {
        return {
            center: { lat: 32.1, lng: 34.8 },
            markers: [
                { position: { lat: 32.1, lng: 34.8 }, title: 'Badaboom Thingy' },
                { position: { lat: 33.1, lng: 33.8 }, title: 'Target' }
            ]
        }
    },
    created() {
        mapService.getMarkers().then(markers => this.markers = markers)
    },
    methods: {
        markerClicked(marker) {
            this.center = marker.position;

        },
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
    margin-top: 0;
}
</style>

