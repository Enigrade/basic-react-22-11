import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }

    return (
      <DayPicker
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={this.handleDayClick}
      />
    )
  }
}

export default Calendar
