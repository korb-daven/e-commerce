<template>
    <div class="panel">
        <h1 class="Title">Don't miss amazing grocery deals</h1>
        <p class="Text">Sign up for the daily newsletter</p>
        <div class="email">
            <div style="display: flex; justify-content: center; align-items: center;">
                <p style="color: #B6B6B6; font-size: 14px; margin-top: 14px;">Your email address</p>
            </div>
            <button class="sub">Subscribe</button>
        </div>
        <img src="../assets/image/panel.png" alt="" style="width: 700px;height: 520px;position: absolute;top: 0px;right: 0px;">
    </div>
</template>

<script>
export default{
    name:"PanelComponent"
}
</script>
<style>
.sub{
    height: 100%;
    width: 149px;
    border-radius: 30px;
    border: none;
    background-color: #3BB77E;
    color: white;
    font-weight: 600;
}
.panel{
    width: 1500px;
    height: 500px;
    margin-top: 50px;
    border-radius: 30px;
    background-color: #FDC04033;
    position: relative;

}
.panel::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.2;
    z-index: 1;
}
.Title{
    width: 700px;
    position: absolute;
    top: 50px;
    left: 100px;
    z-index: 2;
    font-size: 50px;
    font-weight: 500;
}
.Text{
    position: absolute;
    top: 290px;
    left: 100px;
    z-index: 2;
    font-size: 30px;
    font-weight: 400;
}
.email{
    width: 400px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    background-color: #FFFFFF;
    position: absolute;
    top: 390px;
    left: 100px;
    z-index: 2;
    display: flex;
    padding-left: 20px;
}
</style>