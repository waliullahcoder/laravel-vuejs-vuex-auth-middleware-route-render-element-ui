<template>

 <div class="sp_header_mid">
                <div class="header__mid">
                    <div class="container">
                        <div class="row al_center css_h_se">
                            <div class="col-md-4 col-3 dn_lg">
                                <router-link to="/" class="push_side push-menu-btn  lh__1 flex al_center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                        <rect width="30" height="1.5"></rect>
                                        <rect y="7" width="20" height="1.5"></rect>
                                        <rect y="14" width="30" height="1.5"></rect>
                                    </svg>
                                </router-link></div>
                            <div class="col-lg-2 col-md-4 col-6 tc tl_lg">
                                <div class=" branding ts__05 lh__1">
                                    <router-link to="/" class="dib">
                                        <img class="w__95 logo_normal dn db_lg" src="assets/images/svg/kalles.svg" alt="Kalles Template">
                                        <img class="w__100 logo_sticky dn" src="assets/images/svg/kalles.svg" alt="Kalles Template">
                                        <img class="w__100 logo_mobile dn_lg" src="assets/images/svg/kalles.svg" alt="Kalles Template">
                                    </router-link>
                                </div>
                            </div>
                            <div class="col dn db_lg">
                                <nav class="nt_navigation kl_navigation tc hover_side_up nav_arrow_false">
                                    <ul id="nt_menu_id" class="nt_menu in_flex wrap al_center">
                                         <li class="type_dropdown menu-item has-children menu_has_offsets menu_right pos_right">
                                            <router-link class="lh__1 flex al_center pr" to="/">Home </router-link>
                                        </li>


                                         <li class="type_dropdown menu-item has-children menu_has_offsets menu_right pos_right">
                                            <a class="lh__1 flex al_center pr" href="blog-grid.html">Blog</a>
                                            <div class="sub-menu">
                                                <div class="lazy_menu lazyload">
                                                    <div class="menu-item">
                                                        <a href="blog-grid.html">Grid Layout</a>
                                                    </div>
                                                    <div class="menu-item">
                                                        <a href="blog-masonry.html">Masonry Layout</a>
                                                    </div>
                                                    <div class="menu-item">
                                                        <a href="blog-left-sidebar.html">Left Sidebar</a>
                                                    </div>
                                                    <div class="menu-item">
                                                        <a href="blog-right-sidebar.html">Right Sidebar</a>
                                                    </div>
                                                    <div class="menu-item">
                                                        <a href="blog-post-with-product-listing.html">Single Post with Product Listing</a>
                                                    </div>
                                                    <div class="menu-item">
                                                        <a href="blog-post-with-instagram-shop.html">Single Post with Instagram Shop</a>
                                                    </div>
                                                    <div class="menu-item">
                                                        <a href="blog-post-with-instagram-shop.html">Single Post with Categories</a>
                                                    </div>
                                                    <div class="menu-item">
                                                        <a href="blog-post-with-lookbook.html">Single Post with lookbook</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="type_dropdown menu-item has-children menu_has_offsets menu_right pos_right">
                                            <router-link class="lh__1 flex al_center pr" to="/products">Product</router-link>
                                        </li>


                                        <li class="type_dropdown menu-item has-children menu_has_offsets menu_right pos_right">
                                            <a class="lh__1 flex al_center" href="/"><i class="iccl iccl-user"></i></a> {{ user.name }}</a>
                                            <div class="sub-menu">
                                                <div v-if="user && user.id" class="lazy_menu lazyload">
                                                    <div class="menu-item">
                                                        <router-link to="/dashboard">Dashboard</router-link>
                                                    </div>
                                                    <div class="menu-item">
                                                        <a @click.prevent="userLogout()">Logout</a>
                                                    </div>
                                                </div>
                                                <div v-else class="lazy_menu lazyload">
                                                    <div class="menu-item">
                                                        <router-link to="/user-login">Login</router-link>
                                                    </div>
                                                    <div class="menu-item">
                                                        <router-link to="/user-register">Register</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                            <div class="col-lg-auto col-md-4 col-3 tr col_group_btns">
                                <div class="nt_action in_flex al_center cart_des_1">
                                    <a class="icon_search push_side cb chp" data-id="#nt_search_canvas" href="#">
                                        <i class="iccl iccl-search"></i></a>
                                    <div class="my-account ts__05 position-relative dn db_md">
                                        <a class="cb chp db push_side" href="#" data-id="#nt_login_canvas">
                                            <i class="iccl iccl-user"></i></a>
                                    </div>
                                    <a class="icon_like cb chp position-relative dn db_md js_link_wis" href="wishlist.html"><i class="iccl iccl-heart pr"><span class="op__0 ts_op pa tcount bgb br__50 cw tc">3</span></i>
                                    </a>
                                    <div class="icon_cart pr">
                                        <a class="push_side position-relative cb chp db" href="#" data-id="#nt_cart_canvas"><i class="iccl iccl-cart pr"><span class="op__0 ts_op pa tcount bgb br__50 cw tc">5</span></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name: "Menubar",
    computed:{
    user(){
        return this.$store.getters['getAuthUser']
    }
    },
    methods:{
    getUser(){
        this.$store.dispatch('getUser');
    },
    userLogout(){
            this.$store.dispatch('userLogout')
            localStorage.removeItem('userLoggedIn');
            this.$router.push({name: 'Home'})
            this.$message({
            showClose: true,
            message: 'Logout Successfully!'
        });
    }
    },

    created(){
     this.getUser();
    },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

<style>
</style>
