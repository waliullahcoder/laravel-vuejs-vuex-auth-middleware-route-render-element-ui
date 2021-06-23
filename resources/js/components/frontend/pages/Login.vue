
<template>



    <form class="nt_mini_cart column h__100 container" method="post" @submit.prevent="userLogin()">
         <div class="wrap_title  des_title_2">
                    <h3 class="section-title tc pr flex fl_center al_center fs__24 title_2">
                        <span class="mr__10 ml__10">Login</span>
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
                        <label for="-email">Email <span class="required">*</span></label>
                        <input type="email" name="email" v-model="form.email">
                        <span class="text-danger" v-if="errors['email']">
                            {{errors['email'][0]}}
                        </span>
                    </p>
                    <p class="form-row">
                        <label for="-password">Password <span class="required">*</span></label>
                       <input type="password" name="password" v-model="form.password">
                       <span class="text-danger" v-if="errors['password']">
                            {{errors['password'][0]}}
                        </span>
                    </p>
                    <input type="submit" value="Login" class="button button_primary w__100 tu js_add_ld">
                    <br>
                    <p class="mb__10 mt__20">New customer?
                        <router-link to="/register" data-id="#RegisterForm" class="link_acc">Create your account</router-link>
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
           form:{},
           errors: {}
       }
        },
        methods:{
            userLogin: function () {
                axios.post('/login', this.form)
                    .then((result) => {
                        //console.log(result)
                        //For page reload
                        Render.$emit('PageReload');
                        localStorage.setItem('userLoggedIn', true)
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
