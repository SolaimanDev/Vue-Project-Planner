<template>
  <nav class="filter-nav">
<button @click="filterProjects('all')" :class="{active: current==='all'}">VIEW ALL</button>
<button @click="filterProjects('completed')" :class="{active: current==='completed'}">COMPLETED</button>
<button @click="filterProjects('ongoing')" :class="{active: current==='ongoing'}">ONGOING</button>
  </nav>
</template>

<script>
export default {
    props:['current'],
methods:{
    filterProjects(by){
this.$emit('filterChange',by);
    }
}
}
</script>

<style>
.filter-nav button{
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    cursor: pointer;
    font-weight: bold;
}
.filter-nav button.active{
    color: #555;
}
</style>