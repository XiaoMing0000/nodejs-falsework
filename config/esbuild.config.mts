import * as esbuild from 'esbuild';

await esbuild.build({
	entryPoints: { index: 'src/index.ts' },
	outdir: './dist/',
	entryNames: '[name]',
	assetNames: '[name]',
	bundle: true,
	platform: 'node',
	format: 'cjs',
	sourcemap: false,
	minify: true,
	external: ['dotenv'],
});
