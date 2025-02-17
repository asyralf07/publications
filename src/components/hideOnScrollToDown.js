import React from "react"
import PropTypes from "prop-types"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"

function HideOnScrollToDown(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScrollToDown.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HideOnScrollToDown
