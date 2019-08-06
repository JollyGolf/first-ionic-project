import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//import { ApolloClient, createNetworkInterface } from 'apollo-client';
//import { SelectPipe } from 'apollo-angular';

// const client = new ApolloClient({
//   link: new HttpLink({ uri: '//localhost:4000/graphql' }),
//   cache: new InMemoryCache()
// });

// export function provideClient(): ApolloClient {
//   return client;
// }

// export function createApollo(httpLink: HttpLink){
//   return {
//   	link: httpLink.create({uri: '//localhost:4000/graphql'}),
//   	cache: new InMemoryCache()
//   };
// }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "//localhost:4000/graphql"
          })
        }
      }, 
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

// uri: "//localhost:4000/graphql"