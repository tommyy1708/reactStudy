const defaultState = {
    num:0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    //深拷贝
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case "add_one":
            newState.num+= action.num
            break;
        default:
            break;
    }
    return newState;
}