require('dotenv').config();
var Datastore = require("@google-cloud/datastore");
var datastore = new Datastore();

var Busboy = require('busboy');

var allowedOrigins = ["https://www.save-sandpond.com", "https://save-sandpond.com"];

function cors(origin) {
  return allowedOrigins.reduce(function(b, allowedOrigin) {
    return b || origin == allowedOrigin;
  }, false);
}

exports.saveEmailPOST = (req, res) => {
  console.log("Body: ", req.body);
  var origin = req.get("Origin");

  // Set CORS headers
  // and cache preflight response for an 3600s
  if(!cors(origin)) {
    console.log("Origin not allowed: ", origin);
    res.set("Access-Control-Allow-Origin", allowedOrigins[0]);
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(401).send('');
    return;
  }
  console.log("Origin passed: ", origin);
  res.set("Access-Control-Allow-Origin", req.get("Origin"));
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  // Send response to OPTIONS requests and terminate the function execution
  if (req.method == 'OPTIONS') {
    res.status(204).send('');
    return;
  }
  if (req.method != 'POST') {
    res.status(405).send('');
    return;
  }

  var busboy = new Busboy({ headers: req.headers });
  // This object will accumulate all the fields, keyed by their name
  var fields = {};

  // This code will process each non-file field in the form.
  busboy.on('field', function(fieldname, val) {
    console.log("Parsed field: ", fieldname, val);
    fields[fieldname] = val;
  });

  busboy.on('finish', function() {
    console.log('Done parsing form!');
    console.log("Fields: ", fields);

    if(!fields.email) {
      res.status(400).send('email required');
      return;
    }

    var key = datastore.key("mailing-list-signup");
    var entity = {
      key: key,
      data: {
        name: fields.name || null,
        email: fields.email
      }
    };

    console.log("Saving entity: ", entity);
    datastore.save(entity, function(err) {
      if(err) {
        console.error("Error while saving entity: ", err);
        res.status(500).send('');
        return;
      }
      console.log("Entity saved: ", entity);
      res.status(201).send('You have been signed up!');
    });
  });

  busboy.end(req.rawBody);
};
