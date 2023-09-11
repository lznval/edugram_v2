import React, {useState} from 'react';
import {Button, Form, FormContainer, FormField, Input, Label, Select} from "./style";

interface FormWidgetProps {
    backgroundColor: string;
    buttonColor: string;
    textColor: string;
}

interface DataProps {
    subject: string;
    email: string;
    selectedSubject: string;
}

const FormWidget: React.FC<FormWidgetProps> = ({
                                                   backgroundColor,
                                                   buttonColor,
                                                   textColor,
                                               }) => {
    const [formData, setFormData] = useState<DataProps>({
        subject: '',
        email: '',
        selectedSubject: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <FormContainer backgroundColor={backgroundColor}>
            <h2>Form Widget</h2>
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <Label textColor={textColor} htmlFor="subject">
                        Subject:
                    </Label>
                    <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                </FormField>
                <FormField>
                    <Label textColor={textColor} htmlFor="email">
                        Email:
                    </Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </FormField>
                <FormField>
                    <Label textColor={textColor} htmlFor="selectedSubject">
                        Select Subject:
                    </Label>
                    <Select
                        id="selectedSubject"
                        name="selectedSubject"
                        value={formData.selectedSubject}
                        onChange={handleInputChange}
                    >
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                    </Select>
                </FormField>
                <Button backgroundColor={buttonColor} type="submit">
                    Submit
                </Button>
            </Form>
        </FormContainer>
    );
};

export default FormWidget;
