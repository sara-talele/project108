//https://teachablemachine.withgoogle.com/models/emw9lpQIY/
function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/emw9lpQIY/model.json', modelready);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_accuracy").innerHTML = "Accuracy - " + (results[0].confidence).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result_accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")"
        img1 = document.getElementById("catimg");
        img2 = document.getElementById("catgif");
        img3 = document.getElementById("Dogimg");
        img4 = document.getElementById("Doggif");
        if (results[0].label == "Meowing") {
            img1.src = "cute-cat.gif";
            img2.src = "dog.jpg";
        } else if (results[0].label == "snap") {
            img1.src = "cat.avif";
            img2.src = "DJ_Dog.gif";
        }
    }

}