// Date Object
// date is a constructor Function

// let date = new Date();
// console.log(date); //output Fri Sep 26 2025 07:19:43 GMT+0500 (Pakistan Standard Time)

// let date1 = new Date();
// console.log(date1.toString()); // us may local time a raha hota hai

// let date3 = new Date();
// console.log(date3.toISOString()); // 2025-09-26T02:28:25.846Z

// Creating a Date
// 1.No Arguments (Currents date & time)
// let now = new Date();  // current date and time

// // 2.Date String (ISO or other formats)
// let date1 = new Date('2025-05-19T12:00:00Z'); // ISO format (recommended)
// let date2 = new Date('May 19, 2025 12:00:00'); // long format
// let date3 = new Date('2025/05/19 12:00:00'); // Slash format less reliable

// //3. Numbers: new Date(year, monthIndex, day, hours, minutes, seconds, ms)
// let date4 = new Date(2025, 4, 19, 12, 0, 0); // May 19, 2025, 12:00:00

// // 4.Miiiiseconds Since Epoch (unix timestamp)
// let date5 = new Date(17476320000000); // millisecound since jan 1, 1970

// // 5.Copy Another Date
// let original = new Date('2025-05-19');
// let copy = new Date(original);


// Practise
// let date = new Date('2025/2/3');
// console.log(date); //  output Mon Feb 03 2025 00:00:00 GMT+0500 (Pakistan Standard Time) acha yaha date sahi nahi hai UTC subtructing 5 hours tu UTC may bata raha hai

// let date = new Date('2025/2/3 06:40:05');
// console.log(date); // output Mon Feb 03 2025 06:40:05 GMT+0500 (Pakistan Standard Time) yaha b aisa hi hai tu UTC may bata raha hai

// let date = new Date('2025/2/3 06:40:05');
// console.log(date.toLocaleString()); // output 03/02/2025, 06:40:05 string may bata raha hai

// let date = new Date('2025/2/3 06:40:05');
// console.log(date.toISOString()); // output 2025-02-03T01:40:05.000Z

// let date = new Date('2025/2/3 06:40:05');
// console.log(date.toLocaleDateString()); // output 03/02/2025


// let date = new Date('2025/2/3 06:40:05');
// console.log(date.toLocaleTimeString()); output 06:40:05

// let date = new Date('2025/2/3 06:40:05');
// console.log(date.toString()); //output Mon Feb 03 2025 06:40:05 GMT+0500 (Pakistan Standard Time)

// sab say acha ap ISO standard ko follow karo
// let date = new Date('2003-10-09T17:00:00Z');
// console.log(date) //output Mon Sep 25 2023 17:00:00 GMT+0500 (Pakistan Standard Time)
//  agar Z likho gy tu matlab ap UTC may dy rahay ho agar Z na likhay tu matlab ap pakistanitime may dy rahy ho

// let date = new Date('2003-10-09T17:00:00Z');
// console.log(date.toLocaleString()) //output 09/10/2003, 22:00:00

// let date = new Date('2003-10-09T17:00:00');
// console.log(date.toLocaleString()) //output 09/10/2003, 17:00:00

// let date = new Date(2025,4,20);
// console.log(date); //output Tue May 20 2025
// may q aya 4 month april q nahi aya q k javascript may month 0 index dy raha hota hai

// let date = new Date(2025,4,20,5,4,3);
// console.log(date); //output Tue May 20 2025 05:04:03 GMT+0500 (Pakistan Standard Time)

// let date = new Date(2025,4,20,5,4,3);
// console.log(date.toLocaleString()); //output 20/05/2025, 05:04:03

// let date = new Date(2025,4,20,5,4,3);
// console.log(date.toDateString()); // output Tue May 20 2025

// let date = new Date(1758867642596)
// console.log(date);//output Fri Sep 26 2025 11:20:42 GMT+0500 (Pakistan Standard Time)

// most use
// let date = Date.now()
// console.log(date); //output 1758867767911


// let date = new Date(1758867642596);
// console.log(date.toLocaleString()); //output 26/09/2025, 11:20:42


// let date = new Date(1758867642596);
// console.log(date.toISOString()); //output 2025-09-26T06:20:42.596Z

// yes date copy b kar saktay ho reference dy saktay ho
// let date1 = new Date(1758867642596);
// console.log(date1.toISOString());

// let date2 = new Date(date1);
// console.log(date2); //output Fri Sep 26 2025 11:20:42 GMT+0500 (Pakistan Standard Time)

// us tara b copy kar saktay ho
// let date2 = date1;
// console.log(date2);


// 2- Getting Part of the Date

// so,
// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getUTCDay());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMonth()); // month yaha aik kam us lie milta hai q k index dy raha hota hai month javascript may 0 index hota hai Zero index
// console.log(date.getTimezoneOffset());
// console.log(date.getTime());
// console.log(date.getUTCDate());
// console.log(date.getUTCMonth()); us tara yaha par b strat Zero index
// console.log(date.getUTCHours(),date.getUTCFullYear(),date.getUTCMinutes())  // output 6 2025 45
// console.log(date.getTimezoneOffset());  //output -300 UTC - local date matlab local time utc ko minute may deta hai k 300 minuite aghy hai utc say pakistan or minus may dy raha hota hai
// console.log(date.getTimezoneOffset()/60); // -5 matalab 5 hours ahgy hai pakistan


// 3- Setting Part of the Date

// let now = new Date();
// // now.setFullYear('2026'); //Sun Sep 27 2026 18:55:49 GMT+0500 (Pakistan Standard Time)
// now.setMonth(7);//Wed Aug 27 2025 19:11:03 GMT+0500 (Pakistan Standard Time)
// now.setMinutes('11'); //Sat Sep 27 2025 18:11:03 GMT+0500 (Pakistan Standard Time)
// now.setDate(15);//Fri Aug 15 2025 19:11:08 GMT+0500 (Pakistan Standard Time)
// console.log(now);

// 3- working with time stamp
// let now = new Date();

// let so = Date.now();
// console.log(Date.now()/1000/60/60/24/365) // 55.77695653113902
// console.log(so);//1758981956326 so 1970 say abi tak ka mllisecond may convert hota hai


// let now = new Date().getTime();
// console.log(now)  //1758982339287


// Formating String

// let date = new Date();
// console.log(date);

// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toUTCString());
// console.log(date.toISOString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// let d = new Date();
// let formatted = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
// console.log(formatted);  //output 27/9/2025

// what is TimeStamp?
// A timeStamp is the number of millisecond since the Unix Epoch(Jan 1, 1970 UTC )
//  in JavaScript , Date objects internally Store time as timestamp

// Get the Currrennt TimeStamp Date.now
// let now = Date.now();
// console.log(now);  // output 1758993643665

// Convert Date to TimeStamp
// use getTime() on a Date Object

// const date = new Date();
// const timestamp = date.getTime();
// console.log(timestamp); // out 1758993796624

// Convert timeStamp to date
// const date = new Date(1758993796624);
// console.log(date); //output Sat Sep 27 2025 22:23:16 GMT+0500 (Pakistan Standard Time)


//  Current time may 10 minute add karay
// let currentTime = Date.now();
// console.log(currentTime); // 1758994476556
// let tenMinute = 1000 * 60 * 10;
// let updatedTime = currentTime + tenMinute;
// console.log(updatedTime); // 1758995321544
// let date = new Date(updatedTime);
// console.log(date); // output Sat Sep 27 2025 22:48:27 GMT+0500 (Pakistan Standard Time)

// // date ko dekhnay walay format may karna hatay ho
// let date1 = date.toLocaleString();
// console.log(date1); // output 27/09/2025, 22:52:07


// Calulating Difference b/w Years

// let date = 
// console.log(date);