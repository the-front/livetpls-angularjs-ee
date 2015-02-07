# livetpls-angularjs-ee : Installation

## Manual installation

### WebStorm

* [WebStorm](https://www.jetbrains.com/webstorm/) - [Project and IDE Settings](https://www.jetbrains.com/webstorm/help/project-and-ide-settings.html)

copy `*.xml` from `/templates` to:

* Windows

  * `<User home>\.WebStormX\config\templates`

`<User home>` in WindowsXP is `C:\Documents and Settings\<User name>\`; in Windows Vista it is `C:\Users\<User name>\`

* Linux

  * `~/.WebStormX/config/templates`

* Mac

  * `~/Library/Preferences/WebStormX/templates`


### IntelliJ IDEA

* [IntelliJ IDEA](https://www.jetbrains.com/idea/) - [Project and IDE Settings](https://www.jetbrains.com/idea/help/project-and-ide-settings.html)

> For IntelliJ IDEA Community edition the folder name is `.IdeaICXX`

copy `*.xml` from `/templates` to:

* Windows

  * `<User home>\.IntelliJIdeaXX\config\templates`

`<User home>` in WindowsXP is `C:\Documents and Settings\<User name>\`; in Windows Vista it is `C:\Users\<User name>\`

* Linux

  * `~/.IntelliJIdeaXX/config/templates`

* Mac

  * `~/Library/Preferences/IntelliJIdeaXX/templates`


## Automated installation

> Gulp tasks based on manual installation infos to copy live templates xmls to IDE templates directory resolving which OS (Windows, Linux and Mac) and IDE directory

* clone or download project

* install node dependencies

`$ npm install`

* run Gulp task

  * templates dir options:

    * **WebStorm :** `gulp --install`

    * **IntelliJ IDEA :** `gulp --install --idea`

    * **IntelliJ IDEA Community :** `gulp --install --idea --community`

  * specify IDE version family:

    * `--ideVersion={number}`


