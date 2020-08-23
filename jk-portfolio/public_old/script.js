const imageDirs = {
    src1: "Photos/lossless_Emory Astro.jpg",
    scr2: "Photos/Perseid Fireball 1.jpg",
    src3: "Photos/Chicago Night Sky.jpg",
    src4: "Photos/Lake Wanaka Milky Way Core.jpg",
    src5: "Photos/DSC01083.jpg",
    src6: "Photos/Barton Scenes-07.jpg",
    src7: "Photos/ATX Long Exposure 2.jpg",
    src8: "Photos/Enchanted Rock Lightning.jpg",
}

const imgCapts = [
    "Emory Peak Astro",
    "Perseids Fireball",
    "Chicago Cityscape",
    "Milky Way",
    "Bigger Jaws",
    "Crawdad",
    "Austin Texas Baby!",
    "Picture of a Very Large Rock",
];

const appDirs = {
    srcNautical: ,
    srcAstro: ,
    srcQuiz: ,
    srcConway: ,
}

function renderPhotos () {
    let i = 0;
    $('.column').empty();
    imageDirs.forEach( element => {
        i++;
        var divGen = $('<div>');
        divGen.addClass('zoom');
        divGen.attr('id', 'image-' + i);
        if(i < 5) {
            $('#col1').append(divGen);
        } else {
            $('#col2').append(divGen);
        }
        var photo = $('<img>');
        photo.attr('src', imageDirs[i - 1]);
        photo.attr('id', 'img' + i);
        $('#image-' + i).append(photo);

        var article = $('<a>');
        article.text(imgCapts[i]);
        $('#img' + i).append(article);
    });
}

function renderApps () {
    appDirs.forEach( element => {
        
    })
}