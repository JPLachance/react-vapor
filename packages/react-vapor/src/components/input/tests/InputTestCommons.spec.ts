import {IInputProps} from '../Input';

export const inputProps: IInputProps = {
    id: 'test-input',
    type: 'text',
};

export const inputPossibleProps: IInputProps[] = [
    {
        id: 'test-input',
        type: 'text',
    },
    {
        id: 'test-input',
        type: 'text',
        classes: 'awesome classes',
        innerInputClasses: ['other', 'classes'],
    },
    {
        id: 'test-input',
        type: 'text',
        defaultValue: 'default',
        classes: 'awesome classes',
        innerInputClasses: ['other', 'classes'],
    },
    {
        id: 'test-input',
        type: 'text',
        defaultValue: 'default',
        classes: 'awesome classes',
        innerInputClasses: ['other', 'classes'],
        placeholder: 'i am a placeholder',
        readOnly: true,
    },
    {
        id: 'test-input',
        type: 'text',
        defaultValue: 'default',
        classes: 'awesome classes',
        innerInputClasses: ['other', 'classes'],
        placeholder: 'i am a placeholder',
        validate: (value: string) => !!value,
    },
    {
        id: 'test-input',
        type: 'text',
        defaultValue: 'default',
        classes: 'awesome classes',
        innerInputClasses: ['other', 'classes'],
        placeholder: 'i am a placeholder',
        validate: (value: string) => !!value,
        labelTitle: 'I am a label',
        labelProps: {invalidMessage: 'do not leave me empty'},
    },
    {
        id: 'test-input',
        type: 'text',
        defaultValue: 'default',
        classes: 'awesome classes',
        innerInputClasses: ['other', 'classes'],
        placeholder: 'i am a placeholder',
        validate: (value: string) => !!value,
        labelTitle: 'I am a label',
        labelProps: {invalidMessage: 'do not leave me empty'},
        validateOnChange: true,
    },
    {
        id: 'test-input',
        type: 'text',
        defaultValue: 'default',
        classes: 'awesome classes',
        innerInputClasses: ['other', 'classes'],
        placeholder: 'i am a placeholder',
        validate: (value: string) => !!value,
        labelTitle: 'I am a label',
        labelProps: {invalidMessage: 'do not leave me empty'},
        validateOnChange: true,
        disabledOnMount: true,
        validateOnMount: true,
    },
];

it('should contain at least one test', () => {
    expect(true).toBe(true); // complains with empty test
});
