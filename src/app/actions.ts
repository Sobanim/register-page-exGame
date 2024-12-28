'use server';

import { z } from 'zod';


const schema = z.object({
    userId: z.string().min(1, 'User ID is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    accountName: z.string().min(3, 'Account Name is required'),
    email: z.string().email('Invalid email'),
    verificCode: z.string().min(3, 'Verification code is required'),
    terms: z.literal(true, {
        errorMap: () => ({ message: 'You must accept Terms of Service' }),
    }),
    privacy: z.literal(true, {
        errorMap: () => ({ message: 'You must accept Privacy Policy' }),
    }),
    promotional: z.boolean().optional(),
})

type FormState = {
    message?: string;
    errors?: {
        [key: string]: string[];
    };
};

export default async function validateForm(prevState: FormState, formData: FormData) {
    const rawData = {
        userId: formData.get('userId'),
        password: formData.get('password'),
        accountName: formData.get('accountName'),
        email: formData.get('email'),
        verificCode: formData.get('verificCode'),
        terms: formData.get('terms') === 'on',
        privacy: formData.get('privacy') === 'on',
        promotional: formData.get('promotional') === 'on',
    };

    console.log('Raw form data:', rawData);

    const result = schema.safeParse(rawData);

    if (!result.success) {
        // transform zod errors to a more user-friendly format
        const errors: { [key: string]: string[] } = {};
        result.error.issues.forEach((issue) => {
            const field = issue.path[0].toString();
            if (!errors[field]) {
                errors[field] = [];
            }
            errors[field].push(issue.message);
        });

        return {
            message: 'Validation failed',
            errors,
        };
    }

    try {
        // logic to handle form submission
        console.log('Validated data:', result.data);

        return {
            message: 'Registration successful!',
        };
    } catch (error) {
        return {
            message: 'An error occurred during registration',
        };
    }
}