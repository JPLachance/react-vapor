import {noop} from 'underscore';
import {ISearchBarProps} from '../SearchBar';

export const searchBarPropsScenarios: ISearchBarProps[] = [
    {
        id: 'super-search-bar',
        onSearch: noop,
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        onChange: noop,
        disabled: true,
        searching: false,
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        onChange: noop,
        disabled: false,
        searching: true,
        value: 'txetHcreas',
    },
];

export const searchBarConnectedPropsScenarios: ISearchBarProps[] = [
    {
        id: 'super-search-bar',
        onSearch: noop,
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        onChange: noop,
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        onChange: noop,
    },
];

it('should contain at least one test', () => {
    expect(true).toBe(true); // complains with empty test
});
