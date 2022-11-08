import React, {useState} from 'react';
import {Container} from "@mui/material";
import Ex3MenuList from "./Ex3MenuList";
import Ex3MenuDetail from "./Ex3MenuDetail";


function Ex3Container(props) {

    const [current, setCurrent] = useState(null)

    const menus = [
        {id:1, file:require(`../../images/s_IMG01.jpg`), title:'메뉴 1'},
        {id:2, file:require(`../../images/s_IMG02.jpg`), title:'메뉴 2'},
        {id:3, file:require(`../../images/s_IMG03.jpg`), title:'메뉴 3'},
    ]

    const selectMenu = (menuId) => {

        const target = menus.find(menu => menu.id === menuId)

        setCurrent(target)

    }


    return (
        <Container>
            <Ex3MenuDetail menu={current}></Ex3MenuDetail>
            <Ex3MenuList arr={menus} selectMenu={selectMenu}></Ex3MenuList>
        </Container>
    );
}

export default Ex3Container;