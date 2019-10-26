call npm install --g download-cli
cd grunt-config\custom-tasks\rat
call download "https://archive.apache.org/dist/creadur/apache-rat-0.12/apache-rat-0.12-bin.zip" --extract --out "_extern-tools"
call npm install
::call node "tasks\download.js"
cd ..\..\..\
call npm install
::call npm test
call grunt release
call npm pack