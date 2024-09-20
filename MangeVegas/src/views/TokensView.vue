<script setup lang="ts">
    import { type Ref, ref, reactive, computed } from 'vue';
    import { currency } from "@/models/Currency";
    import { getEthereum, getBitcoin, getSolana, getAvalanche } from "@/services/currency.service";
    import ContentBlock from '@/components/ContentBlock.vue';

    // get coin values ​​from Gemini API
    const ethereum: Ref<currency> = ref();
    const bitcoin: Ref<currency> = ref();
    const solana: Ref<currency> = ref();
    const avalanche: Ref<currency> = ref();

    getEthereum()
    .then((currency) => {
        ethereum.value = currency;
    })
    .catch(error=>console.error(error));

    getBitcoin()
    .then((currency) => {
        bitcoin.value = currency;
    })
    .catch(error=>console.error(error));

    getSolana()
    .then((currency) => {
        solana.value = currency;
    })
    .catch(error=>console.error(error));

    getAvalanche()
    .then((currency) => {
        avalanche.value = currency;
    })
    .catch(error=>console.error(error));

    // Change of direction of exchange
    const isArrowRight = ref(true);

    const toggleArrow = () => {
        isArrowRight.value = !isArrowRight.value;
    };

    const EthereumTrade = computed(() => isArrowRight.value ? '1x' : '0.5x');
    const MangeCoinTrade = computed(() => isArrowRight.value ? '2x' : '1x');



</script>

<template>
    <main>
        <section id="crypto-prices" class="flex justify-content-around position-relative">
            <div id="trade-container" class="flex flex-column justify-content-between align-items-center">
                <h2 class="text-7xl">Trocar Tokens</h2>
                <div class="flex flex-row justify-content-between align-items-center mb-4">

                    <div class="flex flex-row justify-content-center align-items-center">
                        <img src="/ethereum.svg" alt="Ethereum icon" class="h-6rem arrow">
                        <span class="ml-2 text-6xl">{{ EthereumTrade }} Ethereum</span>
                    </div>

                    <img src="/arrow.png" alt="" class="h-4rem m-4"  :class="{ 'rotate-180': !isArrowRight }" @click="toggleArrow">

                    <div class="flex flex-row justify-content-center align-items-center">
                        <img src="/m.png" alt="MangeCoin icon" class="h-6rem">
                        <span class="ml-2 text-6xl">{{ MangeCoinTrade }} MangeCoin</span>
                    </div>
                
                </div>
                
                <div class="flex flex-row justify-content-around align-items-center">
                    <span style="color: red; font-size: 1.2rem; font-weight: bold; margin-right: 1rem;">&#x26A0 Atenção: as trocas estão sujeitas a taxas de câmbio<br>cliques acidentais não serão reembolsados.</span>
                    <button>Trocar</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                    <th scope="col">Moeda</th>
                    <th scope="col">Compra</th>
                    <th scope="col">Venda</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"><img src="/ethereum.svg" alt="ethereum icon" class="currency-icons"> <u>Ethereum</u></th>
                    <td>$ {{ ethereum.bid }}</td>
                    <td>$ {{ ethereum.ask }}</td>
                    </tr>
                    <tr>
                    <th scope="row"><img src="/bitcoin.svg" alt="bitcoin icon" class="currency-icons"> Bitcoin</th>
                    <td>$ {{ bitcoin.bid }}</td>
                    <td>$ {{ bitcoin.ask }}</td>
                    </tr>
                    <tr>
                    <th scope="row"><img src="/solana.svg" alt="solana icon" class="currency-icons"> Solana</th>
                    <td>$ {{ solana.bid }}</td>
                    <td>$ {{ solana.ask }}</td>
                    </tr>
                    <tr>
                    <th scope="row"><img src="/avalanche.svg" alt="avalanche icon" class="currency-icons"> Avalanche</th>
                    <td>$ {{ avalanche.bid }}</td>
                    <td>$ {{ avalanche.ask }}</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section id="alert">
            <div id="separator-top"></div>
            <ContentBlock :title="$t('TOKENS.TITLE')" :paragraph="$t('TOKENS.TIP')"/>
            <div id="separator-bottom"></div>
        </section>
        
    </main>
</template>

<style scoped lang="scss">
#crypto-prices {
    position: relative;
    padding: 50px 10px 88px 10px;
    background-color: #000;
    margin-top: 50px;
    

    #trade-container {
        padding: 20px;
        background-color: #222;
        color: #FFF;
        border-collapse: collapse;
        border: 5px solid var(--neon-yellow);

        h2 {
            text-align: center;
            font-size: 1.8rem;
        }

        img {
            transition: transform 0.5s ease;

            
        }

        .rotate-180 {
                transform: rotate(180deg); /* Rotação de 180 graus */
        }
        

        button {
            border-image: url(https://www.cyberpunk.net/build/images/cp-btn-yellow-fd1ca428.svg) 0 20 fill;
            color: var(--neon-yellow);

            background-color: #222;

            align-items: center;
            border-style: solid;
            border-width: 0 20px;
            cursor: pointer;
            display: inline-flex;
            height: 48px;
            justify-content: center;
            min-width: 232px;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            -webkit-user-select: none;
            user-select: none;

            font-family: 'BlenderProBold',sans-serif;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 110%;
        }
    }
    
    table {
        border-collapse: collapse;
        border: 2px solid #DDD;

        background: #222;

        font-size: 1.5rem;
        letter-spacing: 0.5px;

        thead {
            background-color: #111;
        }

        tbody th {
            border-right: 2px solid #DDD;

            .currency-icons {
                height: 1rem;
                width: 1rem;
            }
        }

        th,
        td {
            border-bottom: 1px solid #AAA;
            padding: 10px 10px 10px 15px;
            text-align: left;
            color: #EEE;
        }

        th {
            font-weight: bold;
            font-size: 1.8rem;
            color: #FFF;
        }

        td {
            font-size: 1.5rem;
        }
    }

    &::after {
    background-image: url(/razor.svg);
    height: 48px;
    width: 100%;
    
    position: absolute;
    bottom: 0;
    left: 0;

    content: "";
  }
}

#alert {
    background-color: var(--neon-yellow);
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 46px 0;
    justify-content: center;
    text-align: center;

    #separator-top {
        width: 47.2916666667vw;
        height: 28px;
        margin-bottom: 10px;
        background-image: linear-gradient(90deg,#000 28px,#fcee0a 0,#fcee0a calc(50% - 14px),#000 calc(50% - 14px),#000 calc(50% + 14px),#fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),#000),linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),#000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),#fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000);
        background-repeat: no-repeat;
        background-size: 100% 2px,100% 28px;
    }

    #separator-bottom {
        width: 47.2916666667vw;
        height: 28px;
        margin-top: 10px;
        background-image: linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),#000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),#fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000),linear-gradient(90deg,#000 28px,#fcee0a 0,#fcee0a calc(50% - 14px),#000 calc(50% - 14px),#000 calc(50% + 14px),#fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),#000);
        background-repeat: no-repeat;
        background-size: 100% 26px,100% 28px;
    }
}
</style>