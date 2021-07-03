
<template>
 <div class="wrap_title  des_title_2">
                    <h3 class="section-title tc pr flex fl_center al_center fs__24 title_2">
                        <span class="mr__10 ml__10">User Dashboard  </span>
                    </h3>

                    <span class="dn tt_divider">
                    <span></span>
                    <i class="dn clprfalse title_2 la-gem"></i>
                    <span></span>
                </span>
                    <span class="section-subtitle db tc sub-title">Here</span>

     <table class="table table-bordered">
         <tr><th>ID</th><th>Name</th></tr>
         <tr v-for="us in allusers" :key="us.id">
             <td>{{us.id}}}</td><td>{{us.name}}</td>
         </tr>
     </table>
                </div>
</template>



<script>
 export default {

        data(){
            return{
                allusers:{},
            }
        },

        methods:{

            userLoader(){
             //console.log()
            axios.get("/user/list")
            .then(({data}) => (this.allusers = data));
            }
        },
        
        created(){
            this.userLoader();
        },
        
        mounted() {
            console.log('Component mounted.')
        },
    }
</script>
