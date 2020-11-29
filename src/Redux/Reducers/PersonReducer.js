const ADD_DECLARATION = 'ADD_DECLARATION';

let initialState = {
    data: []
}

export const personReducer = (_state = initialState, aciton) => {

    switch (aciton.type) {
        case ADD_DECLARATION:
            // let newDeclaration = {
            //     name: '',
            //     ncea: '',
            //     amount: 0
            // };

            // _state.declarations.push(newDeclaration);
            // _state.newDeclarationText = '';
            return _state;

        default:
            return _state;
    }
}