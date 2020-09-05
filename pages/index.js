import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Layout from '../components/layout'
import {columns, customStyles} from '../constants'



const ListAccounts = () => {

  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/v1/whm/listaccounts`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setAppState({ loading: false, accounts: res.accounts.data.acct });
      });
  }, [setAppState]);

  return (
    <Layout>        
        <DataTable
          columns={columns}
          data={appState.accounts}
          customStyles={customStyles}
          noHeader={true}
          progressPending={appState.loading}
          style={{borderRadius: '10px', boxShadow: '3px 3px 5px 1px #ccc'}}
        />        
    </Layout>
  )
};

export default ListAccounts