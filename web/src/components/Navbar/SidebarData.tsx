import React from 'react';
import { SiWikipedia } from "react-icons/si";
import { BiCameraMovie } from "react-icons/bi";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";

export const SidebarData = [
    {
        title: 'Wiki',
        path: '/',
        icon: <SiWikipedia />,
        cName: 'nav-text'
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <BiCameraMovie />,
        cName: 'nav-text'
    },
    {
        title: 'Heroes',
        path: '/heroes',
        icon: <RiCharacterRecognitionFill />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <FiLogIn />,
        cName: 'nav-text'
    }
]

