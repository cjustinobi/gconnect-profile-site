<template>
    <div class="app-main">
        <div>
            <nuxt/>
        </div>
        <div class="mobile-version">
            <MobileFooter/>
        </div>
    </div>
</template>

<script>
    import MobileFooter from '../components/MobileFooter'

    export default {

        components: { MobileFooter }

    }
</script>

<style>
    @import '../assets/font-awesome/css/font-awesome.min.css';
    html, body{
        height: 100%;
        margin: 0;
        font-family: 'Quicksand', 'Open Sans', sans-serif;
    }
    * {
        outline: none;
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        border: 0;
    }
    img{
      height: auto;
      width: 100%;
    }
    select > option, input, textarea{
        padding-left: 15px;
        height: 40px;
        border: 1px #e8e8e8 solid;
        border-radius: 4px;
    }
    button{
        cursor: pointer;
    }
    @media(min-width: 768px) {
        .mobile-version{
            display: none;
        }
        .app-main{
            display: grid;
            grid-auto-rows: 1fr auto;
        }
    }

    @media(max-width: 767px) {
        .app-main{
            display: grid;
            grid-auto-rows: 1fr auto;
        }
    }

</style>
