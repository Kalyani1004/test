function greeting(req, res) {
    var fn = req.query.firstname;
        res.send("Greetings, " + fn );
      }
    
    function addition(req, res) {
         var n1 = req.body.num1,
          n2 = req.body.num2,
     sum = parseInt(n1) + parseInt(n2);
      res.send(n1 + ' plus ' + n2 + ' is equal to ' + sum);
     }

    var attachService = function (app) {
         app.get('/svc/greeting', greeting);
          app.post('/svc/add', addition);
    };
    exports.attachService = attachService;
    
    