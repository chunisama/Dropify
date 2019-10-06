# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Genre.destroy_all
Album.destroy_all
Song.destroy_all

guest = User.create!(
    username: "guest", 
    password: "password", 
    email: "eugene0688@yahoo.com", 
    name: "Chung money", 
    gender: "Male",
    birthday: "12/09/1993")


#Genres
Genre.create!({category: "Glitch Hop", id: 1})
Genre.create!({category: "Dubstep", id: 2})
Genre.create!({category: "Bass Music", id: 3})
Genre.create!({category: "Neuro Hop", id: 4})
Genre.create!({category: "Downtempo", id: 5})
Genre.create!({category: "Ambient", id: 6})

#Artists
Artist.create!({name: "Koan Sound", id: 1, bio: "Those funky brits", genre_id: 1})
Artist.create!({name: "Bassnectar", id: 2, bio: "A dj with really long hair", genre_id: 2})
Artist.create!({name: "Detox Unit", id: 3, bio: "Tasteful bass music", genre_id: 3})
Artist.create!({name: "Kursa", id: 4, bio: "Crazy british dude", genre_id: 4})
Artist.create!({name: "Tipper", id: 5, bio: "God tier electronic musician", genre_id: 5})
Artist.create!({name: "Crunch", id: 6, bio: "Collaboration project between Tipper and Mike Wallis", genre_id: 6})




#Albums
Album.create!({name: "Polychrome", id: 1, year: "2018", artist_id: 1})
Album.create!({name: "Forward Escape", id: 2, year: "2014", artist_id: 5})
Album.create!({name: "YCEWYWFB", id: 3, year: "2018", artist_id: 4})
Album.create!({name: "Crunch", id: 4, year: "2013", artist_id: 6})
Album.create!({name: "Deviate", id: 5, year: "2019", artist_id: 3})
Album.create!({name: "Cozza Frenzy", id: 6, year: "2009", artist_id: 2)
Album.create!({name: "Broken Soul Jamboree", id: 7, year: "2010", artist_id: 5})
Album.create!({name: "Underground Communication", id: 8, year: "2007", artist_id: 2})


#Songs
Song.create!({title: "Intro", artist_id: 2, album_id: 7})
Song.create!({title: "Underground Communication", artist_id: 2, album_id: 7})
Song.create!({title: "Bomb the Blocks", artist_id: 2, album_id: 7})
Song.create!({title: "Amorphous Form", artist_id: 2, album_id: 7})
Song.create!({title: "Ridiculous Wobble", artist_id: 2, album_id: 7})
Song.create!({title: "Select Frequency", artist_id: 2, album_id: 7})
Song.create!({title: "Kick It Complex (Bassnectar Remix)", artist_id: 2, album_id: 7})
Song.create!({title: "Verbing the Noun", artist_id: 2, album_id: 7})
Song.create!({title: "Yo", artist_id: 2, album_id: 7})
Song.create!({title: "Stomp", artist_id: 2, album_id: 7})
Song.create!({title: "Kick It Complex", artist_id: 2, album_id: 7})
Song.create!({title: "Carried Away", artist_id: 2, album_id: 7})
Song.create!({title: "Impossible and Overwhelming", artist_id: 2, album_id: 7})
Song.create!({title: "I am Back (Bassnectar remix)", artist_id: 2, album_id: 7})
Song.create!({title: "FSOF", artist_id: 2, album_id: 7})
Song.create!({title: "Alkher illa Doffor (Bassnectar remix)", artist_id: 2, album_id: 7})
Song.create!({title: "Kyrian Bee Bop", artist_id: 2, album_id: 7})
Song.create!({title: "Big Question Small Head", artist_id: 5, :album_id 7})
Song.create!({title: "Cuckoo", artist_id: 5, :album_id 7})
Song.create!({title: "Class 5 Roaming Vapour", artist_id: 5, :album_id 7})
Song.create!({title: "Brocken Spectre", artist_id: 5, :album_id 7})
Song.create!({title: "Dead Soon", artist_id: 5, :album_id 7})
Song.create!({title: "Cinder Cone", artist_id: 5, :album_id 7})
Song.create!({title: "Herriot Method", artist_id: 5, :album_id 7})
Song.create!({title: "Neuron Huskie", artist_id: 5, :album_id 7})
Song.create!({title: "Tit For Tat", artist_id: 5, :album_id 7})
Song.create!({title: "Reality Harshness Defender", artist_id: 5, :album_id 7})
Song.create!({title: "Royal Dragon Sir", artist_id: 5, :album_id 7})
Song.create!({title: "Hourglass Infringement", artist_id: 5, :album_id 7})
Song.create!({title: "Boombox", artist_id: 2, :album_id 6})
Song.create!({title: "Cozza Frenzy (feat. Seasunz)", artist_id: 2, :album_id 6})
Song.create!({title: "Cozza Frenzy (Mega Bass Remix)", artist_id: 2, :album_id 6})
Song.create!({title: "The Churn of the Century", artist_id: 2, :album_id 6})
Song.create!({title: "Love Here (Bassnectar Remix)", artist_id: 2, :album_id 6})
Song.create!({title: "Backpack Rehab", artist_id: 2, :album_id 6})
Song.create!({title: "Teleport Massive (feat. Zumbi)", artist_id: 2, :album_id 6})
Song.create!({title: "West Coast Lo-Fi Rides Again", artist_id: 2, :album_id 6})
Song.create!({title: "When I Grow Up (Bassnectar remix)", artist_id: 2, :album_id 6})
Song.create!({title: "I am a Laser (feat. Double You)", artist_id: 2, :album_id 6})
Song.create!({title: "Window Seat", artist_id: 2, :album_id 6})
Song.create!({title: "I Wish I Was a Hipster", artist_id: 2, :album_id 6})
Song.create!({title: "Are You Ready (feat. Capital J)", artist_id: 2, :album_id 6})
Song.create!({title: "Boombox (Bassnectar_ill.Gates remix)", artist_id: 2, :album_id 6})
Song.create!({title: "Escape", artist_id: 3, album_id: 5})
Song.create!({title: "Expand", artist_id: 3, album_id: 5})
Song.create!({title: "Obscure", artist_id: 3, album_id: 5})
Song.create!({title: "Adapt", artist_id: 3, album_id: 5})
Song.create!({title: "Vibrate", artist_id: 3, album_id: 5})
Song.create!({title: "Portal Spillage", artist_id: 5, album_id: 2})
Song.create!({title: "Dreamsters", artist_id: 5, album_id: 2})
Song.create!({title: "Homage Sliders", artist_id: 5, album_id: 2})
Song.create!({title: "Table Flipping", artist_id: 5, album_id: 2})
Song.create!({title: "Gulch", artist_id: 5, album_id: 2})
Song.create!({title: "Grabbers Holders", artist_id: 5, album_id: 2})
Song.create!({title: "The Bedraggling", artist_id: 5, album_id: 2})
Song.create!({title: "Life Raft For A Death Trip", artist_id: 5, album_id: 2})
Song.create!({title: "The Re-up", artist_id: 5, album_id: 2})
Song.create!({title: "Apex of the Vortex", artist_id: 5, album_id: 2})
Song.create!({title: "Rip Cord", artist_id: 5, album_id: 2})
Song.create!({title: "Reverse Dross Maneuver", artist_id: 5, album_id: 2})
Song.create!({title: "Viridian Dream", artist_id: 1, album_id: 1})
Song.create!({title: "Cobalt", artist_id: 1, album_id: 1})
Song.create!({title: "Hustle Hammer", artist_id: 1, album_id: 1})
Song.create!({title: "Chalk It Out", artist_id: 1, album_id: 1})
Song.create!({title: "Chilli Daddy", artist_id: 1, album_id: 1})
Song.create!({title: "Virtual Light", artist_id: 1, album_id: 1})
Song.create!({title: "Prism Pulse", artist_id: 1, album_id: 1})
Song.create!({title: "Hydroplane", artist_id: 1, album_id: 1})
Song.create!({title: "Jongmyo", artist_id: 1, album_id: 1})
Song.create!({title: "Drift", artist_id: 1, album_id: 1})
Song.create!({title: "The Zulla", artist_id: 1, album_id: 1})
Song.create!({title: "Grama", artist_id: 6, album_id: 4})
Song.create!({title: "Sponge", artist_id: 6, album_id: 4})
Song.create!({title: "Amlma", artist_id: 6, album_id: 4})
Song.create!({title: "Pollen", artist_id: 6, album_id: 4})
Song.create!({title: "Emedr", artist_id: 6, album_id: 4})
Song.create!({title: "Crumb", artist_id: 6, album_id: 4})
Song.create!({title: "Stem", artist_id: 6, album_id: 4})
Song.create!({title: "Lobot", artist_id: 6, album_id: 4})
Song.create!({title: "Art Pylon", artist_id: 6, album_id: 4})
Song.create!({title: "Welt", artist_id: 6, album_id: 4})
Song.create!({title: "Catalon", artist_id: 6, album_id: 4})
Song.create!({title: "MadeVke", artist_id: 6, album_id: 4})
Song.create!({title: "Toe Tac", artist_id: 6, album_id: 4})
Song.create!({title: "Snuff", artist_id: 6, album_id: 4})
Song.create!({title: "Werds", artist_id: 6, album_id: 4})
Song.create!({title: "Introduction", artist_id: 4, album_id: 3})
Song.create!({title: "Phlabby Fries", artist_id: 4, album_id: 3})
Song.create!({title: "CanYaTho", artist_id: 4, album_id: 3})
Song.create!({title: "A view to forget", artist_id: 4, album_id: 3})
Song.create!({title: "Green Steal Spork", artist_id: 4, album_id: 3})
Song.create!({title: "Wifey", artist_id: 4, album_id: 3})
Song.create!({title: "Dustika", artist_id: 4, album_id: 3})
Song.create!({title: "On The Canz", artist_id: 4, album_id: 3})
Song.create!({title: "Coldest Blue", artist_id: 4, album_id: 3})
Song.create!({title: "Itago", artist_id: 4, album_id: 3})






