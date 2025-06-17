open cmd, navigate to the frontend and enter: npm i

run backend first before frontend

--------------------------------------------------------

to run backend:
open cmd
locate backend folder, it should contain rxnt_backend and venv
inside cmd, run "venv\Scripts\activate.bat" (to activate virtual environment)
next, navigate to rxnt_backend and type "python manage.py runserver"

NOTE: Use "samuel" as username and "samcv090505" as password for superuser. 
If that doesn't work, create a new superuser.

once the backend is up and running (opening the site in google is optional, 
pwedeng wag na buksan sa google), you can now start frontend

--------------------------------------------------------

to run frontend:
open new cmd, locate frontend folder, go inside the project folder and run "npm start"

--------------------------------------------------------

to test, use the superuser credentials