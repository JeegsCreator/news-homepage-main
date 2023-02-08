<script>
    import { onMount } from 'svelte';
    import Logo from '$lib/images/logo.svg'
    import Menu from '$lib/images/icon-menu.svg'
    import MenuClose from '$lib/images/icon-menu-close.svg'
    import {fly, fade} from 'svelte/transition'
    import MenuList from './MenuList.svelte'
    let menuVisible = false
    
    function toggleMenu() {
        menuVisible = !menuVisible
    }
    
    const menuAnimationInfo = {
        duration: 300,
        delay: 300,
        x: 200
    }

    onMount(() => {
        if (screen.width > 375) {
            menuVisible = true
            menuAnimationInfo.delay = 0
            menuAnimationInfo.duration = 0
        }
    })
</script>

<nav class='nav'>
    <picture class="nav__logo">
        <img class="nav__logo__img" src={Logo} alt="logo">

    </picture>
    <div class="nav__menu">
        <button on:click={toggleMenu} on:keydown={toggleMenu}
            class="nav__menu__button">
            <img  class="nav__menu__button__icon" alt="menu icon" src={menuVisible ? MenuClose : Menu }>
        </button>
        <!-- {#key menuVisible} -->
            {#if menuVisible}
                <div  
                    in:fade={{duration: menuAnimationInfo.duration}} 
                    out:fade={{duration: menuAnimationInfo.duration, delay: menuAnimationInfo.delay}} 
                    class={`nav__menu__container ${menuVisible}`}
                >
                    <div 
                        in:fly={{duration: menuAnimationInfo.duration, delay: menuAnimationInfo.delay, x: menuAnimationInfo.x}} 
                        out:fly={{duration: menuAnimationInfo.duration, x: menuAnimationInfo.x}} 
                    >
                        <MenuList />
                    </div>
                </div>
            {/if}
        <!-- {/key} -->
    </div>
</nav>

<style lang="scss">
    
    .nav{
        position: fixed;
        background-color: $off-white;
        width: 100%;
        height: 70px;
        padding: 20px 12px;
        z-index: 1;
        display: grid;
        align-items: center;
        grid-template-columns: 70px 1fr;

        &__logo{
            height: calc(70px - 20px * 2);
            &__img{
                height: 100%;
            }
        }
        
        &__menu{
            display: flex;
            flex-direction: row-reverse;
            // background-color: $soft-red;

            &__button{
                border: none;
                z-index: 100;
                position: relative;
                display: flex;
                align-items: center;

                &__icon{
                    position: absolute;
                    right: 0;
                }
            }

            &__container{
                background-color: color.adjust($very-dark-blue, $alpha: -0.5);
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100vh;
                overflow: hidden;
                transition: opacity .2s ease-in, visibility 0s ease-in;
                transition-delay: 0, 0;
                
            }
            
        }

        @media (min-width: 376px) {
            width: 80%;

            &__menu{
                &__button{
                    display: none;
                }

                &__container{
                    background-color: transparent;
                    height: auto;
                }
            }
        }
    }
</style>