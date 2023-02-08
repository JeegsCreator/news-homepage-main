<svelte:head>
    <title>News Homepage</title>
</svelte:head>

<script lang="ts">
    import Nav from './Nav.svelte'
    import Main from './Main.svelte'
    import News from './News.svelte'
    import Popular from './Popular.svelte'
    import type {returnData} from "./types"
    import RetroPc from "../lib/images/image-retro-pcs.jpg"
    import TopLaptops from "../lib/images/image-top-laptops.jpg"
    import GamingGrowth from "../lib/images/image-gaming-growth.jpg"

const data:returnData = {
        main: {
            title: 'The Bright Future of Web 3.0?',
            description: 'We dive into the next evolution of the web that claims to put the power of platforms back into the hands of the people. But is it really fulfilling its promise?'
        },
        news: [
            {
                title: 'Hydrogen VS Electric Cars',
                description: 'Will hydrogen-fueled cars ever catch up to EVs'
            },
            {
                title: 'The Downsides of AI Artistry',
                description: 'What are the possible adverse affects of on-demand AI image generation?'
            },
            {
                title: 'Is VC Funding Drying Up',
                description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
            }
        ],
        popular: [
            {
                title: 'Reviving Retro PCs',
                description: 'What happens when old PCs are given modern upgrades?',
                image: RetroPc
            },
            {
                title: 'Top 10 Laptops of 2022',
                description: 'Our best picks for various needs and budgets.',
                image: TopLaptops
            },
            {
                title: 'The Growth of Gaming',
                description: 'How the pandemic has sparked fresh opportunities.',
                image: GamingGrowth
            }
        ],
    }
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