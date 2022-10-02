import React, { useState } from "react";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import {
	MdOutlineDashboardCustomize,
	MdOutlineAnalytics,
} from "react-icons/md";
import {
	AiOutlineShoppingCart,
	AiOutlineCalendar,
	AiOutlineSearch,
	AiOutlineFileAdd,
	AiOutlineSetting,
} from "react-icons/ai";
import { BiChevronDown, BiChevronRight, BiUserCircle } from "react-icons/bi";
import Image from "next/image";

const Sidebar = () => {
	const [show, setShow] = useState(false);
	const [showSubItem, setShowSubItem] = useState(false);

	const clickHandler = () => {
		setShow(!show);
	};

	const SubItemClickHandler = () => {
		setShowSubItem(!showSubItem);
	};

	const sidebarItems = [
		{
			name: "Dashboard",
			link: "/dashboard",
			icon: (
				<MdOutlineDashboardCustomize
					className="w-5 h-5 text-gray-100"
					aria-hidden="true"
				/>
			),
		},
		{
			name: "Product",
			link: "/dashboard/products",
			icon: (
				<AiOutlineShoppingCart
					className="w-5 h-5 text-gray-100"
					aria-hidden="true"
				/>
			),
			subItems: [
				{ name: "Product List", link: "/dashboard/products/list" },
				{ name: "Add Product", link: "/dashboard/products/add" },
			],
		},
		{
			name: "Account",
			link: "/dashboard/account",
			icon: (
				<BiUserCircle className="w-5 h-5 text-gray-100" aria-hidden="true" />
			),
		},
		{
			name: "Schedule",
			link: "/dashboard/schedule",
			icon: (
				<AiOutlineCalendar
					className="w-5 h-5 text-gray-100"
					aria-hidden="true"
				/>
			),
		},
		{
			name: "Search",
			link: "/dashboard/search",
			icon: (
				<AiOutlineSearch className="w-5 h-5 text-gray-100" aria-hidden="true" />
			),
		},
		{
			name: "Analytics",
			link: "/dashboard/analytics",
			icon: (
				<MdOutlineAnalytics
					className="w-5 h-5 text-gray-100"
					aria-hidden="true"
				/>
			),
		},
		{
			name: "File",
			link: "/dashboard/file",
			icon: (
				<AiOutlineFileAdd
					className="w-5 h-5 text-gray-100"
					aria-hidden="true"
				/>
			),
			subItems: [
				{ name: "File List", link: "/dashboard/file/list" },
				{ name: "Add File", link: "/dashboard/file/add" },
			],
		},
		{
			name: "Setting",
			link: "/dashboard/setting",
			icon: (
				<AiOutlineSetting
					className="w-5 h-5 text-gray-100"
					aria-hidden="true"
				/>
			),
		},
	];

	return (
		<div>
			<div
				className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-gray-500 focus:outline-none hover:bg-gray-200 hover:bg-opacity-50"
				onClick={clickHandler}
			>
				<GiHamburgerMenu className="block w-6 h-6" aria-hidden="true" />
			</div>

			<div
				className={`p-6 px-4 w-56 h-screen bg-[#006989] z-20 top-0 fixed transition-all ease-in-out delay-150 duration-200 shadow-sm overflow-hidden overflow-y-scroll scrollbar-hide ${
					show ? "left-0" : "-left-56"
				}`}
			>
				<div className="w-100 h-10 bg-white"></div>
				<div className="mt-5 divide-y">
					<ul className="py-4">
						{sidebarItems.map((item, index) => (
							<li key={index}>
								<div
									className="bg-opacity-10 text-gray-100 flex justify-between p-3 items-center gap-3 hover:bg-gray-50 hover:bg-opacity-10 rounded-md cursor-pointer"
									onClick={SubItemClickHandler}
								>
									<div className="flex gap-3">
										{item.icon}

										<div className="text-sm">{item.name}</div>
									</div>
									{item.subItems && showSubItem ? (
										<BiChevronDown className="w-5 h-5" />
									) : (
										item.subItems && <BiChevronRight className="w-5 h-5" />
									)}
								</div>
								{item.subItems && showSubItem ? (
									<ul className="ml-5 pl-3 mt-1 border-l-2 border-l-gray-100 border-opacity-20">
										{item.subItems.map((subItem, subIndex) => (
											<li key={subIndex}>
												<div className="bg-opacity-10 flex p-3 py-2 items-center gap-3 hover:bg-gray-50 hover:bg-opacity-10 rounded-md cursor-pointer">
													<div className="block text-sm text-gray-100">
														{subItem.name}
													</div>
												</div>
											</li>
										))}
									</ul>
								) : (
									<></>
								)}
							</li>
						))}
					</ul>

					<ul className="py-4">
						<li className="flex px-2 py-3 items-center gap-2 hover:bg-gray-50 hover:bg-opacity-10 rounded-md cursor-pointer">
							<FiLogOut className="w-5 h-5 text-gray-100" aria-hidden="true" />

							<div className="block text-sm text-gray-100">Logout</div>
						</li>
					</ul>
				</div>
			</div>

			<div
				className={`p-6 px-4 w-16 h-screen bg-[#006989] z-10 flex flex-col items-center sticky top-0 transition-all ease-in-out delay-150 duration-200 shadow-sm ${
					show ? "left-40" : "left-0"
				}`}
			>
				<div className="w-10 h-10 bg-white"></div>
				<div className="mt-5 divide-y">
					<ul className="py-4">
						{sidebarItems.map((item, index) => (
							<div key={index}>
								<div
									className="bg-opacity-10 py-3 px-3 flex items-center hover:bg-gray-50 hover:bg-opacity-10 rounded-md cursor-pointer"
									// onClick={toggleSidebar}
								>
									{item.icon}
								</div>
							</div>
						))}
					</ul>

					<ul className="py-4">
						<li className="flex flex-col items-center py-3 px-1 hover:bg-gray-50 hover:bg-opacity-10 rounded-md cursor-pointer">
							<FiLogOut className="w-5 h-5 text-gray-100" aria-hidden="true" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
