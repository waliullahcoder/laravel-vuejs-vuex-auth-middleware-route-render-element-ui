<template>
      <!-- header -->
    <header id="ntheader" class="ntheader header_3 h_icon_iccl ">
        <div class="kalles-header__wrapper ntheader_wrapper pr z_200">
              <Header></Header>
              <Menubar></Menubar>
  <router-view></router-view>

               
              <Footer></Footer>
              <Cart></Cart>
           
        </div>
    </header>
    <!-- end header -->
    
    
</template>



<script>

import Header from './frontend/includes/Header';
import Menubar from './frontend/includes/Menubar';

import Footer from './frontend/includes/Footer';

import Cart from './frontend/includes/Cart';
    export default {
        
        mounted() {
            console.log('Component mounted.')
        },

        components: {
        Header,
        Menubar,
        Footer,
        Cart,

    },
    }
</script>
