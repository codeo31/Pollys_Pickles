$(function () {
    $('input.quantity').hide();

    //show it when the checkbox is clicked
    $('input.order').on('click', function () {
        if ($(this).prop('checked')) {
            $(this).next().fadeIn();
        } else {
            $(this).next().hide();
        }
    });
});


function getTotal(){
var a = $('input[name=halfpint_quantity]').val()*4;
var b = $('input[name=pint_quantity]').val()*7;
var c = $('input[name=quart_quantity]').val()*10;
var total = a+b+c;
return total;
}
