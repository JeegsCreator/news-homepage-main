<script lang="ts">
    import type { returnData } from './types'
    export let data:returnData

    let popular:blogData[] = (data.popular) ? data.popular : []
</script>

<div class="popular">
    {#each popular as entry, i}
        <div class="popular__entry">
            <img src={entry.image} alt={entry.title} class="popular__entry__img">
            <div class="popular__entry__info">
                <p class="popular__entry__info__number">
                    0{i+1}
                </p>
                <a href="/" class="popular__entry__info__title">
                    {entry.title}
                </a>
                <p class="popular__entry__info__description">
                    {entry.description}
                </p>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .popular{
        margin: 12px;
        margin-bottom: 70px;
        display: grid;
        grid-auto-rows: 1fr;
        gap: 54px;

        &__entry{
            display: grid;
            grid-template-columns: 4fr 7fr;
            gap: 20px;

            &__img{
                width: 100%
            }

            &__info{
                &__number{
                    font-size: 4rem;
                    font-weight: 700;
                    color: $grayish-blue;
                }
                
                &__title{
                    display: inline-block;
                    font-weight: 800;
                    text-decoration: none;
                    margin-block: 8px;
                    color: $very-dark-blue;
                    transition: color .15s ease-in;
                    cursor: pointer;

                    &:hover{
                        color: $soft-red;
                    }
                }

                &__description{
                    color: $dark-grayish-blue;
                }
            }
        }

        @media (min-width: 376px) {
            grid-column: 1/4;
            grid-template-columns: repeat(3, 1fr)
        }
    }
</style>