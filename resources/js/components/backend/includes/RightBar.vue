<template>
    <aside class="control-sidebar UserASIDE control-sidebar-dark">
        <div class="UserImage text-center">
            <img class="img-fluid" src="images/avatar2.png" alt="User Image">
            <h4 class="pt-2 pb-1">G. K. Shamima AFA</h4>
            <p>A short discription of profile</p>
        </div>
        <div class="User_buttons clearfix text-center">
            <a href="#" class="User_links"><i class="far fa-comment-alt"></i>
                <p class="Abailable">Chat(80)</p>
            </a>
            <a href="#" class="User_links"><i class="fas fa-envelope-square"></i>
                <p>Massage Inbox</p>
            </a>
            <a href="#" class="User_links"><i class="fas fa-project-diagram"></i>
                <p>Projects</p>
            </a>
            <a href="#" class="User_links"><i class="far fa-id-badge"></i>
                <p>Manage Profile</p>
            </a>
            <a href="#" class="User_links"><i class="fas fa-ticket-alt"></i>
                <p>Support tickets</p>
            </a>
            <a href="#" class="User_links"><i class="fas fa-air-freshener"></i>
                <p>Janina</p>
            </a>
        </div>
        <div class="Logout_user text-center">
            <a class="UserLogout" @click.prevent="userLogout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </div>
    </aside>
</template>
<script>
export default {

    name: "RightBar",

    methods:{
        userLogout(){
            this.$store.dispatch('userLogout')
            location.href = "/login";
            this.$message({
                showClose: true,
                message: 'Admin Logout Successfully!'
            });
        }
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
