module.exports = {
    root: true,
    plugins: ['html', 'jinja2-processor'],
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    settings: {
        'html/report-bad-indent': 'error',
    },
};
