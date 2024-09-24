<script setup lang="ts">
  import { ref } from 'vue';
  import SlotMachine from '@/components/SlotMachine.vue';
  import Button from '@/components/Button.vue';
  
  // Referência ao componente filho
  const slotMachine: any = ref<InstanceType<typeof SlotMachine> | null>(null);
  
  const rollSlots = () => {
	if (slotMachine.value) {
	  slotMachine.value.rollAll(); // Método exposto do componente filho
	}
  };
  </script>

<template>
	<div class="flex flex-column justify-content-center align-items-center">
	  <SlotMachine ref="slotMachine" />
	  <Button text="Apostar" @click="rollSlots"/>
	</div>
  </template>
  