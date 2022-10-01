function make_album(artist, title) {
    document.writeln(`Build a Dictionary Containing Information About An Album` + "<br/>");
    var album_list = {
        "artist": artist,
        "title": title
    }
    return album_list;
}

alb = make_album("Atif Aslam", "It's an amazing Singer");
document.writeln(JSON.stringify(alb), "<br/>");