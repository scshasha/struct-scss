$().ready(function() {

	//	*****************************************************************************
	//	TinyMCE
	//	*****************************************************************************

	// function to allow indentation of lists in tinyMCE using tab
	// key: http://mopo.ws/PI8CTq
	function fixTinyMCETabIssue(inst) {
		inst.onKeyDown.add(function(inst, e) {
			// Firefox uses the e.which event for keypress
			// While IE and others use e.keyCode, so we look for both
			if (e.keyCode) code = e.keyCode;
			else if (e.which) code = e.which;
			if(code == 9 && !e.altKey && !e.ctrlKey) {
				// toggle between Indent and Outdent command, depending on if SHIFT is pressed
				if (e.shiftKey) inst.execCommand('Outdent');
				else inst.execCommand('Indent');
				// prevent tab key from leaving editor in some browsers
				if(e.preventDefault) {
						e.preventDefault();
				}
				return false;
			}
		});
	}	

	$('textarea.tinymce').tinymce({
		// Location of TinyMCE script
		script_url : 'js/libs/tiny_mce/tiny_mce.js',

		// General options
		theme : "advanced",
		skin : "fixate",
		plugins : "autoresize,autolink,style,inlinepopups,paste,noneditable,visualchars,nonbreaking,xhtmlxtras,template",

		// Theme options
		theme_advanced_buttons1 : "removeformat,undo,redo,|,formatselect,|,bold,italic,underline,strikethrough,blockquote,link,unlink,|,bullist,numlist,|,image,",
		theme_advanced_blockformats : "p,h1,h2,h3",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "none",
		theme_advanced_resizing : false,

		// Example content CSS (should be your site CSS)
		content_css : "style.css",

		// Drop lists for link/image/media/template dialogs
		template_external_list_url : "lists/template_list.js",
		external_link_list_url : "lists/link_list.js",
		external_image_list_url : "lists/image_list.js",
		media_external_list_url : "lists/media_list.js",

		// paste plugin settings
		// paste_auto_cleanup_on_paste : true,
		// paste_remove_styles_if_webkit: true,
		paste_remove_styles: true,

		// Replace values for the template plugin
		template_replace_values : {
			username : "Some User",
			staffid : "991234"
		},

		// Enable tab indents on lists
		init_instance_callback: fixTinyMCETabIssue
	});


	//	*****************************************************************************
	//	jQuery UI Autocomplete
	//	*****************************************************************************

	//	-----------------------------------------------------------------------------
	//	Autocomplete1
	//	-----------------------------------------------------------------------------

	var autocomplete1Data = [
			"Anna Conda",
			"Ben Dover",
			"Craven Moorehead",
			"Dick Burns",
			"Earl Lee Riser",
			"Gene Poole",
			"Harry Baals",
			"Ileane Wright",
			"Jack Knoff",
			"Kerry Oki",
			"Lance Boyle",
			"M. Balmer",
			"Norma Leigh Lucid",
			"Ophelia Payne",
			"Pat Hiscock",
			"Polly Ester",
			"Raynor Schein",
			"Sal A. Mander",
			"Tanya Hyde",
			"Viola Solo",
			"Walter Melon",
			"X. Benedict"
		];

		$( "#autocomplete1" ).autocomplete({
			source: autocomplete1Data,
			appendTo: "#autocomplete1-container"
		});

	//	-----------------------------------------------------------------------------
	//	Autocomplete2
	//	-----------------------------------------------------------------------------
	var autocomplete2Data = [
		{
			value: "catstevens",
			label: "Cat Stevens",
			desc: "a formidable description of Cat Stevens O.o"
		},
		{
			value: "felinegood",
			label: "Feline Good",
			desc: "are you feline good too?"
		},
		{
			value: "tickletank",
			label: "Tickle Tank",
			desc: "getz yo tickle awn"
		},
		{
			value: "atticuskitch",
			label: "Atticus Kitch",
			desc: "swings in gardens and such things"
		},
		{
			value: "seriousbulbous",
			label: "Serious Bulbous",
			desc: "what is this doing here, fo'real?!"
		},
		{
			value: "zeitgeistkitteh",
			label: "Zeitgeist Kitteh",
			desc: "had to get a 'z' in somehow"
		}
	];

	$( "#autocomplete2" ).autocomplete({
		source: autocomplete2Data,
		appendTo: "#autocomplete2-container",
		focus: function(event, ui) {
			return false;
		},
		select: function( event, ui ) {
			$( "#autocomplete2" ).val( ui.item.label );
			$( "#autocomplete2-id" ).val( ui.item.value );
		}
	})
	.data( "autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append(
				"<a class='img-block cf'>" +
					"<img class='img' src='http://placekitten.com/20/20'/>" +
					"<div class='img-block-content'>" +
						"<span>" + item.label + "</span><br><small>" + item.desc + "</small></div></a>" )
			.appendTo( ul );
	};
	
});