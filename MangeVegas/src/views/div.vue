<script setup lang="ts">
defineProps<{ 
	ethereum: currency;
	bitcoin: currency;
	solana: currency;
	avalanche: currency;
}>()
</script>

<template>
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
	                    <td>$ {{ bitcoin.bid }}</td>
	                    </tr>
	                    <tr>
	                    <th scope="row"><img src="/solana.svg" alt="solana icon" class="currency-icons"> Solana</th>
	                    <td>$ {{ solana.bid }}</td>
	                    <td>$ {{ solana.bid }}</td>
	                    </tr>
	                    <tr>
	                    <th scope="row"><img src="/avalanche.svg" alt="avalanche icon" class="currency-icons"> Avalanche</th>
	                    <td>$ {{ avalanche.bid }}</td>
	                    <td>$ {{ avalanche.bid }}</td>
	                    </tr>
	                </tbody>
	            </table>
</template>
