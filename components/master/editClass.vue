<template>
    <div class="card">
            <div class="card-body">
                <form @submit.prevent="editKelas">
                    <input-type name="Name Kelas" :value="detailClass.name" @get="(val)=>detailClass.name=val" />
                    <input-type name="Deskripsi Kelas" :value="detailClass.description" @get="(val)=>detailClass.description=val"/>
                    <input-type type="date" name="Tanggal Mulai" :value="detailClass.startDate" @get="(val)=>detailClass.startDate=val"/>
                    <input-type type="date" name="Tanggal Selesai" :value="detailClass.endDate" @get="(val)=>detailClass.endDate=val"/>
                    <div class="text-right">
                        <button class="btn btn-outline-secondary" type="button" @click="backPage">Back</button>
                        <button class="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
</template>


<script>
export default {
    data() {
        return {
            //Buat dalam bentuk objek untuk memanggil pada method tambahKelas()
            detailClass: {
                name: '',
                description: '',
                startDate: '',
                endDate: ''
            },
        }
    },
    mounted() {
        if(this.$route.params.id)
        this.GET_DATA()
    },
    methods: {
        async GET_DATA(){
            const DATA = await this.requestGet("api/class/" + this.$route.params.id)
            console.log(DATA)
            this.detailClass = DATA.data
        },
        async editKelas(){
            const editKelas = await this.$axios.$put("api/class/", this.detailClass)
            this.$swal({
                icon: 'success',
                title: 'Success',
                text: 'Data berhasil diupdate'
                })
            // Redirect page ke http-request
            this.backPage()
        },
        backPage(){
            this.$router.go(-1)
        }
    },
}
</script>