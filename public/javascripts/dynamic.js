$(document).ready(function(){

    $('#submitButton').click(function(){
        console.log(document.getElementById('card1').value);

        var message = {
            "card1":11839,
            "card2":490,
            "card3":150,
            "card5":226,
            "TransactionAmt":160.5,
            "TransactionDT":129512,
            "addr1":420,
            "dist1":0,
            "dist2":0,
            "D4":456,
            "D2":395,
            "D10":395,
            "D8":0,
            "D1":395,
            "D9":0,
            "C13":29,
            "C1":2,
            "C2":2,
            "C4":0.0,
            "C5":0.0,
            "C6":2,
            "C7":0.0,
            "C8":0.0,
            "C9":1.0,
            "C10":0.0,
            "C11":1.0,
            "C12":0.0
        }

        $.post("predict", message, function(result){
            var prediction = (parseFloat(result[0].substring(1).substring(0,result[0].length-2)) * 100).toFixed(2);
            
            document.getElementById('prugressBur').value = prediction;
            if (prediction < 25) {
                document.getElementById('prugressBur').className = "progress is-success is-large";
            } else if (prediction > 75) {
                document.getElementById('prugressBur').className = "progress is-warning is-large";
            } else {
                document.getElementById('prugressBur').className = "progress is-danger is-large";
            }
            document.getElementById('detectionSubtitle').innerText = `Based on the model, the transaction has an estimated ${prediction}% chance of being fraudulent.`;
            
          });

    });





});