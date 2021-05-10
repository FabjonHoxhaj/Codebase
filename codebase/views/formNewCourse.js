//Formularseite
const newCourseForm=function newCourse()
{
  return `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>
            www.codeBase.de</title>
            <meta charset="utf-8">
        </head>
      <body>
        <h2>Erstellung eines neuen Kurses</h2>
        <form method="POST" action="/neuerKurs">
          <br>
          Titel des Kurses: <input type="text"  name="titel"><br>
          <br>
          Autor des Kurses: <input type="text"  name="autor"><br>
          <br>
          Kosten des Kurses: <input type="text"  name="kosten"><br>
          <input type="submit" value="Submit">
        </form>

      </body>

      </html>`
}

module.exports.newCourseForm=newCourseForm;