Debian Based (.deb)
----------

To deploy `tinyctf-platform` on a .deb based platform (debian-based, such as Debian, Ubuntu, Mepis, etc.) execute the following commands:

Become root, upgrade

    sudo -s
    apt-get install updates
    apt-get install build-essential
    
Install some prerequisites

    apt-get install -y git
    apt-get install python-pip python-dev
    
Install Flask, dataset, and simplejson

    easy_install Flask
    easy_install dataset
    easy_install simplejson
    
Clone the repo

    git clone https://github.com/balidani/tinyctf-platform.git
    cd tinyctf-platform/
    
Import the tasks (Must do after every task-change)

    python task_import.py
    (If you want to clear all old tasks, then import the tasks from tasks.json, run:
        python task_import.py purge
    
Start the server

    python server.py
    
*Note*: Flask should run on top of a proper web server if you plan to have many players.
