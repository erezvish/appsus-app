<template>
    <section class="app-nav">

        <ul>
            <li ><i class="icon el-icon-menu"></i><router-link to="/"></router-link></li>
            <li ><router-link to="/">Home</router-link></li>
            <li><router-link to="/mail">Mail</router-link></li>
            <li><router-link to="/map">Places</router-link></li>
            <li><router-link to="/books">Books</router-link></li>
        </ul>
        
    </section>

</template>

<script>
export default {
    name: 'app-nav'
  
}
</script>


<style lang="scss" scoped>

.app-nav {
    font-size: 1.3em;
    ul {
        cursor: pointer;
        display: flex;
        padding: 0;
    }

    ul li {
        padding: 0.7em;
        list-style-type: none;
        
        a {
            text-decoration: none;
            transition: all, 0.5s;
        }
        /* unvisited link */
        a:link {
            color: white;
        }

        /* visited link */
        a:visited {
            color: white;
        }

        /* mouse over link */
        a:hover {
            color: #FFCC00;
        }

        /* selected link */
        a:active {
            color: white;
        }

        &:hover {
            color:#FFCC00;
            transition: all, 0.5s;
        }
    }
}

.icon {
    font-size: 1.5em;
}

</style>
