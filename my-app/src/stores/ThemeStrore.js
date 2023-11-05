import { makeAutoObservable } from 'mobx';

class ThemeStore {
  themeColor = '';

  constructor() {
    makeAutoObservable(this);
  }

  setThemeColor = (value) => {
    this.themeColor = value;
  };

  getThemeColor() {
    return this.themeColor;
  }
}

const themeStore = new ThemeStore();

export default themeStore;
