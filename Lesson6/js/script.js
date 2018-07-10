window.addEventListener('DOMContentLoaded', function() {

    let infoHeader = document.querySelector('.info-header'),
        tabs = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', function(event) {
        let target = event.target;
        if (event.target && event.target.className === 'info-header-tab') {
            for (let i = 0; i < tabs.length; i++) {
                if (target === tabs[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });

});


