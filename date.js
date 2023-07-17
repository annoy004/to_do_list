// module.exports = getDate;// we can also write export directly its a sjor
// function getDate() {

module.exports.getDay = function () {//getday is name of the function


const today = new Date();
// var currentDay = today.getDay();
// var day = "";

// switch (currentDay) {
//     case 0:
//         day = "sunday";
//         break;
//         case 1:
//             day = "monday ";
//             break;
//             case 2:
//                 day = "tuesday";
//                 break;
//                 case 3:
//                     day = "wednesday";
//                     break;
//                     case 4:
//                         day = "thursday";
//                         break;
//                         case 5:
//                             day = "friday";
//                             break;
//                             case 6:
//                                 day = "saytursay";
//                                 break;
//     default:
//         break;
// }
 const options = {
    weekday :"long",
   
   
}

const day = today.toLocaleDateString("en-US",options);
return day;
}
module.exports.getDates = function () {


    const today = new Date();
    // var currentDay = today.getDay();
    // var day = "";
    
    // switch (currentDay) {
    //     case 0:
    //         day = "sunday";
    //         break;
    //         case 1:
    //             day = "monday ";
    //             break;
    //             case 2:
    //                 day = "tuesday";
    //                 break;
    //                 case 3:
    //                     day = "wednesday";
    //                     break;
    //                     case 4:
    //                         day = "thursday";
    //                         break;
    //                         case 5:
    //                             day = "friday";
    //                             break;
    //                             case 6:
    //                                 day = "saytursay";
    //                                 break;
    //     default:
    //         break;
    // }
     const options = {
        weekday :"long",
        day : "numeric",
        month : "long"
    }
    
    const day = today.toLocaleDateString("en-US",options);
    return day;
    }