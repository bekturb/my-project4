
// const initialState = {
//     money:0
// }
//

const myList = {
    balance: 1000,
    spendMoney: 0,
}


export const Reducer = (state = myList, actions) => {
//
//
//     switch (actions.type){
//         case "Add money" :
//             return {...state, money: state.money + actions.payload}
//         case "Take money" :
//             return  {...state, money: state.money - actions.payload}
//         default :
//             return state
//     }


    switch (actions.type){
        case 'Minus' :
            return {...state, balance: state.balance  < actions.payload ? 'Sizdin balansynyzda karajat jetishsiz' : state.balance - actions.payload, spendMoney : state.balance < actions.payload ? state.spendMoney : state.spendMoney  + actions.payload}
        default : return  state
    }
}