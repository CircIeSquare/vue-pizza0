<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- new pizza -->
            <appNewPizza></appNewPizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>   
            <table class='table'>
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for='item in getMenuItems' :key='item.name'>
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button @click='deleteData(item)' class="btn btn-outline-danger btn-sm">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>         
        </div>
    </div>
</template>

<script>
import NewPizza from './NewPizza'
export default {
    components:{
        appNewPizza:NewPizza
    },
    data(){
        return{
            //getMenuItems:[]
        }
    },
    computed:{
        getMenuItems:{
            get(){
                return this.$store.state.menuItems
            },
            set(){

            }
        }
    },
    created(){
        fetch('https://wd2468178309upkmpi.wilddogio.com/menu.json')
        .then(res=>{
            return res.json();
        }).then(data=>{
            //console.log(data);
            let menuArray=[];
            for(let key in data){
                //console.log(key);
                //console.log(data[key]);
                data[key].id=key;
                meunArray.push(data[key]);
            }
            //数据同步
            //this.getMenuItems=MenuArray;
            this.$store.commit('setMenuItems',menuArray);
        });
    },
    methods:{
        deleteData(item){
            fetch("https://wd2468178309upkmpi.wilddogio.com/menu/"+item.id.json,{
                method:"DELETE",
                headers:{
                    'Content-type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                //console.log();
                //this.$router.push({name:"menuLink"});
                this.$store.commit('removeMenuItems',item);
            })
            .catch(err=>console.log(err));
        },

    }
    // data(){
    //     return {
    //         name:"Henry"
    //     }
    // },
    // beforeRouteEnter:(to,from,next) => {
    //     //alert("Hello "+this.name);
    //     //next();

    //     next(vm=>{
    //         alert("hello,"+vm.name);
    //     });
    // }

    // beforeRouteLeave:(to,from,next)=>{
    //     if(confirm("确定离开吗？")==true){
    //         next();
    //     }else{
    //         next(false);
    //     }
    // }
}
</script>
