import { useEffect, useState, useCallback, useMemo } from 'react'
import DataTable from 'react-data-table-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert'
import Layout from '../components/layout'
import {columns, customStyles, domainWhiteList, apiDomain} from '../constants'
import ActionButton from '../components/button-with-row'
import Button from '../components/button'
import notify from '../components/store-notification'
import { ModalBox } from '../components/styled-elements'


const ListAccounts = () => {

  const [appState, setAppState] = useState({
    loading: false,
    accounts: [],
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `${apiDomain}whm/account/list`
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        notify("Accounts Data Successfully Fetched")
        setAppState({ loading: false, accounts: res.accounts.data.acct })
      });
  }, [setAppState])

  const onAdd = () => {
    window.location.href = '/add'
  }

  const sendDeleteRequest = apiUrl => {
    
    setAppState({ loading: true, accounts: appState.accounts });
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        notify(res.message, true)
        setAppState({ loading: false, accounts: appState.accounts});
      });

  }

  const handleDelete = event => {
    const apiUrl =  `${apiDomain}whm/account/${event.currentTarget.id}`

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ModalBox>
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                sendDeleteRequest(apiUrl)
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </ModalBox>
        )
      }
    })    
  }

  const handleView = event => {    
    window.open(
      "https://" + event.currentTarget.dataset.domain,
      '_blank'
    );
  }
  // unlike class methods updateState will be re-created on each render pass, therefore, make sure that callbacks passed to onSelectedRowsChange are memoized using useCallback
  const updateState = useCallback(state => console.log(state));

  const tableColumns = useMemo(() => [
    ...columns,
    {
      cell: (row) => (
        <Button 
          type="button"
          domain={row.domain}
          onClick={handleView}>
            View
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) => (
        <Button 
          type="button" 
          active={!domainWhiteList.includes(row.domain)} 
          id={row.user} 
          onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },    
  ])


  return (
    <Layout title="Accounts" loading={appState.loading}>      
      <ActionButton type="button" onClick={onAdd}> Add </ActionButton>
      <DataTable
        columns={tableColumns}
        data={appState.accounts}
        customStyles={customStyles}
        noHeader={true}
        onSelectedRowsChange={updateState}
        selectableRows        
        style={{borderRadius: '10px'}}
      />        
    </Layout>
  )
};

export default ListAccounts