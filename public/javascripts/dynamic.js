$(document).ready(function(){

    $('#submitButton').click(function(){
        console.log(document.getElementById('checked12').checked);
        var messageFraud = {
            "card1":6019,
            "card2":583,
            "card3":150,
            "card5":226,
            "TransactionAmt":947,
            "TransactionDT":18552011,
            "addr1":264,
            "dist1":682,
            "dist2":0,
            "D4":6,
            "D2":6,
            "D10":6,
            "D8":0,
            "D1":6,
            "D9":0,
            "C13":1,
            "C1":1,
            "C2":1,
            "C4":0.0,
            "C5":0.0,
            "C6":1,
            "C7":0.0,
            "C8":0.0,
            "C9":1,
            "C10":0.0,
            "C11":1,
            "C12":1,
            "hour":23,
            "day":2,
            "decimal":0
        }

        $.post("predict", messageFraud, function(result){
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