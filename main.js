Webcam.set({
    height: 300,
    width: 300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");

function capture(){
    Webcam.snap(
        function (pic){
            document.getElementById("snapshot").innerHTML=`<img src=${pic} id="picture">`
        }
    )
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FyRbnI9-3/model.json",ModelLoaded)
function ModelLoaded(){
    console.log("Hi Ujjwal Model Has Been Loaded Successfully")
}