import React from 'react'
import AdminNavigation from '../Navigation/AdminNavigation'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Viewuser = () => {
  return (
    <div>
      <AdminNavigation/>
      <h1>List of Applied Users</h1>
      <TableContainer >
        <Table sx={{minWidth:650}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
                <TableCell>SI No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ph :</TableCell>
                <TableCell>Email ID :</TableCell>
                <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Krishna</TableCell>
                <TableCell>9933670076</TableCell>
                <TableCell>Krishna123@gmail.com</TableCell>
                <TableCell>HR</TableCell>
                <TableCell><Button>Conform</Button></TableCell>
                <TableCell><Button>Reject</Button></TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Nihala</TableCell>
                <TableCell>9944670076</TableCell>
                <TableCell>Nihala123@gmail.com</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell><Button>Conform</Button></TableCell>
                <TableCell><Button>Reject</Button></TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Rahul</TableCell>
                <TableCell>8033570080</TableCell>
                <TableCell>Rahul123@gmail.com</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell><Button>Conform</Button></TableCell>
                <TableCell><Button>Reject</Button></TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
                <TableCell>4</TableCell>
                <TableCell>dinha</TableCell>
                <TableCell>80335366880</TableCell>
                <TableCell>dinha123@gmail.com</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell><Button>Conform</Button></TableCell>
                <TableCell><Button>Reject</Button></TableCell>
            </TableRow>
          </TableBody>  
        </Table>
      </TableContainer>
    </div>
  )
}

export default Viewuser
