import React, {createContext, useContext, useReducer} from 'react';

const DataContext = createContext();

function DataContextProvider({children, initialState, reducer}) {

    return(
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
export {DataContextProvider};

export const useDataValue = () => useContext(DataContext);
