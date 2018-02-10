var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var Items = new Schema({
    Title     : String
  , Image      : String
});

var ContactInfo = new Schema({
    Email     : String
  , Phone      : String
  , Hours      : String
  , StreetAddress      : String
  , ZipCode      : String
  , City      : String
  , State      : String
  , Country      : String
});

var BusinessInfo = new Schema({
    Price     : String
  , Rating     : String
  , Image      : String
});


var Hours = new Schema({
    Monday     : String
  , Tuesday      : String
  , Wednesday      : String
  , Thursday      : String
  , Friday      : String
  , Saturday      : String
  , Sunday      : String
});

var BusinessSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Type: {
    type: String,
  },
  BusinessInfo: BusinessInfo, //needs to be object not new collection
  ContactInfo: ContactInfo,//needs to be object not new collection
  Hours:Hours,//needs to be object not new collection
  Items: [Items]


});

var BusinessModel = db.model("BusinessModel", BusinessSchema);
