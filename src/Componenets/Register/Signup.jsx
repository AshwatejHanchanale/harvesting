import { Box, Button, FormControl, FormErrorMessage, Input, Toast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { signinAction, signupAction } from '../../Redux/Auth/Action'
import { useDispatch, useSelector } from 'react-redux'

const validationShema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "password must be at least 8 characters").required("password is required")
})

export const Signup = () => {
    const initialValues = { email: "", username: "", name: "", password: "" }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store);

    const handleNavigate = () => navigate("/login");
    const handleSubmit = (values, actions) => {
        dispatch(signupAction(values))
        actions.setSubmitting(false);

    };

    useEffect(() => {
        if (auth.signup?.username) {
            // setIsSignup(true);
            navigate("/login")
            Toast({
                title: 'Account created successfully',
                status: 'success',
                duration: 8000,
                isClosable: true,
            })
        }
    }, [auth.signup])



    return (
        <div>
            <div>
                <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <img className='w-40 mb-5' src="https://th.bing.com/th/id/OIP.JcjsRrSBaO2tTFpZGNICXgHaHa?pid=ImgDet&rs=1" alt="" />

                    <Formik initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationShema}
                    >
                        {(formikProps) =>
                            <Form className='space-y-8'>

                                <Field name="email">
                                    {({ field, form }) => <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <Input className="w-full" {...field} id='email' placeholder="Mobile Number or Email">

                                        </Input>
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>}
                                </Field>

                                <Field name="username">
                                    {({ field, form }) => <FormControl isInvalid={form.errors.username && form.touched.username}>
                                        <Input className="w-full" {...field} id='username' placeholder="username">

                                        </Input>
                                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                    </FormControl>}
                                </Field>

                                <Field name="name">
                                    {({ field, form }) => <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <Input className="w-full" {...field} id='name' placeholder="Full name">

                                        </Input>
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>}
                                </Field>


                                <Field name="password">
                                    {({ field, form }) => <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <Input className="w-full" {...field} id='password' placeholder="Password">

                                        </Input>
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>}
                                </Field>

                                <p>By signing up, you agree to out Terms, privacy Policy and Cookies Policy</p>

                                <Button className='w-full' mt={4} colorScheme='blue' type='submit' isLoading={formikProps.isSubmitting}>
                                    Sign Up
                                </Button>
                            </Form>}

                    </Formik>
                </Box>
            </div>
            <div>
                <p>Already have Accont? <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer'>Sign in</span></p>

            </div>
        </div>
    )
}
