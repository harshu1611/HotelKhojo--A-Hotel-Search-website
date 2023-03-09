let count=0;
$('#button-addon2').click(function(){
  count++;
  $('#guestForm').val(count);
  if(count>10)
  {
    alert('Guest cannot be more than ten');
    $('#guestForm').val(10);
  }
})
$('#button-addon1').click(function(){
  count--;
  $('#guestForm').val(count);
  if(count<0)
{
  alert('Guest cannot be less than zero');
  $('#guestForm').val(0);
}

})
