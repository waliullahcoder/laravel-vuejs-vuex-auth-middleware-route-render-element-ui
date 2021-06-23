
<template>
    <div class="wrapper">
        <!-- Navbar -->
        <Header></Header>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <Menubar></Menubar>

        <!-- Content Wrapper. Contains page content -->

        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <router-view></router-view>

        </div>
        <!-- /.content-wrapper -->
        <Footer></Footer>

        <!-- Control Sidebar -->
       <RightBar></RightBar>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->
</template>



<script>

import Header from './backend/includes/Header';
import Menubar from './backend/includes/Menubar';
import Footer from './backend/includes/Footer';
import RightBar from "./backend/includes/RightBar";

export default {

    mounted() {
        console.log('Component mounted.')
    },

    components: {
        Header,
        Menubar,
        Footer,
        RightBar,

    },
}
</script>
