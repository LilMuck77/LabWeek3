$(document).ready(function (){
    //logic
    $("#quantityBoxOne").change(quantityOneUpdate);




    function quantityOneUpdate(){

        var priceForJquey = $("#quantityBoxOne").val() * 39.99;

        $("#jQueryPrice").text(priceForJquey.toFixed(2));




        var priceForDonation = $("#quantityBoxTwo").val() * 14.99 ;

        $("#donationPrice").text(priceForDonation.toFixed(2));

        var grandTotalPrice = priceForJquey + priceForDonation;

        $("#grandTotal").text(grandTotalPrice.toFixed(2));
    }





});