<template>
  <div class="project" :class="{complete:project.complete}">
    <div class="actions">
        <h2 @click="showDetails=!showDetails">{{ project.title }}</h2>
        <div class="icons">
            <span @click="handleToggleComplete" class="material-symbols-outlined" :class="{active:project.complete}">
done_all
</span>
<router-link :to="{name:'edit-project',params:{id:project.id}}">
    <span class="material-symbols-outlined">
        edit
    </span>
</router-link>
<span @click="deleteProject" class="material-symbols-outlined">
delete
</span>
        </div>
    </div>
    <div v-if="showDetails" class="project-details">
        <p>{{ project.details }}</p>
    </div>

  </div>
</template>

<script>
export default {
props:['project'],
data(){
    return {
        showDetails:false,
        uri:'http://localhost:3000/Projects/'+this.project.id,
    }
},
methods:{
        deleteProject(){
            fetch(this.uri,{method:'DELETE'})
            .then(()=>this.$emit('delete',this.project.id))
            .catch(error=>console.log(error))
        },
        handleToggleComplete()
        {
            fetch(this.uri,
            {
            method:'PATCH',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({complete:!this.project.complete})
        })
            .then(()=>{
                this.$emit('complete',this.project.id)
            })
            .catch(error=>console.log(error))
        }
    },
}
</script>

<style>
.project{
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;

}
h2{
    cursor: pointer;
}
.actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-symbols-outlined{
    font-size: 25px;
    margin-left: 10px;
    color: #494d4b;
    cursor: pointer;
}
.material-symbols-outlined:hover{
    color: #777;
}
.complete{
    border-left: 4px solid #00ce89;
}
.project .actions .active{
    color: #00ce89;
}
</style>