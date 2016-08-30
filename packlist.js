$(document).ready(function(){

//localStorage.clear();

// Check local storage and load list if it exists:
if(localStorage.getItem('notpacked')) {
  var loadSavedItems = JSON.parse(localStorage.getItem('notpacked'));
  $('#list-header').removeClass();
  $('#items-to-pack').html(loadSavedItems);
}

if(localStorage.getItem('packed')) {
  var loadPackedItems = JSON.parse(localStorage.getItem('packed'));
  $('#list-header2').removeClass();
  $('#packed-items').html(loadPackedItems);
  $('#packed-items input').prop('checked',true);
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


  //filter and return new array (filteredItems) with selected categories, returns all items that are true
  var filteredItems = _.filter(allItems, function(item) {
    //find items with shared categories, returns array of intersection, if array exists then they intersect
    var intersection = _.intersection(item.categories,selectedCategories);
    if (intersection.length > 0){
      return true;
    }
  });

  //clear the list
  $('#items-to-pack').html('');

  //show header
  $('#list-header').removeClass();

  //populate list with filtered array
  filteredItems.forEach(function (array) {
    $('#items-to-pack').append('<li><label class="checkbox"><input type="checkbox"><span>'+ ' ' + array.item + '</span></label></li>');
  });

    //save list html to local storage
    var savedItemsToPack = JSON.stringify($('#items-to-pack').html());
    localStorage.setItem('notpacked', savedItemsToPack);
    var savedPackedItems = JSON.stringify($('#packed-items').html());
    localStorage.setItem('packed', savedPackedItems);

}); // end click to generate list


// strikethrough and move items when checked, alert when everything is packed
$('#items-to-pack').on('click', 'input:checkbox', function(){
  console.log($(this).parent());
  $(this).parent().parent().toggleClass('packed',this.checked);
  $('#list-header2').removeClass();
  $(this).parent().parent().appendTo('#packed-items');

  if ($('#items-to-pack input').length === 0) {
    alert('Everything is packed!');
  }

     //update list in local storage
     var savedItemsToPack = JSON.stringify($('#items-to-pack').html());
     localStorage.setItem('notpacked', savedItemsToPack);
     var savedPackedItems = JSON.stringify($('#packed-items').html());
     localStorage.setItem('packed', savedPackedItems);
});


//move back to items-to-pack if unchecked
$('#packed-items').on('click', 'input:checkbox', function(){
  $(this).parent().parent().toggleClass('packed',this.checked);
  $(this).parent().parent().appendTo('#items-to-pack');

    //update list in local storage
    var savedItemsToPack = JSON.stringify($('#items-to-pack').html());
    localStorage.setItem('notpacked', savedItemsToPack);
    var savedPackedItems = JSON.stringify($('#packed-items').html());
    localStorage.setItem('packed', savedPackedItems);
});


// remove all items from packlist on reset click
$('#reset').click(function(){
  $('#list-header').addClass('hidden');
  $('#list-header2').addClass('hidden');
  $('#items-to-pack').html('');
  $('#packed-items').html('');
  $('.trip-categories input').prop('checked', false);

    //clear local storage
    window.localStorage.clear();
    location.reload();

});




});  //end document ready
