import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController,private router: Router) {}
  searchTerm: string = '';



  dealers: any[] = [
    { name: 'Car Care Point', location: 'Bhiwani, Haryana', imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipP7aIlsmeO8v8LWKEmk8400UTpMwBT2aJo9gXML=s680-w680-h510', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Elite Detailing', location: 'Palampur, Himachal Pradesh', imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPxzRt7KYcB6ZBOBeLiVHXhuGiDzqHc6daM6D3S=s680-w680-h510', latitude: 40.7128, longitude: -74.0060 },
    { name: 'The Car Spa', location: 'Ludhiana, Punjab', imageUrl: 'https://scontent.fidr4-1.fna.fbcdn.net/v/t39.30808-1/301577505_747586160027066_1516854597937158138_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=y5oVakAa2t4Q7kNvgETNyid&_nc_zt=24&_nc_ht=scontent.fidr4-1.fna&_nc_gid=ABj54nEc4hJwb9Pl98NZI-Z&oh=00_AYCVqNSzlgNZAuYjTJZ-3XSHTE-AdjLu9heUqZSuI6Drlg&oe=679D435C', latitude: 34.0522, longitude: -118.2437 },
    { name: 'Final Shine Car Detailing', location: 'Jaipur, Rajasthan', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPVXau3rd4x6t_c6dfmofFTHqM-j3LWYPfQtDZm=w117-h78-n-k-no', latitude: 41.8781, longitude: -87.6298 },
    { name: 'The Detailing Garage', location: 'Aligarh, Uttar Pradesh', imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNxhmhcuhju93jxHMkYWvDPxq9tnrVPIy4fqL49=s680-w680-h510', latitude: 41.8781, longitude: -87.6298 },
    { name: 'Spick N Span Car Care', location: 'Okhla Industrial Estate, New Delhi', imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipM5n6lqkJ4mQj1I0fjFpN3AfjJiktr-O4NhGGSI=s680-w680-h510', latitude: 41.8781, longitude: -87.6298 },
  ];

  filteredDealers: any[] = this.dealers;


  onSearchChange(event: any) {
    const value = event.target.value;
    this.filteredDealers = this.dealers.filter(dealer => {
      return dealer.name.toLowerCase().includes(value.toLowerCase()) || dealer.location.toLowerCase().includes(value.toLowerCase());
    });
  }

  navigateToLocation(dealer: any) {
    // You can navigate to a map or a details page with the location
    alert(`Navigating to ${dealer.location} at coordinates: ${dealer.latitude}, ${dealer.longitude}`);
    // For real implementation, integrate Google Maps or any map service here
  }

  // async ngOnInit() {
  //   await this.photoService.loadSaved();
  // }

  // public async showActionSheet(photo: UserPhoto, position: number) {



  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Photos',
  //     buttons: [{
  //       text: 'Delete',
  //       role: 'destructive',
  //       icon: 'trash',
  //       handler: () => {
  //         this.photoService.deletePicture(photo, position);
  //       }
  //     }, {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         // Nothing to do, action sheet is automatically closed
  //        }
  //     }]
  //   });
  //   await actionSheet.present();



  // }
}
