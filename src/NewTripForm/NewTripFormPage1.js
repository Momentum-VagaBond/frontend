import React from "react";
import { Form, Input } from "usetheform";

export default function NewTripFormPage1(props, title) {
    
    return (
    <Form name="title" {...props}>
        <Input
        type="text"
        label="Title"
        name="title"
        placeholder="Trip Title"
        required value={title}
    />
        <button type="submit">Next Page</button>
    </Form>
);
}