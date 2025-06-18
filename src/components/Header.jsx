import PropTypes from 'prop-types'

function Header({text = "Feedback UI", bgColor = 'rgba(218, 27, 27, 0.4)', textColor = 'blue'}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}


export default Header
