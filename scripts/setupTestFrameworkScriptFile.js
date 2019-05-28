// without this axios+jest cause errors
// https://github.com/axios/axios/issues/1754
// https://stackoverflow.com/questions/42677387/jest-returns-network-error-when-doing-an-authenticated-request-with-axios/43020260#43020260
global.XMLHttpRequest = undefined;
jest.setTimeout(20000);
