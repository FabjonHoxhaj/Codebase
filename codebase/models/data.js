//Mein Fachobjekt Kurs
function Kurs(picture, titel, kosten, autor, details)
{
  this.picture=picture;
  this.titel=titel;
  this.kosten=kosten;
  this.autor=autor; 
  this.details=details; 
}

//Instanzen meines Fachobjektes
let kurs1=new Kurs("https://eye-tic.com/assets/front/img/partners/1580603940.png","Javascript-Grundlagen", 19.99, "Maximilian Schröder","/detailJS");
let kurs2=new Kurs("https://cms-assets.tutsplus.com/uploads/users/12/posts/18754/preview_image/angular-js.png","Angular Crashkurs", 23.99, "Rene Brunner","/detailAngular");
let kurs3=new Kurs("https://norvutec.de/wp-content/uploads/2018/03/python-logo.png","Python für Anfänger", 19.99, "Jan Seemann","/detailPython");
let kurs4=new Kurs("https://www.cognex.com/library/media/intro-topics/deep-learning/advantages-of-deep-learning.jpg","Deep Learning, Neuronale Netze & AI", 54.99, "Fabjon Hoxhaj","/detailDL");
let kurs5=new Kurs("https://image.jimcdn.com/app/cms/image/transf/none/path/s57cd666aefd34e6f/image/if7cedcd81416a125/version/1534423131/image.png","Der komplette SQL Masterclass-Kurs", 44.99, "Tobias Gröne","/detailSql");
let kurs6=new Kurs("https://www.saisystemstech.com/sites/default/files/2019-11/Tech%20Blog%20header%20Ethical%20Hacking.png","Ethical Hacking-Der umfassende Kurs", 99.99, "Holger Wieger","/detailHack");

//Meine Fake-Datenbank
const kurse=[kurs1, kurs2, kurs3, kurs4, kurs5, kurs6];

//module.exports.kurse=kurse; //Ich habe mein Array "kurse" nach außen hin exportiert in Form einer Eigenschaft die ebenfalls "kurse" heißt

module.exports=
{
    kurse: kurse
};