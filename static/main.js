// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $.get( "api/pages", function( response ) {
    console.log( response ); // server response
    $("#myTree").tree({
    data: data,


// or Load the node data from this url.
dataUrl: null,

// <a href="https://www.jqueryscript.net/animation/">Animation</a> speed
animationSpeed: "fast",

// Open nodes initially.
autoOpen: false,

// Save and restore the state of the tree automatically.
saveState: false,

// Turn on dragging and dropping of nodes.
dragAndDrop: true,

// Turn on selection of nodes.
selectable: false,

// Bind the context menu event (true/false).
useContext: false,

// callback functions.
onCanSelectNode: null,
onSetStateFromStorage: null,
onGetStateFromStorage: null,
onCreateLi: null,
onIsMoveHandle: null,
onCanMove: null,
onCanMoveTo: null,
onLoadFailed: null,
onDragMove: null,
onDragStop: null,
onLoading: null,

// The position of the toggle button
buttonLeft: true,

// Shows empty folders
showEmptyFolder: false,

// The tabindex of the tree.
tabIndex: 0,

// Determine if text is autoescaped.
autoEscape: true,

// A character or symbol to display on closed nodes.
closedIcon: '&#x25ba;',

// A character or symbol to display on opened nodes.
openedIcon: '&#x25bc;',

// Turn slide animation on or off.
slide: true,

// Node class
//nodeClass: Node,

// Process the tree data from the server.
dataFilter: null,

// Enable or disable keyboard support.
keyboardSupport: true,

// Set the delay for opening a folder during drag-and-drop.
openFolderDelay: 500,

// rtl or ltr
rtl: null,

// sets the delay before drag-and-drop is starte
startDndDelay: 300
});
});
});