<script lang="ts">
    import type {returnData, blogData} from "./types"
    export let data:returnData;
    import { base } from '$app/paths'

    let main:blogData;

    if(data.main) {
        main = data.main
    }
</script>

<main class="main">
    <picture class="main__pic-container">
        <!-- <img src={MobilePic} alt="cover" width="300"> -->
        <div class="main__pic-container__img"></div>
    </picture>
    <h1 class="main__title">{main.title}</h1>
    <div class="main__info">
        <p class="main__description">{main.description}</p>
        <a href="{base}/" class="main__link">read more</a>
    </div>
</main>

<style lang="scss">
    .main{
        padding-inline: 12px;
        padding-top: 80px;

        &__pic-container{
            &__img{
                width: 100%;
                background-image: url("$lib/images/image-web-3-mobile.jpg");
                // height: 45vh;
                aspect-ratio: 8/7;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        }

        &__title{
            font-size: 4.2rem;
            line-height: 4.2rem;
            font-weight: 800;
            margin-block: 16px;
        }
        
        &__description{
            margin-block: 16px;
            line-height: 2.2rem;
            color: $dark-grayish-blue;
            
        }

        
        &__link{
            display: inline-block;
            // margin-block: 16px;
            text-decoration: none;
            background-color: $soft-red;
            color: $off-white;
            // font-weight: 700;
            text-transform: uppercase;
            padding: 16px 24px;
            letter-spacing: 8px;
            cursor: pointer;
            transition: background-color .1s ease-in;
            
            &:hover{
                background-color: $very-dark-blue;
            }
        }

        @media (min-width: 376px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column: 1/3;
            gap: 40px;
            padding-inline: 12px;

            &__pic-container{
                grid-column: 1/3; 
                
                &__img{
                    background-image: url("$lib/images/image-web-3-desktop.jpg");
                    aspect-ratio: 12/3;
                    height: 100%;
                }
            }

            &__title{
                font-size: 6rem;
                line-height: 6.2rem;

            }
        }
    }
</style>
