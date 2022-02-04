module.exports = {
    root: true,
    plugins: ['html', 'jinja2-processor'],
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    settings: {
        'html/report-bad-indent': 'error',
    },
};
