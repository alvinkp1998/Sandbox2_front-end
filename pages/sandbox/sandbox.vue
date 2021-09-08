<template>
    <div>
        <div class="container">
            <h3 class="text-center">Sandbox Front-end 1</h3>
            <div class="row mt-3">
                <div class="col-md-4">
                    <sandboxComponents-inputAdd @addJudul="addSiJudul"/>
                    <div class="mt-3" v-for="(item,i) in judulBuku" :key="i">
                        <h5>{{item}}</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <sandboxComponents-listItem/>
                    <div class="mt-3" v-for="(item,i) in namaPembaca" :key="i">
                        <h5>{{item}}</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <sandboxComponents-inputSelect/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            judulBuku: [],
            namaPembaca: [],
            listBuku:[]
        }
    },
    methods: {
        addSiJudul(data){
            this.judulBuku.push(data);
        }
    },
}
</script>