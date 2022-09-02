
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('@vue/cli-service')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

const getAppName = () => {
    const [, appName] = packageJson.name.split('/');
    return appName.charAt(0).toUpperCase() + appName.slice(1, appName.length);
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/lime-house/':
        '/',
    transpileDependencies: [true],
    configureWebpack: {
        output: {
            libraryTarget: 'system',
            filename: 'js/app.js',
        }
    },
    devServer: {
        host: 'localhost',
    },
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            css: {
                modules: {
                    localIdentName: `${getAppName()}_[name]_[local]_[hash:base64:5],`
                },
            }
        }
    }
}
