// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Think of the best data structure to save this information within the array.

class Video{
    constructor([title, uploader, time]){  
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    };
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    };
};
let video_1 = new Video(["home video", "George", "3min"]);
let video_2 = new Video(["my cat is crazy video", "John", "13min"]);
video_1.watch();
video_2.watch();

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
let all_videos = [
    ["home video 1", "George 1", "13min"], 
    ["home video 2", "George 2", "23min"],
    ["home video 3", "George 3", "33min"],
    ["home video 4", "George 4", "43min"]
];
let bonus_video = new Video(all_videos[2]);

// Bonus: Loop through the array to instantiate those instances.
bonus_video.watch();
for (args of all_videos){
    let video_tmp = new Video(args);
    video_tmp.watch();
};

