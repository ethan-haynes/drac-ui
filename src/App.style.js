import Radium from 'radium'

export const App = {
  textAlign: 'center'
}

export const AppLogoSpin = Radium.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
}, 'pulse')

export const AppLogo = {
  animation: 'x infinite 20s linear',
  animationName: AppLogoSpin,
  height: 80
}

export const AppHeader = {
  backgroundColor: '#222',
  height: 150,
  padding: 20,
  color: 'white'
}

export const AppTitle = {
  fontSize: '1.5em'
}

export const AppIntro = {
  fontSize: 'large',
  ':hover': {
    background: 'yellow'
  } 
}
