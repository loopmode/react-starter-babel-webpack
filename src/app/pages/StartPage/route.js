export default {
    path: 'start',
    text: 'Start page',
    getComponents(cb) {
        require.ensure([], (require) => {
            cb(null, require('./StartPage'));
        });
    }
};
