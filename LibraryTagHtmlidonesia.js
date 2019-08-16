/*
	Author By: Rizsyad AR
*/
$(document).ready(function(){
	var script = $('body').html();

	/*
	        For tag form
	*/

	//button
	script = script.replace(/<tombol/g, '<button');
	script = script.replace(/<\/tombol>/g, '<\/button>');

	//form
	script = script.replace(/<formulir/g, '<form');
	script = script.replace(/<\/formulir>/g, '<\/form>');

	//input
	script = script.replace(/<masukan/g, '<input');

	//textarea
	script = script.replace(/<areatulisan/g, '<textarea');
	script = script.replace(/<\/areatulisan>/g, '<\/textarea>');

	/*
	    heading 1 - 5
	*/
	script = script.replace(/<tulisanbesar1/g, '<h1');
	script = script.replace(/<tulisanbesar2/g, '<h2');
	script = script.replace(/<tulisanbesar3/g, '<h3');
	script = script.replace(/<tulisanbesar4/g, '<h4');
	script = script.replace(/<tulisanbesar5/g, '<h5');
	script = script.replace(/<tulisanbesar6/g, '<h6');

	script = script.replace(/<\/tulisanbesar1>/g, '<\/h1>');
	script = script.replace(/<\/tulisanbesar2>/g, '<\/h2>');
	script = script.replace(/<\/tulisanbesar3>/g, '<\/h3>');
	script = script.replace(/<\/tulisanbesar4>/g, '<\/h4>');
	script = script.replace(/<\/tulisanbesar5>/g, '<\/h5>');
	script = script.replace(/<\/tulisanbesar6>/g, '<\/h6>');

	//marquee
	script = script.replace(/<tulisanbergerak/g, '<marquee');
	script = script.replace(/<\/tulisanbergerak>/g, '<\/marquee>');
	//center
	script = script.replace(/<tengah/g, '<center');
	script = script.replace(/<\/tengah>/g, '<\/center>');
	//img
	script = script.replace(/<gambar/g, '<img');
	//a
	script = script.replace(/<tautan/g, '<a');
	script = script.replace(/<\/tautan>/g, '<\/a>');
	//div
	script = script.replace(/<bagian/g,'<div');
	script = script.replace(/<\/bagian>/g,'<\/div>');

	/*
	 HTML FORMATING
	*/
	script = script.replace(/<tulisantebal/g,'<b');
	script = script.replace(/<\/tulisantebal>/g,'<\/b>');

	script = script.replace(/<tulisankuat/g,'<strong');
	script = script.replace(/<\/tulisankuat>/g,'<\/strong>');

	script = script.replace(/<tulisanmiring/g,'<i');
	script = script.replace(/<\/tulisanmiring>/g,'<\/i>');

	script = script.replace(/<tulisantanda/g,'<mark');
	script = script.replace(/<\/tulisantanda>/g,'<\/mark>');

	script = script.replace(/<tulisankecil/g,'<small');
	script = script.replace(/<\/tulisankecil>/g,'<\/small>');

	script = script.replace(/<tulisangarisbawah/g,'<u');
	script = script.replace(/<\/tulisangarisbawah>/g,'<\/u>');

	/*
	 for attr
	*/

	script = script.replace(/gaya/g, 'style');
	script = script.replace(/lebar/g, 'width');
	script = script.replace(/tinggi/g, 'height');
	script = script.replace(/judul/g, 'title');
	script = script.replace(/kelas/g, 'class');
	script = script.replace(/menuju/g, 'href');
	script = script.replace(/sasaran/g, 'target');
	script = script.replace(/aksi/g, 'action');
	script = script.replace(/sumber/g, 'src');
	script = script.replace(/ukuran/g, 'size');
	script = script.replace(/unik/g, 'id');
	script = script.replace(/metode/g, 'method');
	script = script.replace(/tipe/g, 'type');
	script = script.replace(/untuk/g, 'for');

	$('body').html(script);

});
