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
  { item: 'Floss', categories: ['All'] },
  { item: 'Deoderant', categories: ['All'] },
  { item: 'Tops', categories: ['All'] },
  { item: 'Bottoms', categories: ['All'] },
  { item: 'Socks', categories: ['All'] },
  { item: 'Underware', categories: ['All'] },
  { item: 'Pajamas', categories: ['All'] },
  { item: 'Water bottle', categories: ['All'] },

  { item: 'Snorkel gear', categories: ['Beach'] },
  { item: 'Beach towel', categories: ['Beach'] },

  { item: 'Tent', categories: ['Camp'] },
  { item: 'Sleeping bag', categories: ['Camp'] },

  { item: 'Harness', categories: ['Climb'] },
  { item: 'Rope', categories: ['Climb'] },
  { item: 'Gear', categories: ['Climb'] },
  { item: 'Helmet', categories: ['Climb'] },

  { item: 'Hiking pack', categories: ['Hike'] },
  { item: 'Hiking shoes', categories: ['Hike'] },

  { item: 'Skis', categories: ['Ski'] },
  { item: 'Ski poles', categories: ['Ski'] },


  { item: 'Snack bars', categories: ['Camp', 'Climb', 'Hike', 'Ski'] },
  { item: 'Puffy', categories: ['Camp','Hike','Ski'] },
  { item: 'Swim suit', categories: ['Beach', 'Ski'] },
  { item: 'Rain jacket', categories: ['Camp', 'Climb', 'Hike'] }

];



// add items to packlist on click
$('#show-packlist').click(function(){

  var selectedCategories = ['All'];

  //determine selected categories
  $('.trip-categories input').each(function() {
    if($(this).prop('checked')) {
      selectedCategories.push($(this).val());
    }
  });

  console.log(selectedCategories);

  //filter and return new array (filteredItems) with selected categories, returns all items that are true
  var filteredItems = _.filter(allItems, function(item) {
    //find items with shared categories, returns array of intersection, if array exists then they intersect
    var intersection = _.intersection(item.categories,selectedCategories);
    if (intersection.length > 0){
      return true;
    }
  });

  console.log(filteredItems);

  //clear the list
  $('#myList li').remove();

  //show header
  $('#list-header').removeClass();

  //populate list with filtered array
  filteredItems.forEach(function (array) {
    $('#myList').append('<li><input type="checkbox">'+ ' ' + array.item + '</li>');
  });

}); // end click to generate list


// strikethrough and move items when checked
$('#myList').on('click', 'input:checkbox', function(){
   $(this).parent().toggleClass('packed', this.checked);
   $(this).parent().appendTo('#myList');
});




// remove all items from packlist on reset click
$('#reset').click(function(){
  $('#list-header').addClass('hidden');
  $('#myList li').remove();
  $('.trip-categories input').prop('checked', false);
});





});  //end document ready
