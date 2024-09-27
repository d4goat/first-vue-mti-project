<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-absolute top-0 start-0 " style="width: 100vw; height: 10vh;">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/admin">Admin</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link active" aria-current="page" to="/data_user">Data User</router-link>
              <router-link class="nav-link" to="/add-user">Add User</router-link>
            </div>
            <div class="navbar-nav position-absolute end-0 pe-5">
              <button class="nav-link active bg-secondary rounded" v-on:click="logout" to="/login">Log Out</button>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
    export default{
        name: 'Layouts',
        methods:{
        logout(){
            localStorage.removeItem('jwt')
            this.$router.push({name : 'Login'})
            alert('log out success')
            }
        }
    }
</script>