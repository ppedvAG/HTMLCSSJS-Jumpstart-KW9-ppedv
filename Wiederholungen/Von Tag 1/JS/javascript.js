/*
Erstellen Sie eine Funktion, die einen einfachen Wert zurückgibt, der in einer Varialbe gespeichert wurde.
Erstellen Sie eine Funktion, die zwei Parameter mit default-Werten besitzt. Der Rückgabewert ist die Summe beider Parameter.
Erstellen Sie eine Funktion, die die Rückgabewerte beider Funktionen werden multipliziert, das Ergebnis in einer Variable gepeichert
 und in der Konsole ausgegeben.

Frage:
Darf ich "console.log(ergebnis)" außerhalb der Funktion schreiben oder nicht?
 */

function einfacheFunktion(){
    return ergebnis1 = 5;
}

function parameterFunktion(para1 = 1, para2 = 2){
    return para1 + para2;
}

function neueFunktion(){
    let einfacheFunktion = einfacheFunktion();
    let parameterFunktion = parameterFunktion();
    console.log(einfacheFunktion + parameterFunktion);
}