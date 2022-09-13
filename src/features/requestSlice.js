import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    requests: [],
}

export const fetchRequest = createAsyncThunk('request/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3013/requests');
        const data = res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const addRequest = createAsyncThunk(
    'add/request',
    async ({ name, number, address, id }, thunkAPI) => {
        console.log(name, number, address, id);
        try {
            const res = await fetch('http://localhost:3013/request', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ yourName: name, yourAddress: address, phoneNumber: number, workDescription: id })
            })

            const request = await res.json()

            return request;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const requestSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRequest.fulfilled, (state, action) => {
                state.requests = action.payload;
            })
            .addCase(addRequest.fulfilled, (state, action) => {
                state.requests.push(action.payload)
            })
    }
});

export default requestSlice.reducer;