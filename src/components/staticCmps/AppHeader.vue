<template>
    <section class="app-header">
        <div class="placeholder"></div>
        <app-nav> </app-nav>
    </section>
</template>

<style lang="scss" scoped>
.app-header {
    display: flex;
    background: #343E52;
    color: white;
}

.placeholder {
    height: 50px;
    background-color: lightblue;
}

section {
    h1 {
        color: darkblue;
    }
}
</style>

<script>
import AppNav from './AppNav'
export default {
    name: 'app-header',
    components: {
        AppNav
    }

}
</script>