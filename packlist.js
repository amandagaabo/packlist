$(document).ready(function(){

// localStorage.clear();

// Check local storage and load list if it exists:
if(localStorage.getItem('newkey')) {
  var savedPage = JSON.parse(localStorage.getItem('newkey'));
  $('#myList').html(savedPage);
  $('#list-header').removeClass();
}


/// All categories: ///
// All
// Beach
// Camp
// Climb
// Hike
// Ski
// International

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

  { item: 'Passport', categories: ['International'] },
  { item: 'Debit card', categories: ['International'] },

  { item: 'Snack bars', categories: ['Camp', 'Climb', 'Hike', 'Ski'] },
  { item: 'Puffy', categories: ['Camp','Hike','Ski'] },
  { item: 'Swim suit', categories: ['Beach', 'Ski'] },
  { item: 'Rain jacket', categories: ['Camp', 'Climb', 'Hike'] }

];


// add items to packlist on click
$('#show-packlist').click(function(){

  //determine selected categories, should contain All even though all is not an option
  var selectedCategories = ['All'];

  $('.trip-categories input').each(function() {
    if($(this).prop('checked')) {
      selectedCategories.push($(this).val());
    }
  });
  // check selected categories
  // console.log(selectedCategories);


  //filter and return new array (filteredItems) with selected categories, returns all items that are true
  var filteredItems = _.filter(allItems, function(item) {
    //find items with shared categories, returns array of intersection, if array exists then they intersect
    var intersection = _.intersection(item.categories,selectedCategories);
    if (intersection.length > 0){
      return true;
    }
  });
  //check filter
  // console.log(filteredItems);


  //clear the list
  $('#myList').html('');

  //show header
  $('#list-header').removeClass();

  //populate list with filtered array
  filteredItems.forEach(function (array) {
    $('#myList').append('<div class="checkbox"><input type="checkbox" id='+ array.item + '><label for='+ array.item+ '>' + array.item + '</label></div>');
  });

  //save list html to local storage
  var savePage = JSON.stringify($('#myList').html());
  localStorage.setItem('newkey',savePage);
  return false;

}); // end click to generate list



// strikethrough and move items when checked, alert when everything is packed
$('#myList').on('click', 'input:checkbox', function(){
   $(this).parent().toggleClass('packed', this.checked);
   $(this).parent().appendTo('#myList');

   if ($('#myList input:checked').length == $('#myList input').length) {
     alert('Everything is packed!');
   }

   //update list in local storage
   var savePage = JSON.stringify($('#myList').html());
   localStorage.setItem('newkey',savePage);
   return false;
});



// remove all items from packlist on reset click
$('#reset').click(function(){
  $('#list-header').addClass('hidden');
  $('#myList').html('');
  $('.trip-categories input').prop('checked', false);

  //clear local storage
  // window.localStorage.clear();
  // location.reload();
  // return false;
});






});  //end document ready
