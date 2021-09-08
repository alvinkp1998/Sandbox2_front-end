<template>
    <div>
        <button class="btn btn-outline-primary rounded-pill" @click="tambahJudul">Tambah Buku</button>
        <input type="text" v-model="judulBuku" class="form-control mt-2 rounded-pill" placeholder="Judul Buku">
        <h5 class="mt-3">
            {{judulBuku}}
            <button v-show="judulBuku" class="btn btn-outline-danger rounded-pill float-right">Delete</button>
        </h5>
    </div>
</template>

<script>
export default {
    props: {
        judulBuku: {
            type: String,
            default: ''
        },
    },
    methods: {
        tambahJudul(){
            // this.notif()
            const data = this.judulBuku

            this.$emit('addJudul', data)
        }
    },

    notif(){
        this.$swal({
            title: 'Apakah kamu yakin?',
            confirmButtonText: 'OK',
            showCancelButton: true,
        })
    },
    
}
</script>