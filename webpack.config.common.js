module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'mtbjorn-firestorm.js',
        library: 'firestorm',
        libraryTarget: 'umd',
        umdNamedDefine: true
      },
    resolve: {
        extensions: ['', '.js', '.mjs'],
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: /node_modules\/@firebase/
            }
        ]
    }
};
