$(document).ready(function(){
    $("#checked12").onchange(function() {
        
    function handleClick() {
        document.getElementById('card1').value = 6019;
        document.getElementById('card2').value = 583;
        document.getElementById('card3').value = 150;
        document.getElementById('card5').value = 226;
        document.getElementById('transactionAmount').value = 947;
        document.getElementById('transactionDate').value = 18552011;
        document.getElementById('address').value = 264;
        document.getElementById('distance1').value = 682;
        document.getElementById('distance2').value = 0;
        document.getElementById('d4').value = 6;
        document.getElementById('d2').value = 6;
        document.getElementById('d10').value = 6;
        document.getElementById('d8').value = 0;
        document.getElementById('d1').value = 6;
        document.getElementById('d9').value = 0;
        document.getElementById('c13').value = 1;
        document.getElementById('c1').value = 1;
        document.getElementById('c2').value = 1;
        document.getElementById('c4').value = 0.0;
        document.getElementById('c5').value = 0.0;
        document.getElementById('c6').value = 1;
        document.getElementById('c7').value = 0.0;
        document.getElementById('c8').value = 0.0;
        document.getElementById('c9').value = 1;
        document.getElementById('c10').value = 0.0;
        document.getElementById('c11').value = 1;
        document.getElementById('c12').value = 1;
        document.getElementById('hour').value = 23;
        document.getElementById('day').value = 2;
        document.getElementById('decimal').value = 0;
    }
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
        if (document.getElementById('checked12').checked == false) {
            messageFraud = {
                "card1":document.getElementById('card1').value,
                "card2":document.getElementById('card2').value,
                "card3":document.getElementById('card3').value,
                "card5":document.getElementById('card5').value,
                "TransactionAmt":document.getElementById('transactionAmount').value,
                "TransactionDT":document.getElementById('transactionDate').value,
                "addr1":document.getElementById('address').value,
                "dist1":document.getElementById('distance1').value,
                "dist2":document.getElementById('distance2').value,
                "D4":document.getElementById('d4').value,
                "D2":document.getElementById('d2').value,
                "D10":document.getElementById('d10').value,
                "D8":document.getElementById('d8').value,
                "D1":document.getElementById('d1').value,
                "D9":document.getElementById('d9').value,
                "C13":document.getElementById('c13').value,
                "C1":document.getElementById('c1').value,
                "C2":document.getElementById('c2').value,
                "C4":document.getElementById('c4').value,
                "C5":document.getElementById('c5').value,
                "C6":document.getElementById('c6').value,
                "C7":document.getElementById('c7').value,
                "C8":document.getElementById('c8').value,
                "C9":document.getElementById('c9').value,
                "C10":document.getElementById('c10').value,
                "C11":document.getElementById('c11').value,
                "C12":document.getElementById('c12').value,
                "hour":document.getElementById('hour').value,
                "day":document.getElementById('day').value,
                "decimal":document.getElementById('decimal').value
            }
        } else {
            document.getElementById('card1').value = 6019;
            document.getElementById('card2').value = 583;
            document.getElementById('card3').value = 150;
            document.getElementById('card5').value = 226;
            document.getElementById('transactionAmount').value = 947;
            document.getElementById('transactionDate').value = 18552011;
            document.getElementById('address').value = 264;
            document.getElementById('distance1').value = 682;
            document.getElementById('distance2').value = 0;
            document.getElementById('d4').value = 6;
            document.getElementById('d2').value = 6;
            document.getElementById('d10').value = 6;
            document.getElementById('d8').value = 0;
            document.getElementById('d1').value = 6;
            document.getElementById('d9').value = 0;
            document.getElementById('c13').value = 1;
            document.getElementById('c1').value = 1;
            document.getElementById('c2').value = 1;
            document.getElementById('c4').value = 0.0;
            document.getElementById('c5').value = 0.0;
            document.getElementById('c6').value = 1;
            document.getElementById('c7').value = 0.0;
            document.getElementById('c8').value = 0.0;
            document.getElementById('c9').value = 1;
            document.getElementById('c10').value = 0.0;
            document.getElementById('c11').value = 1;
            document.getElementById('c12').value = 1;
            document.getElementById('hour').value = 23;
            document.getElementById('day').value = 2;
            document.getElementById('decimal').value = 0;

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