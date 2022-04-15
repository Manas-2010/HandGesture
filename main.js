Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 99,
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function event(data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}



classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/94z0F3Bwu/model.json", modelLoad);

function modelLoad() {
    console.log("Model Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = Label
    speak_data2 = confidence
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img , gotresult);
}

function gotresult(error,result) {
    console.error(error);
    console.log(result);
    Label =     "Label : " + result[0].label
    confidence= "Confidence : " + Math.round(result[0].confidence * 100) + "%";
    speak();
}