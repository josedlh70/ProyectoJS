

function crearHistoria(){
    var nombre= prompt( "¿Como es tu nombre?")
    var edad= prompt( "¿Cuantos años tienes?" )
    var pais= prompt( "¿En que país te encuentras?")
    var instrumento= prompt("¿Que instrumento ejecutas?")
    var universidad= prompt ("¿En que universidad estudias?")


var historia= nombre + " tenia " + edad + " años" + " en un pais llamado "+ pais + ". Se dedicaba a la musica y tocaba la " + instrumento;

alert(historia)

}