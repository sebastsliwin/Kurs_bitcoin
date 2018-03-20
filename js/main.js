$(document).ready(function () {
    $('#button').click(function () {
        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            $('.kupno').html(data.PLN.buy + ' ' + data.PLN.symbol);
            $('.sprzedaz').html(data.PLN.sell + ' ' + data.PLN.symbol);
            if(data.PLN.last >= data.PLN.buy) {
                $('.kupno').append(' <i>');
                $('i').addClass('up fas fa-arrow-up');
            } else {
                $('.kupno').append(' <i>');
                $('i').addClass('down fas fa-arrow-down');
            } 
            if(data.PLN.last >= data.PLN.sell) {
                $('.sprzedaz').append(' <i>');
                $('i').addClass('up fas fa-arrow-up');
            } else {
                $('.sprzedaz').append(' <i>');
                $('i').addClass('down fas fa-arrow-down');
            }
        });
    });
});