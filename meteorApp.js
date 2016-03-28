if (Meteor.isClient) {
  /*Template.myParagraph.helpers({
	text : 'Poolsawat Apin'
  });*/
  Template.body.helpers({
	paragraphs: [
	  {text : 'This is paragraph 1...'},
	  {text : 'This is paragraph 2...'},
	  {text : 'This is paragraph 3...'}
	]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
MyCollection = new Mongo.Collection('myCollection');
var myData = {
	key1 : "value 1 ...",
	key2 : "value 2 ...",
	key3 : "value 3 ...",
	key4 : "value 4 ...",
	key5 : "value 5 ...",
}
MyCollection.insert(myData);

var findCollection = MyCollection.find().fetch();
//console.log(findCollection);
var myId = findCollection[0]._id;

var updateData = {
	key1 : "update value 1...",
	key2 : "update value 2...",
	key3 : "update value 3...",
	key4 : "update value 4...",
	key5 : "update value 5...",
}
MyCollection.update(myId,updateData);
var findUpdateCollection = MyCollection.find().fetch();
console.log(findUpdateCollection);


