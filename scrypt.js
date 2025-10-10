document.addEventListener('DOMContentLoaded', function(){
	// Poner el año actual
	var yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// Animación de presionar botones: añadir clase .pressed en touchstart/mousedown y remover después
	var buttons = Array.prototype.slice.call(document.querySelectorAll('.btn'));
	buttons.forEach(function(btn){
		if(!btn) return;

		var add = function(){ btn.classList.add('pressed'); };
		var remove = function(){ btn.classList.remove('pressed'); };

		btn.addEventListener('mousedown', add);
		btn.addEventListener('touchstart', add, {passive:true});

		btn.addEventListener('mouseup', remove);
		btn.addEventListener('mouseleave', remove);
		btn.addEventListener('touchend', remove);
		btn.addEventListener('touchcancel', remove);

		// Soporte teclado: espacio y enter
		btn.addEventListener('keydown', function(e){
			if(e.key === ' ' || e.key === 'Enter') add();
		});
		btn.addEventListener('keyup', function(e){
			if(e.key === ' ' || e.key === 'Enter') remove();
		});
	});
});
