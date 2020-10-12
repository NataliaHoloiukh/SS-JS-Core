// **********Task 1*********
$('a[href^="https://"]').attr('target', '_blank');


// **********Task 2*********
$('h2.head').css('background', 'green').find('.inner').css('fontSize', '35px');


// **********Task 3*********
let div1 = $('h3+div:first');
let div2 = $('h3+div:last');

$('h3:first').before(div1);
$('h3:last').before(div2);


// **********Task 4*********
let checkbox = $('input');

checkbox.click(function() {
    let checked = $('input:checked');

    if (checked.length >= 3) {
        checkbox.attr('disabled', 'true');
    }
});

