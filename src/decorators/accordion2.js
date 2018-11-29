import React from 'react'

export default (OriginalComponent) =>
  class Accordion2Components extends React.Component {
    state = {
      isOpen: false
    }

    toggleAccordion = () =>
      this.setState((state) => {
        return {
          isOpen: !state.isOpen
        }
      })

    render() {
      const { isOpen } = this.state
      return <OriginalComponent {...this.props} isOpen={isOpen} expand={this.toggleAccordion} />
    }
  }
