# FlexMoney Assingment: 

This project is created using React

## Hosted link
https://curious-praline-89082e.netlify.app/

Click on it to check the web-app

## Assumptions:
1. That the paynow button is mock of payment process
2. Pre assumed that the amount is not paid for the classes for the current month and is paid through this form (once paid the month is set to be paid for that user).
   Took a paid boolean variable that will be updated once pay now button is clicked.

# FRONTEND :

Web app is created using Register.js file which is in the src section.

Used bootstrap to create the form and taking the user input from it.
Used MongoDB as backend framework, to store the values in json format.
Created 4 fields :
### 1.Name :
To take input name of the user that will enroll int class
### 2.Date of Joining :
To take the input of the Date on which the user registered or paid for the class
### 3.Age :
To take the age of the user to verify the age criteria is fulfilled 
### 4.Batch :
Created a dropdown list of 4 batches that are scheduled for the class
### 5.Paid :
This is an internal variable which is predefined as false once user paid the amount it will turn to true

## Two Buttons are created :
### 1.Pay now :
The Pay now button consist the CompletePayment() function that mocks the payment process and once clicked will act as payment is done
And will show the desired output on the frontend. And will update the paid variable for that user.

### 2.Submit :
To store the user input in the backend as desired.

# BACKEND:

### backend github link:
https://github.com/0pain01/flex_back

created the backend using app.js in root folder , dbConnect.js and userModel.js in db folder.
##  1. App.js
This contains the mongoDB ,mongoose and express library to use the services.
Was hosted on 3000 PORT number.
Created a post method so that dat can be inserted using API and can be tested.

## 2. dbConnect.js
This contains the url of the mongoose database server which is created through my account and function to get connect to it.

## 3. userModel.js
This contains the schema in which format the data will be stored in the Mongo Database:
name (String) , Age (String), DOJ (String), batch (String) , paid(Bool)

The backend is hosted through Render and frontend is hosted on netlify and both are connected using github.


