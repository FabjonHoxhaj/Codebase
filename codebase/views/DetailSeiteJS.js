
const js = function detailSeiteJS() {
  return `<!DOCTYPE html>
  <html>
    <head>
    <meta charset="utf-8">
    <style>

    .container3 
    {
      display: flex;
      justify-content: center;
    }
    .container 
    {
      background-color: #fbfbf8;
      border: solid 1px #dcdacb;
      border-radius: 4px;
      width: 80vw;
    }

    .container2 
    {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      flex-wrap: wrap;
    }

    .container2 p 
    {
      margin: 15px;
      font-size: 14px;
    }

    .container h3 {
      margin: 15px;
    }

    .header 
    {
      text-align: center;
    }

    .kursinhalt 
    {
      background-color: #fbfbf8;
      border: solid 1px #dcdacb;
      border-radius: 4px;
      width: 80vw;
    }

    .kursinhalt1 
    {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .einleitung h3 
    {
      background-color: #e0e0e0;
      padding: 20px;
      text-decoration: none;
    }

    .einleitung a 
    {
      text-decoration: none;
    }

    .hauptteil h3 
    {
      background-color: #e0e0e0;
      padding: 20px;
    }

    .hauptteil a 
    {
      text-decoration: none;
    }

    .schluss h3 
    {
      background-color: #e0e0e0;
      padding: 20px;
    }

    .schluss a 
    {
      text-decoration: none;
    }

    .schluss p 
    {
      padding: 10px 0px 10px 20px;
    }

    .einleitung p 
    {
      padding: 10px 0px 10px 20px;
    }

    .hauptteil p 
    {
      padding: 10px 0px 10px 20px;
    }

    #schluss 
    {
      max-height: 0;
      overflow-y: hidden;
      transition: max-height 0.5s ease-in-out;
    }

    .header p
    {
      font-size: 14px;
    }

    @media (max-width: 500px)
    {
      .container2
      {
        display: flex;
        
      }
    }

  </style>
</head>
<body>
<button><a style="text-decoration: none; color: #FF6600;" href="/">hier geht´s zurück</a></button>
  <div class="header">
    <h2>Was ist im Kurs enthalten?</h2>
    <p>28 Stunden Videomaterial</p>
    <p>108 zum Download verfügbare Materialien</p>
    <p>Uneingeschränkter lebenslanger Zugriff</p>
  </div>

  <div class="container3">
    <div class="container">
      <h3>Das wirst du lernen</h3>
      <div class="container2">
        <p>
          &#10004; Setze ein aufwändiges und umfangreiches Praxis-Projekt von
          A-Z um
        </p>

        <p>
          &#10004; Starte deine Karriere als JavaScript-/Webentwickler oder
          Webdesigner
        </p>
        <p>
          &#10004; Lerne modernstes JavaScript nach den aktuellen Standards
          (ES10)
        </p>
        <p>
          &#10004; Verstehe die Grundlagen verschiedenster Programmiersprachen am Beispiel JavaScript
        </p>
        <p>
          &#10004; Lerne modernstes JavaScript nach den aktuellen Standards (ES10)
        </p>
      </div>
    </div>
  </div>

  <div class="kursinhalt1">
    <div class="kursinhalt">
      <div class="einleitung">
        <div>
          <a href="#einleitung"><h3>Einleitung</h3></a>
          <div id="einleitung">
            <p>Überblick: Was erwartet dich im Kurs?</p>
            <p>Installation der benötigten Tools</p>
            <p>Ein erstes Programm mit NodeJS</p>
          </div>
        </div>
      </div>

      <div class="hauptteil">
        <div>
          <a href="#hauptteil"><h3>Erste Schritte mit JavaScript</h3></a>
          <div id="hauptteil">
            <p>Variablen in JS (Teil 1)</p>
            <p>Variablen in JS (Teil 2)</p>
            <p>Datentypen</p>
            <p>Der Programmablauf, Umgang mit Fehlern</p>
          </div>
        </div>
      </div>

      <div class="schluss">
        <div>
          <a href="#schluss"><h3>Weitere Grundlagen mit Javascript</h3></a>
          <div id="schluss">
            <p>Variablen erstellen: const, var und let</p>
            <p>Kommentare</p>
            <p>Kontrollstrukturen (if, else)</p>
            <p>Kontrollstrukturen (Schleifen)</p>
          </div>
        </div>
      </div>
    </div>
  </div>

 
</body>
</html>`;
}

module.exports.js = js;