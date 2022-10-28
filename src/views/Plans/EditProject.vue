<template>
 <div class="project">
    <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input type="text" v-model="project.title" required>
      <label>Details</label>
      <textarea v-model="project.details" required></textarea>
      <button>Update Project</button>
    </form>
 </div>
  </template>
  
  <script>

  export default {
    props:['id'],
    data() {
      return {
        project:{
            title: '',
            details: '',
            complete:false,
        },
        uri:'http://localhost:3000/Projects/'+this.id,
      }
      
    },
    methods: {
      handleSubmit() {
        fetch(this.uri,
            {
            method:'PATCH',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(this.project)
        })
            .then(()=>{
               this.$router.push('/')
            })
            .catch(error=>console.log(error))
            
        }
      
    },
    mounted(){
fetch(this.uri)
.then(res=>res.json())
.then(data=>{this.project.title=data.title,this.project.details=data.details,this.project.complete=data.complete})
.catch(err=>console.log(err.message))
  }
  }
  </script>
  
  <style>
  .project{
    width: 80%;
  align-items: center;
  }
    form {
      background: white;
      padding: 20px;
      border-radius: 10px;
    }
    label {
      display: block;
      color: #bbb;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      margin: 20px 0 10px 0
    }
    input {
      padding: 10px;
      border: 0;
      border-bottom: 1px solid #ddd;
      width: 100%;
      box-sizing: border-box;
    }
    textarea {
      border: 1px solid #ddd;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      height: 100px;
    }
    form button {
      display: block;
      margin: 20px auto 0;
      background: #00ce89;
      color: white;
      padding: 10px;
      border: 0;
      border-radius: 6px;
      font-size: 16px;
    }
  </style>

  