const defaultCurrentTheme = () => (localStorage.currentTheme == null ? localStorage.setItem('currentTheme', '#fff') : 0);
defaultCurrentTheme();

const DARKTHEME = '#43506c';
const LIGHTTHEME = '#fff';

const Icon = {
  change(theme) {
    const iconBtnTheme = document.querySelector('header i');
    if (theme === 'light') {
      iconBtnTheme.classList.add('fa-moon');
      iconBtnTheme.classList.remove('fa-sun');
    }
    if (theme === 'dark') {
      iconBtnTheme.classList.add('fa-sun');
      iconBtnTheme.classList.remove('fa-moon');
    }
  },
};

class Theme {
  constructor(darktheme, lighttheme) {
    this.DARKTHEME = darktheme;
    this.LIGHTTHEME = lighttheme;
  }

  updateUI(theme) {
    const bodyStyle = document.body.style;
    const styles = theme === this.DARKTHEME ? this.dark() : this.light();

    for (let prop in styles) {
      bodyStyle.setProperty(prop, styles[prop]);
    }
  }

  light() {
    const setProperty = {
      '--themeColor': this.LIGHTTHEME,
      '--textColor': '#333',
      '--borderTaskColor': 'rgba(0, 0, 0, 0.1)',
      '--bgColorTaskHover': 'rgba(0, 0, 0, 0.02)',
      '--colorIconTheme': '#43506c',
    };

    Icon.change('light');
    return setProperty;
  }

  dark() {
    const setProperty = {
      '--themeColor': this.DARKTHEME,
      '--textColor': '#fff',
      '--borderTaskColor': 'rgba(255, 255, 255, 0.2)',
      '--bgColorTaskHover': 'rgba(255, 255, 255, 0.02)',
      '--colorIconTheme': 'rgba(255, 255, 255, 0.4)',
    };

    Icon.change('dark');
    return setProperty;
  }
}

const theme = new Theme(DARKTHEME, LIGHTTHEME);
theme.updateUI(localStorage.currentTheme);

const changeThemeBtn = document.querySelector('.changeTheme');
changeThemeBtn.addEventListener('click', () => {
  const currentTheme = localStorage.currentTheme === DARKTHEME ? (localStorage.currentTheme = LIGHTTHEME) : (localStorage.currentTheme = DARKTHEME);

  theme.updateUI(currentTheme);
});
