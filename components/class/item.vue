<template>
  <div class="card">
    <img :src="img" class="card-img-top" :alt="'foto ' +name">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text">{{desc}}</p>
      <button v-if="!unfollow" type="button" class="btn btn-primary" @click="followClass">Follow</button>
      <button v-else type="button" class="btn btn-danger" @click="unfollowClass">Unfollow</button>
      <i class="fas fa-trash" @click="confirmDelete"></i>
    </div>
  </div>
</template>
<script>
import request from "../../mixins/request.vue"
export default {
  mixins: [request],
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "Nama Kelas",
    },
    desc: {
      type: String,
      default: "Ini deskripsi kelasnya ya",
    },
    img: {
      type: String,
      default: "https://shiftacademy.id/wp-content/uploads/2021/09/1.png",
    },
    unfollow:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    async confirmDelete(){
      const confirm = await this.confirm("Delete" + this.name + " class")
      if(confirm.isConfirmed){
        await this.requestDelete("api/class/"+ this.id)
        this.$emit('refresh', true)
      }
    },
    followClass(){
      const data = {
        name: this.name,
        desc: this.desc,
        img: this.img
      }
      this.$emit('follow-class', data)
    },
    unfollowClass(){
      const data = {
        name: this.name,
        desc: this.desc,
        img: this.img
      }
      this.$emit('unfollow-class', data)
    }
  },
};
</script>