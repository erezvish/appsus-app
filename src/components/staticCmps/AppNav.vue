<template>
    <section class="app-nav">

        <ul>
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

* {
    border: 1px solid green;
}

.app-nav {
    font-size: 1.3em;
    ul {
        display: flex;
        padding: 0;
    }

    ul li {
        border-bottom: 2px solid transparent;
        padding: 0.7em;
        list-style-type: none;
        
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
            border-bottom: 2px solid #FFCC00;
        }
    }
}

</style>
