// 카트추가 
// .closest - 상위요소 탐색 후 일치요소 찾으면 검색 멈춤
function addToCart(button) {
    const productDetails = button.closest('.product').querySelector('.product-details');
    const productName = productDetails.querySelector('h2').textContent;
    const productPrice = productDetails.querySelector('.price').childNodes[2].textContent.trim();
// .textContent 내용 가져옴(html무시되고 내용만 가져와짐)
    // .childNodes : 모든자식 [2]-세번째자식
    // .trim() - 공백제거  
    const cartItems = document.getElementById('clear-items');
    const existingItems = cartItems.querySelectorAll('li');
    let isExisting = false;
    // isExisting 선언 후 초기값 false
    // 중복된 제품이 카트에 있는지 여부 판단시 사용. 
    // 중복된 제품 있을시 isExisting 을 true로 변경!
    // .createElement - 새로운 요소 생성 
    // 아이템에 productName 내용이 포함되어있는지 확인
    // .includes -> 포함되어있는지 확인하는 메서드
    // 이미 카트에 제품명이 있으면 추가하지 않음 
    existingItems.forEach(item => {
        if (item.textContent.includes(productName)) {
            isExisting = true;
            return; // 실행중지 (종료)
            // 포함되어있으면 true반환, 그렇지않으면 false반환
        }
    });


    // ! -> 논리부정연산자 - false일때 참, true일때 거짓이 됨
    // 새로운 요소 생성 - 제품명과 가격을 리스트 아이템에 넣어줌
    if (!isExisting) {
        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - ${productPrice}`;
        listItem.style.display = 'inline';

        const removeButton = document.createElement('span');
        removeButton.innerHTML = `<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 1L0.999999 13" stroke="#FF0000" stroke-width="1.33333" stroke-linecap="round"/>
    <path d="M13 13L0.999999 0.999999" stroke="#FF0000" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
        // .innerHTML - html 변경시 사용

        // 리스트 아이템 추가 
        cartItems.appendChild(listItem)

        // X버튼 추가
        listItem.appendChild(removeButton)

        // X버튼에 마진값 추가 
        removeButton.style.margin = '0 30px 0 7px';

        // X버튼 클릭시 리스트 삭제
        removeButton.addEventListener('click', function () {
            listItem.remove(); // 리스트 삭제
        });

    }


}



// 전체삭제
function clearCart() {
    const cartItems = document.getElementById('clear-items');
    cartItems.innerHTML = ''; // 모든 자식요소 삭제
}

// 좋아요버튼 해제 
function toggleLike(button) {
    // 자바스크립트는, 특성상 매개변수에(button) 로 써주면
    // html 요소로 간주함
    // .contains() - 포함되어있는지 확인 
    // .textContent - 텍스트 내용을 나타내는 속성. 텍스트 변경시 사용 
    button.textContent = button.classList.contains('like-button') ? '좋아요 해제' : '좋아요';
    button.classList.toggle('like-button');
    button.classList.toggle('unlike-button');
    // .toggle() - 존재하면 제거, 없으면 추가 (두가지 역할 수행)
    // 삼항조건연산자 "조건 ? 표현식1 : 표현식2"
    // 조건이 참일 경우 실행되는 표현식은 '표현식1'
    // 조건이 거짓일 경우 실행되는 표현식은 '표현식2' 
    // .slideToggle() - 애니메이션 효과가 들어간 토글
}