<template>
    <div id="add-blog">
       <h2>Add a New Blog Post</h2>
       <form v-if="!submitted">
           <label>Blog Title:</label>
           <input type="text" v-model.lazy="blog.title" class="blog-title">

           <label>Blog Content:</label>
           <textarea name="content" id="" cols="30" rows="10" v-model.lazy="blog.content">
           </textarea>
           
           <div id="checkboxes">
               <label>One</label>
               <input type="checkbox" value="One" v-model="blog.categories">
               <label>Two</label>
               <input type="checkbox" value="Two" v-model="blog.categories">
               <label>Three</label>
               <input type="checkbox" value="Three" v-model="blog.categories">
               <label>Four</label>
               <input type="checkbox" value="Four" v-model="blog.categories">
           </div>

            <label>Author:</label>
           <select v-model="blog.author">
               <option v-for="author in authors" v-bind:key="author">
                   {{author}}
               </option>
           </select>

           <button v-on:click.prevent="post">Add Post</button>
       </form>

        <div class="preview-msg" v-if="submitted">
            Your blog post has been added
        </div>

        <div class="blog-preview">
            <p>Preview Blog</p>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog Content: </p>
            <p>{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories" v-bind:key="category">
                    {{category}}
                </li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
        
    </div>
   
</template>

<script>
export default {
   data() {
       return {
           blog: {
               title: "",
               content: "",
               categories:[],
               author: ""
           },
           authors : ["Anonymous", "Public", "Private"],
           submitted: false
       }
   },
   methods: {
       post: function(){
           this.$http.post('https://jsonplaceholder.typicode.com/posts',{
               title: this.blog.title,
               body: this.blog.content,
               userId: 1
           }).then(function(data){
               console.log(data);
               this.submitted = true;
           })
       }
   }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#add-blog{
    margin: 20px auto;
    max-width: 500px;
    padding: auto;
}

label {
    display: block;
    margin-top: 1rem;
}

.blog-preview {
    margin: 3rem 0;
    border: 2px solid #eee;
    padding: 2rem 1rem;
    
}

.blog-preview p {
    margin-top: 1rem;
}

input[type=text] {
    padding: 10px 0.2rem 10px 0.2rem;
    border-radius: 5px;
    width: 100%;
}

input[type=text]:focus {
    background-color: lightblue;
}

textarea {
    padding: 10px 0.2rem 10px 0.2rem;
    width: 100%;
    border-radius: 5px;
}

#checkboxes {
    margin-top: 2rem;
}

#checkboxes label {
    display: inline-block;
    padding-right: 5px;
}

#checkboxes input {
    display: inline-block;
    margin-right: 1rem;
}

.blog-preview ul {
    margin-top: 8px;
    margin-left: 10px;
}

.preview-msg {
    margin-top: 10px;
}
</style>