import { MetadataRoute } from "next";
import { url } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url,
			lastModified: new Date(),
		},
		{
			url: `${url}/about`,
			lastModified: new Date(),
		},
		{
			url: `${url}/experience`,
			lastModified: new Date(),
		},
		{
			url: `${url}/work`,
			lastModified: new Date(),
		},
		{
			url: `${url}/contact`,
			lastModified: new Date(),
		},
	];
}
