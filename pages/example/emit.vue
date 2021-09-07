<template>
  <div>
    <h1>Belajar EMIT</h1>
    <section class="my-5">
      <input-type :value="name" @get="(val)=>name=val" />
      <input-type :value="name" @get="(val)=>name=val" />
      <input-type :value="name" @get="(val)=>name=val" />
    </section>
    {{name}}
    <hr>
      <input-type :value="name" @get="(val)=>name=val" />
      <input-type :value="name" @get="(val)=>name=val" />
    <hr>
    <div class="row">
      <div v-for="(item,i) in getListClass" :key="i" class="col-md-4">
        <class-item :name="item.name" :desc="item.description" :img="item.img" @follow-class="getFollow" />
      </div>
    </div>
    <h1 class="mt-3">FOLLOWING CLASS</h1>
    <div class="row">
      <div v-for="(item,i) in following" :key="i" class="col-md-4">
        <class-item unfollow :name="item.name" :desc="item.description" :img="item.img" @unfollow-class="getUnfollow" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    // Menampilkan 3 list class 
    getListClass() {
      return this.listClass.filter((item, i) => i < 3);
    },
  },
  data() {
    return {
      name: "Init Name",
      following: [],
      listClass: [
        {
          name: "Bootcamp Fullstack 5",
          description:
            "Ini bootcamp fullstack yang seru, jadi jangan kelewatan",
          img: "https://shiftacademy.id/wp-content/uploads/2020/12/Logo-fullstack-SA.png",
        },
        {
          name: "Mastery Laravel",
          description: "Belajar framework popular php gak pake ribet",
        },
        {
          name: "Mastery Express",
          description: "Belajar framework popular node js cepet dan ringkes",
        },
      ],
    };
  },
  methods: {
    getFollow(data){
      this.following.push(data);
    },
    getUnfollow(data){
      this.following = this.following.filter(follow => follow.name != data.name)
    },
    notif(){
      this.$swal({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
    },
  },
  // mounted(){
  //   setTimeout(() => {
  //     this.notif()
  //   }, 2000);
  // },
};
</script>