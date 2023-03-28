const {override, addWebpackModuleRule, addWebpackResolve} = require('customize-cra');

module.exports = override(
    addWebpackModuleRule({
        test: /\.m?js/,
        resolve:{
            fallback:{
                crypto: require.resolve('crypto-browserify')
            }
        }
    }),

    addWebpackResolve({fallback:{stream:require.resolve('stream-browserify')}})
)