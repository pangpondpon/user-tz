$.fn.userTimezone = function(format) {
    var userTimeZone = jstz.determine().name(); // Determines the time zone of the browser client
    this.each(function() {
        var timezone = $(this).data('timezone');
        var time = $(this).data('time');
        var momentTimezone = moment.tz(time, timezone);
        var userTime = momentTimezone.clone().tz(userTimeZone).format(format);
        $(this).text(userTime);
    });
};
