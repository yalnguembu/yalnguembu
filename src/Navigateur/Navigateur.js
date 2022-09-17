import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar,Footer} from '../Components'

const No = () => {
    return <div>no matching</div>
}
const Nice = () => {
    return <div>no matchi</div>
}
export const Navigateur = () => {
    let params = useParams();
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Accueil />} >
                    
        //             <Route path="y" element={<Nice />} />
        //         </Route>
        //         <Route path="*" element={<No />} />
        //     </Routes>
        // </BrowserRouter>
        <div>navigator</div>
    )
}
