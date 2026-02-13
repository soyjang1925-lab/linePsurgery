 $(function() {

    $('.accordion-header, .toggle').on('click', function() {
        let item = $(this).parent('.accordion');
        let isOpen = item.hasClass('open');

        if(isOpen) {
            item.removeClass('open');
        } else {
            // 모든 아코디언 닫아주기 
            $('.accordion').removeClass('open');

            // 클릭한 요소의 부모 아코디언만 열어주기 
            item.addClass('open');
        }
    });

    
})