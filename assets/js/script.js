window.addEventListener('load', function () {

    function clock() {
        // Select display elements
        const hours = document.querySelector('.hours');
        const minutes = document.querySelector('.minutes');
        const seconds = document.querySelector('.seconds');
        const day = document.querySelector('.day');
        const month = document.querySelector('.month');
        const year = document.querySelector('.year');

        // Get current time
        let today = new Date();

        // Extract time parts
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();

        // Pad with leading zeros if needed
        hours.textContent = hour < 10 ? '0' + hour : hour;
        minutes.textContent = minute < 10 ? '0' + minute : minute;
        seconds.textContent = second < 10 ? '0' + second : second;

        // Month names for display
        const monthList = ["January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"];

        // Extract date parts
        let dd = today.getDate();
        let mm = monthList[today.getMonth()];
        let yyyy = today.getFullYear();

        // Pad day with leading zero
        day.textContent = dd < 10 ? '0' + dd : dd;
        month.textContent = mm;
        year.textContent = yyyy;
    }

    // Run clock every 1 second
    setInterval(clock, 1000);

    // Initial run to avoid delay on page load
    clock();
});