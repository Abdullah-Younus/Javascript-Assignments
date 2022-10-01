function make_album(artist, title) {
    document.writeln(`Information About An Album` + "<br/>");
    var album_list = {
        "artist": artist,
        "title": title
    }
    return album_list;
}

alb = make_album("Atif Aslam", "It's an amazing Singer");
document.writeln(JSON.stringify(alb), "<br/>");


/// With Tracks
document.writeln(`<hr/>`);
document.writeln(`<b>Tracks</b>`);
document.writeln(`<hr/>`);

function make_album(artist, title, tracks = 0) {
    document.writeln(`Information About An Album ` + "<br/>");
    var album_list = {
        'artist': artist,
        'title': title
    }
    if (tracks) {
        album_list['tracks'] = tracks
    }
    return album_list;
}

alb = make_album("Badshah", "He is Creating Rock Songs");
document.writeln(JSON.stringify(alb));