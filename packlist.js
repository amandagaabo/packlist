$(document).ready(function(){

/// All categories: ///
// All
// Beach
// Camp
// Climb
// Hike
// Ski



var allItems = [
  { item: 'Toothbrush', categories: ['All'] },
  { item: 'Toothpaste', categories: ['All'] },
  { item: 'Water bottle', categories: ['All'] },

  { item: 'Snorkel gear', categories: ['Beach'] },
  { item: 'Beach towel', categories: ['Beach'] },

  { item: 'Tent', categories: ['Camp'] },
  { item: 'Sleeping bag', categories: ['Camp'] },

  { item: 'Harness', categories: ['Climb'] },
  { item: 'Rope', categories: ['Climb'] },

  { item: 'Hiking pack', categories: ['Hike'] },
  { item: 'Hiking shoes', categories: ['Hike'] },

  { item: 'Skis', categories: ['Ski'] },
  { item: 'Ski poles', categories: ['Ski'] },


  { item: 'Snack bars', categories: ['Camp', 'Climb', 'Hike', 'Ski'] },
  { item: 'Puffy', categories: ['Camp','Hike','Ski'] },
  { item: 'Swim suit', categories: ['Beach', 'Ski'] }

];



// add all items to packlist on click
$('#show-packlist').click(function(){
  allItems.forEach(function (collection) {
    $('#myList').append('<li><input type="checkbox">'+ ' ' + collection.item + '</li>');
  });
});



// remove all items from packlist on click
$('#reset').click(function(){
  $('#myList li').remove();
  $('.trip-categories input').prop('checked', false);
});




});  //end document ready
