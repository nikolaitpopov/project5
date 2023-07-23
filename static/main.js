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
onDragStop: function handleStop(node, e) {
    $('#data').append($('#myTree').tree('toJson'));
},
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
require([ 'dgrid/Grid', 'dojo/domReady!' ], function (Grid) {
    var grid_data = [
        { first: 'Bob', last: 'Barker', age: 89 },
        { first: 'Vanna', last: 'White', age: 55 },
        { first: 'Pat', last: 'Sajak', age: 65 }
    ];

    var grid = new Grid({
        columns: {
            first: 'First Name',
            last: 'Last Name',
            age: 'Age'
        }
    }, 'grid');
    grid.renderArray(grid_data);
});

require(["dojo/on", "dgrid/OnDemandGrid","dgrid/Tree","dgrid/Editor", "dgrid/Keyboard",
					"dgrid/Selection", "dgrid/Selector", "dgrid/ColumnSet", "dojo/_base/declare",
					"aux_/createHierarchicalStore", "aux_/hierarchicalCountryData", "dojo/domReady!"],
				function(
					on, Grid, Tree, Editor, Keyboard, Selection, Selector, ColumnSet, declare,
					createHierarchicalStore, hierarchicalCountryData){
					var count = 0; // for incrementing edits from button under 1st grid

					function byId(id){
						return document.getElementById(id);
					}

					function nbspFormatter(value){
						// returns "&nbsp;" for blank content, to prevent cell collapsing
						return value === undefined || value === "" ? "&nbsp;" : value;
					}

					var StandardGrid = declare([Grid, Keyboard, Selection, Selector, Editor, Tree]);
					var testCountryStore = createHierarchicalStore({ data: hierarchicalCountryData }, true);

					var treeGrid = window.treeGrid = new StandardGrid({
						collection: testCountryStore,
						columns: [
							{renderExpando: true, label: "Name", field:"name", sortable: false},
							{label: "Visited", field: "bool", sortable: false, editor: "checkbox"},
							{label:"Type", field:"type", sortable: false},
							{label:"Population", field:"population"},
							{label:"Timezone", field:"timezone"}
						]
					}, "treeGrid");

});
});

