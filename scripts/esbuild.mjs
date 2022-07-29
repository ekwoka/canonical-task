import { build } from 'esbuild';

const dev = process.env.NODE_ENV === 'development';

console.time('esbuild');
build({
  entryPoints: ['./src/index.tsx'],
  jsx: 'transform',
  jsxFactory: 'h',
  jsxFragment: 'Frag',
  outfile: './dist/render.js',
  splitting: false,
  format: 'iife',
  bundle: true,
  target: 'esNext',
  platform: 'node',
  minify: false,
  tsconfig: 'tsconfig-esbuild.json',
  watch: dev
    ? {
        onRebuild(err) {
          if (err) console.error('esbuild failed:', err);
          else console.log('esbuild rebuilt');
        },
      }
    : false,
}).then(() => {
  console.log(dev ? 'watching...' : 'JS Build Complete');
  console.timeEnd('esbuild');
});
