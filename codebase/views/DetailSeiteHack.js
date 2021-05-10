const hack=function detailSeiteHack()
{
  return `<!DOCTYPE html>
  <html>
    <head>
    <meta charset="utf-8">
    <style>
    .container3 {
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

    .container h3 
    {
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
    <p>14 Stunden Videomaterial</p>
    <p>8 zum Download verfügbare Materialien</p>
    <p>Uneingeschränkter lebenslanger Zugriff</p>
  </div>

  <div class="container3">
    <div class="container">
      <h3>Das wirst du lernen</h3>
      <div class="container2">
        <p>
          &#10004; Du hast ein fundiertes Verständnis für die Vorgehensweise von Hackern
        </p>

        <p>
          &#10004; Du kennst wichtige Angriffsvektoren und Wege, auf denen Computersysteme angegriffen werden können
        </p>
        <p>
          &#10004; Da du weißt, wie Hacking-Angriffe funktionieren, kannst du dich besser vor solchen schützen
        </p>
        <p>
          &#10004; Du kannst eigene Hacking-Tools schreiben (für Penetration Tests)
        </p>
      </div>
    </div>
  </div>

  <div class="kursinhalt1">
    <div class="kursinhalt">
      <div class="einleitung">
        <div>
          <a href="#einleitung" onclick="slider()"><h3>Einleitung</h3></a>
          <div id="einleitung">
            <p>Einleitung</p>
            <p>Einleitung</p>
            <p>Einleitung</p>
            <p>Einleitung</p>
          </div>
        </div>
      </div>

      <div class="hauptteil">
        <div>
          <a href="#hauptteil"><h3>Einleitung</h3></a>
          <div id="hauptteil">
            <p>Einleitung</p>
            <p>Einleitung</p>
            <p>Einleitung</p>
            <p>Einleitung</p>
          </div>
        </div>
      </div>

      <div class="schluss">
        <div>
          <a href="#schluss"><h3>Einleitung</h3></a>
          <div id="schluss">
            <p>Einleitung</p>
            <p>Einleitung</p>
            <p>Einleitung</p>
            <p>Einleitung</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>`;
}

module.exports.hack=hack;