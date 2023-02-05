$(document).ready(function () {
    $('#form').submit(function (event) {
        event.preventDefault();

        var formData = {
            'username': $('input[name=username]').val(),
            'email': $('input[name=email]').val(),
            'message': $('textarea[name=message]').val()
        };

        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: formData,
            dataType: 'json',
            encode: true
        })
            .done(function (data) {
                console.log(data);
            });
    });
})