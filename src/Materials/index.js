import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { data } from '../data';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  margin-top: 60px;
  @media (max-width: 450px) {
    min-width: 300px;
  }
`;
const StyledSearch = styled(TextField)`
  width: 90%;
  margin-bottom: 30px !important;
`;
const CustomTableRow = styled(TableRow)`
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #c5fcd4;
  }
`;

const StyledTableHead = styled(TableRow)`
  background-color: #8de3a4;
`;

const StyledRoot = styled(Paper)`
  && {
    width: 100%;
    overflow-x: auto;
    border-radius: 5px;
  }
`;
class MaterialsClass extends Component {
  state = {
    materials: [],
    updatedMaterials: [],
  };
  componentDidMount() {
    this.setState({
      materials: data,
      updatedMaterials: data,
    });
  }
  onSearchChange = e => {
    let updatedList = this.state.materials;
    if (updatedList) {
      updatedList = updatedList.filter(material => {
        if (
          material.name.toLowerCase().search(e.target.value.toLowerCase()) !==
          -1
        ) {
          return material;
        }
        if (
          +e.target.value > material.density * 0.97 &&
          +e.target.value < material.density * 1.03
        ) {
          return material;
        }
      });
    }
    this.setState({
      updatedMaterials: updatedList,
    });
  };

  onClick = () => {
    window.location.assign('https://en.wikipedia.org/wiki/Acrylic');
  };

  render() {
    const { updatedMaterials } = this.state;
    return (
      <Wrapper>
        <StyledSearch
          label='Type material name or density...'
          type='search'
          variant='outlined'
          onChange={this.onSearchChange}
        />
        <StyledRoot>
          <Table aria-label='simple table'>
            <TableHead>
              <StyledTableHead>
                <TableCell align='left'>Name</TableCell>
                <TableCell align='left'>
                  Density kg/m<sup>3</sup>
                </TableCell>
              </StyledTableHead>
            </TableHead>
            <TableBody>
              {updatedMaterials.map(row => (
                <CustomTableRow key={row.name} onClick={this.onClick}>
                  <TableCell align='left' component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='left'>{row.density}</TableCell>
                </CustomTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledRoot>
      </Wrapper>
    );
  }
}

export const Materials = withRouter(MaterialsClass);
