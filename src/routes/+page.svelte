<script>
	import '../app.css';
	import PirateInput from '$lib/components/PirateInput.svelte';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';

	export let data;

	let name = data.name;
</script>

<svelte:head>
		<link
			href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap"
			rel="stylesheet"
		/>
</svelte:head>

<main class="layout">
	<Header />

	<section class="content">
		<div class="title-area span-bg">
			<h1>Descubra sua Idade Pirata 🏴‍☠️</h1>
			<p class="sub">Baseado em seu nome, o oráculo dos mares vai prever sua idade!</p>
		</div>

		<PirateInput bind:value={name} />

		<div class="result-wrapper">
			{#if data?.age}
				<p class="result">
					<span class="span-bg">
						{`O infame ${data.name} tem aproximadamente ${data.age} anos! 🗺️`}
					</span>
				</p>
			{:else if data.name}
				<p class="result">
					<span class="span-bg">
						{`Não encontramos ${data.name} nos mares...`}
					</span>
				</p>
			{:else}
				<p class="result">
					<span class="span-bg">
						{'Digite um nome para consultar os registros da Grand Line...'}
					</span>
				</p>
			{/if}
		</div>
	</section>

	<div class="footer-space"></div>
</main>

<style>
	p {
		color: #0a1417;
	}

	.content {
		max-width: 600px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding: 2rem 1rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		text-align: center;
	}
	.result-wrapper {
		max-width: 600px;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		padding-top: 1rem;
		box-sizing: border-box;
	}
	.result {
		margin: 0;
		padding: 0;
		text-align: center;
		word-wrap: break-word;
		overflow-wrap: break-word;
		white-space: normal;
		max-width: 100%;
		box-sizing: border-box;
	}

	.span-bg {
		background: #cfa363 url('/images/span-bg.png') no-repeat center center;
		background-size: 100% 100%;
		padding: 5px 10px;
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
		border: 2px solid #534e41;
		border-radius: 8px;
		font-size: 15px;
		display: inline-block;
		word-wrap: break-word;
		overflow-wrap: break-word;
		white-space: normal;
		box-sizing: border-box;
		max-width: 600px;
		width: 100%;
		display: inline-block;
	}

	.title-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.title-area h1 {
		font-size: 2rem;
	}

	.sub {
		font-size: 1rem;
	}

	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: url('/images/background-wallpaper.webp') no-repeat center center;
		background-size: cover;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		gap: 1.5rem;
		text-align: center;
	}

	.footer-space {
		height: 1px;
	}
</style>
