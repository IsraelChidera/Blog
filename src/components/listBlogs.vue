<template>
    <div id="show-blog">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search Blog">
        <div v-for="(blog, i) in filteredBlogs" v-bind:key="i" class="blogList">
            <h2 v-rainbow>{{blog.title | toUpperCase}}</h2>
        </div>
    </div>
</template>

<script>
import searchMixins from '../mixins/searchmxins'

export default {
    data() {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    computed: {
        
    },
    filters: {
        toUpperCase(val){
            return val.toUpperCase();
        }, 
        slice(val){
            return val.slice(0,100) + " . . .";
        }
    },
    directives: {
        'rainbow': {
            bind(el){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
        }
    },
    mixins: [searchMixins],
    created(){
        this.$http.get("https://jsonplaceholder.typicode.com/posts/")
    .then(res => {
      this.blogs = res.body.slice(0,10)
    });
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#show-blog{
    max-width: 800px;
    margin: 0 auto;
}

.blogList h2 {
    margin-bottom: 2rem;
}

.blogList {
    background-color: #eee;
    margin-top: 1rem;
    padding: 2rem;
    border-radius: 5px;
}
</style>