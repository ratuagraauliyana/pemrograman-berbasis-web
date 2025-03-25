let nama = 'Ratu Agra Auliyana' //string
let umur = 19
let tinggiBadan = 158.2 //float
let beratBadan = 49
let pacar = null
let namaPanggilan = [
    "ratu",
    "rara",
    "ara",
]
if (pacar === null){
pacar = 'belum ada'
} else {
pacar = 'udah ada'

}
switch(pacar){
    case 1:
        pacar = 'punya 1'
        break
    case 2:
        pacar = 'punya 2'
        break 
    default :
        pacaer = 'belu ada'
        break
}

let uangAwal = 2000
let uangTambahan = 1000
let uangAkhir = uangAwal + uangTambahan

console.log(nama)
alert(`nama gue ${nama} usia gue ${umur} tinggi badan gue ${tinggiBadan} berat badan gue sekarang ${beratBadan}`)
//console.log(namaPanggilan[0]);
//namaPanggilan[2] = "rara";
//console.log(namaPanggilan);
//Umur[1] = 19;
//console.log(naaPanggilan);
alert(`Uang gue awalnya sebesar Rp. ${uangAwal} & dikasih uang sama ortu Rp. ${uangTambahan} ,jadi total uang gue adalah Rp. ${uangAkhir}`)