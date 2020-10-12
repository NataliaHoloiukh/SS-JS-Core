// **********Task 1*********
$('a[href^="https://"]').attr('target', '_blank');


// **********Task 2*********
$('h2.head').css('background', 'green').find('.inner').css('fontSize', '35px');

// **********Task 3*********
let x = $('h3+div');
$('h3').prepend(x);

// **********Task 4*********
let checkbox = $('input');

checkbox.click(function() {
    let checked = $('input:checked');

    if (checked.length >= 3) {
        checkbox.attr('disabled', 'true');
    }
});

