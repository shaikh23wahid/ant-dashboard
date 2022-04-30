// import moxios from 'moxios';
// import * as React from 'react'; 
// import * as ReactTestRenderer from 'react-test-renderer';
// import Login from '../src/components/Login/Login';
// jest.mock('axios')

const { add, devide, loginUser } = require('./calculation');

describe('add() test', () => {
    test('add(1,2) to be 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('devide(8, 2) to be 4', () => {
        expect(devide(8, 2)).toBe(4);
    });

    test('loginUser should return data', async () => {
        global.fetch = jest.fn(() => Promise.reject(''))
        const payload = {
            username: 'wahid',
            password: 'test123'
        }

        expect(loginUser(payload)).not.toBeUndefined();
    });
})

// describe('Login component', () => {
//     beforeEach(() => {
//         moxios.install();
//     });

//     afterEach(() => {
//         moxios.uninstall();
//     });

//     xtest('Login component should render properly', async () => {
//         const loginPage = ReactTestRenderer.create(
//             <Login />
//         )

//         expect(loginPage.toJSON()).toMatchSnapshot();
//     })
// })