// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DatePicker from 'react-datepicker';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-datepicker/dist/react-datepicker.css';

// const SearchCard = () => {
//   const [selectedOptions, setSelectedOptions] = useState(["Select an option", "Select an option", "Pick a date", "Select an option"]);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleSelect = (index, option) => {
//     const newSelectedOptions = [...selectedOptions];
//     newSelectedOptions[index] = option;
//     setSelectedOptions(newSelectedOptions);
//   };

//   return (
//     <div className="bg-white flex p-4 border rounded-lg">
//       {/* Dropdown 1 */}
//       <div className="w-full border-b pb-4 mb-4">
//         <label className="block text-gray-700 font-semibold mb-2">Dropdown Label 1</label>
//         <Dropdown className="w-full">
//           <button role="button" type="button"   data-toggle="dropdown" className=" bg-white p-2 w-full text-left">
//             {selectedOptions[0]}
//           </button>
//           <Dropdown.Menu>
//             <Dropdown.Item onClick={() => handleSelect(0, "Option 1")}>Option 1</Dropdown.Item>
//             <Dropdown.Item onClick={() => handleSelect(0, "Option 2")}>Option 2</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>

//       {/* Dropdown 2 */}
//       <div className="w-full border-b pb-4 mb-4">
//         <label className="block text-gray-700 font-semibold mb-2">Dropdown Label 2</label>
//         <Dropdown className="w-full">
//           <Dropdown.Toggle variant="none" className="w-full text-left bg-white border border-gray-300 rounded-md p-2">
//             {selectedOptions[1]}
//           </Dropdown.Toggle>
//           <Dropdown.Menu>
//             <Dropdown.Item onClick={() => handleSelect(1, "Option A")}>Option A</Dropdown.Item>
//             <Dropdown.Item onClick={() => handleSelect(1, "Option B")}>Option B</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>

//       {/* Dropdown 3 with Date Picker */}
//       <div className="w-full border-b pb-4 mb-4">
//         <label className="block text-gray-700 font-semibold mb-2">Select Date</label>
//         <DatePicker
//           selected={selectedDate}
//           onChange={(date) => setSelectedDate(date)}
//           placeholderText="Pick a date"
//           className="w-full text-left bg-white border border-gray-300 rounded-md p-2"
//         />
//       </div>

//       {/* Dropdown 4 */}
//       <div className="w-full border-b pb-4 mb-4">
//         <label className="block text-gray-700 font-semibold mb-2">Dropdown Label 4</label>
//         <Dropdown className="w-full">
//           <Dropdown.Toggle variant="none" className="w-full text-left bg-white border border-gray-300 rounded-md p-2">
//             {selectedOptions[3]}
//           </Dropdown.Toggle>
//           <Dropdown.Menu>
//             <Dropdown.Item onClick={() => handleSelect(3, "Choice X")}>Choice X</Dropdown.Item>
//             <Dropdown.Item onClick={() => handleSelect(3, "Choice Y")}>Choice Y</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>

//       {/* Search Button */}
//       <button className="bg-[#5F2517] text-white py-2 px-4 rounded-lg mt-4 w-full">
//         Search Properties
//       </button>
//     </div>
//   );
// };

// export default SearchCard;




// import React, { useState } from 'react';

// const Dropdown = ({ label, options }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selected, setSelected] = useState('');

//     return (
//         <div className="w-1/4 relative"> {/* Set this div as relative */}
//             <label className="block text-sm font-medium text-gray-700">{label}</label>
//             <div
//                 className="p-2 cursor-pointer border border-gray-300 rounded-md"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 {selected || 'Select an option'}
//             </div>
//             {isOpen && (
//                 <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
//                     {options.map((option, index) => (
//                         <li
//                             key={index}
//                             className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                             onClick={() => {
//                                 setSelected(option);
//                                 setIsOpen(false); // Close the dropdown after selecting
//                             }}
//                         >
//                             {option}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// const SearchCard = () => {
//     return (
//         <div className="flex border rounded-lg items-center justify-center shadow-md p-4 space-x-4">
//             <Dropdown label="Dropdown 1" options={['Option 1', 'Option 2', 'Option 3']} />
//             <Dropdown label="Dropdown 2" options={['Option A', 'Option B', 'Option C']} />
//             <Dropdown label="Dropdown 3" options={['Choice X', 'Choice Y', 'Choice Z']} />
//             <Dropdown label="Dropdown 4" options={['Item I', 'Item II', 'Item III']} />
//             <button className="bg-[#5F2517] h-20 w-40 text-white rounded-md">Search Properties</button>
//         </div>
//     );
// };

// export default SearchCard;




import React from 'react';
import { Calendar } from 'lucide-react';

const SearchCard = () => {
  return (
    <div className="w-full ">
      <div className="w-11/12 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          {/* First Dropdown */}
          <div className="flex-1 p-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <select className="w-full bg-white border-none text-gray-900 text-sm appearance-none">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
            </select>
          </div>

          {/* Vertical Divider */}
          <div className="h-12 w-px bg-gray-200" />

          {/* Second Dropdown */}
          <div className="flex-1 p-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full bg-white border-none text-gray-900 text-sm appearance-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Vertical Divider */}
          <div className="h-12 w-px bg-gray-200" />

          {/* Date Range */}
          <div className="flex-1 p-4">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
                <input
                  type="date"
                  className="w-full bg-white border-none text-gray-900 text-sm"
                  placeholder="Start Date"
                />
                {/* <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
              </div>
              <span className="text-gray-400">-</span>
              <div className="relative flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
                <input
                  type="date"
                  className="w-full bg-white border-none text-gray-900 text-sm"
                  placeholder="End Date"
                />
                {/* <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="h-12 w-px bg-gray-200" />

          {/* Fourth Dropdown */}
          <div className="flex-1 p-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select className="w-full bg-white border-none text-gray-900 text-sm appearance-none">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Price High to Low</option>
              <option>Price Low to High</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="bg-[#5F2517] text-white px-6 py-2 rounded-md h-24   transition-colors">
            Search Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;