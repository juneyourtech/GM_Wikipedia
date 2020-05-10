// ==UserScript==
// @name        wikipedia_vector
// @namespace   wikipedia_vector
// @description Set appearance for normal desktop screens. The look is different in Vector and Monobook themes.
// @updateURL https://github.com/juneyourtech/GM_Wikipedia/raw/master/wikipedia_vector.user.js
// @include     *.wikipedia.org/w*
// @include     *.wikimedia.org/w*
// @include     *.wiktionary.org/w*
// @include     *.wikibooks.org/w*
// @include     *.wikitravel.org/w*
// @include     *.wikiversity.org/w*
// @include     *.wikivoyage.org/w*
// @version     1.0.4
// @grant       GM_addStyle
// ==/UserScript==

/* 4567890123456789023456789012345678901234567890123456789012345678901234567 */

/* GM_addStyle("A.mw-wiki-logo {background-image:none;}"); */

/* 2019 / 2020: Commons: Language indicator at the top | L., 01.02.2020. */
GM_addStyle("LI#pt-uls a.uls-trigger {padding-top:0px !important; padding-left:0px; padding-left:0px;}");

/* SITENOTICE: 03.03.2018 */
GM_addStyle("DIV#siteNotice {padding-left:0px; padding-right:0px;}");

/* sitenotice */
GM_addStyle("HTML.client-js .mw-dismissable-notice {overflow-x:hidden;}")
/* display:block */

/* notice */
GM_addStyle("BODY.sitedir-ltr .mw-dismissable-notice-body {margin-left:0px; margin-right:0px; clear:right;}"); /* orig: left:20%; right:5em; */

/* body text color */
GM_addStyle("DIV.mw-body, .parsoid-body {color:black;}");

/* old */
GM_addStyle("A[href=\'http://ev100.miljonpluss.ut.ee/\'] {display:block; margin-left:unset; margin-right:unset;}"); /* works: border:solid 3px blue; */

GM_addStyle("A[href=\'http://ev100.miljonpluss.ut.ee/\'] > IMG {float:right;}");

/* GM_addStyle("DIV#siteNotice P {}"); */
/* ...exists | Commented out on 12.03.2020. */

/* Exactly where is that? */
/* GM_addStyle("DIV#siteNotice DIV.mw-dismissable-notice-body DIV.center ~ P {}"); */
/* 12.03.2020.: Since no parameters have been written for this, it was commente out. */

/* GM_addStyle(" {}"); */

/* SITENOTICE 
   MINGI MILJONIPROMO */
/* GM_addStyle(" {}"); */

/* :commons:VISITED COLOR. I have a plan to move it to a separate userscript. */

/* GM_addStyle("@media screen { DIV.mw-parser-output A:visited {background-color:transparent;} }"); */

GM_addStyle("@media screen { A:visited {color:MediumPurple; text-decoration:underline; background:linear-gradient(to right, yellow, transparent 50%, transparent 100%) !important;} }"); /* visited color WORKS, background-color doesn't. SlateBlue is ok. */

GM_addStyle("@media screen { DIV.mw-parser-output \*[lang\|=\"zh\"] A:visited {color:MediumPurple; text-decoration:underline !important;} }"); /* text-decoration:underline; */
/*
background:linear-gradient(to right, #ffff00 0%, transparent 50%, transparent 100%) !important; border-bottom:solid 1px blue !important;
*/

/* Sidebar languages: Fixes bad language font */
/* GM_addStyle("DIV#p-lang ul {font-family:sans-serif;}"); */

/* MAIN PAGE | FRONTPAGE */
GM_addStyle("DIV.mw-parser-output > DIV#mp-topbanner {min-width:unset !important;}"); /* this overrides stuff probably done via JavaScript */
GM_addStyle("DIV.mw-parser-output > DIV#mp-topbanner > UL {position:relative !important;}");

GM_addStyle("DIV#mp-topbanner {height:auto !important; white-space:normal !important; display:inline-flex !important;}");

/* width:100%; min-width:32em; */
/* Will inline-flex work? 09.11.2018. */
/* https://en.wikipedia.org/wiki/?useskin=cologneblue */

GM_addStyle("DIV#mp-topbanner > DIV {display:inline !important; float:left !important; width:auto !important; min-width:unset !important;}");

GM_addStyle("DIV#mp-topbanner > UL {display:inline-block !important; position:relative !important; top:unset !important; right:unset !important; min-width:24em !important; margin-top:1em !important;}");

/* Main content (covers text) */
GM_addStyle("DIV.mw-body {padding-left:0.67em; padding-right:0.67em;}"); /* works!! */
/* 0.67 em = 8px. I don't know, if I'll keep it at that for any length of 
time, if I want to separate the content further from the left side to let 
users concentrate more on content. But there is currently more symmetry.
• was: DIV[id=content] {padding-left:0.75em; padding-right:0.75em} 
• background-color:#efefff !important; */

/* Main content (text, only with Vector skin, 'cuz MonoBook is normal) */
GM_addStyle("BODY[class~=skin-vector] DIV#bodyContent {font-size:0.825em;}");

/* to get the "Good pictures" button away from the flow */
GM_addStyle("DIV.mw-content-ltr {clear:right;}");

/* Commons Meta Infobox about a topic | Affects many other boxes, incl. outside of Commons */
/* GM_addStyle("BODY.mediawiki[class*=\"page-Category\"][class*=\"rootpage-Category\"] DIV.mw-content-ltr#mw-content-text > DIV.mw-parser-output {float:unset;}"); */
/* 05.09.2018 */
/* @namespace wikimediacommons url(\'https:\/\/commons.wikimedia.org\'); wikimediacommons|

BODY.
mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-14 ns-subject page-Category_Gconf-editor rootpage-Category_Gconf-editor skin-monobook action-view
*/

GM_addStyle("DIV.mw-content-ltr > DIV.mw-parser-output ~ DIV.mw-category-generated > DIV#mw-subcategories > DIV.mw-content-ltr {clear:unset;}");
/* 05.09.2018: +Clear Unset for contents with infobox */

/* Link colors to navy in content, when not hovered over. */
/*
GM_addStyle("DIV.mw-content-ltr A {color:navy;}");
GM_addStyle("DIV.mw-content-ltr:hover A {color:#002BB8;}");
*/

/* GM_addStyle("DIV.mw-content-ltr A[title$=\"jaanuar\"], DIV.mw-content-ltr A[title$=\"veebruar\"], DIV.mw-content-ltr A[title$=\"märts\"], DIV.mw-content-ltr A[title$=\"aprill\"], DIV.mw-content-ltr A[title$=\"mai\"], DIV.mw-content-ltr A[title$=\"juuni\"], DIV.mw-content-ltr A[title$=\"juuli\"], DIV.mw-content-ltr A[title$=\"august\"], DIV.mw-content-ltr A[title$=\"september\"], DIV.mw-content-ltr A[title$=\"oktoober\"], DIV.mw-content-ltr A[title$=\"november\"], DIV.mw-content-ltr A[title^=\"18\"], DIV.mw-content-ltr A[title^=\"19\"], DIV.mw-content-ltr A[title^=\"20\"] {color:}"); */
/* original: #002BB8 */
/* 12.03.2020.: What was this ^ ruleset for? */

GM_addStyle("TABLE.ambox td.mbox-image {background-color:rgba(51,102,204,0.25); padding:0px;}");

GM_addStyle("H1.firstHeading {line-height:1.1em;}");

GM_addStyle("BODY[class~=skin-vector] TABLE[class~=infobox], BODY[class~=skin-vector] TABLE.navbox {font-size:80%}");

GM_addStyle("BODY[class~=skin-vector] DIV[class~=thumb] DIV.thumbinner {font-size:90%;}");

/* LIST STYLE type */
GM_addStyle("DIV.mw-content-ltr DIV.columns:hover LI, DIV.mw-content-ltr DIV.NavFrame TD:hover LI {list-style-image:none; list-style-type:decimal; vertical-align:top;}"); /* color:gray; */
/* 20.02.2018 Wiktionary: Added second selector for translation lists */

/* SEARCH */
GM_addStyle("UL.mw-search-results:hover LI {list-style-type:decimal; color:gray; vertical-align:top;}");

GM_addStyle("UL.mw-search-results:hover LI DIV.searchresult {color:black;}");

/* EDIT ARTICLE: TEXTAREA */
GM_addStyle("TEXTAREA#wpTextbox1 {line-height:1.23em}");

/* CATEGORY LINKS */
GM_addStyle("DIV.catlinks li {padding-left:5px; padding-right:5px;}");

/* LANUAGES / INTERWIKILINKS */
GM_addStyle("DIV#mw-panel DIV.portal DIV.body {padding-left:10px;}");

/* INTERWIKILINKS: DECIMAL */
GM_addStyle("LI.cx-new-interlanguage-link .new {font-style:italic;}");

GM_addStyle("DIV#mw-panel DIV.portal DIV.body ul li[class~=interlanguage-link] {list-style-type:square; color:#638c9c; line-height:1.1em;}"); /* color was navy */

/* selector: 
   div#mw-panel div.portal div.body ul:hover li[class~=interlanguage-link] */
GM_addStyle("DIV#mw-navigation DIV#mw-panel DIV.portal DIV.body ul:hover li[class~=\"interlanguage-link\"], BODY[class~=\"skin-monobook\"] DIV.portlet .pBody UL:hover LI[class~=\"interlanguage-link\"] {list-style-type:decimal; color:DimGray;}"); /* Works only with Vector skin. */
/* padding-bottom: or 5px. 0.35em works with line-height above at 1.1em; 
Default is at 1.125em. color:gray (original); DimGray slightly darker; follow LightSlateGray, SlateGray (just as dark as DimGray), then DarkSlateGray (even darker, but not black yet) */

GM_addStyle("DIV#mw-navigation DIV#mw-panel DIV.portal DIV.body ul:hover li[class~=\"interlanguage-link\"] {font-size:75%; padding-bottom:0.1em;}");
/* Vector; From late May 2014: 0.1em works. */

GM_addStyle('BODY[class~=skin-monobook] DIV.portlet .pBody UL:hover LI[class~=interlanguage-link] {list-style:decimal; background-color:Lavender; line-height:1.53em;}', 0);
/* MonoBook, Windows XP, Arial/Verdana/sans-serif small font; UL:hover */

/* GM_addStyle('body[class~=\"skin-monobook\"] div.portlet .pBody ul:hover li[class~=interlanguage-link] {padding-bottom:0.044em;}', 0); */
/* MonoBook, Windows XP, Arial/Verdana/sans-serif small font */

/* :w:en */
/* EU FLAGS after names of EU member states OR different backgroun colors. */
GM_addStyle("A[title=\"Austria\"][href=\"\/wiki\/Austria\"], A[title=\"Belgium\"][href=\"\/wiki\/Belgium\"], A[title=\"Bulgaria\"][href=\"\/wiki\/Bulgaria\"], A[title=\"Croatia\"][href=\"\/wiki\/Croatia\"], A[title=\"Cyprus\"][href=\"\/wiki\/Cyprus\"], A[title~=\"Czech\"][title~=\"Republic\"][href=\"\/wiki\/Czech_Republic\"], A[title=\"Denmark\"][href=\"\/wiki\/Denmark\"], A[title=\"Estonia\"][href=\"\/wiki\/Estonia\"], A[title=\"Finland\"][href=\"\/wiki\/Finland\"], A[title=\"France\"][href=\"\/wiki\/France\"], A[title=\"Germany\"][href=\"\/wiki\/Germany\"], A[title=\"Greece\"][href=\"\/wiki\/Greece\"], A[title=\"Hungary\"][href=\"\/wiki\/Hungary\"], A[title=\"Ireland\"][href=\"\/wiki\/Ireland\"], A[title=\"Republic of Ireland\"][href=\"\/wiki\/Republic_of_Ireland\"], A[title=\"Italy\"][href=\"\/wiki\/Italy\"], A[title=\"Latvia\"][href=\"\/wiki\/Latvia\"], A[title=\"Lithuania\"][href=\"\/wiki\/Lithuania\"], A[title=\"Luxembourg\"][href=\"\/wiki\/Luxembourg\"], A[title=\"Malta\"][href=\"\/wiki\/Malta\"], A[title=\"Netherlands\"][href=\"\/wiki\/Netherlands\"], A[title=\"Poland\"][href=\"\/wiki\/Poland\"], A[title=\"Portugal\"][href=\"\/wiki\/Portugal\"], A[title=\"Romania\"][href=\"\/wiki\/Romania\"], A[title=\"Slovakia\"][href=\"\/wiki\/Slovakia\"], A[title=\"Slovak\"][title=\"Republic\"][href=\"\/wiki\/Slovak_Republic\"], A[title=\"Slovenia\"][href=\"\/wiki\/Slovenia\"], A[title=\"Spain\"][href=\"\/wiki\/Spain\"], A[title=\"Sweden\"][href=\"\/wiki\/Sweden\"], A[title~=\"French\"][title~=\"Guiana\"][href~=\"French\"][href~=\"Guiana\"], A[title~=\"Saint\"][title~=\"Martin\"][href~=\"Saint\"][href~=\"Martin\"], A[title~=\"Saint\"][title~=\"Barthélemy\"][href~=\"Saint\"][href~=\"Barthélemy\"], A[title=\"Guadeloupe\"][href=\"\/wiki\/Guadeloupe\"], A[title=\"Mayotte\"][href=\"\/wiki\/Mayotte\"], A[title=\"Martiniqe\"][href=\"\/wiki\/Martiniqe\"], A[title~=\"Saint\"][title~=\"Pierre\"][title~=\"Miquelon\"][href~=\"Saint\"][href~=\"Pierre\"][href~=\"Miquelon\"], A[title=\"Réunion\"][href=\"\/wiki\/Réunion\"], [title~=\"New\"][title~=\"Caledonia\"][href~=\"New\"][href~=\"Caledonia\"] {background-color:rgba(0,0,255,0.18);}");
/* 01.02.2020: UK no longer in the EU. A pity, really.
A[title=\"United Kingdom\"][href=\"\/wiki\/United_Kingdom\"] */
/* \[href=\\"\\\/wiki\\\/[a-z*]\{}\\"\],
*/
GM_addStyle("A[title~=\"Austria\"], A[title~=\"Belgium\"], A[title~=\"Bulgaria\"], A[title~=\"Croatia\"], A[title~=\"Cyprus\"], A[title~=\"Czech\"][title~=\"Republic\"], A[title~=\"Denmark\"], A[title~=\"Estonia\"], A[title~=\"Finland\"], A[title~=\"France\"], A[title~=\"Germany\"], A[title~=\"Greece\"], A[title~=\"Hungary\"], A[title~=\"Ireland\"], A[title~=\"Republic of Ireland\"][href~=\"\/wiki\/Republic_of_Ireland\"], A[title~=\"Italy\"], A[title~=\"Latvia\"], A[title~=\"Lithuania\"], A[title~=\"Luxembourg\"], A[title~=\"Malta\"], A[title~=\"Netherlands\"], A[title~=\"Poland\"], A[title~=\"Portugal\"], A[title~=\"Romania\"], A[title~=\"Slovakia\"], A[title~=\"Slovak Republic\"][href~=\"\/wiki\/Slovak_Republic\"], A[title~=\"Slovenia\"], A[title~=\"Spain\"], A[title~=\"Sweden\"], A[title~=\"French\"][title~=\"Guiana\"], A[title~=\"Guadeloupe\"], A[title~=\"Mayotte\"], A[title~=\"Martinique\"], A[title~=\"Saint\"][title~=\"Martin\"], A[title~=\"Saint\"][title~=\"Barthélemy\"], A[title~=\"Saint\"][title~=\"Pierre\"][title~=\"Miquelon\"], A[title~=\"Réunion\"], A[title~=\"New\"][title~=\"Caledonia\"] {background-color:rgba(0,0,255,0.12);}");

GM_addStyle("A[title~=\"Northern\"][title~=\"Cyprus\"] {background-color:inherit;}");

/* COMMONS */
/* Wikimedia Commons */
GM_addStyle("DIV.ui-buttonset {margin-right:1px;}");

GM_addStyle("DIV UL.mw-gallery-traditional {margin-left:3px; margin-right:0px !important; padding-left:0px; padding-right:0px !important}"); /* works. */
/* other selector is UL.gallery */

/* This does not really work. */
/* GM_addStyle("UL.mw-gallery-traditional LI.gallerybox {width:149px !important;}"); */
/* was: UL.gallery */

/* GALLERY: TRADITIONAL */
GM_addStyle("UL.mw-gallery-traditional > LI.gallerybox {margin-left:-3px;}");
/* works; temporarily set: width:155px !important; */

GM_addStyle("UL.mw-gallery-traditional > LI.gallerybox > DIV {width:unset !important;}"); /* works; margin-right works somehow */

GM_addStyle("UL.mw-gallery-traditional > LI.gallerybox DIV.thumb {margin-left:0px; margin-right:0px; width:unset !important;}"); /* works; margin-right works somehow */

GM_addStyle("UL.mw-gallery-traditional > LI.gallerybox DIV.gallerytext {margin-left:0px; margin-right:0px;}"); /* works */

/* GALLERY: PACKED */
GM_addStyle("DIV UL.mw-gallery-packed {margin-left:0px; margin-right:0px; padding-left:0px; padding-right:0px;}");

/* GALLERY: PACKED */
GM_addStyle("DIV UL.mw-gallery-packed:hover {background-color:Lavender;}");
/* LightSteelBlue */

/* GALLERY: PACKED */
GM_addStyle("DIV UL.mw-gallery-packed LI.gallerybox {margin-left:0px; margin-right:0px; border:solid 1px rgb(204, 204, 204); padding-left:0px; padding-right:0px;}"); /* LightSteelBlue */

/* GALLERY: PACKED */
GM_addStyle("DIV UL.mw-gallery-packed LI.gallerybox DIV {margin-left:0px; margin-right:0px; padding-left:0px; padding-right:0px;}");

/* GALLERY: PACKED */
GM_addStyle("DIV UL.mw-gallery-packed LI.gallerybox DIV.thumb {background-color:LightSteelBlue; margin-left:0px; margin-right:0px; padding-left:0px; padding-right:0px;}"); /* Lavender */

/* GALLERY: PACKED */
GM_addStyle("DIV UL.mw-gallery-packed DIV.gallerytext {background-color:Lavender; margin-left:0px; margin-right:0px; padding-left:2px; padding-right:2px;}"); /* LightSteelBlue */

/* GM_addStyle("DIV#mw-category-media .galleryfilename-truncate:visited  {background-color:#efefef !important;}"); */
/* :visited doesn't work for some reason */

/* WIKTIONARY MONOBOOK. This fixes a layout issue with MonoBook, when searching. Not perfect, but works. */

/* Page Actions links | SEARCH */
GM_addStyle("BODY.mw-special-Search.skin-monobook #p-cactions {position:absolute; top:1em;}"); /* #p-cactions=C-ACTIONS, à la Special/Eri pages, etc. */

/* COMMONS: clear for structured data */
GM_addStyle("DIV.commons-file-information-table {clear:both; overflow-x:auto;}");
/* 26.02.2020.: Added scrollbars for very wide stuff. */

/* COMMONS: File content under picture | 12.03.2020. */
GM_addStyle("DIV.wbmi-tabs-container {margin-top:6px;}");

/* COMMONS: File content (starts with desc) | 12.03.2020. */
GM_addStyle("DIV.oo-ui-menuLayout > .oo-ui-menuLayout-menu, DIV.oo-ui-menuLayout > .oo-ui-menuLayout-content {transition:none;}");

/* COMMONS: File history | 26.02.2020. */
GM_addStyle("DIV#mw-imagepage-section-filehistory {overflow-x:auto;}");

/* COMMONS: File history usernmaes | 12.03.2020. */
GM_addStyle("A.mw-userlink {word-wrap:normal; -moz-hyphens:unset;}");

/* EDIT AREA | Not in use at the moment. */
/* GM_addStyle("@media only screen and (max-width:1023px) { rules {parameters:values;} }"); */

/* WIKTIONARY MonoBook sidebar */
GM_addStyle("BODY.mw-special-Search.skin-monobook div#column-one {position:absolute; top:0px;}");
