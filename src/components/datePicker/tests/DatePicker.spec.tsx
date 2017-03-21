import { shallow, mount, ReactWrapper } from 'enzyme';
import { IDatePickerProps, DatePicker, DEFAULT_DATE_PICKER_COLOR } from '../DatePicker';
import { DateLimits } from '../DatePickerActions';
import { DateUtils } from '../../../utils/DateUtils';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Date picker', () => {
  const DATE_PICKER_BASIC_PROPS: IDatePickerProps = {
    onChange: jasmine.createSpy('onChange'),
    onClick: jasmine.createSpy('onClick'),
    placeholder: 'Pick a date'
  };

  describe('<DatePicker />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <DatePicker {...DATE_PICKER_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<DatePicker />', () => {
    let datePicker: ReactWrapper<IDatePickerProps, any>;
    let datePickerInstance: DatePicker;

    beforeEach(() => {
      datePicker = mount(
        <DatePicker {...DATE_PICKER_BASIC_PROPS} />,
        { attachTo: document.getElementById('App') }
      );
      datePickerInstance = datePicker.instance() as DatePicker;
    });

    afterEach(() => {
      datePicker.unmount();
      datePicker.detach();
    });

    it('should get what to do on change as a prop', () => {
      let onChangeProp = datePicker.props().onChange;

      expect(onChangeProp).toBeDefined();
    });

    it('should display a <SetToNowButton /> component if hasSetToNowButton prop is set to true', () => {
      let propsWithButton: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { hasSetToNowButton: true });

      expect(datePicker.find('SetToNowButton').length).toBe(0);

      datePicker.setProps(propsWithButton);

      expect(datePicker.find('SetToNowButton').length).toBe(1);
    });

    it('should display an <input /> element', () => {
      expect(datePicker.find('input').length).toBe(1);
    });

    it('should have a class "border-COLOR_PROP" on the input or "border-DEFAULT_COLOR" if the color prop is not set',
      () => {
        let propsWithColor: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { color: 'blood' });

        expect(datePicker.find('input').hasClass(`border-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(true);

        datePicker.setProps(propsWithColor);

        expect(datePicker.find('input').hasClass(`border-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);
        expect(datePicker.find('input').hasClass(`border-${propsWithColor.color}`)).toBe(true);
      });

    it('should have the class "picking-date" on the input if the picker is the lower limit and the lower limit is ' +
      'being selected or if the picker is the upper limit and the upper limit is being selected', () => {
        let newProps: IDatePickerProps;

        expect(datePicker.find('input').hasClass('picking-date')).toBe(false);

        newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { isSelecting: DateLimits.lower, upperLimit: false });
        datePicker.setProps(newProps);
        expect(datePicker.find('input').hasClass('picking-date')).toBe(true);

        newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { isSelecting: DateLimits.upper, upperLimit: false });
        datePicker.setProps(newProps);
        expect(datePicker.find('input').hasClass('picking-date')).toBe(false);

        newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { isSelecting: DateLimits.upper, upperLimit: true });
        datePicker.setProps(newProps);
        expect(datePicker.find('input').hasClass('picking-date')).toBe(true);

        newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { isSelecting: DateLimits.lower, upperLimit: true });
        datePicker.setProps(newProps);
        expect(datePicker.find('input').hasClass('picking-date')).toBe(false);
      });

    it('should have the classes "date-picked" and "bg-COLOR_PROP" or "bg-DEFAULT_COLOR" on the input if we are not' +
      ' selecting the picker and there is a date set in the input', () => {
        let newProps: IDatePickerProps;

        expect(datePicker.find('input').hasClass('date-picked')).toBe(false);
        expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);

        newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { date: new Date() });
        datePicker.setProps(newProps);
        expect(datePicker.find('input').hasClass('date-picked')).toBe(true);
        expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(true);

        newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { date: new Date(), color: 'white' });
        datePicker.setProps(newProps);
        expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);
        expect(datePicker.find('input').hasClass(`bg-${newProps.color}`)).toBe(true);

        newProps =
          _.extend({}, DATE_PICKER_BASIC_PROPS, { date: new Date(), isSelecting: DateLimits.lower, upperLimit: false });
        datePicker.setProps(newProps);
        expect(datePicker.find('input').hasClass('date-picked')).toBe(false);
        expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);
      });

    it('should call setToToday when clicking the set to now button', () => {
      let withButtonProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { hasSetToNowButton: true });
      let setToNowSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'setToToday');
      datePicker.setProps(withButtonProps);

      datePicker.find('button').simulate('click');

      expect(setToNowSpy).toHaveBeenCalled();
    });

    it('should change the input value to the current time when calling setToToday and withTime prop is set to true',
      () => {
        let expectedDate: Date = new Date();
        let withTimeProps: IDatePickerProps =
          _.extend({}, DATE_PICKER_BASIC_PROPS, { withTime: true, hasSetToNowButton: true });
        datePicker.setProps(withTimeProps);

        expect(datePickerInstance['dateInput'].value).toBe('');

        jasmine.clock().install();
        jasmine.clock().mockDate(expectedDate);
        datePicker.find('button').simulate('click');

        expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getDateWithTimeString(expectedDate));
        jasmine.clock().uninstall();
      });

    it('should change the input value to the current day when calling setToToday and withTime prop is set to false',
      () => {
        let expectedDate: Date = new Date();
        let withoutTimeProps: IDatePickerProps =
          _.extend({}, DATE_PICKER_BASIC_PROPS, { withTime: false, hasSetToNowButton: true });
        datePicker.setProps(withoutTimeProps);

        expect(datePickerInstance['dateInput'].value).toBe('');

        jasmine.clock().install();
        jasmine.clock().mockDate(expectedDate);
        datePicker.find('button').simulate('click');

        expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(expectedDate));
        jasmine.clock().uninstall();
      });

    it('should call handleChange when calling setToToday', () => {
      let withButtonProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { hasSetToNowButton: true });
      let handleChangeSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChange');
      datePicker.setProps(withButtonProps);

      datePicker.find('button').simulate('click');

      expect(handleChangeSpy).toHaveBeenCalled();
    });

    it('should call onChange prop on handleChange only if the input value is a valid date', () => {
      let onChangeSpy = jasmine.createSpy('newSpy');
      let simpleDate: string = DateUtils.getSimpleDate(new Date());
      let newOnChangeSpyProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { onChange: onChangeSpy });
      datePicker.setProps(newOnChangeSpyProps);

      datePickerInstance['dateInput'].value = 'this is not a date!';
      datePickerInstance['handleChange'].call(datePickerInstance);

      expect(onChangeSpy).not.toHaveBeenCalled();

      datePickerInstance['dateInput'].value = simpleDate;
      datePickerInstance['handleChange'].call(datePickerInstance);

      expect(onChangeSpy).toHaveBeenCalled();
    });

    it('should call the onChange prop with a simple date if withTime prop is set to false', () => {
      let simpleDate: string = DateUtils.getSimpleDate(new Date());

      datePickerInstance['dateInput'].value = simpleDate;
      datePickerInstance['handleChange'].call(datePickerInstance);

      expect(DATE_PICKER_BASIC_PROPS.onChange).toHaveBeenCalledWith(DateUtils.getDateFromSimpleDateString(simpleDate),
        DATE_PICKER_BASIC_PROPS.upperLimit);
    });

    it('should call the onChange prop with a full date if withTime prop is set to true', () => {
      let fullDate: string = DateUtils.getDateWithTimeString(new Date());
      let withTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { withTime: true });
      datePicker.setProps(withTimeProps);

      datePickerInstance['dateInput'].value = fullDate;
      datePickerInstance['handleChange'].call(datePickerInstance);

      expect(withTimeProps.onChange).toHaveBeenCalledWith(DateUtils.getDateFromTimeString(fullDate),
        withTimeProps.upperLimit);
    });

    it('should change the value of the date input when passing it a new date as prop that is different than the ' +
      'current one', () => {
        let newDate: Date = new Date();
        let dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { date: newDate });
        datePicker.setProps(dateProps);

        expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(newDate));

        dateProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { date: newDate, withTime: true });
        datePicker.setProps(dateProps);

        expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(newDate));

        newDate = new Date(newDate.setHours(2, 2, 2, 2));
        dateProps = _.extend({}, DATE_PICKER_BASIC_PROPS, { date: newDate, withTime: true });
        datePicker.setProps(dateProps);

        expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getDateWithTimeString(newDate));
      });

    it('should call onClick prop with whether or not the date picker is for the upper limit on input click', () => {
      datePicker.find('input').simulate('click');

      expect(DATE_PICKER_BASIC_PROPS.onClick).toHaveBeenCalledWith(DATE_PICKER_BASIC_PROPS.upperLimit);
    });

    it('should call handleChange on input change', () => {
      let handleChangeSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChange');

      datePicker.find('input').simulate('change');

      expect(handleChangeSpy).toHaveBeenCalled();
    });
  });
});
