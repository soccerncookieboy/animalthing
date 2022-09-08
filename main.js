function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jyalV9Aj-/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error) {
        console.log(error)
    }else {
        document.getElementById("sound").innerHTML = "I can hear - " +
        results[0].label;
        if(results[0].label == "clapping"){
           picture.src = "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn";
        }else{
            picture.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Ficatcare.org%2Fapp%2Fuploads%2F2018%2F07%2FThinking-of-getting-a-cat.png&imgrefurl=https%3A%2F%2Ficatcare.org%2Fadvice%2Fthinking-of-getting-a-cat%2F&tbnid=0V922RrJgQc9SM&vet=12ahUKEwj6-4P9wIP6AhVysXIEHYmeDGoQMygCegUIARDfAQ..i&docid=5qEHfJOysK_DwM&w=1200&h=600&q=cat&ved=2ahUKEwj6-4P9wIP6AhVysXIEHYmeDGoQMygCegUIARDfAQ";
        }
    }
}