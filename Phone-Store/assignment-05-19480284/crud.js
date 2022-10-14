//---------- CRUD APPLICATIONS (CREATE, RETRIEVE, UPDATE, DELETE) ----------

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const connect = require("./connect"); // url from connect module
const client = new MongoClient(connect.database.uri, { useUnifiedTopology: true } );

// name of DB
const dbName = 'phonestore';

// connect method to connect to server
client.connect(function(err) {
  // assert module for testing
  assert.equal(null, err);
  console.log("connected successfully to the server");

  // use this database
  const db = client.db(dbName);
});


// ----------CREATE----------
// collection is created if it does not exist

// UNCOMMENT CODE TO SEE CREATE IN ACTION

// const insertCustomers = function(db, callback) {
//   // Using the "customers" collection
//   const collection = db.collection('customers');
//   // Insert some data
//   collection.insertMany([
//     {"title":"Ms","fname":"Alondra","lname":"Dunne","email":"alondra.dunne@purplemail.ie","mobile":"0849937354","ln1":"12","ln2":"Maynooth Park","town":"Maynooth","county":"Kildare","eircode":"K76X123"},
//     {"title":"Mrs","fname":"Iarlaith","lname":"Kelly","email":"iarlaith.kelly@fuchsiamail.ie","mobile":"0843977120","ln1":"98","ln2":"Happy Street","town":"Lucan","county":"Dublin","eircode":"K78TR54"},
//     {"title":"Dr","fname":"Brigid","lname":"Flynn","email":"brigid.flynn@silvermail.ie","mobile":"0844020733","ln1":"76","ln2":"Arthur Park","town":"Celbridge","county":"Kildare","eircode":"K89XWR5"}
//   ], function(err, result) {
//     // assert module for testing
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);

//     console.log("Inserted 3 customers into the collection");
//     callback(result);
//   });
// }

// const insertPhones = function(db, callback) {
//     // Using the "phones" collection
//     const collection = db.collection('phones');
//     // Insert some data
//     collection.insertMany([
//       {"manu":"Apple","model":"iPhone 12","price":"899.99"},
//       {"manu":"Alcatel","model":"OneTouch","price":"29.99"},
//       {"manu":"Samsung","model":"Galaxy S12","price":"699.99"}
//     ], function(err, result) {
//       // assert module for testing
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
  
//       console.log("Inserted 3 phones into the collection");
//       callback(result);
//     });
// }

// const insertOrders = function(db, callback) {
//     // Using the "orders" collection
//     const collection = db.collection('orders');
//     // Insert some data
//     collection.insertMany([
//       {"oFname":"Alondra","oLname":"Dunne","address":"12 Maynooth Park, Maynooth, Kildare","item1":"iPhone 12","item2":"iPhone 12","item3":"OneTouch","item4":"","item5":""},
//       {"oFname":"Iarlaith","oLname":"Kelly","address":"98 Happy Street, Lucan, Dublin","item1":"Galaxy S12","item2":"","item3":"","item4":"","item5":""},
//       {"oFname":"Brigid","oLname":"Flynn","address":"K89XWR5","item1":"OneTouch","item2":"iPhone 12","item3":"OneTouch","item4":"OneTouch","item5":"Galaxy S12"}
//     ], function(err, result) {
//       // assert module for testing
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
  
//       console.log("Inserted 3 orders into the collection");
//       callback(result);
//     });
//   }


// ----------RETRIEVE----------

// UNCOMMENT CODE TO SEE UNFILTERED RETRIEVE IN ACTION

// const findCustomers = function(db, callback) {
//     // Get the customers collection
//     const collection = db.collection('customers');
//     // Find some documents
//     collection.find({}).toArray(function(err, docs) {
//       // assert module for testing
//       assert.equal(err, null);

//       console.log("Found the following");
//       console.log(docs)
//       callback(docs);
//     });
//}


// ----------RETRIEVE BUT FILTERED----------

//UNCOMMENT CODE TO SEE FILTERED RETRIEVE IN ACTION

// const findCustomersFiltered = function(db, callback) {
//     // Get the customers collection
//     const collection = db.collection('customers');
//     // Find some customers - with a filter
//     collection.find({'ln1': '12'}).toArray(function(err, docs) {
//       // assert module for testing
//       assert.equal(err, null);
//       console.log("Found the following");
      
//       console.log(docs);
//       callback(docs);
//     });
// }

// const findPhonesFiltered = function(db, callback) {
//     // Get the phones collection
//     const collection = db.collection('phones');
//     // Find some phones - with a filter
//     collection.find({'make': 'Samsung'}).toArray(function(err, docs) {
//       // assert module for testing
//       assert.equal(err, null);
//       console.log("Found the following");
      
//       console.log(docs);
//       callback(docs);
//     });
// }

// const findOrdersFiltered = function(db, callback) {
//     // Get the orders collection
//     const collection = db.collection('orders');
//     // Find some orders - with a filter
//     collection.find({'address': 'K89XWR5'}).toArray(function(err, docs) {
//       // assert module for testing
//       assert.equal(err, null);
//       console.log("Found the following");
      
//       console.log(docs);
//       callback(docs);
//     });
// }


// -----------UPDATE----------

// UNCOMMENT CODE TO SEE UPDATE IN ACTION

// const updateCustomers = function(db, callback) {
//     // Get the customers collection
//     const collection = db.collection('customers');
//     // Update customer
//         collection.updateOne({mobile : "0849937354" }
//       , { $set: { mobile :  "0876548976" } }, function(err, result) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       assert.equal(1, result.result.n);
      
//       console.log("Updated the customer phone number");
//       callback(result);
//     });  
//   }

//   const updatePhones = function(db, callback) {
//     // Get the phones collection
//     const collection = db.collection('phones');
//     // Update phones
//         collection.updateOne({price : "899.99" }
//       , { $set: { price : "749.99" } }, function(err, result) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       assert.equal(1, result.result.n);
      
//       console.log("Updated the phone price");
//       callback(result);
//     });  
//   }

//   const updateOrders = function(db, callback) {
//     // Get the orders collection
//     const collection = db.collection('orders');
//     // Update orders
//         collection.updateOne({item4 : "OneTouch" }
//       , { $set: { item4 : "" } }, function(err, result) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       assert.equal(1, result.result.n);
      
//       console.log("Updated the order details");
//       callback(result);
//     });  
//   }


// -----------DELETE----------

//UNCOMMENT CODE TO SEE DELETE IN ACTION

// const removeCustomer = function(db, callback) {
//     // Get the customers collection
//     const collection = db.collection('customers');
//     // Delete customer
//     collection.deleteOne({ title : "Dr" }, function(err, result) {
//       // assert module for testing
//       assert.equal(err, null);
//       assert.equal(1, result.result.n);
            
//       console.log("Removed the customer with title : 'Dr'");
//       callback(result);
//     });    
// }

// const removePhone = function(db, callback) {
//     // Get the phones collection
//     const collection = db.collection('phones');
//     // Delete phone
//     collection.deleteOne({ manu : "Alcatel" }, function(err, result) {
//       // assert module for testing
//       assert.equal(err, null);
//       assert.equal(1, result.result.n);
            
//       console.log("Removed the phone");
//       callback(result);
//     });    
// }

// const removeOrder = function(db, callback) {
//     // Get the orders collection
//     const collection = db.collection('orders');
//     // Delete order
//     collection.deleteOne({ oFname : "Brigid" }, function(err, result) {
//       // assert module for testing
//       assert.equal(err, null);
//       assert.equal(1, result.result.n);
            
//       console.log("Removed the order where oFname : 'Brigid'");
//       callback(result);
//     });    
// }