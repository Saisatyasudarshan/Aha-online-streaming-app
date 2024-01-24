# Authentication Service #
Project Code: G0001

Authentication Service is part of Aha streaming app Infrastructure. It is built around [Streaming movies and shows](https://www.aha.video/?gclid=CjwKCAiA5L2tBhBTEiwAdSxJX0_8Z3SMnEEoj5VQnuTIlmsxbonCy70TPotaidBpOEzECWPo-ss52RoCnl8QAvD_BwE) User Pools and Identify Pools.

## Use Cases ##

### Use Case Diagram ###
![usecases.png](https://github.com/Nukalaalekhya/project-1/assets/132035324/e2e42581-57d8-413b-a1d6-e7c717471998)
## User Stories ##
### G0001-001: Register ###

* Actor: User without having account in Aha app
* Pre Condition:

1. User should have a working email-id which is not already registered with Aha streaming app.

* Input:

1. Name of the User.
2. Working email id.
3. Preferred password with 8 characters (alphanumeric with at least one upper case and one lower case letter)

* Sequence:

1. User opens the webpage and click on 'Register'.
2. Registration page appears.
3. User supplies the name, a working email-id and the preferred password.
4. Page displays a message to check e-mail and prompts for activation code.
5. User enters the activation code.
6. Page displays success message and redirects to login page.

* Post Condition:

1. Page displays success message and the login page appears

* Exceptions:

1. Registration page re-appears with appropriate message if user enters invalid name or invalid email-ID or invalid password.
2. Registration page re-appears with appropriate message if the email-ID is already registered with Shopping website.
3. Registration page shows "resend" button, in case the activation code is not entered in the first 5 minutes after the mail has been sent.
4. Registration page will not show any special message if the email-ID is not reachable. It just prompts for activation code, as usual.

### G0001-002: Login with Inactive account in aha app ###

* Actor: User with Inactive Account in Aha app

* Pre Condition:

1. User should have a registered Email ID and password with Aha Streaming app.

* Input:

1. Email ID
2. Password

* Sequence:

1. User opens the webpage and click on ‘Login’
2. Login page appears
3. User supplies Email ID and password
4. Page indicates that the Email ID is yet to be activated.
4. Page displays a message to check email and prompt for activation code
5. User enters the activation code
6. Page displays success message and redirects to login page

* Post Condition:

1. Page displays a message ‘successfully activated and the login page appears

* Exceptions:

1. Login page re-appears with appropriate message if user enters invalid Email ID or password.
2. Prompt box re-appears with appropriate message if user enters invalid Activation Code.
3. Login page re-appears with appropriate message if user fails to enter valid Activation Code within 5 minutes.

### G0001-003: Login with Active Email ID ###

* Actor: User with Active Email ID 

* Pre Condition:

1. User should have activated the Email ID

* Input:

1. Email ID. 
2. Password.

* Sequence:
 
1. User opens login web page
2. User supplies his/her Email ID and Password
3. User click on login button
4. User home page appears

* Post Condition:

1. User home page appears with name of the user displayed.

* Exceptions:

1. Login page re-appears with appropriate message if user enters invalid Email ID or password.

### G0001-004 Reset Password ###

* Actor: User with Active Email ID 
 
* Pre Condition:

1. User should have an active Email ID with Aha Streaming app.

* Input:

1. Email ID

* Sequence:

1. User opens login page.
2. User clicks on forgot password button.
3. User enters Email ID
4. Page prompts for new password and clicks on "Reset Password"
4. Page displays a message to check email and prompt for activation code
5. User enters the activation code
6. Page displays success message and redirects to login page

* Post Condition:

1. User should be able to login with new credentials

* Exceptions:

1. Login page re-appears with appropriate message if user enters invalid Email-ID.
2. Prompt box re-appears with appropriate message if user enters invalid activation code.

### G0001-005 Change Profile  ###

* Actor: User with Active Email ID

* Pre Condition:

1. User should have logged into Aha Streaming app

* Input:

1. Name (optional)
2. Profile Pic with max size of 5KB in the formats of JPG/PNG(optional)
3. Phone Number (optional)
4. Permanent Address (optional)
5. Password (optional)

* Sequence:

1. User click on profile
2. Page displays the current profile of the user
3. User changes one or more details
4. Page displays "Save" button
5. User clicks on "Save" button
6. Page displays appropriate success message. 

* Post Condition:

1. User should be able to see updated profile

* Exceptions:

1. Displays error message in case an invalid password is entered
2. Displays error message in case invalid phone number is entered
3. Displays error message in case name is invalid
4. Displays error message in case invalid size/format for the profile pic

### G0001-006 Logout ###

* Actor: User with Active Email ID

* Pre Condition:

1. User should have logged in to working Email ID.

* Input:

1. None

* Sequence:

1. User click on Logout.
2. Page displays a message ‘successfully Logout ‘ and the login page appears.

* Post Condition:

1. Login screen appears
2. Back button or bookmarks fail to open any of the login-protected pages of the web app

* Exceptions:

1. Not Applicable
## Workflow ##

### Workflow Diagram ###
![Workflow.png](https://github.com/Nukalaalekhya/project-1/assets/132035324/d7de0cef-0b87-4937-90ef-62b6bd71587b)
