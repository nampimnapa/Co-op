"use client";
import React, { useState } from 'react';
// import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, image } from "@nextui-org/react";
import { Kanit } from '@next/font/google'
import Image from "next/image";
import imgHome from "../../app/images/img-1.jpg";
import Logo from "../../app/images/logo-cp.png";
import {
    PhoneIcon,
    EnvelopeIcon
} from "@heroicons/react/24/outline";



const kanit = Kanit({
    subsets: ['latin'],
    weight: ['200', '400']
})

function menu() {
    return (
        <div className={kanit.className}>
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                    <Image src={Logo}
                        width={120}
                        height={160}
                        className="object-cover"
                        alt="logo" />


                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Admin Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className="hero min-h-screen relative">
                <Image
                    src={imgHome}
                    className="object-cover w-screen h-screen opacity-50"
                    alt="img"
                />
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">แจ้งซ่อมออนไลน์</h1>
                        <p className="py-6">ง่ายๆแค่ใช้โทรศัพท์มือถือ หรือคอมพิวเตอร์ แจ้งได้ด้วยตนเอง สะดวก รวดเร็ว ไม่ต้องเดินไกล</p>
                        <button className="btn bg-[#0F75BC] text-white">แจ้งซ่อมออนไลน์</button>
                        <button className="btn bg-white ml-3 border border-[#0F75BC]">ตรวจสอบสถานะการซ่อม</button>
                    </div>
                </div>
            </div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <Image src={Logo}
                        width={120}
                        height={160}
                        className="object-cover"
                        alt="logo" />
                    <p>
                        วิทยาลัยการคอมพิวเตอร์
                        123 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002</p>
                    <div className='flex items-center'>
                        <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                        043-009700 ต่อ 44456, 44459, 44457
                    </div>
                    <div className='flex items-center'>
                        <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <p>computing.kku@kku.ac.th</p></div>

                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div >
    )
}

export default menu