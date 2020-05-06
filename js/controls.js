$('#ldli li').on('click', function() {
    var getValue = $(this).text();
    $('#ldLabel').text(getValue);
});

$('#dli li').on('click', function() {
    var getValue = $(this).text();
    $('#dLabel').text(getValue);
});


$('#rdli li').on('click', function() {
    var getValue = $(this).text();
    $('#rdLabel').text(getValue);
});