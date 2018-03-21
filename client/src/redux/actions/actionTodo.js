// @flow

// onItemAdd處理產生'ADD_ITEM'的動作物件，注意傳入參數是payload
export const onItemAdd = payload => ({ type: "ADD_ITEM", payload });

// onItemDel處理產生'DEL_ITEM'的動作物件，注意傳入參數是id
export const onItemDel = id => ({ type: "DEL_ITEM", id });


