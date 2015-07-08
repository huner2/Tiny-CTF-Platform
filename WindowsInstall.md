Windows
----------

To deploy `tinyctf-platform` on a Windows platform (Recommend using Windows 7 or later; or Server 2008 or later), follow these instructions:

Make sure you have the latest updates/service pack:

    Use Windows Update to accomplish this
    
Download the .zip file of this repository [Here](https://github.com/huner2/HunerCTF/archive/master.zip)

Unzip it to the location of your choice. *C:\TinyCtf* will be used for these instructions.

Download Python 2.7.10 [Here](https://www.python.org/ftp/python/2.7.10/python-2.7.10.msi)

When you launch the installer, make sure to install all components and **keep the default location**!  As shown here:

![As shown here](http://i.gyazo.com/aa521762680867fc8ee78ba4d5816ab7.png "As shown here")

*If you changed the install location, you will need it for this next part*

After Python is done installing, open command prompt as an Administrator.

Then execute these commands:

Add python to PATH

    setx path "%path%;C:\Python27;"         (Change C:\Python27 to your installation path if you did not use the default)
    
Close command prompt

Download [This](http://download1350.mediafire.com/gs5wknqo6xog/exbz1170imgbyh8/ez_setup.py) file and run it.

Wait for it to finish the install.  (The command prompt window will close automatically when it is finished)

Re-open command prompt as an Administrator.

Run these commands:

Move into the directory

    cd C:\TinyCtf           (or whatever your directory was)
    
Install Flask, dataset, and simplejson

    easy_install Flask
    easy_install dataset
    easy_install simplejson
    
Import the tasks (Must do after every task-change)

    python task_import.py
    (If you want to clear all old tasks, then import the tasks from tasks.json, run:
        python task_import.py purge

Start the server

    python server.py
    
*After you run this command, it should ask you to allow access*
    
*Note*: Flask should run on top of a proper web server if you plan to have many players.
