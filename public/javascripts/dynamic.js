$(document).ready(function(){

    $('#submitButton').click(function(){
        console.log(document.getElementById('card1').value);

        var message = {
            "card1":254346,
            "card2":60.0,
            "card3":170.0,
            "card5":102.0,
            "TransactionAmt":3524.0,
            "TransactionDT":89901,
            "addr1":325.0,
            "dist1":4000,
            "dist2":150,
            "D4":0.0,
            "D2":100,
            "D10":0.0,
            "D8":0,
            "D1":0.0,
            "D9":0,
            "C13":1.0,
            "C1":1.0,
            "C2":1.0,
            "C4":0.0,
            "C5":0.0,
            "C6":1.0,
            "C7":0.0,
            "C8":0.0,
            "C9":0.0,
            "C10":0.0,
            "C11":1.0,
            "C12":0.0
        }

        $.post("predict", message, function(result){
            var prediction = (parseFloat(result[0].substring(1).substring(0,result[0].length-2)) * 100).toFixed(2);
            document.getElementById('progressBar').value = prediction;
          });

    });





});