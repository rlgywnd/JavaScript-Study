const listFunc = (el) => {
  return `
  <div class="list">
    <p class="list-text">${el}</p>
    <button class="delete-btn">X</button>
  </div>
  `;
};

$('#input-tag').on('keyup', (e) => {
  if (e.keyCode === 13) {
    let data = document.querySelector('#input-tag').value;
    if (data) {
      $('.list-container').append(listFunc(data));
      $('#input-tag').val('');
      $(`.delete-btn`).on('click', function (e) {
        $(e.target).parents('.list').remove();
      });
    } else {
      e.preventDefault();
    }
  }
});

document.querySelector('.add-btn').addEventListener('click', (e) => {
  let data = document.querySelector('#input-tag').value;
  if (data) {
    $('.list-container').append(listFunc(data));
    $('#input-tag').val('');
    //
    $(`.delete-btn`).on('click', function (e) {
      // console.log(e.target); // 지금 클릭한 노드!
      // console.log($(e.target).siblings()); // 형제 노드
      // $(e.target).siblings().remove();
      $(e.target).parents('.list').remove(); // 부모 노드를 지우면 형제노드도 다 삭제
      // let tarId = $(this).attr('id').slice(7);
      // $(`#list-${tarId}`).remove();
    });
  } else {
    e.preventDefault();
  }
});
