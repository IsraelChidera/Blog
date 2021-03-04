<template>
    <div  id="single-Blog">
        <div v-for="(blog, i) in blog" v-bind:key="i">
            <h1 >
                {{ blog.title }}
            </h1>
            <article>
                {{blog.content}}
            </article>
        </div>
    </div>
</template>

<script>
import {db} from '../firebaseConfig'
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog: []
        }
    },
    created() {
         db.collection("blogspot").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
    
                return this.blog.push(doc.data());
            });
        });
    }
}
</script>

<style lang="scss">

</style>