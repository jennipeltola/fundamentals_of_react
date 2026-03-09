import styles from './Item.module.css'

const App = () => {
  return (
    <StyledBox />
  )
}

const inlineStyle = { fontSize: '16px', fontFamily: 'Arial' }

const StyledBox = () => {
  return (
    <div className={styles.box} style={inlineStyle}>
    Styles combined
    </div>
  )
}

export default App