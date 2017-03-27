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
