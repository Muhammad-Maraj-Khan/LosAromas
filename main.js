let timer_1 = 0;
window.addEventListener('load', () => {
  let intersectionObserver_1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('up-1');
        }, timer_1);
        timer_1 += 50;
        intersectionObserver_1.unobserve(entry.target);
        setTimeout(function() {
          timer_1 = 0;
        }, 1000);
      }
    });
  });

  document.querySelectorAll('.animate-1').forEach(obj => {
    intersectionObserver_1.observe(obj);
  });
});

let timer_2 = 0;
window.addEventListener('load', () => {
  let intersectionObserver_2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('up-2');
        }, timer_2);
        timer_2 += 50;
        intersectionObserver_2.unobserve(entry.target);
        setTimeout(function() {
          timer_2 = 0;
        }, 1000);
      }
    });
  });

  document.querySelectorAll('.animate-2').forEach(obj => {
    intersectionObserver_2.observe(obj);
  });
});

let timer_3 = 0;
window.addEventListener('load', () => {
  let intersectionObserver_3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('up-3');
        }, timer_3);
        timer_3 += 50;
        intersectionObserver_3.unobserve(entry.target);
        setTimeout(function() {
          timer_3 = 0;
        }, 1000);
      }
    });
  });

  document.querySelectorAll('.animate-3').forEach(obj => {
    intersectionObserver_3.observe(obj);
  });
});

let timer_4 = 0;
window.addEventListener('load', () => {
  let intersectionObserver_4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('up-4');
        }, timer_4);
        timer_4 += 50;
        intersectionObserver_4.unobserve(entry.target);
        setTimeout(function() {
          timer_4 = 0;
        }, 1000);
      }
    });
  });

  document.querySelectorAll('.animate-4').forEach(obj => {
    intersectionObserver_4.observe(obj);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.click-effect');

  img.addEventListener('mousedown', () => {
    img.style.transform = 'scale(0.5)';
  });

  img.addEventListener('mouseup', () => {
    img.style.transform = 'scale(1)';
  });
});



//Whatsapp & Viber pop up
window.addEventListener('resize', function() {
    if (window.innerWidth < 831) {
      document.querySelector('.chat-popup').style.display = 'flex';
    } else {
      document.querySelector('.chat-popup').style.display = 'none';
    }
  });




// Function to change the language of the website
function changeLanguage(language) {
    var t1 = document.getElementById('t1');
    var t2 = document.getElementById('t2');
    var t3 = document.getElementById('t3');
    var t4 = document.getElementById('t4');
    var t5 = document.getElementById('t5');
    var t6 = document.getElementById('t6');
    var t7 = document.getElementById('t7');
    var t8 = document.getElementById('t8');
    var t9 = document.getElementById('t9');
    var t10 = document.getElementById('t10');
    var t11 = document.getElementById('t11');
    var t12 = document.getElementById('t12');
    var t13 = document.getElementById('t13');
    var t14 = document.getElementById('t14');
    var t15 = document.getElementById('t15');
    var t16 = document.getElementById('t16');
    var t17 = document.getElementById('t17');
    var t18 = document.getElementById('t18');
    var t19 = document.getElementById('t19');
    var t20 = document.getElementById('t20');
    var t21 = document.getElementById('t21');
    var t22 = document.getElementById('t22');
    var t23 = document.getElementById('t23');
    var t24 = document.getElementById('t24');
    var t25 = document.getElementById('t25');
    var t26 = document.getElementById('t26');
    var t27 = document.getElementById('t27');
    var t28 = document.getElementById('t28');
    var t29 = document.getElementById('t29');
    var t30 = document.getElementById('t30');
    var t31 = document.getElementById('t31');
    var t32 = document.getElementById('t32');
    var t33 = document.getElementById('t33');
    var t34 = document.getElementById('t34');
    var t35 = document.getElementById('t35');
    var t36 = document.getElementById('t36');

    switch (language) {
        case 'en':
            t1.textContent = 'Perfume & Cosmetics | Tallinn';
            t2.textContent = 'Read More';
            t3.textContent = 'We think you really like';
            t4.textContent = 'perfumes';
            t5.textContent = 'and';
            t6.textContent = 'fragrances';
            t7.textContent = 'We know how difficult it is to';
            t8.textContent = ' choose ';
            t9.textContent = 'and the cost of having';
            t10.textContent = ' multiple';
            t11.textContent = 'We have a solution that helps you';
            t12.textContent = ' save time';
            t13.textContent = 'You will be able to have all the perfumes that you like for';
            t14.textContent = ' every mood';
            t15.textContent = "You won't need to spend a fortune to be";
            t16.textContent = ' attractive';
            t17.textContent = 'From us you can order';
            t18.textContent = ' niche perfumes';
            t19.textContent = 'decants and tester of any flavour in volume';
            t20.textContent = '1-10ml';
            t21.textContent = 'These are made in our shop from';
            t22.textContent = ' 100% original values';
            t23.textContent = 'We can deliver';
            t24.textContent = 'your favorites perfumes using parcel machines through Baltic countries and worldwide via post';
            t25.textContent = 'Visit our e-shop to get';
            t26.textContent = ' 10% ';
            t27.textContent = 'off with promo code "CODE"!';
            t28.textContent = 'Shop Now';
            t29.textContent = 'Find us on ';
            t30.textContent = ' to know about latest offers OR Join our ';
            t31.textContent = ' group';
            t32.textContent = 'About';
            t33.textContent = 'Delivery';
            t34.textContent = 'Brands';
            t35.textContent = 'Contact';
            t36.textContent = 'Copyright © www.losaromas.ee';
            break;
        case 'es':
            t1.textContent = 'Parfüümid ja kosmeetika | Tallinn';
            t2.textContent = 'Loe rohkem';
            t3.textContent = 'Arvame, et sulle meeldib';
            t4.textContent = 'parfüümid';
            t5.textContent = 'ja';
            t6.textContent = 'lõhnaained';
            t7.textContent = 'Me teame, kui raske see on';
            t8.textContent = ' vali! ';
            t9.textContent = 'need ja nende omamise kulud';
            t10.textContent = ' mitmekordne';
            t11.textContent = 'Meil on lahendus, mis teid aitab';
            t12.textContent = ' säästa aega';
            t13.textContent = 'Teil on võimalik kasutada kõiki teile meeldivaid parfüüme';
            t14.textContent = ' iga tuju';
            t15.textContent = 'Sa ei pea kulutama varandust, et olla';
            t16.textContent = ' atraktiivne';
            t17.textContent = 'Meilt saab tellida';
            t18.textContent = ' niche perfumes';
            t19.textContent = 'mis tahes mahuga dekantid ja tester';
            t20.textContent = '1-10ml';
            t21.textContent = 'Need on valmistatud meie poes alates';
            t22.textContent = ' 100% originaal väärtused';
            t23.textContent = 'Saame kohale toimetada';
            t24.textContent = 'teie lemmikparfüümid pakiautomaatide kaudu Balti riikides ja kogu maailmas posti teel';
            t25.textContent = 'Külastage meie e-poodi, et saada';
            t26.textContent = ' 10% ';
            t27.textContent = 'välja sooduskoodiga "CODE"';
            t28.textContent = 'Osta nüüd';
            t29.textContent = 'Otsige meid ';
            t30.textContent = ', et olla kursis viimaste pakkumistega VÕI Liituge meie ';
            t31.textContent = ' grupiga';
            t32.textContent = 'kohta';
            t33.textContent = 'tarne!';
            t34.textContent = 'kaubamärgid';
            t35.textContent = 'kontaktid';
            t36.textContent = 'Autoriõigus © www.losaromas.ee';
            break;
        case 'rus':
            t1.textContent = 'Парфюмерия и косметика | Таллинн';
            t2.textContent = 'читать далее';
            t3.textContent = 'Мы думаем, вам очень нравится';
            t4.textContent = 'духи';
            t5.textContent = 'и';
            t6.textContent = 'ароматы';
            t7.textContent = 'Мы знаем, как непросто';
            t8.textContent = ' выбирать ';
            t9.textContent = 'и стоимость наличия';
            t10.textContent = ' несколько';
            t11.textContent = ' У нас есть решение, которое поможет вам';
            t12.textContent = ' экономить время';
            t13.textContent = 'Вам не нужно будет тратить целое состояние, чтобы быть';
            t14.textContent = ' пкаждое настроение';
            t15.textContent = 'Вам не нужно будет тратить целое состояние, чтобы быть';
            t16.textContent = ' привлекательный!';
            t17.textContent = 'У нас вы можете заказать';
            t18.textContent = ' нишевая парфюмерия';
            t19.textContent = 'деканты и тестеры любого вкуса по объему';
            t20.textContent = '1-10мл';
            t21.textContent = 'Они сделаны в нашем магазине из';
            t22.textContent = ' 100% оригинальные значения';
            t23.textContent = 'Мы можем доставить';
            t24.textContent = 'ваши любимые духи в посылочных автоматах по странам Балтии и по всему миру почтой';
            t25.textContent = 'Посетите наш интернет-магазин, чтобы получить';
            t26.textContent = ' 10% ';
            t27.textContent = 'скидка по промокоду "CODE"';
            t28.textContent = 'магазин сейчас';
            t29.textContent = 'Найти нас на';
            t30.textContent = ' чтобы узнать о последних предложениях ИЛИ Присоединяйтесь к нашему ';
            t31.textContent = 'группа';
            t32.textContent = 'о';
            t33.textContent = 'доставка';
            t34.textContent = 'бренды';
            t35.textContent = 'контакты';
            t36.textContent = 'Copyright © www.losaromas.ee';
            break;
        default:
            t1.textContent = 'Perfume & Cosmetics | Tallinn';
            t2.textContent = 'Read More';
            t3.textContent = 'We think you really like';
            t4.textContent = 'perfumes';
            t5.textContent = 'and';
            t6.textContent = 'fragrances';
            t7.textContent = 'We know how difficult it is to';
            t8.textContent = ' choose ';
            t9.textContent = 'and the cost of having';
            t10.textContent = ' multiple';
            t11.textContent = 'We have a solution that helps you';
            t12.textContent = ' save time';
            t13.textContent = 'You will be able to have all the perfumes that you like for';
            t14.textContent = ' every mood';
            t15.textContent = "You won't need to spend a fortune to be";
            t16.textContent = ' attractive';
            t17.textContent = 'From us you can order';
            t18.textContent = ' niche perfumes';
            t19.textContent = 'decants and tester of any flavour in volume';
            t20.textContent = '1-10ml';
            t21.textContent = 'These are made in our shop from';
            t22.textContent = ' 100% original values';
            t23.textContent = 'We can deliver';
            t24.textContent = 'your favorites perfumes using parcel machines through Baltic countries and worldwide via post';
            t25.textContent = 'Visit our e-shop to get';
            t26.textContent = ' 10% ';
            t27.textContent = 'off with promo code "CODE"!';
            t28.textContent = 'Shop Now';
            t29.textContent = 'Find us on ';
            t30.textContent = ' to know about latest offers OR Join our ';
            t31.textContent = ' group';
            t32.textContent = 'About';
            t33.textContent = 'Delivery';
            t34.textContent = 'Brands';
            t35.textContent = 'Contact';
            t36.textContent = 'Copyright © www.losaromas.ee';
            break;
    }
}


