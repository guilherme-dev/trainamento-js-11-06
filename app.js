//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
//http://api.jquery.com/
//

//Window e Document
//
//

/*
	function soma(primeiro, segundo, imprime){
		console.log(primeiro + segundo);
	};

	soma(1,2,function(){
		console.log('olá');
	});
*/
	//.addClass
/*	$('#btn1').on('click', function(){
		$('#panel1').fadeToggle(300);
	});*/

	var a = 2;

	function soma(){
		console.log(window.a);
	}

	soma();
	$('.button').on('click', function(){
		var panelId = $(this).attr('data-panel');
		var $button = $('.button');
		$(panelId).fadeToggle(300, function(){
			
		});
	});


$(function(){
	$.ajax({
		type: 'get',
		url: 'bower.json',
		success: function(data){
			console.log(data);
		},
	});
});
/*var meuObj = {
	nome: 'Marilene', 
	sobrenome: 'Diva',
	imprimeNome: function (){
		return this.nome;
	}
};*/
