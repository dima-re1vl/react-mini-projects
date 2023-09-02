const SET_UPPERS = 'SET_UPPERS'
const SET_LOWERS = 'SET_LOWERS'
const SET_SYMBOLS = 'SET_SYMBOLS'
const SET_NUMBERS = 'SET_NUMBERS'
const SET_LENGTH = 'SET_LENGTH'
const GENERATE_PASSWORD = 'GENERATE_PASSWORD'

let initialState = {
    name: 'Password Generator',
    uppers: true,
    lowers: true,
    symbols: true,
    numbers: true,
    passLength: 4,
    password: 'Click Generate'
}

const generate = (props) => {
    if (props.passLength > 20 || props.passLength <= 0) {
        return '0_o'
    }
    let res = '';
    let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowers = 'abcdefghijklmnopqrstuvwxyz'
    let symbols = '!@#$%^&*()_+='
    let numbers = '1234567890'
    let arr = []
    if (props.uppers) {
        arr.push(uppers)
    }
    if (props.lowers) {
        arr.push(lowers)
    }
    if (props.symbols) {
        arr.push(symbols)
    }
    if (props.numbers) {
        arr.push(numbers)
    }
    for (let i = 0; i < props.passLength; i++) {
        const randomType = arr[Math.floor(Math.random() * arr.length)];
        const randomValue = randomType[Math.floor(Math.random() * randomType.length)];
        res += randomValue;
    }
    return res
}

const PasswordGeneratorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UPPERS: {
            return {
                ...state,
                uppers: !state.uppers
            }
        }
        case SET_LOWERS: {
            return {
                ...state,
                lowers: !state.lowers
            }
        }
        case SET_NUMBERS: {
            return {
                ...state,
                numbers: !state.numbers
            }
        }
        case SET_SYMBOLS: {
            return {
                ...state,
                symbols: !state.symbols
            }
        }

        case SET_LENGTH: {
            return {
                ...state,
                passLength: action.passLength
            }
        }

        case GENERATE_PASSWORD: {
            return {
                ...state,
                password: generate(state)
            }
        }
        default: {
            return { ...state }
        }
    }
}

export const setUppers = () => ({
    type: SET_UPPERS,
});

export const setLowers = () => ({
    type: SET_LOWERS,
});

export const setNumbers = () => ({
    type: SET_NUMBERS,
});

export const setSymbols = () => ({
    type: SET_SYMBOLS,
});

export const setLength = (passLength) => ({
    type: SET_LENGTH,
    passLength
});

export const generatePassword = () => ({
    type: GENERATE_PASSWORD
})



export default PasswordGeneratorReducer;
