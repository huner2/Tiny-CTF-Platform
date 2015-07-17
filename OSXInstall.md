Mac OSX
----------

To deploy `Tiny-CTF-Platform` on a Mac OSX platform (**Must** have the most recent OSX version due to Apple XCode), follow these instructions:

Download and install XCode from [here](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12)

After it has finished installing, execute these commands:

Install Homebrew:

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    
Install Python:

    brew install python
    
Install Flask, dataset, and simplejson

    easy_install Flask
    easy_install flask-seasurf
    easy_install dataset
    easy_install simplejson

Clone the repo

    git clone https://github.com/huner2/Tiny-CTF-Platform.git
    cd Tiny-CTF-Platform/
    
Import the tasks (Must do after every task-change)

    python task_import.py
    (If you want to clear all old tasks, then import the tasks from tasks.json, run:
        python task_import.py purge
    
Start the server

    python server.py
    
*Note*: Flask should run on top of a proper web server if you plan to have many players.
