import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  static saveToken(token: string): void {
    localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, token);
  }

  static saveUser(user: any): void {
    localStorage.removeItem(USER);
    localStorage.setItem(USER, JSON.stringify(user))
  }

  static getToken() {
    return localStorage.getItem(TOKEN)
  }

  static getUser() {
    return JSON.parse(localStorage.getItem(USER) || '{}');
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) return "";
    return user.role;
  }

  static isAdmin(): boolean {
    if (this.getToken() == null) return false;
    const role = this.getUserRole();
    return role == "ADMIN";
  }

  static isUser(): boolean {
    if (this.getToken() == null) return false;
    const role = this.getUserRole();
    return role == "USER";
  }

  static logout(): void {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
  }
}
