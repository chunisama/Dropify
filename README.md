# README

# Dropify 
Dropify is a web service for audio streaming your favorite tracks for your audio listening pleasure. It can also be a way discover new genres and songs that you have never heard before!

# Live site
To access Dropify, kindly click [here](http://dropify-echung.herokuapp.com)

# User account authentication, Demo login, Signup & Login errors

Users can sign up, sign in, and log out seamlessly. Additionally a user can use a demo login to experience the site without having to sign up.

## Splash Page
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2011.47.14%20AM.png)

## User Login
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2012.33.14%20PM.png)

## User Signup
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2011.47.56%20AM.png)



# Curated Content for viewing: Albums, Artists, Songs
View a list of albums, songs, and artists curated by the creator

## Album list
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2011.34.29%20AM.png)

## Artist list
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2011.44.36%20AM.png)

## Songs List
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2011.44.46%20AM.png)

Lastly, a user can navigate to a specific show page for an artist or album they click on their corresponding lists. There are tons of links implemented across Dropify to enable the user to seamlessly navigate through the website.

## A artist show page
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2011.45.05%20AM.png)

## A album show page
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2011.34.56%20AM.png)


# The audio player
One feature I implemented was an audio player that persisted across all my pages with continuous audio play
![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2012.01.06%20PM.png)

This incredible feature enables the user to seamlessly listen to their selected audio content without it being disrupted by user navigation. Considering I have so many routes to all my specific view pages for a single artist and album, this was a very important feature to get dropify fully functional.

Additionally, the audio player itself dynamically updates the content of the song a user plays so they can see the album art, artist, and song info associated.

Furthermore, the user can play, pause, control the volume, loop, and rewind/fast forward by using the slider on the progress bar.

One tricky technical part of the player was to have the progress bar and the timer tick every second depending on the song's current time. I had to use multiple event listeners i.e "ontimeupdate" on the audio api in order to acheive this. Additionally, using a setTimer function to pass a callback to update the value of the progress bar with the song's current time was a major key to my success.











