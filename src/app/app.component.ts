import { Component } from '@angular/core';

@Component({
  //selector: 'app-root', ==  index sayfasında <app-root></app-root> şeklinde çağırabilmek için compenenti
  //selector: '.app-root', == index sayfasında <div class="app-root"></div> çağırabilmek için compenenti
  selector: 'app', // == index sayfasında <div id="app-root"></div> çağırabilmek için compenenti
  templateUrl: './app.component.html', //bu sayfadaki verileri alır gibi bi mantık var == template url yerine aşşagıdaki template : olarakda kullanbabilriiz.
  
  //bu şekildede templateUrl içinden eriştiğimiz sayfadaki verileri buradan da verebiliriz. = html sayfasıında bişey yazmasada buradan verdiklerimiz yazar.
  /*template: `  
  <h1>App Compenent</h1>
  <h2>{{title}}</h2>  <!-- app.component.ts içindeki class dan tanımladıgım değere erişiyorum-->
  <h2>{{getTitle() }}</h2> <!-- app.component.ts içindeki class dan tanımladıgım methoda erişiyorum-->
  <p> <!-- tanımlanan nesneye erişim -->
      {{ todoItem.description }}
      {{ todoItem.action}}
  </p>
  `, */
  /*
  template: ` buradaki mantıkda iç içe compenentler kullanacağımızda kullanacaz yoksa bi üstteki gibi sayfa içerisindekileri tepmlatte yazmayı kullanmıyacaz = iç içe compenentler için
  <product></product>
  `, 
 */
  //styleUrls: ['./app.component.css'] // './app.component.css' , ./ diyip aynı dizinde başka bi css dosyasınıda tanımlayabilriz. ./  aynı dizinde arama için = farklı dosya yollarındada aranabilir diye düşünüyorum.
  // herzaman css dosyası vermemiz gerekmez compenente böyle direk css kodlarınıda yazabilirim.  
  styles:[ 
    `
     p{
      color: green;
     }
    `
  ]
})
export class AppComponent {
 title = 'todo app';  // compenent içinde tanımladığımız değişkenler public olarak tanımlanır. ve dışarıdan erişilebilir . = app.comment.html içindem {{title}} == yazarak erişebiliyoruz

 todoItem = { // model tanımlaması yapmadıgımızdan any dir default olarak.  == nesne tanımaldık.
  description: "kahvaltı",
  action : true
 }

 getTitle(){
  return this.title;
 }
}
