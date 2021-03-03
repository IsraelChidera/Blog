<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>
                    Home
                </router-link>
            </li>
            <li>
                <router-link to="/add" exact>
                    Add New Blog
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    nav {
        background: rgb(27, 20, 20);
    }

    nav ul {
        display: flex;
        justify-content: center;
        padding: 1rem;
    }

    nav ul li a{
        color: azure;
        text-decoration: none;
    }

    nav li {
        list-style-type: none;
        padding-right: 1rem;
    }

    .router-link-active {
        background: rgba(255, 115, 0, 0.658);
        color: #334;
        padding: 10px;
        border-radius: 5px;
    }

    nav ul li a:hover {
        color: orangered;
    }

    .router-link-active:hover {
        color: whitesmoke;
    }
</style>