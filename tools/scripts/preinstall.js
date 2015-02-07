var async_exec = require('child_process').exec;

// http://documentup.com/arturadib/shelljs
async_exec('npm install shelljs', function (err, stdout, stderr) {
  require('shelljs/global');

  var oscheck = require('../lib/oscheck');

  var sudoStr =  (oscheck.isLinux || oscheck.isMac) ? 'sudo ' : '';
  var cmd = '';

  var installedSomeGlobalFlag = false;

  if(!which('gulp')) {
    echo('gulp is missing...taking care of that now.');
    cmd = sudoStr + 'npm install --global gulp';
    echo(cmd); exec(cmd);
    installedSomeGlobalFlag = true;
  }

});
