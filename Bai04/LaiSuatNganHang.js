var soTienGui = prompt("Hãy nhập số tiền gửi:"); //Nhập số tiền gửi ban đầu
var laiSuatTheoNam=prompt ("Hãy nhập lãi suất theo năm: (đơn vị %)");//NhậP lãi suất ngân hàng hàng năm (đơn vị %)
var soNamGui = prompt("Hãy nhập số năm gửi:"); //Nhập số năm gửi tiền
var tienGui = parseFloat(soTienGui);//Ép kiểu
var laiSuat = parseFloat(laiSuatTheoNam/100);
var namGui = parseInt(soNamGui);
var soTienLai = parseFloat(tienGui*laiSuat*namGui);
var gocVaLai = tienGui+soTienLai;
document.write("<br>Số tiền gốc gửi là: "+tienGui);
document.write("<br>Lãi suất hàng năm là: "+laiSuatTheoNam+"%");
document.write("<br>Số năm gửi tiết kiệm là: "+namGui);
document.write("<br>Số tiền lãi phát sinh trong "+namGui+" năm là: "+soTienLai )
document.write("<br>Số tiền cộng dồn cả gốc và lãi là: "+gocVaLai);


