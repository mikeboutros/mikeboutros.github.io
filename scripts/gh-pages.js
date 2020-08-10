const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/mikeboutros/mikeboutros.github.io.git',
        user: {
            name: 'mb',
            email: '40812568+mikeboutros@users.noreply.github.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
