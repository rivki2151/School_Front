import { createAsyncThunk } from "@reduxjs/toolkit";

export const addStudentThunk = createAsyncThunk(
    'addStudentThunk',
    async (student) => {
        const response = await fetch('https://localhost:7231/api/Student/AddStudent',
            {
                method: 'POST',
                body: JSON.stringify(student),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;

    }
)