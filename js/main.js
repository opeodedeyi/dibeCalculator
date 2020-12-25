// settings

// dollar rate
var dapple = 0.005;
var dspotify = 0.004;
var dyoutube = 0.00175;
var dsoundcloud = 0.0013;
var ddeezer = 0.0047;
var dgroove = 0.005;
var dpandora = 0.0014;
var dtidal = 0.012;
var damazon = 0.005;

// naira rate
var napple = 2.39;
var nspotify = 1.912;
var nyoutube = 0.8365;
var nsoundcloud = 0.6214;
var ndeezer = 2.2466;
var ngroove = 2.39;
var npandora = 0.6692;
var ntidal = 5.736;
var namazon = 2.39;

// pound rate
var papple = 0.0043;
var pspotify = 0.00344;
var pyoutube = 0.001505;
var psoundcloud = 0.001118;
var pdeezer = 0.00404; //0.004042
var pgroove = 0.0043;
var ppandora = 0.001204;
var ptidal = 0.01032;
var pamazon = 0.0043;


// others
var resItem = document.querySelectorAll('.res-item');
var noItem = document.querySelector('.no-item');
var input = document.querySelector('.inputstream');

var apple1 = document.querySelector('.apple1');
var spotify1 = document.querySelector('.spotify1');
var youtube1 = document.querySelector('.youtube1');
var soundcloud1 = document.querySelector('.soundcloud1');
var deezer1 = document.querySelector('.deezer1');
var groove1 = document.querySelector('.groove1');
var pandora1 = document.querySelector('.pandora1');
var tidal1 = document.querySelector('.tidal1');
var amazon1 = document.querySelector('.amazon1');

var apple2 = document.querySelector('.apple2');
var spotify2 = document.querySelector('.spotify2');
var youtube2 = document.querySelector('.youtube2');
var soundcloud2 = document.querySelector('.soundcloud2');
var deezer2 = document.querySelector('.deezer2');
var groove2 = document.querySelector('.groove2');
var pandora2 = document.querySelector('.pandora2');
var tidal2 = document.querySelector('.tidal2');
var amazon2 = document.querySelector('.amazon2');

var apple3 = document.querySelector('.apple3');
var spotify3 = document.querySelector('.spotify3');
var youtube3 = document.querySelector('.youtube3');
var soundcloud3 = document.querySelector('.soundcloud3');
var deezer3 = document.querySelector('.deezer3');
var groove3 = document.querySelector('.groove3');
var pandora3 = document.querySelector('.pandora3');
var tidal3 = document.querySelector('.tidal3');
var amazon3 = document.querySelector('.amazon3');


function calculate(num) {
    var appleD = (num*(dapple*10000))/10000;
    var spotifyD = (num*(dspotify*10000))/10000;
    var youtubeD = (num*(dyoutube*10000))/10000;
    var soundcloudD = (num*(dsoundcloud*10000))/10000;
    var deezerD = (num*(ddeezer*10000))/10000;
    var grooveD = (num*(dgroove*10000))/10000;
    var pandoraD = (num*(dpandora*10000))/10000;
    var tidalD = (num*(dtidal*10000))/10000;
    var amazonD = (num*(damazon*10000))/10000;

    var appleN = (num*(napple*1000000))/1000000;
    var spotifyN = (num*(nspotify*1000000))/1000000;
    var youtubeN = (num*(nyoutube*1000000))/1000000;
    var soundcloudN = (num*(nsoundcloud*1000000))/1000000;
    var deezerN = (num*(ndeezer*1000000))/1000000;
    var grooveN = (num*(ngroove*1000000))/1000000;
    var pandoraN = (num*(npandora*1000000))/1000000;
    var tidalN = (num*(ntidal*1000000))/1000000;
    var amazonN = (num*(namazon*1000000))/1000000;

    var appleP = (num*(papple*1000000))/1000000;
    var spotifyP = (num*(pspotify*1000000))/1000000;
    var youtubeP = (num*(pyoutube*1000000))/1000000;
    var soundcloudP = (num*(psoundcloud*1000000))/1000000;
    var deezerP = (num*(pdeezer*1000000))/1000000;
    var grooveP = (num*(pgroove*1000000))/1000000;
    var pandoraP = (num*(ppandora*1000000))/1000000;
    var tidalP = (num*(ptidal*1000000))/1000000;
    var amazonP = (num*(pamazon*1000000))/1000000;

    apple1.innerHTML = `$${appleD.toLocaleString()}`;
    spotify1.innerHTML = `$${spotifyD.toLocaleString()}`;
    youtube1.innerHTML = `$${youtubeD.toLocaleString()}`;
    soundcloud1.innerHTML = `$${soundcloudD.toLocaleString()}`;
    deezer1.innerHTML = `$${deezerD.toLocaleString()}`;
    groove1.innerHTML = `$${grooveD.toLocaleString()}`;
    pandora1.innerHTML = `$${pandoraD.toLocaleString()}`;
    tidal1.innerHTML = `$${tidalD.toLocaleString()}`;
    amazon1.innerHTML = `$${amazonD.toLocaleString()}`;

    apple2.innerHTML = `£${appleP.toLocaleString()}`;
    spotify2.innerHTML = `£${spotifyP.toLocaleString()}`;
    youtube2.innerHTML = `£${youtubeP.toLocaleString()}`;
    soundcloud2.innerHTML = `£${soundcloudP.toLocaleString()}`;
    deezer2.innerHTML = `£${deezerP.toLocaleString()}`;
    groove2.innerHTML = `£${grooveP.toLocaleString()}`;
    pandora2.innerHTML = `£${pandoraP.toLocaleString()}`;
    tidal2.innerHTML = `£${tidalP.toLocaleString()}`;
    amazon2.innerHTML = `£${amazonP.toLocaleString()}`;

    apple3.innerHTML = `₦${appleN.toLocaleString()}`;
    spotify3.innerHTML = `₦${spotifyN.toLocaleString()}`;
    youtube3.innerHTML = `₦${youtubeN.toLocaleString()}`;
    soundcloud3.innerHTML = `₦${soundcloudN.toLocaleString()}`;
    deezer3.innerHTML = `₦${deezerN.toLocaleString()}`;
    groove3.innerHTML = `₦${grooveN.toLocaleString()}`;
    pandora3.innerHTML = `₦${pandoraN.toLocaleString()}`;
    tidal3.innerHTML = `₦${tidalN.toLocaleString()}`;
    amazon3.innerHTML = `₦${amazonN.toLocaleString()}`;
}


input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        console.log("clicked");

        var number = e.currentTarget.value;
        if (number) {
            calculate(number)
            noItem.style.display = "none";
            resItem.forEach(a => {
                a.style.display = "flex";
            })
        } else {
            noItem.style.display = "flex";
            resItem.forEach(a => {
                a.style.display = "none";
            })
        }
    }
})
