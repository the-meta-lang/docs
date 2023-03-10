import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import gyroLanguageGrammar from "./src/pages/gyro.tmLanguage";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()],
	trailingSlash: "never",
	markdown: {
		shikiConfig: {
			theme: "min-light",
			langs: [
				{
					id: "gyro",
					scopeName: 'source.gyro',
					grammar: gyroLanguageGrammar,
					aliases: ["gyro", "gy"],
				}
			]
		}
	}
});