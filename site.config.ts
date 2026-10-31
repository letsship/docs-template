import { defineSiteConfig } from "@lets-ship/site/config";

/**
 * The structure of this site. Every key is required. The site's name, description, colours and
 * fonts are not here: they come from brand/brand.dna.json. Schema: https://letsship.ai/schema/site.json
 */
export const site = defineSiteConfig({
	origin: "https://your-company.sites.letsship.ai",
	titleSeparator: "|",
	sections: {
		website: false,
		blog: false,
		docs: {
			path: "/",
			content: "./content/docs",
			// Set this to your repo, for example https://github.com/you/docs/blob/main, to show
			// an "Edit on GitHub" link on every page.
			editUrl: false,
			tabs: [],
		},
	},
	nav: [],
	mdxComponents: [],
	footer: { columns: [], social: "brand-links", badge: true },
	features: { search: true, markdownCopies: true, llms: true },
	integrations: { analytics: { provider: "none" } },
});
