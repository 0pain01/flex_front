# This the frontend which is connected to the backend 

This project is created using React

## Hosted link
https://curious-praline-89082e.netlify.app/

Click on it check the web-app

### web app 
#FRONTEND :

Web app is created using Register.js file which is in the src section.

Used bootstrap to create the form and taking the user input from it.
Used MongoDB as backend framework, to store the values in json format.
Created 4 input fields :
## Name :
To take input name of the user that will enroll int class
## Date of Joining :
To take the input of the Date on which the user registered or paid for the class
## Age :
To take the age of the user to verify the age criteria is fulfilled 
## Batch :
Created a dropdown list of 4 batches that are scheduled for the class

2 Buttons are created :
## Pay now :
The Pay now button consist the CompletePayment() function that mocks the payment process and once clicked will act as payment is done
And will show the desired output on the frontend.

## Submit :
To store the user input in the backend as desired.

#BACKEND:

##backend github link:
https://github.com/0pain01/flex_back

created the backend using app.js in root folder , dbConnect.js and userModel.js in db folder.
##  App.js
This contains the mongoDB ,mongoose and express library to use the services.
Was hosted on 3000 PORT number.
Created a post method so that dat can be inserted using API and can be tested.

## dbConnect.js
This contains the url of the mongoose database server which is created through my account and function to get connect to it.

## userModel.js
This contains the schema in which format the data will be stored in the Mongo Database:
name (String) , Age (String), DOJ (String), batch (String)

The backend is hosted through Render and frontend is hosted on netlify and both are connected using github.


