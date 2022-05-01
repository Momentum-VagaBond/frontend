import React from "react";
import { Form, Input } from "usetheform";
import Submit from "./NewTripFormSubmit";

export default function NewTripFormPage3({ prevPage, begin, setBegin, end, setEnd, ...props }) {
    return (
    <Form name="dates" {...props}>
        <Input
        type="text"
        label="month-day-year"
        name="begin"
        placeholder="MM-DD-YYYY"
        required value={begin}
    />
        <Input
        type="text"
        label="month-day-year"
        name='end'
        placeholder="MM-DD-YYYY"
        required value={end}
    />

    <button type="button" onClick={prevPage}>
        Previous Page
    </button>
    <Submit type="submit">Submit Wizard</Submit>
    </Form>
);
}