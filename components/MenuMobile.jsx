import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

//this is for menu items

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

//props passing from header component to here by destructuring
const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          //A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={()=>setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData.map((subMenu) => {
                      return (
                        <Link
                          href="/"
                          key={subMenu.id}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {subMenu.name}
                            <span className="opacity-50 text-sm">90</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                {/* ? for getting rid of undefined data */}
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;