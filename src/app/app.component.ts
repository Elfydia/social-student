import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navigationBar: NavigationBar,
    private deviceOrientation: DeviceOrientation,
    private navController: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.navigationBar.setUp(true);
      //this.splashScreen.hide();
      
        this.deviceOrientation.getCurrentHeading().then(
          (data: DeviceOrientationCompassHeading) => console.log(data),
          (error: any) => console.log(error)
        );
      
      var subscription = this.deviceOrientation.watchHeading().subscribe(
        (data: DeviceOrientationCompassHeading) => console.log(data)
      );
      subscription.unsubscribe();
      this.platform.backButton.subscribeWithPriority(1, () => {
        this.navController.back();
      })
      
    });
  }
}
