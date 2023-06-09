
var Airtable = require("airtable");
console.log(Airtable);


var base = new Airtable({apiKey: 'pat1abmzDxVYS6Ixg.d4503a0262052447816a987da0a31f80dd68945dff0c49d9870ec8ed3e758997'}).base('appdpCPoAToMikJID');


base("songs").select({
    
}).eachPage(gotPageOfSongs, gotAllSongs);


const songs = [];


function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
    songs.push(...records);
  fetchNextPage();
}

function gotAllSongs(err) {
  console.log("gotAllSongs()");

  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

 
  consoleLogSongs();
  showSongs();
}

function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach((song) => {
      console.log("Song:", song);
    });
  }
  


function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {
      var songContainer = document.createElement("div");
      songContainer.classList.add("song-container");
      document.querySelector(".container").append(songContainer);

  
      var songName = document.createElement("p");
      songName.classList.add("song-name");
      songName.innerText = song.fields.song_name;
      songContainer.append(songName);

      var songSubtitle = document.createElement("p");
      songSubtitle.classList.add("song-subtitle");
      songSubtitle.innerText = song.fields.subtitle;
      songName.append(songSubtitle);

      var songTag = document.createElement("p");
      songTag.classList.add("song-tag");
      songTag.innerText = song.fields.tag;
      songName.append(songTag);

      
    
  
      songName.addEventListener("click", function(){
        // create a new page with the song details
        var newPage = window.open("", "_self");
        window.location.href = "", "_self";
        
        // HTML of new page
        var htmlContent = `
          <html>
            <head>
              <title>${song.fields.song_name}</title>
              
              <link rel="stylesheet" type="text/css" href="style.css">
            </head>
            <body>
            
            <style>
            @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Exo&family=IBM+Plex+Mono&display=swap');
            @import url("https://use.typekit.net/oto1ukw.css");
                body{
                    padding: 2rem;
                    background-color: black;
                    color: white;
                }

                .audio-file{
                    display: block;
                    left: 50px;
                    border: 1px solid white;
                    color: white;
                }


                .navbar-container{
                  width: 100%;
              }
              
              .title{
                  margin-left: -5rem;
                  float: left;
              }
              .navbar{
                  /* margin-left: -5px; */
                  font-family: 'IBM Plex Mono', monospace;
                  /* padding-left: 2rem; */
                  font-weight: 400;
                  color: white;
                  font-size: 14px;
                  list-style-type: none;
                  border-bottom: solid white 1px;
                  padding-bottom: 2rem;
                  /* float: right; */
                  /* display: inline; */
              }
              
              .nav2{
                  /* display: block; */
                  float: right;
                  text-align: right;
              }
              
              
              li{
                  display: inline;
                  margin-right: 1rem;
                  padding-left: 5rem;
              }
              
              a{
                  color: white;
                  text-decoration: none;
              }
              
              a:active{
                  text-decoration: underline;
              }
              
              .info2:hover{
                  text-decoration: underline;
              }
              .submit:hover{
                  text-decoration: underline;
              }
              
              .directory2:hover{
                  text-decoration: underline;
              }
              
              .images2:hover{
                  text-decoration: underline;
              }



                .content {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: top;
                    padding-top: 1rem;
                    padding-bottom: 3rem;
                  }
                  
                  .song-details {
                    flex-grow: 1;
                    padding-left: 2rem;
                    width: 10rem;
                    padding-top: -2rem;
                  }
                  
                  .song-name {
                    font-size: 3vw;
                    font-family: "ibm-plex-sans", sans-serif;
                    font-weight: 400;
                    font-style: normal;
    
                  }
                  .song-tag{
                    font-size: 1vw;
                    color: grey;
                    font-family: "ibm-plex-sans", sans-serif;
                    font-weight: 400;
                    font-style: italic;
                    padding-top: 1rem;
                  }
                  

                  .song-category{
                    font-size: 14px;
                    font-family: "ibm-plex-sans-condensed", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    width: 175px;
                    text-align: center;
                    height: auto;
                    background-color: white;
                    color: black;
                }


                  .song-description {
                    font-size: 2vw;
                    line-height: 1.5;
                    padding-right: 2rem;
                    padding-bottom: 1rem;
                    padding-top:1rem;
                    font-family: "ibm-plex-sans-condensed", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                  }

                  .song-submit{
                    font-size: 1vw;
                    font-family: "ibm-plex-sans-condensed", sans-serif;
                    font-weight: 400;
                    font-style: italic;
                    color: grey;
                  }
                  
                  .image-container {
                    width: 50%;
                  }
                  
                  .song-image {
                    max-width: 100%;
                    border-radius: 50%;
                  }

                  .backButton {
                    position: absolute;
                    cursor: pointer;
                    top: 100px;
                    right: 2rem;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 14px;
                    background-color: transparent;
                    color: white;
                    border: none;
                  }
                  .backButton:hover{
                    text-decoration: underline;
                  }

                 
                  
                  .playButton {
                    display: block;
                    position: relative;
                    left: 0;
                    top: 14px;
                    border: 1px solid white;
                    width: 160px;
                    cursor: pointer;
                    background-color: black;
                    color: white;
                    text-align: center;
                  }
                  
                  .playButton.playing {
                    background-color: white;
                    color: black;
                  }
                  footer{
                    color: white;
                    padding-top: 2rem;
                    font-size: 12px;
                    border-top: 1px solid rgb(85, 85, 85);
                    font-family: 'IBM Plex Mono', monospace;
                }
                  
                 
                  

                  @media only screen and (max-width: 1000px) {
                    
                    body{
                      padding: 1rem;
                  }
                    .navbar{
                      display: inline-block;
                      font-family: 'IBM Plex Mono', monospace;
                      padding-left: 1rem;
                      font-weight: 400;
                      color: white;
                      font-size: 12px;
                      list-style-type: none;
                      padding-bottom: 1rem;
                      width: 100%;
                  }
                  
                  .title{
                      display: inline-block;
                      /* margin-left: -1rem; */
                      /* margin-top: -2rem; */
                      font-family: 'IBM Plex Mono', monospace;
                      font-size: 4vw;
                      width: 55%;
                  
                  }
                  
                  .nav2{
                      width: 50px;
                      float: right;
                  }
                  
                  .info2, .directory2, .images2, .submit{
                      padding-bottom: 1rem;
                      float: right;
                      overflow: auto;
                  }


                  .backButton {         
                    top: 202px;
                    font-size: 4vw;
                  }

                    .content {
                      flex-direction: column;
                    }

                    .song-details {
                      flex-grow: 1;
                      padding-left: 0rem;
                      width: 90vw;
                      padding-top: -2rem;
                    }
                    
                    .song-name {
                      font-size: 6vw;
                      padding-left: 0rem;
                    }
                    
                    .song-description {
                      font-size: 4vw;
                      padding-left: 0rem;
                      width: 100%;
                    }
                    
                    .image-container {
                      width: 100vw;
                    }
                    
                    .song-image {
                      max-width: 90vw;
                      padding-left: 0rem;
                    }
                    .song-tag{
                      font-size: 3vw;
                      
                    }

                    .song-submit{
                      font-size: 3vw;
                     }
                    .playButton {
                      font-size: 14px;
                      width: 140px;
                     
                   }

                  }
                  
                 
                  
                
            </style>
            


            <div class="navbar-container">
            <ul class="navbar">
        
                <li class="title"> <a href="page1.html">SIGHTS & SOUNDS OF MEMORY LANE</a></li> 
        
                <ul class="nav2">
                    <li class="images2" ><a href="page1.html">ARCHIVE</a></li>
                    <li class="directory2" ><a href="directory.html">INDEX</a></li>
                    <li class="submit" ><a href="submission-jotform.html">SUBMISSION</a></li>
                    <li class="info2" > <a href="info.html">INFO</a></li>
                </ul>
            </ul>
        </div>


        <div class="content">
            
                <div class="image-container">
                    <img class="song-image" src="${song.fields.song_image[0].url}">
                </div>
                <div class="song-details">
                    <h1 class="song-name">${song.fields.song_name}
                    
                    <audio id="audio1">
                      <source src="${song.fields.audio_file[0].url}" type="audio/mpeg">
                    </audio>

<button id="playButton" class="playButton" onclick="playPause()" type="button">LISTEN</button>
<p class="song-tag">${song.fields.tag}</p>

                    
                        </h1>

                   
                   
                    <p class="song-description">${song.fields.description}</p>

                    <p class="song-submit">${song.fields.submit}</p>
                    
                    

              </div>
            </div>

            <script>

            var audio = document.getElementById("audio1");
var button = document.getElementById("playButton");

function playPause(){
  if (audio.paused){
    audio.play();
    button.classList.add("playing");
    button.innerHTML = "PAUSE";
  } else{
    audio.pause();
    button.classList.remove("playing");
    button.innerHTML = "LISTEN";
  }
}

            

                
</script>
<footer>
          <p>ZOYAH SHAH — PARSONS THESIS PROJECT 2023</p>
      </footer>

            </body>
          </html>
        `;
       
        newPage.document.write(htmlContent);
        
        // close the new page 
        newPage.document.body.innerHTML += '<button class="backButton" onclick="window.history.go(); return false;">BACK</button>';

        
      });

      
      
    });

    
  }
  
