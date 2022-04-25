import React from 'react';
import { SiWikipedia } from "react-icons/si";
import { BiCameraMovie } from "react-icons/bi";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { BiGame } from "react-icons/bi";

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
	},
	{
		title: 'Game',
		path: '/game',
		icon: <BiGame />,
		cName: 'nav-text'
	},
	{
		title: 'Logout',
		path: '/login/username',
		icon: <FiLogOut />,
		cName: 'nav-text'
	}
]

