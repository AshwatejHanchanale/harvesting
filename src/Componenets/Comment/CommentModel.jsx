import React from 'react'
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import "./CommentModel.css"

const CommentModel = ({ onClose, isOpen }) => {
    return (
        <div>
            <Modal size={"3xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[75vh]'>
                            <div className='w-[45%] flex-col justify-center'>
                                <img className='max-h-full w-full' src='https://th.bing.com/th/id/OIP.JcjsRrSBaO2tTFpZGNICXgHaHa?pid=ImgDet&rs=1' alt='' />
                            </div>
                            <div className=' w-[55%] pl-10'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src='https://th.bing.com/th/id/OIP.JcjsRrSBaO2tTFpZGNICXgHaHa?pid=ImgDet&rs=1' alt='' />
                                        </div>
                                        <div className='ml-2'>
                                            <p>Username</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>
                                <hr />
                                <div className="comment">
                                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11].map(() => <CommentCard />)}
                                </div>

                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModel