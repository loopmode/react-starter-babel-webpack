export default {
    path: 'settings',
    text: 'Settings',
    getComponents(cb) {
        require.ensure([], (require) => {
            cb(null, require('./SettingsPage'));
        });
    }
};
