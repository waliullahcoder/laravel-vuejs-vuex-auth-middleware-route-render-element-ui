
<template>



    <form class="nt_mini_cart column h__100 container" @submit.prevent="userRegister()">
        <div class="wrap_title  des_title_2">
                    <h3 class="section-title tc pr flex fl_center al_center fs__24 title_2">
                        <span class="mr__10 ml__10">Register</span>
                    </h3>
                    <span class="dn tt_divider">
                    <span></span>
                    <i class="dn clprfalse title_2 la-gem"></i>
                    <span></span>
                </span>
                    <span class="section-subtitle db tc sub-title">Here</span>
                </div>
        <div class="mini_cart_wrap">

                    <p class="form-row">
                        <label for="-LastName">Last Name</label>
                        <input type="text" name="name" v-model="form.name" autocomplete="family-name">
                    </p>
                    <p class="form-row">
                        <label for="-email">Email <span class="required">*</span></label>
                        <input type="email" name="email" v-model="form.email" autocapitalize="off" autocomplete="email" aria-required="true">
                    </p>
                    <p class="form-row">
                        <label for="-password">Password <span class="required">*</span></label>
                        <input type="password" name="password" v-model="form.password" class="" autocomplete="current-password" aria-required="true">
                    </p>
                    <input type="submit" value="Register" class="button button_primary w__100 tu js_add_ld">
                    <br>
                    <p class="mb__10 mt__20">Already have an account?
                        <router-link to="/login" data-id="#customer_login" class="link_acc">Login here</router-link>
                    </p>

        </div>
    </form>
</div>
<!-- end login box -->
</template>



<script>

    export default {
        name: 'Login',
        data(){
            return{
                form:{
                    roleStatus: 2,
                },
                errors: {}
            }
        },
        methods:{
            userRegister() {
                axios.post('/register', this.form)
                    .then((result) => {
                        //console.log(result)
                        //For page reload
                        Render.$emit('PageReload');
                        this.$router.push({name: 'UserDashboard'})

                    }).catch((err) => {
                    this.errors = err.response.data.errors
                });
            }
        },
        created(){

            //For page reload
            Render.$on('PageReload',() =>{
                this.$store.dispatch('getUser');
            })
            //For page reload
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
