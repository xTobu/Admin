const initialState = {
	visibilityFilter: "SHOW_ALL",
	datas: [],
};

export const Message = (state = initialState, action) => {
	switch (action.type) {
		case "Message_DATA_ADD": {
			//Object.assign複製回傳值的state, 合併todos 等於 state.todos 用concat增加一筆
			return Object.assign({}, state, {
				datas: state.datas.concat({
					id: action.payload.id,
					Name: action.payload.Name,
					Tag: action.payload.Tag,
					Text: action.payload.Text,
				}),
			});
		}
		case "Message_DATA_DELETE": {
			// return state.datas.filter(item => item.id !== action.id);

			return Object.assign({}, state, {
				datas: state.datas.filter(item => item.id !== action.id),
			});
		}
		default: {
			return state;
		}
	}
};
