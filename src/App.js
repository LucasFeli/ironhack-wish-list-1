import React from "react";
import Form from "./components/Form/Form"
import List from "./components/List/List"
import ListItem from "./components/ListItem/ListItem"
import Button from "./components/Buttom/Buttom"
import whishList from "./whishList.json"




function App() {
    const [AllWhishes, setAllWhishes] = React.useState(whishList)

    const submit = (wish) => setAllWhishes(AllWhishes.concat(wish))

    return (
        <div className="container">
            <h1>App</h1>
            <div className="cards-container">
             <List  whish = {AllWhishes}/>

                <div className="card">
                <List  whish = {AllWhishes.splice(0,1)}/>
                    <button className="button">remove</button>
                </div>
                <div className="card">
                <List  whish = {AllWhishes.splice(0,1)}/>
                    <button className="button">remove</button>
                </div>
                <div className="card">
                <List  whish = {AllWhishes.splice(0,1)}/>
                    <button className="button">remove</button>
                </div>
                
            </div>
           <Form/> <form action="" className="form"></form>
            
            
        </div>
    )
}

export default App