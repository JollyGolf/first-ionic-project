import { Injectable } from '@angular/core';
//import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor() { }

  // encryptData(data) {
  //   return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
  // }

  // decryptData(data) {
  //   const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
  //     return bytes.toString() 
  //       ? JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  //       : data
  // }
}
