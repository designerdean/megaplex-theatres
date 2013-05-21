// Generated by CoffeeScript 1.4.0
(function() {

  $(function() {
    return $("#datepicker-day").datepicker({
      dateFormat: "d",
      altField: "#datepicker-month",
      altFormat: "M",
      showOn: "both",
      buttonText: "Change Date",
      minDate: 0
    });
  });

  $(function() {
    return $(".calendar").datepicker("setDate", new Date());
  });

  $(function() {
    $(".magnific").magnificPopup({
      closeOnContentClick: true
    });
    return $("#locations a").on("click", function(e) {
      var $this, newClass, newName, span;
      e.preventDefault();
      $this = $(this);
      span = $this.find("span");
      newClass = span.attr("class");
      newName = span.find("span").html();
      return $("#location-picker > span").attr("class", newClass).find("span").html(newName);
    });
  });

  $(function() {
    return $("#datepicker").datepicker({
      dateFormat: "DD, MM d, yy",
      minDate: 0
    });
  });

  $(function() {
    return $("#datepicker").datepicker("setDate", new Date());
  });

}).call(this);
