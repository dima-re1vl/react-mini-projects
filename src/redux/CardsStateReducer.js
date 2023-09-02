let initialState = {
    password: {
        name: "Password Generator",
        link: "/passwordGenerator",
        img: "https://media.wired.com/photos/641e1a1b43ffd37beea02cdf/4:3/w_4497,h_3373,c_limit/Best%20Password%20Managers%20Gear%20GettyImages-1408198405.png",
        description:
            "Welcome to our site for generating personal passwords! Whether you need a strong passcode or a creative security key, our intuitive tool lets you customize length, numbers, symbols, and letters. Ensure your online security with unique passwords easily created here.",
    },
    findPerson: {
        name: 'Find Person',
        link: '/findPerson',
        img: 'https://icon-library.com/images/people-search-icon/people-search-icon-13.jpg',
        description: 'find me'
    }
};

const CardsState = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return {
                ...state
            }
        }
    }
}


export default CardsState;
