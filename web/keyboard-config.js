log('keyboard-config.js');
var KEYBOARD_BUTTON=
[
	[
		'F1',
		'F2',
		'F3',
		'F4',
		'F5',
		'F6',
		'F7',
		'F8',
		'F9',
		'F10',
		'F11',
		'F12'
	],
	[
		{'Escape' : 'Esc'},
		[ '1', {'exclam' : '!'} ],
		[ '2', {'quotedbl' : '"'} ],
		[ '3', {'numbersign' : '#'} ],
		[ '4', {'dollar' : '$'} ],
		[ '5', {'percent' : '%'} ],
		[ '6', {'asciicircum' : '^'} ],
		[ '7', {'ampersand' : '&'} ],
		[ '8', {'asterisk' : '*'} ],
		[ '9', {'parenleft' : '('} ],
		[ '0', {'parenright' : ')'} ]
	],
	[
		'q',
		'w',
		'e',
		'r',
		't',
		'y',
		'u',
		'i',
		'o',
		'p',
		{'BackSpace': '&#8592;'}
	],
	[
		'a',
		's',
		'd',
		'f',
		'g',
		'h',
		'j',
		'k',
		'l',
		{ 'Return' : 'enter'}
	],
	[
		[ { 'minus' : '-'} , {'underscore' : '_'} ],
		'z',
		'x',
		'c',
		'v',
		'b',
		'n',
		'm',
		[ {'period' : '.'}, {'comma': ','} ],
		{'at' : '@' }
	],
	[
		'ctrl',
		'super',
		'Alt',
		'space',
		'shift'
	]
]

var KEYBOARD_BUTTON_STYLE = {
	'space'	: 'flex: 3',
	'Return'	: 'flex: 2',
	'BackSpace'	: 'flex: 2'
}