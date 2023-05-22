let time={
    hh: 12,
    mm: 0,
    ss:0,
    period: "am"
};
let hrs24={
    hh: 0,
    mm: 0,
    ss:0
}
if (time.period=="pm" && time.hh != 12) {

    hrs24.hh = time.hh + 12;
    hrs24.mm=C;
    hrs24.ss=time.ss;
}
else if (time.period=="pm" && time.hh == 12) {
    hrs24.hh = time.hh ;
    hrs24.mm=time.mm;
    hrs24.ss=time.ss;
    
}; 

console.log(`Time given in 12 hr ${time.hh}:${time.mm}:${time.ss} ${time.period} `);

console.log(`Time given in 24 hr or military time ${hrs24.hh}:${hrs24.mm}:${hrs24.ss}`);

