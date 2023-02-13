import React from 'react'
import settingImage from '../assets/Ellipse.png'
import fileImage from '../assets/fileuplode.jpeg'
import AdminFooterTap from './adminFooter';
import { getAuth, signOut } from "firebase/auth";
import {  useNavigate } from "react-router-dom";
const AdminSetting = () => {
    const navigate = useNavigate()
    return (
        <div className='setting_main'>
            <div className='setting'>
                <div className='setting_heading'>
                    Setting
                </div>
                <div className='setting_image'>
                    <img src={settingImage} alt="" />
                </div>
                <div className='update_name'>
                    <input placeholder='Update Full Name' type="text" />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className='setting_upload_input'>
                        <input className='setting_input_file' type="file" />
                        <img className='setting_file_image' src={fileImage} alt="" />
                    </div>
                </div>
                <div className='add_category'>
                    <input placeholder='Add Category' type="text" name="" id="" /> <button>Add</button>
                </div>
                <div className='setting_text'>
                    <p>All Category</p>
                </div>
                <div className='category'>
                    <div className='setting_category'>
                        <div className='category_list'>
                            <img src="" alt="" />
                        </div>
                        <div className='category_list'>
                            <img src="" alt="" />
                        </div>
                        <div className='category_list'>
                            <img src="" alt="" />
                        </div> <div className='category_list'>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className='setting_btn'>
                    <button>Log Out</button>
                </div> */}
                <div className='started-button-div st-div admin margin-bottom' ><button onClick={() => {

                    const auth = getAuth();
                    signOut(auth).then(() => {
                        console.log('logout')
                    }).then(() => {
                        navigate('/')
                    }).catch((error) => {
                        console.log(error)
                    });

                }} className='started-button'>Logout</button>
                </div>
            </div>
            <AdminFooterTap />
        </div>
    )
}

export default AdminSetting;