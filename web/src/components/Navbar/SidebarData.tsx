import React from 'react';
import { SiWikipedia } from "react-icons/si";
import { BiCameraMovie } from "react-icons/bi";

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
    }
]

