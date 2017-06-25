<template>
    <section>
        <div class="map-area">
            <map-list class="list-area" v-if="markers.length" :markers="markers" @edit="markerClicked" @delete="clearMarker">
            </map-list>
            <div class="search-bar">
                <gmap-autocomplete placeholder="Search Box" :value="description" @place_changed="setPlace"></gmap-autocomplete>
            </div>
            <gmap-map class="map-actual" @click="addMarker" :center="center" :zoom="zoom">
                <gmap-marker v-if="markers.length > 0" :key="idx" v-for="(marker, idx) in markers" :position="marker.position" :clickable="true" :draggable="true" @click="markerClicked(marker, idx)" :title="marker.title"></gmap-marker>
                <gmap-info-window class="info-window" :opened="markerWindow.isOpen" @closeclick="closeMarker" :options="markerWindow.options" :position="markerWindow.position" :content="markerWindow.content"></gmap-info-window>
            </gmap-map>
        </div>
    </section>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import mapService from '../../services/map.service'
import MapList from './MapList'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAppatuE2pTnbbwnUSUm2hZiIzstrPuSt8',
        libraries: 'places'
    }
});
import emailService from '../../services/map.service'
export default {
    components: {
        MapList
    },
    data() {
        return {
            center: { lat: 32.1, lng: 34.8 },
            zoom: 7,
            description: '',
            markers: [],
            markerWindow: {
                idx: null,
                title: null,
                position: this.center,
                currAddress: null,
                content: null,
                options: {
                    maxWidth: 250,
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
            var newMarker = mapService.addEmptyMarker(currLat, currLng);
            this.markerClicked(newMarker, newMarker.id)
        },
        markerClicked(marker, idx) {
            if (idx !== this.markerWindow.idx) this.setMarker(marker, idx);
            else this.markerWindow.isOpen = false;

        },
        setMarker(marker, idx) {
            console.log('marker:', marker)
            this.selectedMarker = marker;
            this.zoom = 10;
            this.center = marker.position;
            this.markerWindow.idx = marker.idx;
            this.markerWindow.title = marker.title;
            this.markerWindow.position = marker.position;
            this.markerWindow.currAddress = marker.markerAddress;
            this.markerWindow.content = marker.content;
            this.markerWindow.isOpen = true;
        },
        closeMarker(event) {
            this.markerWindow.isOpen = false;
            // console.log('closing down:', this.selectedMarker);
            console.log(this.markerWindow.content);
        },
        getMarkerContent(event) {
            console.log(event);
        },
        clearMarker(marker) {
            mapService.deleteMarker(marker);
        },
        setDescription(description) {
            this.description = description;
        },
        setPlace(place) {
            console.log('place address', place.formatted_address)
            this.center = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };
            let currAddress = place.formatted_address
            let newMarker = mapService.addEmptyMarker(this.center.lat, this.center.lng, currAddress)
            this.markerClicked(newMarker, newMarker.id)
        }
    }
}
</script>
</script>

<style lang="scss" scoped>
.map-area {
    display: flex;
    position: relative;
    justify-content: center;
}

.map-actual {
    width: 100%;
    height: 84vh;
}

.info-window {
    max-width: 100px;
}

h1 {
    text-align: center;
    margin-top: 0;
}

.list-area {

    margin: 0.8em 0.5em;
    max-width: 50%;
    position: absolute;
    z-index: 100;
    top: 2.5em;
    left: 0;
}

.search-bar {
    position: absolute;
    left: 90px;
    z-index: 100;
    width: 30%;
    margin: 0.6em 0;
    input {
        width: 100%;
        height: 1.8em;
    }
}
</style>