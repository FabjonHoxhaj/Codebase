//Module Express
const data=require("../models/data");
const js=require("../views/DetailSeiteJS.js");
const angular=require("../views/DetailSeiteAngular.js");
const python=require("../views/DetailSeitePython.js");
const dl=require("../views/DetailSeiteDL.js");
const sql=require("../views/DetailSeiteSql.js");
const hack=require("../views/DetailSeiteHack.js");
const courseList=require("../views/KursList");
const newCourseForm=require("../views/formNewCourse");
const express=require("express");
const app=express(); //Hier können wir die gesamte API von Express erreichen


//Server
app.listen(8042, function()
   {
      console.log("Ich lausche auf http://localhost:8042");
   }
);

app.use( express.urlencoded({extended: true}))

//routing
app.get("/neuerKurs",function(req, res)
   {
     res.send(newCourseForm.newCourseForm());
   }
);

app.post("/neuerKurs",function(req, res)
   {  
      let neuerKurs = {
         "picture": "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-administration-icon-in-trendy-style-isolated-background-png-image_1538647.jpg", 
         "titel": req.body.titel, 
         "kosten": req.body.kosten, 
         "autor": req.body.autor, 
         "details": ""
      };
      data.kurse.push(neuerKurs);
      res.redirect("/");
   }
);


app.get("/", function(req, res)
   {
     res.send(courseList.courseList());
   }
);

app.get("/detailJS",function(req, res)
   {
     res.send(js.js());
   }
);

app.get("/detailAngular",function(req, res)
   {
     res.send(angular.angular());
   }
);

app.get("/detailPython",function(req, res)
   {
     res.send(python.python());
   }
);

app.get("/detailDL",function(req, res)
   {
     res.send(dl.dl());
   }
);

app.get("/detailSql",function(req, res)
   {
     res.send(sql.sql());
   }
);

app.get("/detailHack",function(req, res)
   {
     res.send(hack.hack());
   }
);


















  



