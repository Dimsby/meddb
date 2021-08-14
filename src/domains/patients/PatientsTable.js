import React from "react";

import Table from "@components/commonTable"

export default function PatientsTable(props) {

    const headers = [
        {title: '#', data: 'id'},
        {title: 'Имя', data: 'firstName'},
        {title: 'Фамилия', data: 'lastName'},
        {title: 'Отчество', data: 'surName'},
        {title: 'Дата рождения', data: 'dateBirth'},
        {title: 'Адрес регистрации', data: 'adrReg'},
        {title: 'Адрес физический', data: 'adrPhys'},
        {title: 'Телефон', data: 'phone'},
        {title: 'Место работы', data: 'jobPlace'},
        {title: 'Должность', data: 'jobPos'},
    ];

    return (
        <Table headers={headers} rows={props.rows} />
    );
}