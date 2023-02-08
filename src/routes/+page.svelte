<svelte:head>
    <title>News Homepage</title>
</svelte:head>

<script lang="ts">
    import Nav from './Nav.svelte'
    import Main from './Main.svelte'
    import News from './News.svelte'
    import Popular from './Popular.svelte'
    import type {returnData} from "./types"

    export let data:returnData;
</script>

<div class="app">
    <Nav />
    <Main {data}/>
    <News {data} />
    <Popular {data} />
</div>

<style lang="scss">
    .app{

        @media (min-width: 376px) {
            padding-inline: 10%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 2fr 1fr;
            height: 100vh;
            // background-color: #f00;
        }
    }
</style>