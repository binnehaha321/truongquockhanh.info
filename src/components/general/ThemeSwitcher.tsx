"use client";

import { useState, useEffect } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import IconButton from "@/components/general/IconButton";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	// until the UI is mounted, display a dummy icon
	if (!mounted) {
		return (
			<IconButton aria-label="Show this first dummy icon when the UI is unmounted">
				<Sun />
			</IconButton>
		);
	}

	return (
		<IconButton aria-label="Switch theme" onClick={toggleTheme}>
			{theme === "dark" ? <Sun /> : <MoonStar />}
		</IconButton>
	);
};

export default ThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
