<script>
	import { debounce } from '$lib/utils/debounce.js';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	export let value = '';
	export let placeholder = 'Digite um nome...';
	export let debounceTime = 800;

	const dispatch = createEventDispatcher();

	const updateUrl = debounce((name) => {
		if (name.trim()) {
			goto(`/?name=${encodeURIComponent(name.trim())}`, { replaceState: true });
			dispatch('input-complete', { name });
		}
	}, debounceTime);

	function handleInput(event) {
		value = event.target.value;
		updateUrl(value);
	}
</script>

<input
	type="text"
	bind:value
	placeholder={placeholder}
	on:input={handleInput}
	aria-label="Nome"
/>

<style>
input {
  max-width: 500px;
  width: 100%; 
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid #ccc;
  outline: none;
  white-space: nowrap; 
  overflow: hidden;   
  text-overflow: ellipsis; 
}

:global(.pirate) input {
  border: 2px solid #f0e68c;
  background: #111;
  color: #ffd700;
}
</style>
