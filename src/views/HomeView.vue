<template>
  <div class="home">
    <FilterNav @filterChange="current=$event" :current="current"/>
    <div v-if="projects.length">
    <div v-for="project in filterProjects" :key="project.id">
  <single-plan :project="project" @delete="handleDelete" @complete="handleComplete" />
    </div>
    </div>
  </div>
</template>

<script>
import SinglePlan from '@/components/SinglePlan.vue';
// @ is an alias to /src
import FilterNav from '@/components/FilterProjects.vue';
export default {
  name: 'HomeView',
  components: {
    SinglePlan,
    FilterNav
  },
  data() {
    return {
projects:[],
current:'all'
    }
  },
  methods:{
    handleDelete(id){
      this.projects=this.projects.filter((project) => { 
return project.id !==id;
      })
    },
    handleComplete(id)
    {
      let p = this.projects.find(item=>{
        return item.id===id
      })
      p.complete = !p.complete;
    },
    
  },
  computed:{
    filterProjects(){
      if(this.current==='completed'){
        return this.projects.filter(project => project.complete)
      }
      if(this.current==='ongoing'){
        return this.projects.filter(project => !project.complete)
      }
      return this.projects

    }
  },
  mounted(){
fetch('http://localhost:3000/Projects')
.then(res=>res.json())
.then(data=>this.projects=data)
.catch(err=>console.log(err.message))
  }
}
</script>
