import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.lib.json',
        exclude: ['**/*.stories.tsx', '**/*.test.tsx', 'src/App.tsx', 'src/main.tsx'],
      }),
    ],
    external: ['react', 'react-dom', '@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion', 'lucide-react'],
  },
  {
    input: 'src/components/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];