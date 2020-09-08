import { useEffect, useState, useCallback, useMemo } from 'react'
import DataTable from 'react-data-table-component'
import Layout from '../components/layout'
import {columns, customStyles} from '../constants'
import ActionButton from '../components/button-with-row'
import Button from '../components/button'

const ListAccounts = () => {

  const [appState, setAppState] = useState({
    loading: false,
    accounts: [],
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/v1/whm/account/list`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setAppState({ loading: false, accounts: res.accounts.data.acct });
      });
  }, [setAppState]);

  const onAdd = () => {
    window.location.href = '/add'
  }

  const [thing, setThing] = useState();
  const handleAction = value => setThing(value);
  // unlike class methods updateState will be re-created on each render pass, therefore, make sure that callbacks passed to onSelectedRowsChange are memoized using useCallback
  const updateState = useCallback(state => console.log(state));

  const tableColumns = useMemo(() => [
    ...columns,
    {
      cell: () => <Button text="X" type="button" active={true} onClick={handleAction}>Action</Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ])


  return (
    <Layout title="Accounts">
      <ActionButton text="Add" type="button" onClick={onAdd}/>
      <DataTable
        columns={tableColumns}
        data={appState.accounts}
        customStyles={customStyles}
        noHeader={true}
        onSelectedRowsChange={updateState}
        selectableRows
        progressPending={appState.loading}
        style={{borderRadius: '10px', boxShadow: '3px 3px 5px 1px #ccc'}}
      />        
    </Layout>
  )
};

export default ListAccounts