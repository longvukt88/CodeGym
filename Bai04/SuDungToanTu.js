let inputChieuRong; //Khai báo biến ChieuRong
let inputChieuDai; //Khai báo biến ChieuDai
inputChieuRong = prompt("Hãy nhập chiều rộng hình chữ nhật"); //Hiển thị hộp thoại nhập chiều rộng
inputChieuDai = prompt("Hãy nhập chiều dài hình chữ nhật"); //Hiển thị hộp thoại nhập chiều dài
//Dùng hàm parseInt chuyển dữ liệU từ string sang Int
let ChieuRong = parseInt(inputChieuRong); 
let ChieuDai = parseInt(inputChieuDai);
let DienTich; //Khai báo biến diện tích
DienTich = ChieuRong*ChieuDai; // Tính diện tích hình chữ nhật
document.writeln("Chiều rộng hình chữ nhật là: "+ChieuRong);
document.writeln("Chiều dài hình chữ nhật là: "+ChieuDai);
document.writeln("Diện tích của hình chữ nhật là: "  + DienTich); //Ghi kết quả lên màn hình