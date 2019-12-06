# README

# Dropify | [Live](http://dropify-echung.herokuapp.com)
Dropify is a web service for audio streaming your favorite tracks for your audio listening pleasure. It can also be a way discover new genres and songs that you have never heard before!

# Technologies & Architecture
* Javascript
* React
* Redux
* Ruby on Rails
* PostgreSQL
* AWS S3
* Webpack

# Front-End
React and Redux were utilized in order to create a fast and seamless user experience throughout the web app. This laso enabled Dropify to render and update all the data fetched from the database dynamically. Modular components were implemented in order to provide a consistent and scalable UI/UX for the entire web app.

# Back-End
Dropify was built on top of a Ruby on Rails back-end that communicates with a PostgreSQL database and utilizes assets that are hosted on AwS S3. 

# Features

## Authorization & Errors
Dropify has backend auth and persistent user state. By implementing cookies, a user will remain logged in even if they leave the site. A user's username is saved to the backend where database and model level validations ensure its uniqueness. The user's password is hashed using BCrypt and the resulting digest is saved to the database. In the event that the username and/or password are not valid, the user will receive a login error message. Additionally, on the account creation form, in the event that any field is missing information, the user will receive errors for each missing field.

![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2012.33.14%20PM.png)

![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2011.47.56%20AM.png)

## Search
Utilizing effective back-end routes and controllers, the search page of Dropify can quickly and dynamically filter down the entries in the database and provide relevant results to the user on the front-end. Additional filters are available to the user on the search page in case they want to filter their results by artists, albums, songs, or playlists. Lastly, the top results section on the search page are sorted based on whether a category (i.e artist, album, songs, playlists) contain any results based off a user's search query.

## Playlist CRUD
Both a front-end and back-end authentication system was implemented on the playlists feature to give a user a tailored and personal experience on Dropify. Playlists can be created and played by any user, but songs can only be added and deleted from a playlist by the creator. Additionally, playlists can only be deleted by its creator.

## The Audio Player
The core feature of Dropify is the audio player that top-level component for this app. This means the user can seamlessly stream music, select different songs to play, and navigate across every page with continuous audio play.

![alt text](https://github.com/chunisama/Dropify/blob/master/app/assets/images/Screen%20Shot%202019-10-11%20at%2012.01.06%20PM.png)


Additionally, the audio player itself dynamically updates the content of the song a user plays so they can see the album art, artist, and song info associated. Furthermore, the user can play, pause, control the volume, loop, shuffle, play the previous song, skip forward to the next song, and rewind/fast forward by using the slider on the progress bar.

One tricky technical part of the player was to have the progress bar and the timer tick every second depending on the song's current time. I had to use multiple event listeners i.e "ontimeupdate" on the audio api in order to acheive this. Additionally, using a setTimer function to pass a callback to update the value of the progress bar with the song's current time was a major key to its success.

## Likes and Follows
Another essential feature that was added to Dropify was the functionality to like songs/albums and follow artists/playlists. This allows users to save content that they like and have it appear in their own personal library any time that they log in.


