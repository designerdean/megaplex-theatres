# Ticket-Selection Process: Date Picker

$ ->
  $("#datepicker-day").datepicker
    
    # dateFormat: "M d D",
    dateFormat: "d"
    altField: "#datepicker-month"
    altFormat: "M"
    showOn: "both"
    buttonText: "Change Date"
    minDate: 0

$ ->
  $(".calendar").datepicker "setDate", new Date()


# Ticket-Selection Process: Location Picker

$ ->
  $(".magnific").magnificPopup(closeOnContentClick: true, overflowY: 'hidden')
  $("#locations a").on "click", (e) ->
    e.preventDefault()
    $this = $(this)
    span = $this.find("span")
    newClass = span.attr("class")
    newName = span.find("span").html()

    $("#location-picker > span").attr("class", newClass).find("span").html newName


# Location-Specific Page: Date Picker

$ ->
  $("#datepicker").datepicker
    dateFormat: "DD, MM d, yy"
    minDate: 0

$ ->
  $("#datepicker").datepicker "setDate", new Date()
