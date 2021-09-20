<template>
    <div class="card">
            <div class="card-body">
                <form @submit.prevent="tambahKelas">
                    <input-type name="Name Kelas" @get="(val)=>detailClass.name=val" />
                    <input-type name="Deskripsi Kelas" @get="(val)=>detailClass.description=val"/>
                    <input-type type="date" name="Tanggal Mulai" @get="(val)=>detailClass.startDate=val"/>
                    <input-type type="date" name="Tanggal Selesai" @get="(val)=>detailClass.endDate=val"/>
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
    methods: {
        async tambahKelas(){
            try {
                const payload = this.detailClass
                const TAMBAH_KELAS = await this.$axios.$post("api/class", payload)
                this.$swal({
                    icon: 'success',
                    title: 'Success',
                    text: 'Data berhasil disimpan'
                })
                // Redirect page ke http-request
                this.backPage()
            } catch (error) {
                this.$swal({
                icon: 'danger',
                title: 'Danger',
                text: 'Data gagal disimpan'
            })
            }
            
        },
        backPage(){
            this.$router.go(-1)
        }
    },
}
</script>