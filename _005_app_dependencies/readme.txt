DEMO 5 AUTOMATIC LOADING MODULES OF THE PROJECT

TERMINAL
cd ..
cd _005_app_dependencies
npm install
npm install express --save
npm start

TO DELETE PACKAGE npm remove OR npm uninstall 
https://docs.npmjs.com/uninstalling-packages-and-dependencies

npm remove express --save

_005_app_dependencies/package.json 
----------------------------------------
{
    "name": "_004_App",
    "version": "1.0.0",
    "scripts": {
        "start": "nodemon app.js"
    },
    "dependencies": {
        "express": "^4.16.4"
    }
}


node_modules: NO NEED TO SHARE THE CODE OF PROJECTS.
We will delete this node_modules folder and share the code as such.