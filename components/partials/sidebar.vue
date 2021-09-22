<template>
  <div class="main-sidebar">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html">Stisla</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">St</a>
      </div>
      <ul class="sidebar-menu">
        <li v-for="(menu, i) in listMenu" :key="i">
          <nuxt-link class="nav-link" :to="menu.to">
            <i :class="menu.icon"></i> <span>{{ menu.name }} </span>
          </nuxt-link>
        </li>
        <!-- <li v-for="(item,i) in listClass" :key="i">
          <nuxt-link class="nav-link" to="/example/http-request/">
            <i class="far fa-bookmark"></i> <span>{{item.name}} </span>
          </nuxt-link>
        </li> -->
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listMenu: [
        {
          name: "Dashboard baru",
          icon: "fas fa-home",
          to: "/"
        },
        {
          name: "Semua Kelas",
          icon: "fas fa-igloo",
          to: "/semua-kelas"
        },
        {
          name: "V-Model",
          icon: "far fa-bookmark",
          to: "/example/v-model"
        },
        {
          name: "Data Binding",
          icon: "fas fa-book",
          to: "/example/data-binding"
        },
        {
          name: "Methods",
          icon: "fas fa-book",
          to: "/example/methods"
        },
        {
          name: "Computed",
          icon: "fas fa-book",
          to: "/example/computed"
        },
        {
          name: "Watcher",
          icon: "fas fa-book",
          to: "/example/watcher"
        },
        {
          name: "Emit",
          icon: "fas fa-book",
          to: "/example/emit"
        },
        {
          name: "Sandbox-1",
          icon: "fab fa-stripe-s",
          to: "/sandbox/sandbox"
        },
        {
          name: "Sandbox-2",
          icon: "fab fa-stripe-s",
          to: "/sandbox/sandbox2"
        },
        {
          name: "Http-request",
          icon: "fas fa-book",
          to: "/example/http-request"
        },
        {
          name: "State Management",
          icon: "fas fa-book",
          to: "/example/state-management"
        },
        {
          name: "Latihan State",
          icon: "fas fa-book",
          to: "/latihan-state"
        }
      ]
    };
  },
  computed: {
    listClass() {
      return this.$store.state.class.listClass;
    }
  },
  mounted() {
    this.GET_CLASS();
  },
  methods: {
    async GET_CLASS() {
      const listData = await this.requestGet("api/class");
      this.$store.dispatch("class/setClass", listData.data); //Pasangannya Action
    }
  }
};
</script>
