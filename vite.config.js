import { defineConfig } from "vite";

export default defineConfig({
	// Base public path when served in development or production.
	base: "/prime-game",

	// Directory to serve as the root for resolving entry files and assets.
	root: process.cwd(),

	// Directory for the output files (build directory).
	outDir: "dist",

	// Set to true to enable sourcemaps in production builds.
	sourcemap: false,

	// Configure the development server.
	server: {
		port: 3000, // Default development server port
		open: true, // Whether to open the browser automatically
		https: false, // Whether to use HTTPS
		cors: true, // Allow CORS
	},

	// Configure the build process.
	build: {
		minify: "terser", // Minification method ('terser' or 'esbuild')
		target: "esnext", // Output target (esnext, es2020, etc.)
		cssCodeSplit: true, // Enable CSS code splitting
		manifest: false, // Generate manifest.json for caching
	},

	// Configure plugins for Vite.
	plugins: [],
});
