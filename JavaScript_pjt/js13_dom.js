// 새로운 브라우저 window 생성

// window.open('https://www.naver.com/', 'newWin', 'width=300, height=500');

var child = window.open('', 'child', 'width=300, height=400');
var html = '<h1 onclick="self.close()">윈도우 닫기</h1>';
child.document.write('<h1>부모 윈도우에서 텍스트 추가</h1>'+html);