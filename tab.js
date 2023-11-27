// for (let i = 0; i < 3; i++) {
//   $('.tab-button')
//     .eq(i)
//     .on('click', () => {
//       $('.tab-button').removeClass('orange');
//       $('.tab-button').eq(i).addClass('orange');
//       $('.tab-content').removeClass('show');
//       $('.tab-content').eq(i).addClass('show');
//     });
// }

const tabFunc = (i) => {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(i).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(i).addClass('show');
};

$('.list').click((e) => {
  if (e.target === document.querySelectorAll('.tab-button')[0]) {
    tabFunc(0);
  } else if (e.target === document.querySelectorAll('.tab-button')[1]) {
    tabFunc(1);
  } else if (e.target === document.querySelectorAll('.tab-button')[2]) {
    tabFunc(2);
  } else {
    e.preventDefault();
  }
});

// 아래코드는 잘 작동하지않는다.
// var로 i를 선언했기때문이다.
// var의 변수 범위는 function이다.
// let의 변수범위는 중괄호{} 이다.
// 그렇기에 아래코드는 반복문이 다 끝낸상태로 i는 3이 할당되어있는상태이다.
// 밖에서도 참조가능한 i인것이다.
// 그렇기에 반복문 내부 이벤트리스너에서 클릭이 발생되면
// i는 바깥에서 i의값인 3을 찾아와서 실행시키기에 작동오류!
// for (var i = 0; i < 3; i++) {
//   $('.tab-button')
//     .eq(i)
//     .on('click', () => {
//       $('.tab-button').removeClass('orange');
//       $('.tab-button').eq(i).addClass('orange');
//       $('.tab-content').removeClass('show');
//       $('.tab-content').eq(i).addClass('show');
//     });
// }
