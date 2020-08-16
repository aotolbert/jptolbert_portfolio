function iframeLoaded() {

    let calendarLegend =  document.getElementById('tutoringCalendarLegendList');
    let iFrameID = document.getElementById('tutoringCalendarPublic');
    if(iFrameID) {
        
        console.log(iFrameID);
        console.log(window.innerWidth);
        console.log(screen.width);
        let viewportWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        
        let desiredCalendarWidth;

        if(viewportWidth < 500) {
            calendarLegend.style = "font-size: medium;";
            // If we are on a small screen, use all available space as this calendar has preset button sizes and any smaller display blocks some features from use
            desiredCalendarWidth = viewportWidth;
        } else {
            // The calendar should fill 90% of the scrren width as the container is ladding-left 5vw so this centers the calendar
            desiredCalendarWidth = viewportWidth * 0.9;
        }

        console.log(desiredCalendarWidth + 'px');
        // here you can make the height, I delete it first, then I make it again
        iFrameID.width = "";
        iFrameID.width = desiredCalendarWidth + "px";


    }   
}