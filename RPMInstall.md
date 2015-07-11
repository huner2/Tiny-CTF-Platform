.RPM Based
----------

To deploy `Tiny-CTF-Platform` on a .RPM based platform (RedHat, Fedora Core, OpenSuse, Mandriva, and many others) execute the following commands:

Become root, upgrade

    sudo su
    yum upgrade -y
    
Install some prerequisites

    yum install -y git
    yum install -y gcc-c++
    yum install -y python-devel
    
Install Flask, dataset, and simplejson

    easy_install Flask
    easy_install Flask-WTF
    easy_install dataset
    easy_install simplejson
    
Clone the repo

    git clone https://github.com/huner2/Tiny-CTF-Platform.git
    cd Tiny-CTF-Platform/
    
Import the tasks (Must be done after every task-change)

    python task_import.py
    (If you want to clear all old tasks, then import the tasks from tasks.json, run:
        python task_import.py purge
    
Start the server

    python server.py


*Note*: Flask should run on top of a proper web server if you plan to have many players.
