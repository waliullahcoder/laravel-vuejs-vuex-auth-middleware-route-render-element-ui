<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-1">
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Brand Logo -->
            <div class="user-panel mb-3 d-flex">
                <div class="image">
                    <i class="nav-icon fas fa-home"></i>
                </div>
                <div class="info">
                    <router-link to="/home" class="d-block">Admin Dashboard</router-link>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fa-plus-square"></i>
                            <p>
                                Extras
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="../examples/login.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Login</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/register.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Register</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/forgot-password.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Forgot Password</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/recover-password.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Recover Password</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/lockscreen.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Lockscreen</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/legacy-user-menu.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Legacy User Menu</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/language-menu.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Language Menu</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/404.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Error 404</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/500.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Error 500</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/pace.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Pace</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../examples/blank.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Blank Page</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../../starter.html" class="nav-link">
                                    <i class="fab fa-jira"></i>
                                    <p>Starter Page</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
