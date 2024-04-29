const CurrentDate = new Date().getDay()

/*
1: Monday
2: Tuesday
3: Wednesday
4: Thursday
5: Friday
*/

switch (CurrentDate) {
    case 1:
        document.getElementById("timetable").innerHTML = `
        <div class="lesson">
            <div class="subject">Lesson 1</div>
            <div class="teacher">L. P</div>
            <div class="time">9:00AM - 10:30AM (1.5)</div>
            <div class="room">CCM257</div>
        </div>
        <div class="break">
            <div class="name">Break</div>
            <div class="duration">15 Minutes</div>
        </div>
        <div class="lesson">
            <div class="subject">Lesson 2</div>
            <div class="teacher">L. P</div>
            <div class="time">10:45AM - 12:15AM (1.5)</div>
            <div class="room">CCM257</div>
        </div>
        <div class="break">
            <div class="name">Lunch</div>
            <div class="duration">45 Minutes</div>
        </div>
        <div class="lesson">
            <div class="subject">Lesson 3</div>
            <div class="teacher">L. P</div>
            <div class="time">13:45PM - 14:45PM (1)</div>
            <div class="room">Online</div>
        </div>
        <div class="break">
            <div class="name">Break</div>
            <div class="duration">15 Minutes</div>
        </div>
        <div class="lesson">
            <div class="subject">Lesson 4</div>
            <div class="teacher">L. P</div>
            <div class="time">15:00PM - 16:45PM (1.75)</div>
            <div class="room">Online</div>
        </div>
        `
        break;
    case 2:
        document.getElementById("timetable").innerHTML = `
        <div class="lesson">
            <div class="subject">Tutorial</div>
            <div class="teacher">A. W</div>
            <div class="time">10:45AM - 12:15PM (1.5)</div>
            <div class="room">CCM258</div>
        </div>
        <div class="break">
            <div class="name">Lunch</div>
            <div class="duration">45 Minutes</div>
        </div>
        <div class="lesson">
            <div class="subject">Lesson 3</div>
            <div class="teacher">L. P</div>
            <div class="time">13:00PM - 14:45PM (1.75)</div>
            <div class="room">CCM205</div>
        </div>
        <div class="break">
            <div class="name">Break</div>
            <div class="duration">15 Minutes</div>
        </div>
        <div class="lesson">
            <div class="subject">Lesson 4</div>
            <div class="teacher">L. P</div>
            <div class="time">15:00PM - 16:45PM (1.75)</div>
            <div class="room">CCM205</div>
        </div>
        `
        break;
    case 3:
        document.getElementById("timetable").innerHTML = `
        <div class="lesson">
            <div class="subject">Lesson 1</div>
            <div class="teacher">L. P</div>
            <div class="time">9:00AM - 10:30AM (1.5)</div>
            <div class="room">CCM210</div>
        </div>
        <div class="break">
            <div class="name">Break</div>
            <div class="duration">15 Minutes</div>
        </div>
        <div class="lesson">
            <div class="subject">Lesson 2</div>
            <div class="teacher">L. P</div>
            <div class="time">10:45AM - 12:15PM (1.5)</div>
            <div class="room">CCM210</div>
        </div>
        <div class="break">
            <div class="name">Lunch</div>
            <div class="duration">45 Minutes</div>
        </div>
        <div class="lesson">
            <div class="subject">Lesson 3</div>
            <div class="teacher">L. P</div>
            <div class="time">13:00PM - 15:00PM (2)</div>
            <div class="room">CCM204</div>
        </div>
        `
        break;
    case 4:
        document.getElementById("timetable").innerHTML = `
        <div class="lesson">
            <div class="time"></div>
            <div class="subject">Take the day off</div>
            <div class="teacher">You deserve it!</div>
            <div class="room"></div>
        </div>
        `
        break;
    case 5:
        document.getElementById("timetable").innerHTML = `
        <div class="lesson">
            <div class="subject">Lesson 1</div>
            <div class="teacher">L. P</div>
            <div class="time">9:00AM - 10:30AM (1.5)</div>
            <div class="room">CCM210</div>
        </div>
        <div class="break">
            <div class="name">Break</div>
            <div class="duration">15 Minutes</div>
        </div>
        <div class="lesson">
            <div class="subject">Lesson 2</div>
            <div class="teacher">L. P</div>
            <div class="time">10:45AM - 12:15PM (1.5)</div>
            <div class="room">CCM210</div>
        </div>
        `
        break;
    default:
        document.getElementById("timetable").innerHTML = `
        <div class="lesson">
            <div class="time"></div>
            <div class="subject">The Weekend</div>
            <div class="teacher">Saturday/Sunday</div>
            <div class="room"></div>
        </div>
        `
        break;
}
