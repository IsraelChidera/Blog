<template>
    <div id="show-blog">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search Blog">
        <div v-for="(blog, i) in filteredBlogs" v-bind:key="i" class="blogList">
           <router-link v-bind:to="'/blog/'+ id[i]">
                <h2 v-rainbow>{{blog.title }}</h2>
            </router-link> 
            <article>{{blog.content}}</article>
            {{id[i]}}
        </div>
    </div>
</template>

<script>
import searchMixins from '../mixins/searchmxins'
import {db} from '../firebaseConfig'

export default {
    data() {
        return {
            blogs: [],
            search: '',
            id: []
        }
    },
    methods: {

    },
    computed: {
        
    },
    filters: {
        // toUpperCase(val){
        //     return val.toUpperCase();
        // }, 
        // slice(val){
        //     return val.slice(0,100) + " . . .";
        // }
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
       db.collection("blogspot").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                
                
                this.id.push(doc.id);
               return this.blogs.push(doc.data());
                // console.log(`${doc.id} => ${doc.data()}`);
                // console.log(doc.data().content)
                // this.blogs = doc.data().content
            });
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