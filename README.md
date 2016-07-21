[![Build Status](https:travis-ci.org/Andy-Bell/songodoro.svg?branch=master)](https:travis-ci.org/Andy-Bell/songodoro)

# SONGODORO

*   Version: 1.0
*   Configuration: Run `npm install`
*   Test suite: Run `npm test`
*   Local server: Run `npm start`

## User Stories

```text
As a user
So that I can access the app
I would like a webpage
```

```text
As a user
So that I can time my work
I would like the page to display a timer
```

```text
As a user
So that I can start my pomodoro
I would like a start button
```

```text
As a user
So that I am entertained
I want a song to play when the timer runs out
```

```text
As a user
So that I do not deviate from the pomodoro routine
I would like the app to loop back
```

Refactor Guidance:

```

 standardized es6 or es5

 separation of concerns - mount player is selecting a track
 showing the player as well as prep of the player
 seperate component of the player < - mounted or not

 rename functions to suit purpose more

 move unmount and mount into spotify player component

 renaming of functions around this

 timer:
 2 parts: state and view
 extract timer into a module and fire events to listen for

 player could bind and listen to it




 main to control time -> spotify into spotify => timer function into timer


 top component should have the state

```
