const data = require("../models/data");

const courseList = function createKursList() {
  return `<!DOCTYPE html>
                <html>
                  <head>
                    <title>www.CodeBase.de</title>
                      <meta charset="utf-8">
                  <style>
                   
                      .Container 
                      {
                        border: solid 1px;
                        width: auto;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        gap: 20px;
                      }

                      .card 
                      {
                        border-radius: 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 5px;
                        width: 200px;
                        height: 300px;
                      }
                
                      .card img 
                      {
                        height: 150px;
                        width: 200px;
                        border-radius: 10%;
                      }
                
                      .card1 
                      {
                        border-radius: 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 5px;
                        width: 200px;
                        height: 300px;
                      }
                
                      .card1 img 
                      {
                        height: 150px;
                        width: 200px;
                        border-radius: 10%;
                      }
                
                      .card h5 
                      {
                        text-align: center;
                      }
                
                      .card1 h5 
                      {
                        text-align: center;
                      }
                
                      h5 
                      {
                        margin: 0;
                        font-size: 20px;
                      }
                
                      p 
                      {
                        margin: 0;
                        font-size: 14px;
                        text-align: center;
                      }
                
                      .buyedItems 
                      {
                        display: flex;
                        gap: 20px;
                      }

                      h1
                      {
                        text-align: center;
                        color: #FF6600;
                      }

                      .Admin 
                      {
                        background-color: #e0e0e0;
                        text-align: center;
                        font-size: 16px;
                      }

                      .Admin a
                      {
                        font-size: 25px;
                        text-decoration: none; color: #FF6600;
                      }

                      @media (max-width: 500px)
                       {
                         .Container
                         {
                           border: solid 1px;
                           display: flex;
                           flex-direction: column;
                           align-items: center;
                         }
                       }

                 
                  </style>

                    </head>
                    <body>
                      <nav class="Admin">
                        <a href="/neuerKurs">Admin-Bereich</a>
                      </nav>

                      <br>
                      
                    <h1>CodeBase<br />Ihre Online-Lernbörse</h1>
                      <h2>Lernkurse</h2>
                      <div class="Container">
                        ${createCourses()}
                      </div>
                    </body>
                  </html>`;
}

function createCourses() {
  let result = "";
  for (let i of data.kurse) {
    result += `<section class="card">`;
    result += `<img src="${i.picture}" alt=""/></a>`;
    result += `<h5>${i.titel}</h5>`;
    result += `<p>${i.autor}</p>`;
    result += `<h5>${i.kosten}</h5>`;
    result += `<button><a style="text-decoration: none; color: #FF6600;" href=${i.details}>Beschreibung</a></button>`;
    result += `</section>`;
  }
  return result;
}


module.exports.courseList = courseList;
