class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        return console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
}

let movie = new Video('Marvel Studios', 'Wayne', '6 movies');
movie.watch();

let movie2 = new Video('Paramount Studios', 'Matthias', '10 movies');
movie2.watch();

let movie_arr = [];
