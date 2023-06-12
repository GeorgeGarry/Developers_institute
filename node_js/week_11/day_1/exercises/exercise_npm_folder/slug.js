const slugify = require('slugify');


console.log(slugify('so me str  ing', '_'));

slugify('some string', {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: false,      // convert to lower case, defaults to `false`
    strict: false,     // strip special characters except replacement, defaults to `false`
    locale: 'vi',      // language code of the locale to use
    trim: true         // trim leading and trailing replacement chars, defaults to `true`
  });

process.once('SIGUSR2', function () {
gracefulShutdown(function () {
    process.kill(process.pid, 'SIGUSR2');
});
});