import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'

const MotionPaper = motion(Paper as any)

const emailSchema = z.object({
    firstName: z.string().min(2, {message: "Must be 2 characters or more."}).max(255, {message: "Must be less than 255 characters"}),
    lastName: z.string().min(2, {message: "Must be 2 characters or more."}).max(255, {message: "Must be less than 255 characters"}),
    message: z.string().min(3, {message: "Say something."})
}).required()

type EmailType = z.infer<typeof emailSchema>

function Contact() {
    const { register, handleSubmit, formState: {errors}} = useForm<EmailType>({
        resolver: zodResolver(emailSchema)
    })

    const successNotify = () => {
        toast.success("Successfully Sent")
    }

    const errorNotify = () => {
        toast.error("An error occured! Sorry!")
    }

    const sendEmail = (data: EmailType) => {
        const formData = {from_name: `${data.firstName} ${data.lastName}`, to_name: "Syed Rizvi", message: data.message}
        emailjs.send("service_zvpui4q", "template_6ompzns", formData, "GJq-xMOH-W6Zl2iFC")
        .then(() => successNotify())
        .catch(() => errorNotify())
    }

    return (
        <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <MotionPaper
            className="contact"
            elevation={8}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, type: 'spring'}}>
                <Typography variant="h3" sx={{width: '100%', textAlign: 'center', fontSize: '1.8rem', marginBottom: '1rem'}}>Send me a Message!</Typography>
                <Box sx={{width: '100%', display: 'flex', gap: '3rem', justifyContent: 'space-between'}}>
                    <TextField {...register('firstName')} sx={{width: '100%'}} id="first-name" label="First Name" color="success"/>
                    <TextField {...register('lastName')} sx={{width: '100%'}} id="last-name" label="Last Name" color="success"/>
                </Box>
                <Box sx={{width: '100%'}}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        color="success"
                        rows={8}
                        {...register('message')}
                        sx={{marginTop: '1rem', marginBottom: '1rem', width: '100%'}}/>
                        {(errors.message?.message || errors.firstName?.message || errors.firstName?.message) && 
                        <Typography color="red" sx={{width: '100%', textAlign: 'center', marginBottom: '0.5rem'}}>
                            Fill everything in with valid information
                        </Typography>}
                </Box>
                <Button className="button button--primary" onClick={handleSubmit(sendEmail)}>Send Email</Button>
                <ToastContainer position='top-left' autoClose={3000}/>
            </MotionPaper>
        </div>
    )
}

export default Contact