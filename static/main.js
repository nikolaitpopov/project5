// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $.get( "api/pages", function( response ) {
    console.log( response ); // server response
    $("#myTree").tree({
    data: data
});
});
});