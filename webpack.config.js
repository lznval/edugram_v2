const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const entry = env && env.entry ? `./widgets/${env.entry}.tsx` : './widgets/index.tsx';

    return {
        entry: {
            app: entry,
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `${env.entry || 'main'}.[contenthash].js`,
            library: `${env.entry || 'main'}`,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        },
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: `${env.entry || 'main'}.html`,
                template: './index.html'
            }),
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        devServer: {
            compress: true,
            port: 8080,
            open: true,
        }
    }
};
