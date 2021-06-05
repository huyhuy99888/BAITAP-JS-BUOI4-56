// Bài 1: Viết chương trình xuất 3 số theo thứ tự tăng dần
/*
Input: 
    - Người dùng nhập vào 3 số nguyên.
Handle:
    - Tạo biến nhapSo1, nhapSo2, nhapSO3, temp
    - Ta tạo 1 biến phụ sau đó hoán đổi các vị trí cho nhau như sau:
     + Nếu: (nhapSo1 > nhapSo2) thì ta hoán đổi lần lượt là temp = nhapSo1; nhapSo1 = nhapSo2; nhapSo2 = temp;
     + Nếu: (nhapSo1 > nhapSo3) thì ta hoán đổi lần lượt là temp = nhapSo1; nhapSo1 = nhapSo3; nhapSo3 = temp;
     + Nếu: (nhapSo2 > nhapSo3) thì ta hoán đổi lần lượt là temp = nhapSo2; nhapSo2 = nhapSo3; nhapSo3 = temp;
    - Để tránh trường hợp người dùng nhập vào là kiểu String hay bỏ trống thì ta làm như sau:
      (nhapSo1 != parseInt(nhapSo1) || nhapSo2 != parseInt(nhapSo2) || nhapSo3 != parseInt(nhapSo3) || nhapSo1 == "" || nhapSo2 == "" || nhapSo3 == "")
Output:
    - Xuất kêt quả.
*/
document.getElementById('btnTinh').onclick = function () {
    var nhapSo1 = Number(document.getElementById('nhapSo1').value);
    var nhapSo2 = Number(document.getElementById('nhapSo2').value);
    var nhapSo3 = Number(document.getElementById('nhapSo3').value);
    temp = 0;

    if (nhapSo1 != parseInt(nhapSo1) || nhapSo2 != parseInt(nhapSo2) || nhapSo3 != parseInt(nhapSo3) || nhapSo1 == "" || nhapSo2 == "" || nhapSo3 == "") {
        document.getElementById('nhapSo1').value = "";
        document.getElementById('nhapSo2').value = "";
        document.getElementById('nhapSo3').value = "";
        alert("xin vui lòng nhập số.");
    } else {
        if (nhapSo1 > nhapSo2) {
            temp = nhapSo1;
            nhapSo1 = nhapSo2;
            nhapSo2 = temp;
        }
        if (nhapSo1 > nhapSo3) {
            temp = nhapSo1;
            nhapSo1 = nhapSo3;
            nhapSo3 = temp;
        }
        if (nhapSo2 > nhapSo3) {
            temp = nhapSo2;
            nhapSo2 = nhapSo3;
            nhapSo3 = temp;
        }
        console.log('thứ tự nhỏ đến lớn:', (+nhapSo1) + "" + (+nhapSo2) + "" + (+nhapSo3))
    }
}


// bài 2: Viết chương trình "Chào hỏi" các thành viên trong gia đình.
/*
Input: 
    - 4 thành viên gồm : Bố(B), Mẹ(M), Anh Trai(A), Em gái(E). 
Handle:
    - Dùng switch sau đó ta case tới từng trường hợp "B" (Bố), "Mẹ" (Mẹ), "A" (Anh trai), "E" (Em gái)
      sau đó xuất ra từng giá trị cụ thể tương ứng với người dùng select vào.
Output:
    - xuất ra câu trả lời và đưa ra lời chào.
*/
document.getElementById('btnKetQua').onclick = function () {
    var thanhVienGiaDinh = document.getElementById('thanhVienGiaDinh').value;

    switch (thanhVienGiaDinh) {
        case "B":
            console.log('Xin chào Bố!');
            break;
        case "M":
            console.log('Xin chào Mẹ!');
            break;
        case "A":
            console.log('Xin chào Anh trai!');
            break;
        case "E":
            console.log('Xin chào Em gái!');
            break;
        default:
            console.log('Dù bạn là ai,chúc mạn ngày mới vui vẻ!');
            break;
    }
}


// Bài 3: Nhập 3 số nguyên.Viết chương trình xuất ra có bao nhiêu só chẳng,bao nhiêu số lẻ.
/*
Input: 
    - 3 số nguyên.
Handle:
    - Tạo 3 biến nhapSoA, nhapSoB, nhapSoC, soChan, soLe
    - Nếu nhapSoA % 2 === 0 (nhapSoA là số chẳn thì sẽ cộng thêm 1 đơn vị vào soChan và nhapSoA là lẻ thì cộng 1 đơn vị vào soLe)
    - Nếu nhapSoB % 2 === 0 (nhapSoB là số chẳn thì sẽ cộng thêm 1 đơn vị vào soChan và nhapSoB là lẻ thì cộng 1 đơn vị vào soLe)
    - Nếu nhapSoC % 2 === 0 (nhapSoC là số chẳn thì sẽ cộng thêm 1 đơn vị vào soChan và nhapSoC là lẻ thì cộng 1 đơn vị vào soLe)
    - Để tránh trường hợp người dùng nhập vào là kiểu String hay bỏ trống thì ta làm như sau:
      (nhapSoA != parseInt(nhapSoA) || nhapSoB != parseInt(nhapSoB) || nhapSoC != parseInt(nhapSoC) || nhapSoA == "" || nhapSoB == "" || nhapSoC == "")
Output:
    - xuất ra có bao nhiêu số chẵn và số lẻ.
*/
document.getElementById('btnThucHien').onclick = function () {
    var nhapSoA = Number(document.getElementById('nhapSoA').value);
    var nhapSoB = Number(document.getElementById('nhapSoB').value);
    var nhapSoC = Number(document.getElementById('nhapSoC').value);

    var soChan = 0;
    var soLe = 0;

    if (nhapSoA != parseInt(nhapSoA) || nhapSoB != parseInt(nhapSoB) || nhapSoC != parseInt(nhapSoC) || nhapSoA == "" || nhapSoB == "" || nhapSoC == "") {

        document.getElementById('nhapSoA').value = "";
        document.getElementById('nhapSoB').value = "";
        document.getElementById('nhapSoC').value = "";
        alert("xin vui lòng nhập số.");
    } else {
        if (nhapSoA % 2 === 0) {
            soChan++;

        } else {

            soLe++;
        }

        if (nhapSoB % 2 === 0) {
            soChan++;
        } else {
            soLe++;
        }

        if (nhapSoC % 2 === 0) {
            soChan++;
        } else {
            soLe++;
        }
        console.log('sl số chẳng:' + soChan + ' ' + 'sl số lẻ:' + soLe);
    }
}


// Bài 4: Viết chương trình nhập 3 cạnh của tam giác.Hãy cho biết nó là tam giác gì?
/*
Input:
    - Người dùng nhập 3 cạnh của tam giác.
Handle:
    - Tạo biến : canh, canhB, canhC.
    - TH1: Nếu canhA == canhB || canhA == canhC || canhB == canhC thì đó là tam giác cân.
    - TH2: Nếu canhA == canhB && canhA == canhC && canhB == canhC thì đó là tam giác đều.
    - TH3: Nếu canhA == Math.sqrt(canhB * canhB + canhC * canhC) || canhB == Math.sqrt(canhA * canhA + canhC * canhC) || canhC == Math.sqrt(canhA * canhA + canhB * canhB)
    - Để tránh trường hợp người dùng nhập vào là kiểu String hay bỏ trống thì ta làm như sau:
      (canhA != parseInt(canhA) || canhB != parseInt(canhB) || canhC != parseInt(canhC) || canhA == "" || canhB == "" || canhC == "")
    Output:
    - Xuất kết quả.
*/
document.getElementById('btnKetQua2').onclick = function () {
    var canhA = document.getElementById('canhA').value;
    var canhB = document.getElementById('canhB').value;
    var canhC = document.getElementById('canhC').value;

    if (canhA != parseInt(canhA) || canhB != parseInt(canhB) || canhC != parseInt(canhC) || canhA == "" || canhB == "" || canhC == "") {

        document.getElementById('canhA').value = "";
        document.getElementById('canhB').value = "";
        document.getElementById('canhC').value = "";
        alert("xin vui lòng nhập định dạng số.");
    } else {
        if (canhA === canhB && canhA === canhC && canhB === canhC) {
            console.log('Đây là tam giác đều');

        }
        else if (canhA === canhB || canhA === canhC || canhB === canhC) {
            console.log('Đây là tam giác cân');

        }
        else if (canhA == Math.sqrt(canhB * canhB + canhC * canhC) || canhB == Math.sqrt(canhA * canhA + canhC * canhC) || canhC == Math.sqrt(canhA * canhA + canhB * canhB)) {
            console.log('Đây là tam giác vuông');
        } else {
            console.log('Đây là tam giác thường');
        }
    }
}
