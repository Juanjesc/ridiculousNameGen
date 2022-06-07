
window.onload = function() {
    
    const NAMES = [
        "Cartera","Pelusa","Llavero","Cerradura","Gazpachuelo","Ticket","Aceitunas","Zumo","Desodorante","Libreta","Llaves","Cocina","Calculadora","Taburete","Lechuga","Pepinillos","Rotulador","Maceta","Cereales","Bolsa","Envoltorio","Pinzas","Vitroceramica","Lavavajillas","Borrador","Zapatillas","Puerta","Armario","Caja","Mando","Manta","Mochila","Lentejas","Etiqueta","Camiseta","Pantalones","Calcetines","Lavavadora","Recipiente","Pistachos","Cables","Embrague","Volante","Silla","Teclado","Pilas","Patatas","Macarrones","Salchichas","Pez","Cangrejo","Alcachofas","Aguacate","Suelo","Manzana","Ordenador","Altavoz","Mueble","Colcha","Refrescos","Muelle","Secadora","Ducha","Berenjenas","Patata","Chimenea","Tenedor","Cuchara","Pegamento","Autopista","Puchero", "Gazpacho","Garbanzos","Escalera","Portaminas","Sacapuntas","Diccionario","Persiana","Enchufe","Coche","Fregadero","Fregona","Cubo","Escoba","Cemento","Toalla","Tornillo","Maletas","Servilleta","Almohada","Alcantarilla","Subrayador","Nevera","Escalope","Inodoro"
    ];
    
    var formu = document.forms[0];
    var input_name= formu.name;
    document.querySelector('.boton').addEventListener('click',()=>{
        input_name.value=NAMES[Math.floor(Math.random() * NAMES.length)]
        
    })

    // var num_names = NAMES.length;

    
    // document.getElementById('contador').innerHTML=`Actualmente hay <span>${num_names}</span> palabras`;

    // console.log(texto);

}
