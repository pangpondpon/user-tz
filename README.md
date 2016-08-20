# User-TZ
This library will help you transform data time to user time according to user timezone


### Prerequisite
* Your data need to have time and timezone

### Dependencies
* Jquery
* Moment
* Moment time zone
* jstz

### How to use
1. Assign class to elements
2. Call userTimezone(format); on class selector


Code example:
```
<ul>
    <li data-timezone="Europe/London" data-time="2016-08-14 22:00:00" class="time"></li>
    <li data-timezone="Europe/London" data-time="2016-08-15 18:30:00" class="time"></li>
    <li data-timezone="Europe/London" data-time="2016-08-16 20:00:00" class="time"></li>
    <li data-timezone="Europe/London" data-time="2016-08-16 23:45:00" class="time"></li>
    <li data-timezone="Europe/London" data-time="2016-08-17 08:30:00" class="time"></li>
    <li data-timezone="Europe/London" data-time="2016-08-18 10:00:00" class="time"></li>
</ul>
```

Call userTimezone method on class selector
```
<script>
    $(function() {
        // Initialize userTimezone for all element with class time
        $(".time").userTimezone("YYYY-MM-DD HH:mm");
    });
</script>
```

Result (depend on your timezone)
```
2016-08-15 04:00
2016-08-16 00:30
2016-08-17 02:00
2016-08-17 05:45
2016-08-17 14:30
2016-08-18 16:00
```

### Note
This library will use browser timezone.