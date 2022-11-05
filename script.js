let date = new Date("November 5, 2022 18:51:30");
let hour = date.getHours();
console.log(hour);


let hour = 14;
let say = "";

    if (hour < 5) {
        say = "Доброй ночи";
    }
        else if (hour < 11) {
        say = "Доброе утро";
    }
        else if (hour < 17) {
            say = "Добрый день";
    }
        else if (hour < 22) {
            say = "Добрый вечер";
        }
    else {
        say = "Доброй ночи";
    }
    console.log(say);