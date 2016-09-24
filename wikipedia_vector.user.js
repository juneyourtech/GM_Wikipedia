// ==UserScript==
// @name        wikipedia_vector
// @namespace   wikipedia
// @description Set appearance for normal desktop screens
// @updateURL https://github.com/martrootamm/GM_Wikipedia/raw/master/wikipedia_vector.user.js
// @include     *.wikipedia.org/w*
// @include     *.wikimedia.org/w*
// @include     *.wiktionary.org/w*
// @include     *.wikibooks.org/w*
// @include     *.wikitravel.org/w*
// @include     *.wikiversity.org/w*
// @version     1.0
// @grant       GM_addStyle
// ==/UserScript==

//:commons:VISITED COLOR. I have a plan to move it to a separate userscript.
GM_addStyle("@media screen {A:visited {color:MediumPurple; text-decoration:underline; background:linear-gradient(to right, yellow, transparent 50%, transparent 100%) !important;} }") //visited color WORKS, background-color doesn't. SlateBlue is ok.

//Sidebar languages
//GM_addStyle("DIV#p-lang ul {font-family:sans-serif;}") //fixes bad language font

//Main content (covers text)
GM_addStyle("DIV.mw-body {padding-left:0.67em; padding-right:0.67em;}") //works!! 
/* 0.67 em = 8px. I don't know, if I'll keep it at that for any length of time, if 
I want to separate the content further from the left side to let users concentrate
more on content. But there is currently more symmetry. */
//was: DIV[id=content] {padding-left:0.75em; padding-right:0.75em}
// background-color:#efefff !important;

//Main content (text, only with Vector skin, 'cuz MonoBook is normal)
GM_addStyle("BODY[class~=skin-vector] DIV#bodyContent {font-size:0.825em;}")

//to get the "Good pictures" button away from the flow
GM_addStyle("DIV.mw-content-ltr {clear:right;}") //

//
GM_addStyle("H1.firstHeading {line-height:1.1em;}") //

GM_addStyle("BODY[class~=skin-vector] TABLE[class~=infobox], BODY[class~=skin-vector] TABLE.navbox {font-size:80%}")

GM_addStyle("BODY[class~=skin-vector] DIV[class~=thumb] DIV.thumbinner {font-size:90%;}")

//LIST STYLE type
GM_addStyle("DIV.mw-content-ltr DIV.columns:hover LI {list-style-image:none; list-style-type:decimal; vertical-align:top;}") //color:gray; 

//SEARCH
GM_addStyle("UL.mw-search-results:hover LI {list-style-type:decimal; color:gray; vertical-align:top;}") //

GM_addStyle("UL.mw-search-results:hover LI DIV.searchresult {color:black;}") //

//EDIT ARTICLE: TEXTAREA
GM_addStyle("TEXTAREA#wpTextbox1 {line-height:1.23em}") //

//CATEGORY LINKS
GM_addStyle("DIV.catlinks li {padding-left:5px; padding-right:5px;}")

//LANUAGES / INTERWIKILINKS
GM_addStyle("DIV#mw-panel DIV.portal DIV.body {padding-left:10px;}")

//INTERWIKILINKS: DECIMAL
GM_addStyle("LI.cx-new-interlanguage-link .new {font-style:italic;}")

GM_addStyle("DIV#mw-panel DIV.portal DIV.body ul li[class~=interlanguage-link] {list-style-type:square; color:#638c9c; line-height:1.1em;}") //color was navy

//selector: div#mw-panel div.portal div.body ul:hover li[class~=interlanguage-link]
GM_addStyle("DIV#mw-navigation DIV#mw-panel DIV.portal DIV.body ul:hover li[class~=interlanguage-link], BODY[class~=skin-monobook] DIV.portlet .pBody UL:hover LI[class~=interlanguage-link] {list-style-type:decimal; color:DimGray;}") //Works only with Vector skin.
/* padding-bottom: or 5px. 0.35em works with line-height above at 1.1em; 
Default is at 1.125em. color:gray (original); DimGray slightly darker; follow LightSlateGray, SlateGray (just as dark as DimGray), then DarkSlateGray (even darker, but not black yet) */

GM_addStyle("DIV#mw-navigation DIV#mw-panel DIV.portal DIV.body ul:hover li[class~=interlanguage-link] {font-size:75%; padding-bottom:0.1em;}") //Vector; From late May 2014: 0.1em works.

GM_addStyle('BODY[class~=skin-monobook] DIV.portlet .pBody UL:hover LI[class~=interlanguage-link] {list-style:decimal; background-color:Lavender; line-height:1.53em;}', 0); //MonoBook, Windows XP, Arial/Verdana/sans-serif small font; UL:hover

//GM_addStyle('body[class~=skin-monobook] div.portlet .pBody ul:hover li[class~=interlanguage-link] {padding-bottom:0.044em;}', 0); //MonoBook, Windows XP, Arial/Verdana/sans-serif small font

//COMMONS
//Wikimedia Commons
GM_addStyle("DIV UL.mw-gallery-traditional {margin-left:0px; margin-right:0px !important; padding-left:0px; padding-right:0px !important}") //works!! ; //was UL.gallery

/* This does not really work.
GM_addStyle("UL.mw-gallery-traditional LI.gallerybox {width:149px !important;}") //was UL.gallery */

//GALLERY: TRADITIONAL
GM_addStyle("UL.mw-gallery-traditional LI.gallerybox DIV.thumb {margin-left:0px;}") //works

//GALLERY: PACKED
GM_addStyle("DIV UL.mw-gallery-packed {margin-left:0px; margin-right:0px; padding-left:0px; padding-right:0px;}") //

//GALLERY: PACKED
GM_addStyle("DIV UL.mw-gallery-packed:hover {background-color:Lavender;}") //LightSteelBlue

//GALLERY: PACKED
GM_addStyle("DIV UL.mw-gallery-packed LI.gallerybox {margin-left:0px; margin-right:0px; border:solid 1px rgb(204, 204, 204); padding-left:0px; padding-right:0px;}") //LightSteelBlue

//GALLERY: PACKED
GM_addStyle("DIV UL.mw-gallery-packed LI.gallerybox DIV {margin-left:0px; margin-right:0px; padding-left:0px; padding-right:0px;}") //

//GALLERY: PACKED
GM_addStyle("DIV UL.mw-gallery-packed LI.gallerybox DIV.thumb {background-color:LightSteelBlue; margin-left:0px; margin-right:0px; padding-left:0px; padding-right:0px;}") //Lavender

//GALLERY: PACKED
GM_addStyle("DIV UL.mw-gallery-packed DIV.gallerytext {background-color:Lavender; margin-left:0px; margin-right:0px; padding-left:2px; padding-right:2px;}") //LightSteelBlue

//GM_addStyle("DIV#mw-category-media .galleryfilename-truncate:visited  {background-color:#efefef !important;}") //:visited doesn't work for some reason

/* WIKTIONARY MONOBOOK. This fixes a layout issue with MonoBook, when searching. Not perfect, but works. */

//Page Actions links //SEARCH
GM_addStyle("BODY.mw-special-Search.skin-monobook #p-cactions {position:absolute; top:1em;}") //#p-cactions=C-ACTIONS, à la Special/Eri pages, etc.

//WIKTIONARY MonoBook sidebar
GM_addStyle("BODY.mw-special-Search.skin-monobook div#column-one {position:absolute; top:0px;}")
