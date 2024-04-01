import React, { Component } from 'react';
import "../Style/calendar.css"

function CalendarDays(props) {
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }
    
        let calendarDay = {
          currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
          date: (new Date(firstDayOfMonth)),
          month: firstDayOfMonth.getMonth(),
          number: firstDayOfMonth.getDate(),
          selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
          year: firstDayOfMonth.getFullYear()
        }
    
        currentDays.push(calendarDay);
      }

    return (
        <div className="table-content">
            {
                currentDays.map((day) => {
                    return (
                        <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                            onClick={() => props.changeCurrentDay(day)}>
                            <p>{day.number}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default class Calendar extends Component {
    constructor() {
        super();

        this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

        this.state = {
            currentDay: new Date()
        }
    }

    changeCurrentDay = (day) => {
        this.setState({ currentDay: new Date(day.year, day.month, day.number) });
    }

    render() {
        return (
            <div className="calendar">
                <div className="calendar-header">
                    <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
                </div>
                <div className="calendar-body">
                    <div className="table-header">
                        {
                            this.weekdays.map((weekday) => {
                                return <div className="weekday"><p>{weekday}</p></div>
                            })
                        }
                    </div>
                    <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} />
                </div>
            </div>
        )
    }
}