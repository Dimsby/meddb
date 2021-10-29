const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        /*
        configure: {
            target: 'web'
        },*/
        alias: {
            '@components': resolvePath('./src/components'),
            '@domains': resolvePath('./src/domains'),
            '@assets': resolvePath('./src/assets'),
            '@models': resolvePath('./public/app/models'),
            '@controllers': resolvePath('./public/app/controllers')
        }
    }
}