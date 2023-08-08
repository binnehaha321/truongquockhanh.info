import { MetadataRoute } from "next";

const url = `https://${process.env.VERCEL_URL}`;

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: `https://${url}/sitemap.xml`,
	};
}
