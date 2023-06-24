import { Box, Button, FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { signinAction } from '../../Redux/Auth/Action';
import { getUserProfileAction } from '../../Redux/User/Action';

const validationShema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "password must be at least 8 characters").required("password is required")
})

export const Signin = () => {
    const initialValues = { email: "", password: "" };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(store => store);
    const toast = useToast();

    const token = localStorage.getItem("token");
    console.log("token in signin page ", token)
    console.log("reqUser -: ", user);
    useEffect(() => {
        if (token) dispatch(getUserProfileAction(token || Signin));
    }, [Signin, token]);

    useEffect(() => {
        if (user?.reqUser?.username && token) {
            navigate(`/${user.reqUser?.username}`);
            toast({
                title: "signin successfull",
                status: "success",
                duration: 8000,
                isClosable: true,
            });
        }
    }, [user.reqUser]);

    const handleSubmit = (values, actions) => {
        console.log(values)
        dispatch(signinAction(values));
        actions.setSubmitting(false);
    };

    const handleNavigate = () => navigate("/signup")
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


                                <Field name="password">
                                    {({ field, form }) => <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <Input className="w-full" {...field} id='password' placeholder="Password">

                                        </Input>
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>}
                                </Field>

                                <p>By signing up, you agree to out Terms, privacy Policy and Cookies Policy</p>

                                <Button className='w-full' mt={4} colorScheme='blue' type='submit' isLoading={formikProps.isSubmitting}>
                                    Sign In
                                </Button>
                            </Form>}

                    </Formik>
                </Box>
            </div>
            <div>
                <p>If you Don't have Account? <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</span></p>

            </div>
        </div>
    )
}
