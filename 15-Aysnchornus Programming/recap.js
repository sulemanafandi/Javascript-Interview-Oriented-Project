/*
** synchronous and asynchronous kya hota hai?
synchronous apka line by line chalta hai asynchronous apka non-blocking hota hai or ahgy k instructions ko block nahi karta hai or lagta hai k multiple task aik sath chal rahy hai but aisa hota nahi hai actually  q  k internally working ap nay dekh li

asynchronous pehchanay k tariqa 
1--- time lagy ga
2-- setTimeout ya setinterval mil jahy
3-- XMLHTTTP request 
4-- fetch
5--- axios

*** Javascript by default async nahi hota hai
definately, javascript sync in nature hota hai by default ,async to banaya ja sakta hai

***Single threading and multi threading
javascript aik bar hi may aik task kar raha hota hai single threading hai kabhi b ya multiple task aik sath nahi kar sakta hai multi thrading may ap k multiple task hotay hai sab aik sath run kar rahy hotay hai 

** callbacks
callback hemesha aik function hota hai jo k as a argument hum kisi function k andar pass kar rahy hotay hai and jis function k andar pass kar rahy hotay hai usay hum HOD higher Order Function kehtay hai or us ka name callback us liya hai q ki need parhnay opar hum call back kar letay hai function kojaise ki hum apni gf ko callback kar letay hai missed call dekh kar

**callback hell
hum callback hell may nested callbacks use kar rahy hotay hai

**promises
promises callback hell say nnikal nay ka aik tariqa hai jaha pe hum kehtay k koyi task ya data future may ya tu resolve hoga ya reject and us k accoriding hum dot than and dot catch use kar rahy hotay hai acha promise k sath fetch aya ta market may jo ki actual promise return kar raha hota hai and hum actual database ke sath kam kar rahy hotay hai jaha par data anay may time lagta hai

**promise chaining
.then k bad .then k bad .then and so on aik data a jata hai us k bad dosra data jo callback hell may kar rahy tay wahi but promise behtareen syntax hai

** aysnc await
async await promises pe hi kam karta hai but bhaut zyada pyara syntax hota hai tu synchornus code jaisa lagta hai but asynchrononus in nature hai 

** try catch
aaisa code jisme error aane ki chances hai tu hum try ke andar wrap kar dete hai or catch block ke anadar error catch kar letay hai tu error show kar deta hai

** IIFE (immediately invoked expression)
usay humay call karnay ki need nahi hoti kud call ho jata hai async await ke liya baut acha hai kafi cases me
tu aysnc and await k lie tu function banana hi parta hai tu hum waha kud hi call karnay k lie IIFE banana parta hai

** promises 
acha promises to bas bahana hai asal maqsad tu api k sath khilna hai promise tu hum create kar rahy hai fake tara k samajnay k lie baqi asal may api k sath kam kar rahy hota hai async await jo last may ap nay dekha tu api hi apka promise return kar wa raha hota hai

** data anay may time lagta hai tu javascript baqi kam ko rokh ke rakhnay k bajahy promise dekh kar bolta hai aghy barho baba us tariqay say hum usay aysnchornus bana saktay hai
*/

