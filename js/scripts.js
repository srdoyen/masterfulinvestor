$(function () {
  $(".card").click(function () {
    window.location = $(this).attr('href');
  });
  $('a[data-toggle="list"]').on('shown.bs.tab', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
  });
  $(".list-group-item").click(function () {
    window.location = $(this).attr('href');
  });

});