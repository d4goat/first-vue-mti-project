<template>
    <div class="container">
        <Layouts />
        <table class="table table-hover table-striped-columns position-absolute top-50 start-50 translate-middle" border="3">
            <thead class="table-secondary">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <!-- <th scope="col">role_id</th> -->
                    <th scope="col">action</th>
                </tr>
            </thead>
            <tbody v-for="users in user" :key="users.id">
                <tr class="table-secondary-subtle">
                    <td>{{ users.id}}</td>
                    <td>{{ users.name}}</td>
                    <td>{{ users.email}}</td>
                    <!-- <td>{{ users.role_id}}</td> -->
                    <td> <router-link :to="{name:  'EditUser', params: {id: users.id}}" class="btn btn-primary btn-sm">Update</router-link>  
                         <button type="button"  class="btn btn-danger btn-sm" @click.prevent="deleteUser(users.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import Layouts from '@/components/Layouts.vue'
import axios from 'axios' 

    export default{
        name: 'Admin',
        components:{
            Layouts
        },
        data(){
            return{
                user:Array
            }
        },
        created(){
            this.getUser()
        },
        methods: {
            async getUser(){
                let url = 'http://127.0.0.1:8000/api/show'
                await axios.get(url).then(response => {
                    this.user = response.data.user
                    console.log(this.user)
                }).catch(error => {
                    console.log(error)
                })
            },
            async deleteUser(id){
                let url = `http://127.0.0.1:8000/api/delete/${id}`
                await axios.delete(url).then(response => {
                    if(response.data.code == 200){
                        alert(response.data.message)
                        this.getUser()
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        mounted(){
            console.log('User List Mounted...')
        }
    }
</script>