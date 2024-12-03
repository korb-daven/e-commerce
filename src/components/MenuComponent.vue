<script>
export default{
    name: 'MenuComponent',
    props: ['title', 'groups'],
    methods: {

    }
}

</script>
<template>
    <div class="container w-sc">
        <div class="title">{{title}}</div>
        <div class="list-gp">
            <span>All</span>
            <template v-for="group in groups">
                <div class="item">
                    {{group}}
                </div>
            </template>
        </div>
    </div>
    
    
    
</template>
<style scoped>
.container{
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title{
    font-size: 28px;
    font-weight: bold;
}
.list-gp{
    display: flex;
    gap: 28px;
}
span{
    cursor: pointer;
    font-weight: 700;
}
.item{
    cursor: pointer;
    font-weight: 400;
}
</style>