<template>
    <div>
        <button class="btn btn-outline-primary rounded-pill">Tambah Pembaca</button>
        <input type="text" class="form-control mt-2 rounded-pill" placeholder="Nama Pembaca">
        <h5 class="mt-3">
            {{judulPembaca}}
            <button v-show="judulPembaca" class="btn btn-outline-danger rounded-pill float-right">Delete</button>
        </h5>
    </div>
</template>

<script>
export default {
    props: {
        judulPembaca: {
            type: String,
            default: ''
        }
    },

    methods: {
        notif(){
            this.$swal({
                title: 'Apakah kamu yakin?',
                confirmButtonText: 'OK',
                showCancelButton: true,
            })
    },
    },
}
</script>