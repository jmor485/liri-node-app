require("dotenv").config();
var keys = require("./keys.js");

var request = require("request");
var fs = require("fs");
var axios = require('axios');
var omdb = require('omdb');
var bit_js = require('bit_js');


var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var liriInput = process.argv[2];
var input = process.argv[3];

switch (liriInput) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    // case "movie-this":
    //     movieThis();
    //     break;

    // case "do-what-it-says":
    //     doWhatItSays();
    //     break;
};

// // Bands In Town Function
function concertThis() {
    if (artistSearch === "") {
        return console.log("No Artist Entered. Please Try Again.");
    } else {
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
            .then(function (response) {
                if (response.data.length <= 0) {
                    console.log("No Info for This Artist.");
                } else {
                    for (var i = 0; i < response.data.length; i++) {
                        if (artistSearch != undefined) {
                            console.log("Venue Name: " + response.data[i].venue.name);
                            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[0].venue.region);
                            console.log("Event Date: " + moment(response.data[i].datetime).format('LL'));

                        }

                    }

                }






            });

        };


        // Spotify Function

        function spotifyThisSong() {

            if (input === undefined) {
                return console.log("Artist Name: Ace of Base \nSong Name: The Sign\n");
            }

            spotify.search(
                {
                    type: "track",
                    query: input,
                    limit: 10
                }, function (err, data) {
                    if (err) {
                        console.log("Error: " + err);
                        return;
                    } if (!err) {
                        var songs = data.tracks.items;
                        for (var i = 0; i < songs.length; i++) {
                            if (input != undefined) {
                                console.log("Artist Name: " + response.data[i].artists[0].name);
                                console.log("Song Name: " + songs[i].name);
                                console.log("Spotify Link: " + songs[i].preview_url);
                                console.log("Album Name: " + songs[i].album.name);
                                console.log("\n---------------\n");
                            }
                        }

                    }

                }
            );
        }

        // // OMDB Function
        // function movieThis() {

        // }
        // // Text Inside of 'random.txt' Function
        // function doWhatItSays()
    };

