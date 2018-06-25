import jest from 'jest';

jest.mock('../store/store', () => jest.fn(() => ({ storeKey: 'storeValue' }) ));
