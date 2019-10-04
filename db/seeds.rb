# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guest = User.create!(
    username: "guest", 
    password: "password", 
    email: "eugene0688@yahoo.com", 
    name: "Chung money", 
    gender: "Male",
    birthday: "12/09/1993")
    
Genre.create!({category: "Alien beats", id: 1})
Artist.create!({name: "Koan Sound", id: 1, bio: "Those crazy brits", genre_id: 1}) 
Album.create!({name: "Polychrome", id: 1, year: "2018", artist_id: 1})
Song.create!({title: "Viridian Dream", artist_id: 1, album_id: 1})