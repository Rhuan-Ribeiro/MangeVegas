<script setup lang="ts">

</script>

<template>
    <header>
        <nav>
            <RouterLink to="/"><img src="https://www.cyberpunk.net/build/images/home8/logo-franchise-black-en@1x-567991b0.png"></RouterLink>
            
            <ul>
                <li ><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/tokens">Tokens</RouterLink></li>
                <li id="play-background"><RouterLink to="/slot-machine" id="play">Slot Machine</RouterLink></li>
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
                border: 1px solid #fcee0a;
                display: flex;
                list-style: none;


                li {
                    padding: 8px 20px;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    a {
                        font-family: 'BlenderProBook', sans-serif;
                        color: var(--white);
                        text-decoration: none;
                        font-weight: 400;
                    }

                    #play {
                        color: #000000;
                        font-weight: 700;
                    }

                    a:hover {
                        color:var(--black); 
                        text-decoration:none; 
                        cursor:pointer;
                        
                    }  
                }

                #play-background {
                    background-color: #fcee0a
                }

                li:hover {
                    background-color: #fcee0a;
                }
            } 
        }
    }
    
</style>