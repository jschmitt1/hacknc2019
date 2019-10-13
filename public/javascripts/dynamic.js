$(document).ready(function(){
    const checkbox = document.getElementById("checked12");
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
        if (document.getElementById('checked12').checked == true) {
            document.getElementById('card1').disabled = true;
            document.getElementById('card2').disabled= true;
            document.getElementById('card3').disabled = true;
            document.getElementById('card5').disabled = true;
            document.getElementById('transactionAmount').disabled = true;
            document.getElementById('transactionDate').disabled = true;
            document.getElementById('address').disabled = true;
            document.getElementById('distance1').disabled = true;
            document.getElementById('distance2').disabled = true;
            document.getElementById('d4').disabled = true;
            document.getElementById('d2').disabled = true;
            document.getElementById('d10').disabled = true;
            document.getElementById('d8').disabled = true;
            document.getElementById('d1').disabled = true;
            document.getElementById('d9').disabled = true;
            document.getElementById('c13').disabled = true;
            document.getElementById('c1').disabled = true;
            document.getElementById('c2').disabled = true;
            document.getElementById('c4').disabled = true;
            document.getElementById('c5').disabled = true;
            document.getElementById('c6').disabled = true;
            document.getElementById('c7').disabled = true;
            document.getElementById('c8').disabled = true;
            document.getElementById('c9').disabled = true;
            document.getElementById('c10').disabled = true;
            document.getElementById('c11').disabled = true;
            document.getElementById('c12').disabled = true;
            document.getElementById('hour').disabled = true;
            document.getElementById('day').disabled = true;
            document.getElementById('decimal').disabled = true;
        } else {
            document.getElementById('card1').disabled = false;
            document.getElementById('card2').disabled= false;
            document.getElementById('card3').disabled = false;
            document.getElementById('card5').disabled = false;
            document.getElementById('transactionAmount').disabled = false;
            document.getElementById('transactionDate').disabled = false;
            document.getElementById('address').disabled = false;
            document.getElementById('distance1').disabled = false;
            document.getElementById('distance2').disabled = false;
            document.getElementById('d4').disabled = false;
            document.getElementById('d2').disabled = false;
            document.getElementById('d10').disabled = false;
            document.getElementById('d8').disabled = false;
            document.getElementById('d1').disabled = false;
            document.getElementById('d9').disabled = false;
            document.getElementById('c13').disabled = false;
            document.getElementById('c1').disabled = false;
            document.getElementById('c2').disabled = false;
            document.getElementById('c4').disabled = false;
            document.getElementById('c5').disabled = false;
            document.getElementById('c6').disabled = false;
            document.getElementById('c7').disabled = false;
            document.getElementById('c8').disabled = false;
            document.getElementById('c9').disabled = false;
            document.getElementById('c10').disabled = false;
            document.getElementById('c11').disabled = false;
            document.getElementById('c12').disabled = false;
            document.getElementById('hour').disabled = false;
            document.getElementById('day').disabled = false;
            document.getElementById('decimal').disabled = false;
        }
    }
    checkbox.addEventListener('change', (event) => {
        handleClick();
    });
    
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
                "card1":parseFloat(document.getElementById('card1').value),
                "card2":parseFloat(document.getElementById('card2').value),
                "card3":parseFloat(document.getElementById('card3').value),
                "card5":parseFloat(document.getElementById('card5').value),
                "TransactionAmt":parseFloat(document.getElementById('transactionAmount').value),
                "TransactionDT":parseFloat(document.getElementById('transactionDate').value),
                "addr1":parseFloat(document.getElementById('address').value),
                "dist1":parseFloat(document.getElementById('distance1').value),
                "dist2":parseFloat(document.getElementById('distance2').value),
                "D4":parseFloat(document.getElementById('d4').value),
                "D2":parseFloat(document.getElementById('d2').value),
                "D10":parseFloat(document.getElementById('d10').value),
                "D8":parseFloat(document.getElementById('d8').value),
                "D1":parseFloat(document.getElementById('d1').value),
                "D9":parseFloat(document.getElementById('d9').value),
                "C13":parseFloat(document.getElementById('c13').value),
                "C1":parseFloat(document.getElementById('c1').value),
                "C2":parseFloat(document.getElementById('c2').value),
                "C4":parseFloat(document.getElementById('c4').value),
                "C5":parseFloat(document.getElementById('c5').value),
                "C6":parseFloat(document.getElementById('c6').value),
                "C7":parseFloat(document.getElementById('c7').value),
                "C8":parseFloat(document.getElementById('c8').value),
                "C9":parseFloat(document.getElementById('c9').value),
                "C10":parseFloat(document.getElementById('c10').value),
                "C11":parseFloat(document.getElementById('c11').value),
                "C12":parseFloat(document.getElementById('c12').value),
                "hour":parseFloat(document.getElementById('hour').value),
                "day":parseFloat(document.getElementById('day').value),
                "decimal":parseFloat(document.getElementById('decimal').value)
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