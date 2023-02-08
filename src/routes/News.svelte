<script lang="ts">
	import type { blogData, returnData } from "./types";
    export let data: returnData

    let news:blogData[] = (data.news) ? data.news : []

</script>

<div class="news">
    <h2 class="news__title">New</h2>
    <div class="news__content">
        <!-- <div class="news__content__blog"> -->
            {#each news as entry}
                <div class="news__content__entry">
                    <a href="/" class="news__content__entry__title">{entry.title}</a>
                    <p class="news__content__entry__description">{entry.description}</p>
                </div>
            {/each}
        <!-- </div> -->
    </div>
</div>

<style lang="scss">
    .news{
        margin: 60px 12px;
        padding: 20px;
        background-color: $very-dark-blue;
        color: $off-white;

        &__title{
            font-size: 3.6rem;
            color: $soft-orange;
        }

        &__content{
            &__entry{
                padding-block: 28px;

                &:nth-child(2){
                    border-bottom: 1px solid $dark-grayish-blue; 
                    border-top: 1px solid $dark-grayish-blue; 
                }
                
                &__title{
                    font-size: 2rem;
                    color: $off-white;
                    text-decoration: none;
                    font-weight: 700;
                    margin-bottom: 12px;
                    display: block;
                    transition: color .1s ease-in;

                    &:hover{
                        color: $soft-orange;
                    }
                }

                &__description{
                    color: $grayish-blue;
                    line-height: 2rem;
                }
            }
        }

        @media (min-width: 376px) {
            margin-top: 80px;
        }
    }
</style>