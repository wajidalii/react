import React from 'react';
import Accordion from "./components/Accordion";
import Search from './components/Search';

const items =[
    {title:'react-1',
     content:'it is a js frontend framework'
    },
    {title:'react-2',
     content:'it is a js frontend framework'
    },
    {title:'react-3',
     content:'it is a js frontend framework'
    },
    {title:'react-4',
     content:'it is a js frontend framework'
    },
    {title:'react-5',
     content:'it is a js frontend framework'
    }
];
const render=()=>{
    return (
        <div>
            <Search/>
        </div>
    );
    }

export default render;
// export default()=>{
// return (
//     <div>
//         <Accordion  items={items}/>
//     </div>
// );
// }