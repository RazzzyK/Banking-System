import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../CSS/TransactionsStyle.css';
import { useTable } from 'react-table';
import DataTable from 'react-data-table-component';


export const Transactions = (props) => {
    // const [data, useState] = useState([])
    const [loading, setLoading] = useState(false)
    const [perPage, setPerPage] = useState(10)

    const columns = [
        // {
        //     name: "ID",
        //     selector: (row) = row.id
        // },
        {
            name: "Transaction Type",
            selector: row => row.title,
            sortable: true,
        },
        {
            name: "Amount",
            selector: row => row.year,
            sortable: true,
        },
    ]

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="page">
            <div className="table">
                <DataTable
                    title="Data"
                    columns={columns}
                    data={data}
                    progressPending={loading}
                    pagination
                    selectableRows
                />
            </div>
        </div>
    )
}