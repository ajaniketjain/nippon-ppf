import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductDetailModalComponent } from './product-detail/product-detail.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  // Example JSON product data
  products = [
    { id: 1, name: 'n-Shield CrystalGuard Pro 10M', description: 'Experience the epitome of luxury and innovation with our high-end matte finish Paint Protection Film, meticulously crafted to transform and preserve your vehicles aesthetic allure. This premium film delivers an exquisite satin sheen that exudes sophistication, while its advanced protective technology creates an impenetrable barrier against scratches, chips, and environmental damage. Engineered for perfection, it combines seamless application with self-healing capabilities, ensuring your vehicle maintains its flawless matte appearance over time. Resistant to stains, UV damage, and harsh elements, this film not only safeguards your investment but enhances its bold, modern character. Redefine elegance and protection with a finish that commands attention at every turn.', finish: 'Matte', durability: '10 Years', price: '12000' },
    { id: 2, name: 'n-Shield CrystalGuard Pro 10G', description: 'Indulge in the brilliance of our high-end glossy finish Paint Protection Film, the ultimate fusion of luxury, durability, and artistry. Designed for those who demand perfection, this premium film enhances your vehicles natural gloss with a mirror-like finish that radiates sophistication and depth. Its cutting-edge technology creates an invisible armor, shielding your paintwork from scratches, chips, and environmental wear, while self-healing properties ensure a flawless surface that endures the test of time. Resistant to discoloration, stains, and UV damage, this film preserves your vehicle’s showroom shine with effortless elegance. Elevate your driving experience with a glossy finish that captivates, protects, and sets your car apart as a masterpiece on the road.', finish: 'Gloss', durability: '10 Years', price: '10000' },
    { id: 3, name: 'n-Shield CrystalGuard Advance 7M', description: 'Elevate your vehicles style and protection with our Advance matte finish Paint Protection Film, designed to offer a refined blend of elegance and practicality. This versatile film delivers a sleek satin finish that transforms your vehicle’s appearance with a contemporary, understated look. Engineered with reliable protective technology, it defends against everyday hazards like scratches, chips, and minor abrasions, ensuring your paint remains pristine. Durable and easy to maintain, this film resists stains, UV damage, and environmental wear, making it a smart choice for enhancing your vehicle’s durability and aesthetic appeal. Discover the perfect balance of quality and sophistication with a matte finish that adds a touch of modern charm to every drive.', finish: 'Matte', durability: '7 Years', price: '8000' },
    { id: 4, name: 'n-Shield CrystalGuard Advance 7G', description: 'Unleash a radiant shine with our Advance glossy finish Paint Protection Film, expertly crafted to safeguard and enhance your vehicles exterior. Delivering a high-definition gloss, this film accentuates the natural beauty of your paint while providing dependable protection against road hazards and environmental elements. Its resilient design with self-healing and hydrophobic qualities ensures your car maintains its striking finish, offering an ideal balance of durability, ease of maintenance, and sophistication.', finish: 'Gloss', durability: '7 Years', price: '7000' },
    { id: 5, name: 'n-Shield CrystalGuard Lite 5G', description: 'Discover value and shine with our Lite glossy finish Paint Protection Film, designed to deliver protection with a polished aesthetic. The film enhances your car’s paint with a smooth, glossy finish while offering defense against common hazards like dust, debris, and minor abrasions. A practical and economical choice, this film provides an easy way to maintain your car’s shine and style while offering self-healing and hydrophobic features.', finish: 'Gloss', durability: '5 Years', price: '6000' },
    { id: 6, name: 'n-Shield CrystalGuard Color', description: 'Transform and protect your vehicle with our revolutionary colored Paint Protection Film, a perfect fusion of bold style and advanced defense. Available in an array of vibrant and dynamic hues, this film allows you to express your personality while safeguarding your car’s exterior. Engineered with cutting-edge technology, it delivers superior protection against scratches, chips, and environmental elements, all while maintaining a flawless finish. Whether you choose a striking metallic shade or a subtle satin tone, this film enhances your vehicle’s aesthetic and sets it apart with a touch of unique brilliance.', finish: 'Color', durability: '', price: '5000' }
  ];

  constructor(private modalController: ModalController) { }

  async openProductDetail(product) {
    const modal = await this.modalController.create({
      component: ProductDetailModalComponent,
      componentProps: { product }
    });
    return await modal.present();
  }

}
