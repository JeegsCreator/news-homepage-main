<script>
    import { base } from '$app/paths'
</script>

<ul class='nav__menu__container__ul'>
    <li class="nav__menu__container__ul__li">
        <a href="{base}/"
            class="nav__menu__container__ul__li__a"
        >home</a>
    </li>
    <li class="nav__menu__container__ul__li">
        <a href="{base}/"
            class="nav__menu__container__ul__li__a"
        >new</a>
    </li>
    <li class="nav__menu__container__ul__li">
        <a href="{base}/"
            class="nav__menu__container__ul__li__a"
        >popular</a>
    </li>
    <li class="nav__menu__container__ul__li">
        <a href="{base}/"
            class="nav__menu__container__ul__li__a"
        >trending</a>
    </li>
    <li class="nav__menu__container__ul__li">
        <a href="{base}/"
            class="nav__menu__container__ul__li__a"
        >categories</a>
    </li>
</ul>

<style lang='scss'>
    .nav__menu__container{
        &__ul{
                    background-color: $off-white;
                    width: 70%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    z-index: 10;
                    position: absolute;
                    // visibility: hidden;
                    // opacity: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    padding-top: 30%;
                    padding-inline: 20px;
                    gap: 24px;

                // to responsive:
                // position: relative;
                // display: flex;
                // justify-content: space-around;
                // gap: 30px;
                
                &__li{
                    list-style: none;
                    
                    &__a{
                        position: relative;
                        text-decoration: none;
                        text-transform: capitalize;
                        font-size: 1.6rem;
                        color: $black;
                        transition: color .15s ease-in;

                        &:hover{
                            color: $soft-red;
                        }
                    }
                }

                @media (min-width: 710px) {
                    background-color: transparent;
                    height: 70px;
                    flex-direction: row;
                    justify-content: flex-end;
                    padding-top: 0;
                    align-items: center;
                }
            }
    }
    
</style>