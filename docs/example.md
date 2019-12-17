# Пример оформления статьи
<!-- panels:start -->
<!-- div:title-panel -->
### Раскрытие всех категорий 
<!-- div:left-panel -->
JS-скрипт для автоматического раскрытия всех категории услуг при загрузке виджета.

Алгоритм работы: При загрузке страницы "Выбор услуг" скрипт вызывает событие "клика" на каждую категорию услуг. 

!> **Внимание** Может потребоваться корректировка задержки. Время зависит от количиства категорий и услуг в каждом конкретном филиале.
<!-- div:right-panel -->
```html
 <script>
    window.yclientsApi.onChangeRoute((route) => { 
        open_categories(route);
    });

    function open_categories(route) {
        if (route.includes("service")) {
            setTimeout(() => {
                let elems = document.querySelectorAll(".service-group-header");
                for (let i of elems) i.click();
            }, 1500); //Время задержки
        };
    }
</script>
```
<!-- div:title-panel -->
### Нумерация пунктов меню
<!-- div:left-panel -->
JS-скрипт для нумерации пунктов меню в шагах настройки записи. 
Алгоритм работы: При загрузке страницы скрипт формирует массив из элементов меню и проходит по каждому элементу, добавляя в начало текста нужную цифру 

!> **Внимание** Поменяй ID филиала на свой
<!-- div:right-panel -->
```html
<script>
window.yclientsApi.onChangeRoute((route) => { 
	numMenuItem(route);
});
function numMenuItem(route) {
  if (route == '/company:96457') { //ID филиала
    setTimeout(() => {
      let i = 1; 
      document.querySelectorAll('.main-menu__title').forEach((el) => {
        el.insertAdjacentText('afterbegin', i++ + '. ')
      });
    }, 400);
  }
}
</script>
```
<!-- panels:end -->