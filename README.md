Tiny-CTF-Platform
================

`Tiny-CTF-Platform` is an open-source (jeopardy style) CTF platform. It is relatively easy to set up and modify.
I will to try and make it work as well as I can, and add new features.

![alt text](http://i.imgur.com/dqGeLNM.jpg "Tiny-CTF-Platform in action")

Deployment
----------

[Debian Based](https://github.com/huner2/Tiny-CTF-Platform/blob/master/DebianInstall.md)

[.RPM Based](https://github.com/huner2/Tiny-CTF-Platform/blob/master/RPMInstall.md)

[Windows](https://github.com/huner2/Tiny-CTF-Platform/blob/master/WindowsInstall.md)

[OSX](https://github.com/huner2/Tiny-CTF-Platform/blob/master/OSXInstall.md)

After installation, if you want users that aren't on your network to be able to access the website, there are a few [additional steps](https://github.com/huner2/Tiny-CTF-Platform/blob/master/External.md)

[Customization](https://github.com/huner2/Tiny-CTF-Platform/blob/master/Customization.md)
-------

Caveats
-------

* The platform does not support tasks with the same score and category right now

Pending Features
-------

* ~~Hint text that can be displayed after a `show` button is pressed on the task pages.~~ Done.
* ~~Customizable minimum password length requirement~~ Done.
* ~~CSRF Security - Implemented a basic Javascript CSRF security system.  It is annoying though as pages (other than the index page) that are accessed directly through the url bar, will be treated as CSRF attempts.~~ Removed.
* ~~More advanced CSRF security~~ Done.
* Working on allowing multiple tasks with the same score and category.

Contact
-------
Need additional help, found a bug, or found a security-flaw?

Contact me at:
* hrross86@gmail.com
* <a href='https://www.linkedin.com/in/hrross86?trk=profile-badge'>Hunter Ross on LinkedIn</a>

or
* Submit it in the [issues](https://github.com/huner2/Tiny-CTF-Platform/issues) 
