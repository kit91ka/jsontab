
var today = new Date().getFullYear(); //узнать сегодняшний год

$(document).on('click','.t1', function(e) { //получение id по клику и вырезание из div box элемента для нахождения в JSON
	t = event.target || event.srcElement;
	var k = t.id.slice(3);
	$.getJSON("presentList.json", function (data) {
		document.getElementById("qqq").innerHTML = '';
		if (data.patients[k].birthDate.slice(0, 4) != null | undefined) {
			var YearOfBirth = data.patients[k].birthDate.slice(0, 4);

			patientYearsOld = today - YearOfBirth; //приблизительное кол-во лет
			var plus = "<table>";
			plus += "<tr>Информация о пациенте</tr><br>";
			plus += "<tr>ФИО:" + data.patients[k].firstName + " " + data.patients[k].lastName + " " + data.patients[k].patrName + "</tr><br>";
			plus += "<tr>Возраст: " + patientYearsOld + "</tr><br>";
			plus += "<tr>Диагноз: " + data.patients[k].diagnosis + "</tr>";
			plus += "</table>";
			$('#qqq').append(plus);
		}
			});
})
$.getJSON("presentList.json", function(data) {
	$.each(data, function(){
		var plus = "<table>"
		plus += "<tr><td>№ ИБ</td><td  align=" +'"'+ "left"+'"'+">Фамилия Имя Отчество</td><td>Палата</td></tr>"
		for (var i in data.patients) {
			plus+="<tr><td id="+ '"box'+ i + '">'  + data.patients[i].historyNumber + "</td>"+'<td id='+'"box'+ i + '">' + data.patients[i].firstName  +" "+ data.patients[i].lastName +" " + data.patients[i].patrName + "</td>"+"<td id="+'"box'+ i + '">'  + data.patients[i].bedNumber + "</td></tr>";}
			plus += "</table>"// "box" добавлен в id чтобы не повторяться случайно с др. элементами
			$('#t1tab').append(plus)

		while(data.patients[i]){
			i++;
		}
		var text = "(" + i +")"
		$('#qq1').append(text);

		}); //не ставить цикл с while впереди, т.к. он запорет все ост-е,  приравняет id = кол-ву пациентов
	});
$(document).on('click','.t2', function(e) { //получение id по клику и вырезание из  div id текста "box"  для нахождения элемента в JSON
	t = event.target || event.srcElement;
	var k = t.id.slice(3);
	$.getJSON("quittingList.json", function (data) {
		document.getElementById("qqq").innerHTML='';
		var YearOfBirth = data.patients[k].birthDate.slice(0, 4);
		patientYearsOld = today - YearOfBirth; //приблизительное кол-во лет
		var plus = "<table>";
		plus+= "<tr>Информация о пациенте</tr><br>";
		plus+="<tr>ФИО:"+data.patients[k].firstName+" "+ data.patients[k].lastName +" " + data.patients[k].patrName + "</tr><br>";
		plus+="<tr>Возраст: "+ patientYearsOld +"</tr><br>";
		plus+="<tr>Диагноз: "+ data.patients[k].diagnosis +"</tr>";
		plus+="</table>";
		$('#qqq').append(plus);
	});
})

$.getJSON("quittingList.json", function(data) {
	$.each(data, function(){
		var plus = "<table>"
		plus += "<tr><td>№ ИБ</td><td  align=" +'"'+ "left"+'"'+">Фамилия Имя Отчество</td><td>Причина выписки</td></tr>"
		for (var i in data.patients) {
			plus+="<tr><td id="+ '"box'+ i + '">'  + data.patients[i].historyNumber + "</td>"+'<td id='+'"box'+ i + '">' + data.patients[i].firstName  +" "+ data.patients[i].lastName +" " + data.patients[i].patrName + "</td>"+"<td id="+'"box'+ i + '">'  + data.patients[i].cause + "</td></tr>";}
		plus += "</table>"
		$('#t2tab').append(plus)
		while(data.patients[i]){
			i++;
		}
		var text = "(" + i +")"
		$('#qq2').append(text);		//не ставить цикл с while впереди, т.к. он запорет все ост-е,  приравняет id = кол-ву пациентов
	});
});
var $j = jQuery.noConflict();

$j(document).ready(function() {
	$j('ul.tabs li').css('cursor', 'pointer');

	$j('ul.tabs.tabs1 li').click(function () {
		var thisClass = this.className.slice(0, 2);
		$j('div.t1').hide();
		$j('div.t2').hide();
		$j('div.' + thisClass).show();
		$j('ul.tabs.tabs1 li').removeClass('tab-current');
		$j(this).addClass('tab-current');
	});
});

//$('.navigatorItem').live('click', function() {
//	alert($(this).attr("id"));
//	});

//обработчик события на 1 вкладку
//в него вытаскивание id для json
//поиск номера положения данных в json
//вытаскивание остальных данных
//вставка их в iframe

//document.getElementById("qqq").innerHTML=''; //очищатор
//var qw = "<table>"
//for(m=0; m<3; m++){
//	qw += '<tr><td>' + 'result ' +  m + '</td>'+'<td>'+ m + '</td></tr>';
//}
//qw += "</table>"
//alert(qw);
//$('#table').append(qw); //проверка