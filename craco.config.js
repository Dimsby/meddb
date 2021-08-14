const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@domains': resolvePath('./src/domains'),
            '@assets': resolvePath('./src/assets')
        }
    }
}