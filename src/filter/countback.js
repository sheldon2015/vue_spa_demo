//es6模式   export    import命令



// export default function(val) {
//     console.log('val: ' + val)

// }



function _count_time(intDiff) {
    let hour = 0,
        minute = 0,
        second = 0;


    if (intDiff > 0) {
        hour = Math.floor(intDiff / (60 * 60));
        minute = Math.floor(intDiff / 60) - (hour * 60);
        second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
    }
    if (hour <= 9) {
        hour = '0' + hour;
    }
    if (minute <= 9) {
        minute = '0' + minute;
    }
    if (second <= 9) {
        second = '0' + second;
    }


    return intDiff == 0 ? '0%' : `${hour}:${minute}:${second}`;
}

export default (val) => {

    return /^[\d]*$/.test(val) ? _count_time(parseInt(val)) : val;

}



//名字要一致与导入的时候  countback  且导入时要用  import｛｝
// export function countback(val) {
//     console.log('val: ' + val)

// }


//-------------------------------------------------------------------


//   common.js  模式 用exports暴露接口, 导入时 require获取


// module.exports = (val) => {
//     console.log('val: ' + val)

// }
