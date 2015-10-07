# browser-history-management
This test suite simulates browser navigation with onpopstate

# dependencies

## npm
## bower
## jasmine

# installation

to install the client package manager used to install jasmine

''npm install -g yo''

then 

''yo jasmine''

## The problem 

We are trying to mix a non-history based navigation system with one that uses the history object and the onpopstate event.

 use cases to test for
 1. A user selects a media item to play
 ->PlayerPage ->PlayerLoadingPage ->PlayerPage is incorrectly detected as backward navigation

 2. If you check for PlayerPage hash in your algorithm how do you allow a user to actually back navigate from either
 PlayerPage or PlayerLoadingPage?
 
 ## Run the tests
 
 You should be able to run the tests by simply running index.html in the browser
