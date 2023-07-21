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

require([
				"dojo/_base/lang",
				"dgrid/List",
				"dgrid/OnDemandGrid",
				"dgrid/Selection",
				"dgrid/Editor",
				"dgrid/Keyboard",
				"dgrid/Tree",
				"dojo/_base/declare",
				"dojo/query",
				"dstore/Rest",
				"dstore/Trackable",
				"dstore/Cache",
				"dstore/Tree",
				"dojo/domReady!"
			], function (lang, List, Grid, Selection, Editor, Keyboard, Tree, declare, query, Rest, Trackable, Cache, TreeStore) {

				var CustomGrid = declare([Grid, Selection, Keyboard, Editor, Tree], {
					insertRow: function () {
						refreshed = true;
						return this.inherited(arguments);
					},

					removeRow: function () {
						refreshed = true;
						return this.inherited(arguments);
					},

					logPreload: function () {
						var line = '';
						for (var i = 0; i < 160; i++) {
							line += '\u2500';
						}
						console.log(line);
						var preload = this.preload;
						if (preload) {
							while (preload.previous) {
								preload = preload.previous;
							}
							var preloads = [];
							var preloadNodes = [];
							var height = 0;
							var totalPossibleRows = 0;
							while (preload) {
								preloads.push(preload);
								var node = preload.node;
								height += node.offsetHeight;
								totalPossibleRows += preload.count;
								preloadNodes.push({
									preloadId: node.getAttribute('data-preloadid'),
									rowIndex: node.rowIndex,
									height: node.style.height,
									offsetTop: node.offsetTop,
									offsetHeight: node.offsetHeight
								});
								preload = preload.next;
							}
							console.table(preloads);
							console.table(preloadNodes);
							var realRowCount = query('.dgrid-row', grid.contentNode).length;
							height += 24 * realRowCount;
							totalPossibleRows += realRowCount;
							console.log('Height calculated from preloads = ', height);


							console.log('Actual grid content height = ', gridContentHeight());
							console.log('Total possible rows = ', totalPossibleRows);
							console.log('Current row count = ', realRowCount);
						}
					}
				});

				function createStore(config) {
					var store = new declare([Rest, Trackable, Cache, TreeStore])(lang.mixin({
//						target: "./data/rest.php",
						target: "http://127.0.0.1:8000/api/pages",
						put: function (object) {
							return object;
						}
					}, config));

					store.getRootCollection = function () {
						return this.root.filter({ parent: undefined });
					};

					return store;
				}

				function getColumns() {
					return [
						{ label: 'content', field: 'content', sortable: false, renderExpando: true },
						{ label: 'Id', field: 'id' },
						{ label: 'page', field: 'page', sortable: false, editor: "text" },
						{ label: 'parent', field: 'parent', sortable: false, autoSave: true}
					];
				}

				window.grid = new CustomGrid({
					pagingMethod: 'throttleDelayed',
					collection: createStore().getRootCollection(),
					sort: "id",
					getBeforePut: false,
					columns: getColumns()
				}, "grid");

				var refreshed = false;
				var prevContentHeight = 0;
				setInterval(function () {
					var contentHeight = gridContentHeight();
					if (refreshed || prevContentHeight != contentHeight) {
						prevContentHeight = contentHeight;
						refreshed = false;
						grid.logPreload();
					}
				}, 1500);

				function gridContentHeight() {
					var contentHeight = 0;
					var childNodes = grid.contentNode.childNodes;
					var len = childNodes.length;
					for (var i = 0; i < len; i++) {
						contentHeight += childNodes[i].offsetHeight;
					}
					return contentHeight;
				}

				new CustomGrid({
					collection: createStore({ useRangeHeaders: true }).getRootCollection(),
					sort: "id",
					getBeforePut: false,
					columns: getColumns()
				}, "grid_rest");
			})

});

