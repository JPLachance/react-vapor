import { IReduxAction } from '../../../utils/ReduxUtils';
import {
  DatePickerActions,
  addDatePicker,
  removeDatePicker,
  resetDatePickers,
  applyDatePicker,
  changeDatePickerLowerLimit,
  changeDatePickerUpperLimit, DateLimits, selectDate
} from '../DatePickerActions';
import { DEFAULT_DATE_PICKER_COLOR } from '../DatePicker';
import { IAddDatePickerPayload, IDatePickerPayload, IChangeDatePickerPayload, ISelectDatePickerPayload } from '../DatePickerActions';

describe('Date picker', () => {

  describe('DatePickerActions', () => {

    const DATE_PICKER_ID: string = 'date-picker';
    const COLOR: string = 'gray';
    const CALENDAR_ID: string = 'calendar-666';
    const IS_RANGE: boolean = true;

    it('should create an action to add the date picker', () => {
      let expectedAction: IReduxAction<IAddDatePickerPayload> = {
        type: DatePickerActions.add,
        payload: {
          id: DATE_PICKER_ID,
          color: COLOR,
          calendarId: CALENDAR_ID,
          isRange: IS_RANGE,
          rangeLimit: undefined,
        }
      };

      expect(addDatePicker(DATE_PICKER_ID, IS_RANGE, undefined, COLOR, CALENDAR_ID)).toEqual(expectedAction);
    });

    it('should create an action to add the date picker with default values if the color or the calendar id are not defined', () => {
      let expectedAction: IReduxAction<IAddDatePickerPayload> = {
        type: DatePickerActions.add,
        payload: {
          id: DATE_PICKER_ID,
          color: DEFAULT_DATE_PICKER_COLOR,
          calendarId: '',
          isRange: IS_RANGE,
          rangeLimit: undefined,
        }
      };

      expect(addDatePicker(DATE_PICKER_ID, IS_RANGE, undefined)).toEqual(expectedAction);
    });

    it('should create an action to remove the date picker', () => {
      let expectedAction: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.remove,
        payload: {
          id: DATE_PICKER_ID
        }
      };

      expect(removeDatePicker(DATE_PICKER_ID)).toEqual(expectedAction);
    });

    it('should create an action to reset the date pickers', () => {
      let expectedAction: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.reset,
        payload: {
          id: DATE_PICKER_ID
        }
      };

      expect(resetDatePickers(DATE_PICKER_ID)).toEqual(expectedAction);
    });

    it('should create an action to apply the date picker', () => {
      let expectedAction: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.apply,
        payload: {
          id: DATE_PICKER_ID
        }
      };

      expect(applyDatePicker(DATE_PICKER_ID)).toEqual(expectedAction);
    });

    it('should create an action to change the lower limit of the date picker', () => {
      let expectedDate: Date = new Date();
      let expectedAction: IReduxAction<IChangeDatePickerPayload> = {
        type: DatePickerActions.changeLowerLimit,
        payload: {
          id: DATE_PICKER_ID,
          date: expectedDate
        }
      };

      expect(changeDatePickerLowerLimit(DATE_PICKER_ID, expectedDate)).toEqual(expectedAction);
    });

    it('should create an action to change the upper limit of the date picker', () => {
      let expectedDate: Date = new Date();
      let expectedAction: IReduxAction<IChangeDatePickerPayload> = {
        type: DatePickerActions.changeUpperLimit,
        payload: {
          id: DATE_PICKER_ID,
          date: expectedDate
        }
      };

      expect(changeDatePickerUpperLimit(DATE_PICKER_ID, expectedDate)).toEqual(expectedAction);
    });

    it('should create an action to select a limit of the date picker', () => {
      let expectedAction: IReduxAction<ISelectDatePickerPayload> = {
        type: DatePickerActions.select,
        payload: {
          id: DATE_PICKER_ID,
          limit: DateLimits.lower
        }
      };

      expect(selectDate(DATE_PICKER_ID, DateLimits.lower)).toEqual(expectedAction);
    });
  });
});
