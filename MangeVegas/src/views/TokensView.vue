<script setup lang="ts">
    import { type Ref, ref, reactive } from 'vue';
    import { currency } from "@/models/Currency";
    import { getEthereum, getBitcoin, getSolana, getAvalanche } from "@/services/currency.service";

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
</script>

<template>
    <main>
        <h1>Tokens</h1>
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
                <th scope="row">Ethereum</th>
                <td>R$ {{ ethereum.bid }}</td>
                <td>R$ {{ ethereum.ask }}</td>
                </tr>
                <tr>
                <th scope="row">Bitcoin</th>
                <td>R$ {{ bitcoin.bid }}</td>
                <td>R$ {{ bitcoin.bid }}</td>
                </tr>
                <tr>
                <th scope="row">Solana</th>
                <td>R$ {{ solana.bid }}</td>
                <td>R$ {{ solana.bid }}</td>
                </tr>
                <tr>
                <th scope="row">Avalanche</th>
                <td>R$ {{ avalanche.bid }}</td>
                <td>R$ {{ avalanche.bid }}</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style scoped lang="scss">
main {
    height: 95vh;
    width: 100vw;
}
table {
    border-collapse: collapse;
    border: 2px solid #DDD;
    font-size: 1rem;
    letter-spacing: 0.5px;
    background: rgba($color: #000000, $alpha: 0.2);

    thead {
        background-color: #000;
        th {
            color: #FFF;
        }
    }

    th,
    td {
        border-bottom: 1px solid rgba($color: #DDD, $alpha: 0.6);
        padding: 12px 5px 12px 8px;
    }
}
</style>