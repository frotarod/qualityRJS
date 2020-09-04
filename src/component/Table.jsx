import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

    
    const  Contacts = ({ contacts }) => {
        return (
          <div>
            <center><h1>Lista</h1></center>
      
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th># ID</th>
                  <th>nome</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
      
              {contacts.map((contact) => {
                return [
                    <tr key={contact.identificadorUsuario} >
                      <td className="toggler">
                       {contact.identificadorUsuario}
                      </td>
                      <td>{contact.nomeUsuario}</td>
                      <td>{contact.valor}</td>
                      <td>{contact.nomeBanco}</td>
                    </tr>
            
                ];
              })}
      
              
      
              </tbody>
               
              </Table>
            </div>
        )
       };


export default Contacts ;