function soChinhPhuong (num) {
    return Math.sqrt(num) % 1 ==0;
}
function timSoChinhPhuong(arr) {
    let soCP=[];
    arr.forEach(function(num) {
        if (soChinhPhuong(num))
        soCP.push (num);
    }
}
