import {IReactVaporState} from '../../../ReactVaporState';
import {FilepickerSelectors} from '../FilepickerSelectors';

describe('FilepickerSelectors', () => {
    describe('getFile', () => {
        // This selector cannot be tested, because for security reasons the browser won't allow to select a file programmatically.
    });

    describe('isEmpty', () => {
        it('should return undefined if no filepicker match the specified id', () => {
            expect(FilepickerSelectors.isEmpty({filepickers: {}} as IReactVaporState, {id: '📜'})).toBeUndefined();
            expect(
                FilepickerSelectors.isEmpty(
                    {filepickers: {'🍩': {id: '🍩', isEmpty: true, selectedFile: null}}} as IReactVaporState,
                    {id: '📜'}
                )
            ).toBeUndefined();
        });

        it('should return true if no file is selected in the filepicker at the specified id', () => {
            expect(
                FilepickerSelectors.isEmpty(
                    {
                        filepickers: {
                            '🍩': {id: '🍩', isEmpty: true, selectedFile: null},
                            '📜': {id: '📜', isEmpty: true, selectedFile: null},
                        },
                    } as IReactVaporState,
                    {id: '📜'}
                )
            ).toBe(true);
        });

        it('should return false if a file is selected in the file picker at the specified id', () => {
            expect(
                FilepickerSelectors.isEmpty(
                    {
                        filepickers: {
                            '🍩': {id: '🍩', isEmpty: true, selectedFile: null},
                            '📜': {
                                id: '📜',
                                isEmpty: false,
                                selectedFile: {
                                    name: 'whatever',
                                    size: 12,
                                    type: 'text/plain',
                                    lastModified: new Date().valueOf(),
                                },
                            },
                        },
                    } as IReactVaporState,
                    {id: '📜'}
                )
            ).toBe(false);
        });
    });

    describe('getFileMetadata', () => {
        it('should return undefined if no filepicker match the specified id', () => {
            expect(
                FilepickerSelectors.getFileMetadata({filepickers: {}} as IReactVaporState, {id: '📜'})
            ).toBeUndefined();

            expect(
                FilepickerSelectors.getFileMetadata(
                    {filepickers: {'🍩': {id: '🍩', isEmpty: true, selectedFile: null}}} as IReactVaporState,
                    {id: '📜'}
                )
            ).toBeUndefined();
        });

        it('should return null if there is no file selected in the filepicker at the specified id', () => {
            expect(
                FilepickerSelectors.getFileMetadata(
                    {
                        filepickers: {
                            '🍩': {id: '🍩', isEmpty: true, selectedFile: null},
                            '📜': {id: '📜', isEmpty: true, selectedFile: null},
                        },
                    } as IReactVaporState,
                    {id: '📜'}
                )
            ).toBeNull();
        });

        it('should return the file metadata if a file is selected in the file picker at the specified id', () => {
            const fileMetaData = {
                name: 'whatever',
                size: 12,
                type: 'text/plain',
                lastModified: new Date().valueOf(),
            };

            expect(
                FilepickerSelectors.getFileMetadata(
                    {
                        filepickers: {
                            '🍩': {id: '🍩', isEmpty: true, selectedFile: null},
                            '📜': {
                                id: '📜',
                                isEmpty: false,
                                selectedFile: fileMetaData,
                            },
                        },
                    } as IReactVaporState,
                    {id: '📜'}
                )
            ).toEqual(fileMetaData);
        });
    });
});
