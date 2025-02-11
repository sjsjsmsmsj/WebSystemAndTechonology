/* ten:                         
/^([A-Z][A-Za-z]+[\s]*){1,}/gm

sđt với đầu số 09 08 07: 	    
/^0[7-9]\d{8}$/gm

email: 							
/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm

thẻ ngân hàng:					
/^(\d{4}[-]*){4}$/gm

địa chỉ: 	                    
/^([A-Za-z0-9]+[\/\\,\- +]*){1,}/gm

Mật khẩu: 
/^[a-z0-9_-]{6,18}$/
*/
function changeDis() {
    var getGiaTri = document.getElementById("monHoc").value;
    var setGiaTri = document.getElementById("disInput");

    if (getGiaTri == "LTHDT") {
        setGiaTri.value = "1";
    } else if (getGiaTri == "LTHDT2") {
        setGiaTri.value = "2";
    } else if (getGiaTri == "LTHDT3") {
        setGiaTri.value = "3";
    }
}

function checkName() {
    var re = /^([A-Z][A-Za-z]+[\s]*){1,}/gm;
    var str = "Ho Ten";
    var x = document.getElementById("name").value;
    var idError = "error1";

    if (re.test(x) == false) {
        document.getElementById(idError).innerHTML = str + " khong hop le!!!";
        document.getElementById("btn-DangKy").disabled = true;
        return false;
    } else {
        document.getElementById(idError).innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
        return true;
    }
}

function checkBirth() {
    var dates = document.getElementById("birth").value;
    var birth = document.getElementById("birth").value;
    birth = new Date(birth);
    var crr = new Date();
    var tuoi = crr.getFullYear() - birth.getFullYear();
    var str = "Tuoi";
    var idError = "error2";
    if (tuoi < 16 || dates == "0001-01-01") {
        document.getElementById(idError).innerHTML = str + " khong hop le!!! Tuoi >= 16";
        document.getElementById("btn-DangKy").disabled = true;
        return false;
    } else {
        document.getElementById(idError).innerHTML = "(*)";
        document.getElementById("btn-DangKy").disabled = false;
        return true;
    }
}

var count = 1;

function DangKy() {
    if (checkName() && checkBirth()) {
        var name = document.getElementById("name").value;
        var NgaySinh = document.getElementById("birth").value;
        var n = document.getElementById("frm").length;
        var gender = "";
        var language = "";
        var monHoc = document.getElementById("monHoc").value;
        for (var i = 0; i < n; i++) {
            if (document.getElementById("frm").elements[i].checked == true && document.getElementById("frm").elements[i].type == "radio")
                gender = document.getElementById("frm").elements[i].value;
            if (document.getElementById("frm").elements[i].checked == true && document.getElementById("frm").elements[i].type == "checkbox")
                language += document.getElementById("frm").elements[i].value + ", ";
        }
        var bang = document.getElementById("table");
        var row = bang.insertRow(count);
        var col0 = row.insertCell(0);
        var col1 = row.insertCell(1);
        var col2 = row.insertCell(2);
        var col3 = row.insertCell(3);
        var col4 = row.insertCell(4);

        col0.innerHTML = name;
        col1.innerHTML = NgaySinh;
        col2.innerHTML = gender;
        col3.innerHTML = language;
        col4.innerHTML = monHoc;

        document.getElementById("btn-DangKy").disabled = true;
        count++;
    }
}
