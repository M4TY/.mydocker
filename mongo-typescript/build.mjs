import esbuild from 'esbuild';

const options = {
    bundle: true,
    platform: 'node',
    target: 'node16.0',
    minify: true,
    format: 'cjs',
    outdir: 'build',
    entryPoints: ['src/index.ts'],
    external: ['@prisma/client'],
    treeShaking: true,
}

esbuild.build(options).then(() => {
    console.log('Build complete');
});