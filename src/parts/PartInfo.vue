<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import getPartsMixin from "@/parts/get-parts-mixin";
export default {
  name: 'PartInfo',
  mixins:[getPartsMixin],
  props:{
    partType:{type: String},
    id: {type:[String, Number]},
    validator(value){
      return Number.isInteger(Number(value));
    },
  },
  computed:{
    part(){
      const {partType, id} = this;
      return this.parts[partType].find(part => part.id === +id);
    }
  }
};
</script>
