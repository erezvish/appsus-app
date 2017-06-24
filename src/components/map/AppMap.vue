<template>

    <section>
        <h1>Managing your Places - 24/7 </h1>
        <div class="map-area">
            <gmap-map @click="addMarker" :center="center" :zoom="7" style="width: 100%; height: 70vh">
                <gmap-marker v-if="markers.length > 0" :key="idx" v-for="(marker, idx) in markers" :position="marker.position" :clickable="true" :draggable="true" @click="markerClicked(marker, idx)" :title="marker.title"></gmap-marker>
                <gmap-info-window :opened="markerWindow.isOpen" @closeclick="markerWindow.isOpen=false" :options="markerWindow.options" :position="markerWindow.position" :content="markerWindow.content"></gmap-info-window>
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
import emailService from '../../services/map.service'
export default {
    data() {
        return {
            center: { lat: 32.1, lng: 34.8 },
            markers: [],
            markerWindow: {
                idx: null,
                title: null,
                position: this.center,
                content: null,
                options: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                isOpen: false
            },
            selectedMarker: null
        }
    },
    created() {
        mapService.getMarkers().then(markers => this.markers = markers)
        console.log(this.markers);
    },
    methods: {
        addMarker(event) {
            console.log('Add me please!');
            let currLat = event.latLng.lat();
            let currLng = event.latLng.lng();
            console.log(`my lat/long are: ${currLat} ${currLng}`);
            mapService.addEmptyMarker(currLat, currLng);
        },
        markerClicked(marker, idx) {
            if (idx !== this.markerWindow.idx) this.setMarker(marker, idx);
            else this.markerWindow.isOpen = false;

        },
        setMarker(marker, idx) {
            this.selectedMarker = marker;
            this.center = marker.position;
            this.markerWindow.idx = marker.idx;
            this.markerWindow.title = marker.title;
            this.markerWindow.position = marker.position;
            this.markerWindow.content = marker.content;
            this.markerWindow.isOpen = true;
        },
        clearMarker(marker) {

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

.gmap-info-window {
    max-width: 150px;
}

h1 {
    text-align: center;
    margin-top: 0;
}
</style>

=======
<section class="app-mail container">
        <el-row>
            <el-col :xs="24">
                <div class="img">
                    <img src="../../assets/img/app-mail-logo.png">
                </div>
                <div class="main-content">
                    <h3>My Google Maps Demo</h3>
                    <div class="map"></div>
                </div>
    
            </el-col>
        </el-row>
    
        <el-row>
            <el-col :xs="24">
                <h2></h2>
            </el-col>
        </el-row>
    </section>
</template>

<style lang="scss" scoped>

    .map {
    width: 100%;
    height: 400px;
    background-color: grey;
    }

</style>