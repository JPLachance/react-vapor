import moment from 'moment';
import * as React from 'react';
import {IDatePickerState} from '../datePicker';
import {Calendar} from './Calendar';

export interface CountdownProps {
    startDate?: moment.Moment;
    endDate?: moment.Moment;
}

export const Countdown: React.FunctionComponent<CountdownProps> = ({
    startDate = moment(),
    endDate = moment().date(moment().daysInMonth()),
}) => {
    const defaultProps = {
        id: 'countdown-id',
        calendarId: 'countdown-calendar-id',
        isRange: true,
        lowerLimit: startDate.toDate(),
        upperLimit: endDate.toDate(),
    } as IDatePickerState;

    return <Calendar id="countdown-calendar" countdown calendarSelection={[defaultProps]} />;
};
