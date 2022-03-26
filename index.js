// code your solution here
const record = [ 
        {year: '2015', result: 'W'},
        {year: '2014', result: 'N/A'},
        {year: '2013', result: 'L'},
    ]


function superbowlWin(arr) {
    let win = arr.find(function (el) {
        return el.result === 'W'}) 
     if (win === undefined) {
         return 
    } else {
        return win.year
    }

}

//     const superbowlWin = (array) => {
//         let win = array.find(function (element) {
//             return element['result'] === 'W'})
//         if (win === undefined) {

//             return win 
//         } else {
//             console.log(win['year'])
//             return win['year']
//         } 
        
//     }
// superbowlWin(record)