<template>
    <div class="container">
        <h5>
            Visit : <a :href="url">{{cleanUrl}}</a>
        </h5>
        <input type="text" class="form-control" v-model="url" >
        <button @click="humanizeUrl" class="btn btn-primary">Humanize Me!</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url:"",
            cleanUrl:""
        }
    },
    methods: {
        humanizeUrl(){
            this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
        }
    },
}
</script>