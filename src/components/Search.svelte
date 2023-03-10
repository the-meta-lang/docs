<script lang="ts">
		import Fuse from 'fuse.js';
	import { onMount } from 'svelte';
	export let list: any[];

	const options = {
		keys: ['frontmatter.title', 'frontmatter.description'],
		includeMatches: true,
		minMatchCharLength: 2,
		threshold: 0.5,
	};

	const fuse = new Fuse(list, options);


	let focusedEntries: any[] = [];
	let showSearchEntries = false;
	const handleSearch = (e: Event & { currentTarget: EventTarget & HTMLInputElement; }) => {
		const posts = fuse.search(e.currentTarget.value).map((result) => result.item).slice(0, 5);
		focusedEntries = posts;

		showSearchEntries = true;
	}

	onMount(() => document.body.addEventListener("click", () => showSearchEntries = false))
</script>

<input type="text" on:input={handleSearch} class="rounded-lg border px-3 py-1 outline-none focus:bg-slate-100 hover:bg-slate-50 transition-colors" placeholder="Search...">

{#if showSearchEntries}
	<div class="fixed top-[4rem] right-0 bg-white w-[100%] border-b flex flex-col gap-4 py-4 rounded-b-lg lg:w-[400px] lg:border-l">
		{#each focusedEntries as entry}
			<a href={entry.url} class="hover:bg-slate-100 px-4">
				<h2 class="underline">{entry.frontmatter.title}</h2>
				<p class="text-slate-600">{entry.frontmatter.description}</p>
			</a>
		{/each}
	</div>
{/if}
