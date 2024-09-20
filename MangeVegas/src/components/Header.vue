<script setup lang="ts">
import { type Ref, ref } from 'vue';
import { changeLanguage } from '@/i18n/i18n';

const isLangMenuVisible = ref(false);

console.log(isLangMenuVisible.value);


const showLangMenu = () => {
    isLangMenuVisible.value = true;
    console.log(isLangMenuVisible.value);
};

const hideLangMenu = () => {
    isLangMenuVisible.value = false;
    console.log(isLangMenuVisible.value);
};
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/"><img src="https://www.cyberpunk.net/build/images/home8/logo-franchise-black-en@1x-567991b0.png"></RouterLink>
            
            <ul>
                <li class="menu-items" ><RouterLink to="/">{{ $t('HEADER.HOME') }}</RouterLink></li>
                <li class="menu-items" ><RouterLink to="/tokens">{{ $t('HEADER.TOKENS') }}</RouterLink></li>
                <li class="menu-items" id="lang" @mouseover="showLangMenu" @mouseleave="hideLangMenu">
                    {{ $t('HEADER.LANGUAGES') }}
                    <ul v-if="isLangMenuVisible" class="lang-menu">
                        <li @click="changeLanguage('br')">Português</li>
                        <li @click="changeLanguage('en')">English</li>
                        <li @click="changeLanguage('es')">Español</li>
                        <li @click="changeLanguage('de')">Deutsch</li>
                    </ul>
                </li>
                <li id="play-background"><RouterLink to="/slot-machine" id="play">{{ $t('HEADER.SLOTMACHINE') }}</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    header {
        position: fixed;
        top: 0;
        padding: 10px 40px;
        width: 100%;
        z-index: 1;
        
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;

            
            ul {
                background: rgba($color: #000000, $alpha: 0.5);
                backdrop-filter: blur(3px);
                border: 1px solid var(--neon-yellow);
                display: flex;
                list-style: none;


                li {
                    padding: 8px 20px;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    font-family: 'BlenderProBook', sans-serif;
                    color: var(--white);
                    font-weight: 400;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    a {
                        font-family: 'BlenderProBook', sans-serif;
                        color: var(--white);
                        font-weight: 400;
                        cursor:pointer;
                        text-decoration: none;
                    }

                    #play {
                        color: #000000;
                        font-weight: 700;
                    }
                }

                #play-background {
                    background-color: var(--neon-yellow);
                }

                .menu-items:hover {
                    background-color: var(--neon-yellow);

                    a {
                        color:var(--black);
                    }
                }

                #lang {
                    position: relative;

                    &:hover {
                        color: #000;
                    }

                    &::after {
                        box-sizing: inherit;
                        border-left: 4px solid transparent;
                        border-right: 4px solid transparent;
                        border-top: 6px solid #fff;
                        content: "";
                        display: block;
                        height: 6px;
                        margin-left: 4px;
                        position: relative;
                        width: 8px;
                    }

                    &:hover::after {
                        border-top-color: #000;
                    }

                    .lang-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        background: rgba(0, 0, 0, 0.6);
                        border: 1px solid var(--neon-yellow);
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        flex-direction: column;

                        li {
                            padding: 10px;
                            color: #fff;
                            display: flex;
                            justify-content: flex-start; // Justifica à esquerda
                            align-items: center; // Alinha verticalmente

                            &:hover {
                                color: var(--neon-yellow);
                            }

                            &::before {
                                background: var(--neon-yellow);
                                content: "";
                                height: 1px;
                                margin-right: 11px;
                                width: 12px;
                            }
                        }
                    }
                }
            } 
        }
    }
    
</style>