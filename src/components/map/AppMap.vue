<template>
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

<script>
import mapService from '../../services/map.service'
export default {
    name: 'app-map'
}
</script>
