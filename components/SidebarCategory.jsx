import { useEffect, useState } from "react";
import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// icons
import { BiChevronRight } from "react-icons/bi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const SidebarCategory = (index, icon, title, subItems, link, toggleSidebar) => {
	// instances
	const [isClosed, setIsClose] = useState(false);

	// states
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(!isOpen);
	}, []);

	// console.log("link", link, "pathname", pathname, "isOpen", isOpen);

	const clickHandler = (key) => {
			setIsClose(!isOpen);
	};

	return (
		<div>
			<li
				className="w-full flex items-center justify-between px-2 py-3 border-l-2 border-l-transparent hover:bg-gray-50 hover:border-l-primary cursor-pointer select-none"
				// onClick={() => setIsOpen((prev) => !prev)}
				onClick={() => clickHandler(index)}
			>
				<span className="flex items-center gap-2">
					{icon}
					<p className="block text-sm text-gray-700">{title}</p>
				</span>
				<span
					className={`${
						isOpen ? "rotate-90" : ""
					} transition-all ease-in-out duration-150`}
				>
					<BiChevronRight
						className="w-4 h-4 text-gray-400"
						aria-hidden="true"
					/>
				</span>
			</li>
			<motion.li
				variants={{
					hidden: { opacity: 1, scale: 0, display: "none" },
					visible: {
						display: "block",
						opacity: 1,
						scale: 1,
						transition: {
							delayChildren: 0.01,
							staggerChildren: 0.1,
						},
					},
				}}
				initial="hidden"
				animate={
					isOpen 
						? "visible"
						: "hidden"
				}
			>
				{subItems.map((item, index) => (
					<motion.li
						key={index}
						variants={{
							hidden: { y: 20, opacity: 0 },
							visible: {
								y: 0,
								opacity: 1,
							},
						}}
					>
						<RouterLink
							to={item.link}
							className={classNames(
								match(item.link)
									? "border-l-primary bg-primary bg-opacity-10"
									: "border-l-transparent",
								"flex px-2 py-3 pl-8 items-center gap-2 border-l-2 hover:bg-gray-100 hover:border-l-primary cursor-pointer"
							)}
							onClick={toggleSidebar}
						>
							{item.icon}

							<div className="block text-sm text-gray-700">{item.name}</div>
						</RouterLink>
					</motion.li>
				))}
			</motion.li>
		</div>
	);
};

export default SidebarCategory;
